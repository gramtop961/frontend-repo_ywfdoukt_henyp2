import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';
import RoleTabs from './components/RoleTabs';
import StudentPanel from './components/StudentPanel';
import WardenPanel from './components/WardenPanel';
import AdminPanel from './components/AdminPanel';

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} HostelManix. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#">Privacy</a>
          <a className="hover:text-slate-900" href="#">Terms</a>
          <a className="hover:text-slate-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [role, setRole] = useState('Student');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <RoleTabs value={role} onChange={setRole} />
        {role === 'Student' && <StudentPanel />}
        {role === 'Warden' && <WardenPanel />}
        {role === 'Admin' && <AdminPanel />}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
