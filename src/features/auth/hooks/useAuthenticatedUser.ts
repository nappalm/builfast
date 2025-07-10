import { useEffect, useState } from 'react';
import { supabaseClient as supabase } from '@/lib';
import { User } from '@supabase/supabase-js';

export default function useAuthenticatedUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error.message);
        setUser(null);
      } else {
        setUser(session?.user || null);
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
}
