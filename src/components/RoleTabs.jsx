import React from 'react';

const roles = ['Student', 'Warden', 'Admin'];

export default function RoleTabs({ value, onChange }) {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-slate-900">Explore by role</h2>
          <p className="text-sm text-slate-500">Switch roles to preview tailored workflows</p>
        </div>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          {roles.map((r) => {
            const active = value === r;
            return (
              <button
                key={r}
                onClick={() => onChange(r)}
                className={[
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                  active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900',
                ].join(' ')}
                aria-pressed={active}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
