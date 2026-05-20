import React from 'react';
import { Search, Gem, Plus, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40 w-full">
      {/* Search Bar Container */}
      <div className="relative w-full max-w-xs">
        <input 
          type="text" 
          placeholder="Find influencers to collaborate with"
          className="w-full pl-3 pr-8 py-1.5 bg-white border border-slate-200 rounded text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
        />
        <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
      </div>

      {/* Actions Panel Group */}
      <div className="flex items-center gap-3">
        {/* Upgrade Button with Diamond Gem Icon */}
        <button className="px-3 py-1.5 bg-[#eab308] hover:bg-[#ca8a04] text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm">
          <Gem className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          <span>Upgrade</span>
        </button>

        {/* Create Campaign Button with Clean Plus Icon */}
        <button className="px-3 py-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded text-xs font-medium flex items-center gap-1 transition-colors shadow-sm">
          <Plus className="w-3.5 h-3.5 text-white stroke-[2.5]" />
          <span>Create Campaign</span>
        </button>

        {/* Profile and Menu Consolidated Pill Wrapper */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1 pr-2.5 py-1">
          {/* User Profile Rounded Bubble Avatar */}
          <div className="w-6 h-6 rounded-full bg-[#bfdbfe] flex items-center justify-center text-[#2563eb]">
            <User className="w-3.5 h-3.5 fill-[#2563eb] text-[#2563eb]" />
          </div>
          
          {/* Menu Hamburger Trigger */}
          <button className="text-slate-700 hover:text-slate-900 transition-colors">
            <Menu className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}