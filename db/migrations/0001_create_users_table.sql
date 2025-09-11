-- 0001_create_users_table.sql
-- Initial migration: create users table

CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  email_confirmed boolean DEFAULT false,
  username text,
  full_name text,
  first_name text,
  last_name text,
  phone text,
  avatar_url text,
  bio text,
  role text DEFAULT 'user',
  is_active boolean DEFAULT true,
  banned_until timestamptz,
  provider text,
  provider_id text,
  metadata jsonb DEFAULT '{}'::jsonb,
  settings jsonb DEFAULT '{}'::jsonb,
  address jsonb,
  reset_token text,
  reset_sent_at timestamptz,
  last_sign_in_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS users_email_idx ON public.users (lower(email));
CREATE INDEX IF NOT EXISTS users_username_idx ON public.users (lower(username));
CREATE INDEX IF NOT EXISTS users_role_idx ON public.users (role);

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
