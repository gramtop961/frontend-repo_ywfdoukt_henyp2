import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6CU4v8Vw8mJqV2Wq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700">
            HostelManix
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Smart Hostel Management for campuses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Replace manual registers with fast, secure workflows for leaves, complaints, rooms and attendance — built for students, wardens and admins.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#features" className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium">Explore features</a>
            <a href="#demo" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium">View demo</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
