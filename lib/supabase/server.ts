import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Components cannot always modify cookies.
          }
        },
      },
    }
  );
}
// export async function createClient() {
//   const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const key =
//     process.env.SUPABASE_SERVICE_ROLE_KEY ||
//     process.env.SUPABASE_KEY ||
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
//     process.env.SUPABASE_ANON_KEY;

//   if (!url || !key) {
//     throw new Error(
//       'Missing Supabase environment variables. Set SUPABASE_URL and SUPABASE_KEY.'
//     );
//   }

//   try {
//     const supabase = await import('@supabase/supabase-js');
//     return supabase.createClient(url, key);
//   } catch (err) {
//     throw new Error(
//       'Could not load @supabase/supabase-js. Install it with `npm install @supabase/supabase-js`.'
//     );
//   }
// }
