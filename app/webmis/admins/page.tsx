'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';

interface Admin {
  id: string;
  email: string;
  name: string | null;
  role: 'super_admin' | 'admin';
  is_active: boolean;
  created_at: string;
}

export default function AdminManagementPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<Admin | null>(null);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

    if (!adminData || adminData.role !== 'super_admin') {
      router.push('/webmis');
      return;
    }

    setCurrentUser(adminData);

    // Fetch all admins
    const { data: allAdmins } = await supabase
      .from('jecp_admins')
      .select('*')
      .order('created_at', { ascending: true });

    if (allAdmins) {
      setAdmins(allAdmins);
    }

    setIsLoading(false);
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsAdding(true);

    // Validate email domain
    const email = newEmail.toLowerCase().trim();
    const isSuperAdminEmail = email === 'jadhavakashofficial@gmail.com';
    const isJagritiDomain = email.endsWith('@jagriti.org');

    if (!isSuperAdminEmail && !isJagritiDomain) {
      setError('Only @jagriti.org email addresses can be added as admins.');
      setIsAdding(false);
      return;
    }

    try {
      const supabase = createClient();

      // Check if already exists
      const { data: existing } = await supabase
        .from('jecp_admins')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (existing) {
        setError('This email is already an admin.');
        setIsAdding(false);
        return;
      }

      // Add new admin
      const { error: insertError } = await supabase
        .from('jecp_admins')
        .insert([{
          email,
          name: newName.trim() || null,
          role: 'admin',
          added_by: currentUser?.id,
        }]);

      if (insertError) throw insertError;

      setSuccess(`${email} has been added as an admin.`);
      setNewEmail('');
      setNewName('');
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add admin');
    } finally {
      setIsAdding(false);
    }
  };

  const handleToggleActive = async (admin: Admin) => {
    if (admin.role === 'super_admin') {
      setError('Cannot deactivate super admin.');
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('jecp_admins')
        .update({ is_active: !admin.is_active })
        .eq('id', admin.id);

      if (error) throw error;

      setSuccess(`Admin ${admin.is_active ? 'deactivated' : 'activated'} successfully.`);
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update admin');
    }
  };

  const handleDeleteAdmin = async (admin: Admin) => {
    if (admin.role === 'super_admin') {
      setError('Cannot delete super admin.');
      return;
    }

    if (!confirm(`Are you sure you want to remove ${admin.email} as an admin?`)) {
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('jecp_admins')
        .delete()
        .eq('id', admin.id);

      if (error) throw error;

      setSuccess(`Admin removed successfully.`);
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete admin');
    }
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/webmis/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

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
              <h1 className="text-xl font-bold">Admin Management</h1>
              <p className="text-xs text-gray-300">Manage admin users</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/webmis"
              className="px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              Back to Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 text-red-300 text-sm rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Add Admin Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-[var(--primary-navy)] mb-4">
            Add New Admin
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Only @jagriti.org email addresses can be added as admins.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleAddAdmin} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                placeholder="Email address (@jagriti.org)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-orange)] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isAdding}
              className="px-6 py-2 bg-[var(--primary-orange)] text-white font-medium rounded-lg hover:bg-[var(--primary-orange-hover)] transition-colors disabled:opacity-50"
            >
              {isAdding ? 'Adding...' : 'Add Admin'}
            </button>
          </form>
        </div>

        {/* Admin List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[var(--primary-navy)]">
              Current Admins ({admins.length})
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {admins.map((admin) => (
              <div
                key={admin.id}
                className={`p-4 flex items-center justify-between ${
                  !admin.is_active ? 'bg-gray-50 opacity-60' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      admin.role === 'super_admin'
                        ? 'bg-[var(--primary-orange)]'
                        : 'bg-[var(--primary-navy)]'
                    }`}
                  >
                    {(admin.name || admin.email)[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {admin.name || 'No name'}
                      {admin.role === 'super_admin' && (
                        <span className="ml-2 px-2 py-0.5 bg-[var(--primary-orange)] text-white text-xs rounded-full">
                          Super Admin
                        </span>
                      )}
                      {!admin.is_active && (
                        <span className="ml-2 px-2 py-0.5 bg-gray-400 text-white text-xs rounded-full">
                          Inactive
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{admin.email}</div>
                  </div>
                </div>

                {admin.role !== 'super_admin' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleActive(admin)}
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        admin.is_active
                          ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {admin.is_active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleDeleteAdmin(admin)}
                      className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
