import React from 'react';
import { Building2, Users2, BarChart3 } from 'lucide-react';

export default function AdminPanel() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<Building2 className="h-5 w-5 text-blue-600" />}
            title="Hostels & Rooms"
            desc="Create hostels, manage rooms, and track occupancy."
            actionLabel="Configure"
          />
          <Card
            icon={<Users2 className="h-5 w-5 text-blue-600" />}
            title="Users & Roles"
            desc="Add students, assign wardens, and manage permissions."
            actionLabel="Manage users"
          />
          <Card
            icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
            title="Reports"
            desc="Leaves, complaints, and occupancy insights at a glance."
            actionLabel="Open reports"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc, actionLabel }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">{icon}</div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
      <div className="mt-4">
        <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">{actionLabel}</button>
      </div>
    </div>
  );
}
