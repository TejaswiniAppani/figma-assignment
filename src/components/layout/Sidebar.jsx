import React from 'react';
import { LayoutDashboard, BarChart2, Settings, X, Layers } from 'lucide-react';

export default function Sidebar({ closeMenu }) {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 bg-white">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <div className="p-1.5 bg-brand-500 text-white rounded-figma-md">
              <Layers className="w-5 h-5" />
            </div>
            <span>ReelaxUI</span>
          </div>
          {closeMenu && (
            <button onClick={closeMenu} className="lg:hidden p-1 text-slate-500 hover:text-slate-900">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-figma-md text-sm font-medium transition-all ${
                item.active 
                  ? 'bg-brand-50 text-brand-500 font-semibold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center font-semibold text-sm">
          JD
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">John Doe</p>
          <p className="text-xs text-slate-500 truncate">john@reelax.io</p>
        </div>
      </div>
    </div>
  );
}