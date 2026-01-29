-- JECP Admin Management Table
-- Super admin: jadhavakashofficial@gmail.com
-- Other admins can only be @jagriti.org domain

CREATE TABLE IF NOT EXISTS jecp_admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin')),
  is_active BOOLEAN DEFAULT TRUE,
  added_by UUID REFERENCES jecp_admins(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert super admin
INSERT INTO jecp_admins (email, name, role)
VALUES ('jadhavakashofficial@gmail.com', 'Akash Jadhav', 'super_admin')
ON CONFLICT (email) DO NOTHING;

-- Enable RLS
ALTER TABLE jecp_admins ENABLE ROW LEVEL SECURITY;

-- Policy: Only authenticated admins can read admin list
CREATE POLICY "Admins can read admin list" ON jecp_admins
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

-- Policy: Only super admin can insert new admins
CREATE POLICY "Super admin can add admins" ON jecp_admins
  FOR INSERT
  WITH CHECK (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE role = 'super_admin' AND is_active = TRUE)
  );

-- Policy: Only super admin can update admins
CREATE POLICY "Super admin can update admins" ON jecp_admins
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE role = 'super_admin' AND is_active = TRUE)
  );

-- Policy: Only super admin can delete admins
CREATE POLICY "Super admin can delete admins" ON jecp_admins
  FOR DELETE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE role = 'super_admin' AND is_active = TRUE)
  );

-- Add read policies for form tables (only for admins)
CREATE POLICY "Admins can read partner applications" ON jecp_partner_applications
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can read mentor applications" ON jecp_mentor_applications
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can read volunteer applications" ON jecp_volunteer_applications
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can read facility inquiries" ON jecp_facility_inquiries
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can read newsletter subscribers" ON jecp_newsletter_subscribers
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can read contact submissions" ON jecp_contact_submissions
  FOR SELECT
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

-- Add update policies for form tables (admins can update status)
CREATE POLICY "Admins can update partner applications" ON jecp_partner_applications
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can update mentor applications" ON jecp_mentor_applications
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can update volunteer applications" ON jecp_volunteer_applications
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can update facility inquiries" ON jecp_facility_inquiries
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can update newsletter subscribers" ON jecp_newsletter_subscribers
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );

CREATE POLICY "Admins can update contact submissions" ON jecp_contact_submissions
  FOR UPDATE
  USING (
    auth.jwt() ->> 'email' IN (SELECT email FROM jecp_admins WHERE is_active = TRUE)
  );
