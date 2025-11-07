import React from 'react';

export default function CTA() {
  return (
    <section id="demo" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to modernize your hostel?</h3>
        <p className="mt-2 max-w-2xl text-slate-600">Start with the core workflows: leaves, complaints and room allocation. Add RFID attendance when you’re ready.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="#" className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium">Launch demo</a>
          <a href="#" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium">View docs</a>
        </div>
      </div>
    </section>
  );
}
