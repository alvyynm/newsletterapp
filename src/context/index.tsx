"use client";

import { User } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
// create context
const AppContext = createContext<any>(undefined);

// create provider component
export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  // create supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!
  );
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = () => {
      try {
        setLoading(true);

        // TODO: query supabase for current user
      } catch (error) {
        // TODO: handle error
        console.log(error);
      } finally {
        setLoading(false);
      }
      return user;
    };
    fetchCurrentUser();
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <AppContext.Provider value={{ user, supabase }}>
      {children}
    </AppContext.Provider>
  );
};

// a custom hook to access the context
export const useAppContext = () => {
  return useContext(AppContext);
};
