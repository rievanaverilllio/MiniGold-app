-- Create a `users` table suitable for use with Supabase Auth.
-- Recommended usage: set `id` to match `auth.users.id` (the Supabase Auth UID)
-- Execute this in Supabase SQL editor or include as a migration.

-- NOTE: adjust privileges/RLS policies after creating the table.

CREATE TABLE IF NOT EXISTS public.users (
  -- Prefer using the same UUID as Supabase Auth (`auth.users.id`)
  id uuid PRIMARY KEY,

  -- Basic contact / login fields
  email text NOT NULL,
  email_confirmed boolean DEFAULT false,

  -- Profile
  username text,
  full_name text,
  first_name text,
  last_name text,
  phone text,
  avatar_url text,
  bio text,

  -- Role & status
  role text DEFAULT 'user',
  is_active boolean DEFAULT true,
  banned_until timestamptz,

  -- Provider info (for OAuth / external providers)
  provider text,
  provider_id text,

  -- Misc structured data
  metadata jsonb DEFAULT '{}'::jsonb,
  settings jsonb DEFAULT '{}'::jsonb,
  address jsonb,

  -- Auth / password reset / activity
  reset_token text,
  reset_sent_at timestamptz,
  last_sign_in_at timestamptz,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for common lookups
CREATE INDEX IF NOT EXISTS users_email_idx ON public.users (lower(email));
CREATE INDEX IF NOT EXISTS users_username_idx ON public.users (lower(username));
CREATE INDEX IF NOT EXISTS users_role_idx ON public.users (role);

-- Optional: reference auth.users if you want DB-level FK (uncomment if available)
-- ALTER TABLE public.users
--   ADD CONSTRAINT users_auth_uid_fkey FOREIGN KEY (id)
--   REFERENCES auth.users (id) ON DELETE CASCADE;

-- Trigger: keep updated_at current
CREATE OR REPLACE FUNCTION public.users_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_users_updated_at ON public.users;
CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION public.users_updated_at();

-- Minimal example RLS recommendations (apply policies via Supabase dashboard):
-- 1) Enable RLS: ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
-- 2) Allow users to read their own row:
--    CREATE POLICY "Users can select their own row" ON public.users
--    FOR SELECT USING (auth.jwt() ->> 'sub' = id::text);
-- 3) Allow users to update their own profile (but not role/is_active):
--    CREATE POLICY "Users can update their own profile" ON public.users
--    FOR UPDATE USING (auth.jwt() ->> 'sub' = id::text) WITH CHECK (auth.jwt() ->> 'sub' = id::text);

-- Example insert (use the Supabase Auth UID as id):
-- INSERT INTO public.users (id, email, full_name)
-- VALUES ('11111111-1111-1111-1111-111111111111', 'alice@example.com', 'Alice Example');
