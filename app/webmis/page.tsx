'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';

type TabType = 'partners' | 'mentors' | 'volunteers' | 'facilities' | 'newsletter' | 'contact';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin';
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('partners');
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [counts, setCounts] = useState({
    partners: 0,
    mentors: 0,
    volunteers: 0,
    facilities: 0,
    newsletter: 0,
    contact: 0,
  });
  const router = useRouter();

  const tableMap: Record<TabType, string> = {
    partners: 'jecp_partner_applications',
    mentors: 'jecp_mentor_applications',
    volunteers: 'jecp_volunteer_applications',
    facilities: 'jecp_facility_inquiries',
    newsletter: 'jecp_newsletter_subscribers',
    contact: 'jecp_contact_submissions',
  };

  useEffect(() => {
    const fetchUserAndData = async () => {
      const supabase = createClient();

      // Get current user
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) {
        router.push('/webmis/login');
        return;
      }

      // Get admin info
      const { data: adminData } = await supabase
        .from('jecp_admins')
        .select('*')
        .eq('email', authUser.email?.toLowerCase())
        .eq('is_active', true)
        .maybeSingle();

      if (!adminData) {
        router.push('/webmis/login?error=unauthorized');
        return;
      }

      setUser(adminData);

      // Fetch counts for all tables
      const newCounts = { ...counts };
      for (const [key, table] of Object.entries(tableMap)) {
        const { count } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true });
        newCounts[key as TabType] = count || 0;
      }
      setCounts(newCounts);

      // Fetch data for active tab
      await fetchTabData(activeTab);
    };

    fetchUserAndData();
  }, []);

  const fetchTabData = async (tab: TabType) => {
    setIsLoading(true);
    const supabase = createClient();
    const { data: tableData, error } = await supabase
      .from(tableMap[tab])
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && tableData) {
      setData(tableData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/webmis/login');
  };

  const tabs = [
    { id: 'partners' as TabType, label: 'Partners', icon: '🤝' },
    { id: 'mentors' as TabType, label: 'Mentors', icon: '👨‍🏫' },
    { id: 'volunteers' as TabType, label: 'Volunteers', icon: '🙋' },
    { id: 'facilities' as TabType, label: 'Facilities', icon: '🏢' },
    { id: 'newsletter' as TabType, label: 'Newsletter', icon: '📧' },
    { id: 'contact' as TabType, label: 'Contact', icon: '💬' },
  ];

  const getColumns = (tab: TabType) => {
    switch (tab) {
      case 'partners':
        return ['organization_name', 'contact_person', 'email', 'phone', 'engagement_mode', 'status', 'created_at'];
      case 'mentors':
        return ['full_name', 'organization', 'email', 'phone', 'status', 'created_at'];
      case 'volunteers':
        return ['full_name', 'email', 'phone', 'location', 'status', 'created_at'];
      case 'facilities':
        return ['full_name', 'organization_name', 'email', 'facility_type', 'intended_dates', 'status', 'created_at'];
      case 'newsletter':
        return ['full_name', 'email', 'city_state', 'frequency', 'is_active', 'created_at'];
      case 'contact':
        return ['first_name', 'last_name', 'email', 'subject', 'status', 'created_at'];
      default:
        return [];
    }
  };

  const formatValue = (value: unknown, column: string): string => {
    if (value === null || value === undefined) return '-';
    if (column === 'created_at') {
      return new Date(value as string).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

  const formatColumnName = (column: string): string => {
    return column
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[var(--primary-navy)] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/jecp-logo-white.png"
              alt="JECP Logo"
              width={140}
              height={45}
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-xs text-gray-300">Manage JECP form submissions</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user?.role === 'super_admin' && (
              <Link
                href="/webmis/admins"
                className="px-4 py-2 bg-[var(--primary-orange)] text-white text-sm rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors"
              >
                Manage Admins
              </Link>
            )}
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{user?.name || user?.email}</p>
              <p className="text-xs text-gray-300 capitalize">{user?.role?.replace('_', ' ')}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 text-red-300 text-sm rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-xl shadow-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[var(--primary-navy)] text-white'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="text-2xl mb-2">{tab.icon}</div>
              <div className="text-2xl font-bold">{counts[tab.id]}</div>
              <div className="text-sm opacity-80">{tab.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[var(--primary-navy)]">
              {tabs.find((t) => t.id === activeTab)?.label} Submissions
            </h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : data.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No submissions yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {getColumns(activeTab).map((column) => (
                      <th
                        key={column}
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {formatColumnName(column)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {getColumns(activeTab).map((column) => (
                        <td key={column} className="px-4 py-3 text-sm text-gray-700">
                          {column === 'status' ? (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                row[column] === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : row[column] === 'approved'
                                  ? 'bg-green-100 text-green-800'
                                  : row[column] === 'rejected'
                                  ? 'bg-red-100 text-red-800'
                                  : row[column] === 'unread'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {formatValue(row[column], column)}
                            </span>
                          ) : (
                            formatValue(row[column], column)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
