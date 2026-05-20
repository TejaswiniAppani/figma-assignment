import React from 'react';
import Header from './components/layout/Header';
import { ArrowLeft, Wallet, ChevronDown, CheckCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-slate-900 flex flex-col antialiased">
      <Header />
      
      {/* Content Container Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8">
        
        {/* Breadcrumb Back Button Action Link */}
        <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs font-medium mb-4 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to plans
        </button>

        {/* Master Structural 2-Column Split System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* ================= LEFT SIDE FORM BOX (2 COLUMNS COMPONENT) ================= */}
          <div className="lg:col-span-2 bg-white rounded-md border border-slate-200 p-6 shadow-sm">
            <h1 className="text-xl font-bold text-slate-900 mb-1">Review your details</h1>
            <h2 className="text-sm font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Billing Information</h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Company Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                  <input type="text" defaultValue="abhigyan" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <input type="email" defaultValue="abhigyan.pandey@getreelax.com" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
              </div>

              {/* Row 2: GST Number & PAN Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">GST Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input type="text" placeholder="GST Number" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">PAN Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input type="text" placeholder="PAN Number" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Row 3: Premise/House No & Street Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Premise/House no.</label>
                  <input type="text" placeholder="Premise/House no." className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Street</label>
                  <input type="text" placeholder="Street" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Row 4: State Select & City Select Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                  <select className="w-full appearance-none border border-slate-300 rounded px-3 py-1.5 text-xs bg-white text-slate-500 focus:outline-none focus:border-blue-500">
                    <option>Select state</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 bottom-2 pointer-events-none" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                  <select className="w-full appearance-none border border-slate-300 rounded px-3 py-1.5 text-xs bg-white text-slate-500 focus:outline-none focus:border-blue-500">
                    <option>Select city</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 bottom-2 pointer-events-none" />
                </div>
              </div>

              {/* Row 5: Country Input Box & PIN Code Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                  <input type="text" defaultValue="India" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500 bg-slate-50/50" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pin Code</label>
                  <input type="text" placeholder="Pincode" className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              {/* Action Buttons Lower Row */}
              <div className="pt-6 flex justify-end gap-3 border-t border-slate-100">
                <button type="button" className="px-5 py-2 text-xs font-semibold border border-slate-300 rounded hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition-colors">
                  Save Details
                </button>
              </div>

            </form>
          </div>

          {/* ================= RIGHT SIDE ORDER SUMMARY CARD (1 COLUMN) ================= */}
          <div className="space-y-4">
            
            {/* Core Summary Cost Card Component */}
            <div className="bg-white rounded-md border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Order Summary</h3>
              
              {/* Plan Type Information Section Card Header */}
              <div className="bg-slate-50 border border-slate-100 rounded p-4 flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-extrabold text-slate-900">₹4,999</span>
                    <span className="text-[10px] font-medium text-slate-500">/month</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Includes 5,000 credits/mo.</p>
                </div>
                <div className="text-right">
                  <span className="bg-blue-50 text-[9px] text-blue-600 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider block mb-0.5">Selected Plan</span>
                  <span className="text-xs font-bold text-slate-800">Startup</span>
                </div>
              </div>

              {/* Upgrade Core Action Secondary Dynamic Blueprint Button Link */}
              <button className="w-full py-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50/50 rounded text-xs font-semibold tracking-wide mb-5 flex items-center justify-center gap-1 transition-all">
                <span>⚙️</span> Upgrade to Growth Plan
              </button>

              {/* Wallet Information Mini Widget */}
              <div className="border border-blue-100 bg-blue-50/30 rounded p-3 flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-[11px] font-bold text-slate-800">Wallet Balance</p>
                    <p className="text-[10px] text-slate-400">₹500.00 available</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">Apply</button>
              </div>

              {/* Apply Coupon Accordion Segment */}
              <div className="border border-slate-200 rounded p-4 mb-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-3">
                  <span className="flex items-center gap-1.5">🏷️ Apply Coupon</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
                
                {/* Coupon Code Input Line */}
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="Enter coupon code" className="flex-1 border border-slate-300 rounded px-2 py-1 text-xs uppercase placeholder:normal-case focus:outline-none focus:border-blue-500" />
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">Apply</button>
                </div>

                {/* Offer Option Selection Card 1 */}
                <label className="border border-blue-600 bg-blue-50/30 rounded p-2.5 flex items-start gap-2 cursor-pointer mb-2 block relative">
                  <input type="radio" name="coupon" defaultChecked className="mt-0.5 accent-blue-600" />
                  <div className="text-[11px]">
                    <span className="font-bold text-slate-800">WELCOME20</span>
                    <span className="text-slate-400 font-normal ml-1.5">20% off on your first month</span>
                  </div>
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 absolute right-3 top-3" />
                </label>

                {/* Offer Option Selection Card 2 */}
                <label className="border border-slate-200 hover:border-slate-300 rounded p-2.5 flex items-start gap-2 cursor-pointer block text-[11px]">
                  <input type="radio" name="coupon" className="mt-0.5 accent-blue-600" />
                  <div>
                    <span className="font-bold text-slate-700">ANNUAL50</span>
                    <span className="text-slate-400 font-normal ml-1.5">50% off on annual plans</span>
                  </div>
                </label>
              </div>

              {/* Total Detailed Breakdown Price Calculation Ledger Block */}
              <div className="space-y-1.5 border-b border-slate-100 pb-3 mb-4 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-medium">₹14,999.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Tax (18% GST)</span>
                  <span className="font-medium">₹1,078.64</span>
                </div>
              </div>

              {/* Ledger Absolute Net Cost Due Bottom Section Summary View */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold text-slate-800">Total due today</span>
                <span className="text-xl font-black text-blue-600 tracking-tight">16,078.64</span>
              </div>

              {/* Absolute Primary Action Confirmation Pay Route Link Button */}
              <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:transform active:scale-[0.99] text-white rounded font-bold text-xs shadow-md shadow-blue-600/10 transition-all text-center tracking-wide uppercase">
                Proceed to Payment
              </button>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
}