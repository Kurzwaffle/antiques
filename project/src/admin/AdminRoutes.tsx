import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAdmin } from './AdminContext';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';

export const AdminRoutes: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route 
        path="/dashboard/*" 
        element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" replace />} 
      />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
};