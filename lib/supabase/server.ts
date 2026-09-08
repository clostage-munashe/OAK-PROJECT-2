export async function createClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing Supabase environment variables. Set SUPABASE_URL and SUPABASE_KEY.'
    );
  }

  try {
    const supabase = await import('@supabase/supabase-js');
    return supabase.createClient(url, key);
  } catch (err) {
    throw new Error(
      'Could not load @supabase/supabase-js. Install it with `npm install @supabase/supabase-js`.'
    );
  }
}
