import React from 'react';

export default function Card({ title, value, change, changeType, icon: Icon }) {
  const isPositive = changeType === 'positive';

  return (
    <div className="bg-white p-6 rounded-figma-lg border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-500 font-sans">{title}</span>
        {Icon && (
          <div className="p-2 bg-brand-50 rounded-figma-md text-brand-500">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </h3>
        <div className="flex items-center gap-1.5 mt-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          }`}>
            {isPositive ? '+' : '-'}{Math.abs(change)}%
          </span>
          <span className="text-xs text-slate-400 font-sans">vs last month</span>
        </div>
      </div>
    </div>
  );
}