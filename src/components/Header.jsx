import React from 'react';
import { Home, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold">
            H
          </span>
          <div className="leading-tight">
            <h1 className="font-semibold text-slate-900">HostelManix</h1>
            <p className="text-xs text-slate-500">Smart Hostel Management</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors inline-flex items-center gap-1">
            <Home size={16} />
            Home
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors inline-flex items-center gap-1">
            <User size={16} />
            Students
          </a>
          <a href="#admin" className="hover:text-slate-900 transition-colors inline-flex items-center gap-1">
            <Settings size={16} />
            Admin
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
            Log in
          </button>
          <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
