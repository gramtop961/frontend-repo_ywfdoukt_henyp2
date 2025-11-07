import React from 'react';
import { ClipboardList, CheckCircle2, Building2, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="h-5 w-5 text-blue-600" />,
    title: 'Online Leave Requests',
    desc: 'Students submit leave requests, wardens approve with notes and audit trail.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-blue-600" />,
    title: 'Complaints & Maintenance',
    desc: 'Track mess feedback and maintenance tasks from report to resolution.'
  },
  {
    icon: <Building2 className="h-5 w-5 text-blue-600" />,
    title: 'Rooms & Occupancy',
    desc: 'Manage hostels and room allocation with up-to-date capacity.'
  },
  {
    icon: <Bell className="h-5 w-5 text-blue-600" />,
    title: 'Notifications',
    desc: 'Stay updated with decisions and updates in real-time.'
  },
  {
    icon: <Shield className="h-5 w-5 text-blue-600" />,
    title: 'Secure & Role-based',
    desc: 'JWT auth with roles for Students, Wardens, Admins and Staff.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Everything you need for hostel ops</h3>
          <p className="mt-2 text-slate-600">Focus on student experience while the system handles the paperwork.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  {f.icon}
                </div>
                <h4 className="font-semibold text-slate-900">{f.title}</h4>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
