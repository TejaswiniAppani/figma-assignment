# Figma-to-Code Assignment: Billing Details & Order Summary

A pixel-perfect, responsive frontend implementation of a checkout and billing details workspace dashboard based on the provided Figma design specs. Built from scratch using **React**, **Vite**, and **Tailwind CSS v4**.

---

##  Implemented Features

### 1. Header Navigation Panel
* **Search Context Tool:** A clean input utility placeholder for navigating influencer datasets.
* **Figma Token Actions:** Accurately styled action triggers including an "Upgrade" button with a modern Diamond/Gem token icon and a "+ Create Campaign" portal button.
* **Profile Interface Capsule:** A custom wrapper capsule containing a blue profile avatar alongside an accessible utility dropdown toggle matching the source design.

### 2. Billing Information Form (Left Side — 2/3 Width)
* Complete user details collection panels comprising standard grid inputs for:
  * Company Name & Email (Pre-filled state configuration)
  * GST Number & PAN Number (Optional field specifications)
  * Billing Address Lines (Premise details, Street address)
  * State & City selections equipped with aligned indicator drops.
* "Cancel" and "Save Details" dynamic action submission footer.

### 3. Sticky Order Summary Ledger (Right Side — 1/3 Width)
* **Plan Badge Information:** Premium visibility billing card mapping currency states (`₹4,999/month`) along with contextual allocation summaries ("Includes 5,000 credits/mo").
* **Wallet Context Component:** A dynamic blue notification banner parsing real-time balance structures ("₹500.00 available") with an immediate configuration link.
* **Coupon Processing Module:** Interactive, fully functional input structure containing radio selection fields tailored to manage exclusive discount configurations (`WELCOME20` vs `ANNUAL50`).
* **Tax Calculation Grid:** Comprehensive live calculations accounting for Subtotal metrics, 18% GST addition tables, and absolute bold pricing breakdowns leading to the prominent **"Proceed to Payment"** primary completion engine.

---

##  Technology Stack Used

* **Core Engine:** React 18 (Functional architecture leveraging hooks)
* **Build System:** Vite 5 (Hot Module Replacement execution)
* **Styling Layer:** Tailwind CSS v4 (Compiling natively via modern `@import` layers)
* **Icon Engine:** Lucide React

---

##  Local Project Setup Instructions

Follow these instructions to safely set up, replicate, and run this codebase locally on your environment:

### 1. Clone the Workspace Repository
Open your preferred terminal command prompt and download the project tree:
```bash
git clone [https://github.com/YOUR_USERNAME/figma-assignment.git](https://github.com/YOUR_USERNAME/figma-assignment.git)
cd figma-assignment

2. Install Necessary Node Modules
Restore project environment paths and execution scripts locally:

npm install

3. Launch Local Development Server
Boot up the local Vite compiler pipeline:

Bash
npm run dev

Once running successfully, access the operational environment on your desktop browser at:

👉 http://localhost:5173/