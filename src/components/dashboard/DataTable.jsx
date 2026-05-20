import React from 'react';

export default function DataTable({ data }) {
  return (
    <div className="bg-white rounded-figma-lg border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h4 className="font-semibold text-slate-800">Recent Conversions</h4>
        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
          Live Data
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="px-6 py-3.5">User</th>
              <th className="px-6 py-3.5">Status</th>
              <th className="px-6 py-3.5 hidden sm:table-cell">Source</th>
              <th className="px-6 py-3.5 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-900">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                <td className="px-6 py-4 font-medium">{row.user}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    row.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">{row.source}</td>
                <td className="px-6 py-4 text-right font-semibold">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}