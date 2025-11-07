import React from 'react';
import { CalendarRange, ClipboardList, TicketCheck } from 'lucide-react';

export default function StudentPanel() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<CalendarRange className="h-5 w-5 text-blue-600" />}
            title="Apply Leave"
            desc="Submit leave with dates and reason; track approval status."
            actionLabel="Open form"
          />
          <Card
            icon={<ClipboardList className="h-5 w-5 text-blue-600" />}
            title="File Complaint"
            desc="Report mess feedback or a maintenance issue in minutes."
            actionLabel="Report issue"
          />
          <Card
            icon={<TicketCheck className="h-5 w-5 text-blue-600" />}
            title="Attendance"
            desc="View your monthly attendance with RFID/Manual logs."
            actionLabel="View logs"
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
