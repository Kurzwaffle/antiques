import React, { createContext, useContext, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AdminContextType {
  isAdmin: boolean;
  checkAdminStatus: () => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const checkAdminStatus = async () => {
    try {
      const { data: session } = await supabase.auth.getSession();
      
      if (!session.session) {
        setIsAdmin(false);
        return false;
      }
      
      // Check if the user has the admin role in the profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.session.user.id)
        .single();
        
      if (profileError || !profileData) {
        setIsAdmin(false);
        return false;
      }
      
      const isUserAdmin = profileData.role === 'admin';
      setIsAdmin(isUserAdmin);
      return isUserAdmin;
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
      return false;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      const isUserAdmin = await checkAdminStatus();
      
      if (!isUserAdmin) {
        // Sign out if the user is not an admin
        await supabase.auth.signOut();
        return { success: false, error: 'You do not have administrator privileges.' };
      }
      
      return { success: true };
    } catch (error) {
      console.error('Sign in error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unknown error occurred' 
      };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, checkAdminStatus, signIn, signOut }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};