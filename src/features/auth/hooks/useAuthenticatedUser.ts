import { supabaseClient as supabase } from "@/lib";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function useAuthenticatedUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      if (!supabase) return;

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error getting session:", error.message);
        setUser(null);
      } else {
        setUser(session?.user || null);
      }
      setLoading(false);
    };

    getSession();

    if (!supabase) return;
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      },
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
}
