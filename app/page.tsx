import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Irfan | Senior Full-Stack & Cloud Systems Engineer",
  description:
    "Specialized in enterprise ERP platforms, Shopify SaaS apps, and scalable web solutions with end-to-end cloud deployments on AWS EC2, Render, and Linux.",
};

const productionWork = [
  {
    name: "ForthApps ERP",
    url: "http://erp.forthapps.com",
    stack: "React, AntD, Node.js, MySQL, Nginx, PM2",
    specialization: "Full ERP dashboard, mobile webview styling & Linux production server setup",
  },
  {
    name: "ForthApps Portal",
    url: "http://forthapps.com",
    stack: "Next.js 14, Tailwind CSS, Node.js",
    specialization: "Corporate SaaS marketing portal & conversion funnel",
  },
  {
    name: "Daya General Hospital",
    url: "https://www.dayageneralhospital.com",
    stack: "PHP, JavaScript, Custom Responsive CSS",
    specialization: "Healthcare web portal, department directories & doctor booking",
  },
  {
    name: "Daya Royal Hospital",
    url: "https://dayaroyalhospital.com",
    stack: "PHP, JavaScript, CSS3",
    specialization: "Multi-specialty hospital digital presence",
  },
  {
    name: "MES Medical College",
    url: "https://www.mesmedicalcollege.edu.in",
    stack: "PHP, JavaScript, Bootstrap",
    specialization: "Academic institutional platform & campus resource engine",
  },
  {
    name: "UCCIMT College",
    url: "https://mca.uccimt.edu.in",
    stack: "PHP, jQuery, CSS",
    specialization: "Educational department information portal",
  },
  {
    name: "CK Creatives",
    url: "https://www.ckcreatives.in",
    stack: "Vanilla JS, Modern CSS, HTML5",
    specialization: "Creative agency showcase & dynamic portfolio",
  },
  {
    name: "BMIPC",
    url: "https://www.bmipc.com",
    stack: "JavaScript, jQuery, CSS3",
    specialization: "Industrial corporate catalog & business directory",
  },
  {
    name: "Ask Dr. Nandi",
    url: "https://askdrnandi.com",
    stack: "WordPress, PHP, Custom CSS",
    specialization: "High-traffic international health brand & media portal",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Top Subtle Border / Glow */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-slate-800/80 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg text-white">
            Mohamed Irfan<span className="text-cyan-400">.dev</span>
          </span>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition">Capabilities</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition">Case Studies</a>
            <a href="#showcase" className="hover:text-cyan-400 transition">Live Work</a>
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* SECTION 1: HERO */}
        <section className="pt-8 pb-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>●</span> Full-Stack Engineer & Cloud Infrastructure Specialist
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Transforming Complex Business Workflows into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Fast, Scalable Web & Cloud Systems.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed">
            From database schemas and responsive frontends to Linux virtual servers, Nginx reverse proxies, and automated CI/CD pipelines — I take business-critical software from concept to production.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition"
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#case-studies"
              className="px-6 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium rounded-lg hover:bg-slate-900 transition"
            >
              Explore Case Studies ↓
            </a>
          </div>
        </section>

        {/* SECTION 2: CORE CAPABILITIES (INCORPORATING DEVOPS) */}
        <section id="services" className="space-y-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Capabilities</h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">Full-Lifecycle Engineering</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4">
                  ERP
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Custom Enterprise Software</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  High-density internal dashboards, procurement engines, and HRMS portals styled cleanly across desktop and mobile webviews.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400/90">React · Node.js · AntD · MySQL</span>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
                  SaaS
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">SaaS & Shopify Apps</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Official Shopify App Store approved software, App Bridge integrations, recurring billing APIs, and resilient webhook event queues.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400/90">Shopify Polaris · GraphQL · Node.js</span>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  OPS
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">DevOps & Cloud Architecture</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  AWS EC2 instances, Linux administration, Nginx reverse proxies, SSL certificates, PM2 process management, and automated CI/CD pipelines.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400/90">AWS EC2 · Linux · Render · Nginx · CI/CD</span>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
                  WEB
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Next.js & Custom Web</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  High-speed landing portals and handcrafted PHP/WordPress themes engineered cleanly without slow, bloated page builders.
                </p>
              </div>
              <span className="text-xs font-mono text-purple-400/90">Next.js · Tailwind · PHP · WordPress</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED CASE STUDIES */}
        <section id="case-studies" className="space-y-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Flagship Projects</h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">Deep-Dive Case Studies</p>
          </div>

          <div className="space-y-16">
            {/* Case Study 1: ForthApps Full Enterprise ERP & HRMS Ecosystem */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Case Study 01</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      Enterprise ERP & HRMS Platform
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">ForthApps ERP & Work Route Module</h3>
                  <p className="text-sm text-slate-400">
                    Lead Full-Stack Architect & Deployment Engineer · Production Platform Deployed across UAE Enterprises
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="http://erp.forthapps.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-md border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
                  >
                    erp.forthapps.com ↗
                  </a>
                  <a
                    href="http://forthapps.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                  >
                    forthapps.com ↗
                  </a>
                </div>
              </div>

              {/* Flagship Highlight Banner: Work Routes Success Metric */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-blue-950/40 border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      Featured Innovation · Work Route & Field Sales Module
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    Engineered a location-verified route planning and GPS check-in engine within the HRMS/Operations suite. Officially published as an enterprise case study by client Al Nahda Medical Store LLC (UAE).
                  </p>
                </div>
                <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6 shrink-0">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Rep Daily Coverage</span>
                    <span className="text-xl font-bold text-emerald-400">10-11 → 14-15</span>
                    <span className="block text-[10px] text-slate-400">Visits/Day (+35% Boost)</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Distribution Scale</span>
                    <span className="text-xl font-bold text-white">500+</span>
                    <span className="block text-[10px] text-slate-400">Pharmacies Tracked</span>
                  </div>
                </div>
              </div>

              {/* Architectural Breakdown Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-sm">
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-rose-400 mb-2">The Enterprise Challenge</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Operations suffered from disconnected modules across sales, purchasing, inventory, and field attendance. Field staff required low-bandwidth mobile webview access, while leadership needed centralized control over procurement and payroll.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-cyan-400 mb-2">Core ERP & Mobile Webview</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Architected the React + AntD dashboard and Next.js marketing front, connected to Node.js/Express & MySQL. Custom-styled responsive desktop data tables and drawers to adapt natively to mobile webviews for on-site staff.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-amber-400 mb-2">HRMS, Payroll & Field Routes</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Constructed the complete HRMS suite: visual shift attendance, payroll processing, and the standout Work Route module with live GPS tracking, waypoint timelines, and geo-verified client visits.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-emerald-400 mb-2">DevOps & Business Impact</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Deployed on Linux servers with Nginx reverse proxying, SSL automation, and PM2 clustering. Eliminated duplicate administrative entry and gained widespread adoption across regional enterprise teams.
                  </p>
                </div>
              </div>

              {/* Interactive ERP UI Showcase Block */}
              <div className="mt-8 space-y-6">
                {/* Desktop Full Dashboard Preview */}
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-xs text-slate-400">
                        ForthApps ERP — Multi-Module Desktop Command Center
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">Desktop View</span>
                  </div>
                  <img
                    src="/projects/erp/erp-dashboard-main.jpg"
                    alt="ForthApps ERP Desktop Dashboard"
                    className="w-full object-cover"
                  />
                </div>

                {/* Desktop Full HRMS Dashboard Preview */}
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-xs text-slate-400">
                        ForthApps HRMS & Operations Suite — Staff, Approvals & Payroll
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">HRMS Center</span>
                  </div>
                  <img
                    src="/projects/erp/erp-hrms-dashboard-main.jpg"
                    alt="ForthApps ERP Desktop HRMS Dashboard"
                    className="w-full object-cover"
                  />
                </div>

                {/* Cross-Device / Mobile Webview Demonstration */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 shadow-lg">
                    <p className="text-xs font-mono text-slate-400 mb-2">Mobile Webview · Field CRM & Work Route</p>
                    <img
                      src="/projects/erp/crm-dashboard-mobile.jpeg"
                      alt="Field CRM Mobile View"
                      className="rounded-lg w-full object-cover border border-slate-800"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 shadow-lg">
                    <p className="text-xs font-mono text-slate-400 mb-2">Mobile Webview · Attendance Matrix</p>
                    <img
                      src="/projects/erp/erp-attendance-mobile.jpeg"
                      alt="Mobile Attendance Calendar"
                      className="rounded-lg w-full object-cover border border-slate-800"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 shadow-lg">
                    <p className="text-xs font-mono text-slate-400 mb-2">Mobile Webview · Purchase Order Form</p>
                    <img
                      src="/projects/erp/erp-purchase-order.jpeg"
                      alt="Purchase Order Entry"
                      className="rounded-lg w-full object-cover border border-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Client Quote Callout */}
              <blockquote className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-cyan-500 text-slate-300 text-xs italic leading-relaxed">
                "ForthApps ERP system gives us complete visibility into where our money is being spent and where revenue is being generated. This has enabled us to control costs and focus on our most profitable business areas."
                <span className="block mt-2 font-mono not-italic font-semibold text-cyan-400">
                  — Riyas VK, Managing Director, Al Nahda Medical Store LLC (Sharjah, UAE)
                </span>
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "React",
                  "Ant Design",
                  "Node.js",
                  "Express",
                  "MySQL",
                  "HRMS & Payroll",
                  "GPS Work Routes",
                  "Next.js 14",
                  "Tailwind CSS",
                  "Linux Server",
                  "Nginx / PM2",
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study 2: ProfitLens Shopify App */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Case Study 02</span>
                  <h3 className="text-2xl font-bold text-white mt-1">ProfitLens Net Profit Tracker</h3>
                  <p className="text-sm text-slate-400">Solo Full-Stack Product Developer</p>
                </div>
                <a
                  href="https://apps.shopify.com/profitlens-1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition flex items-center gap-1.5"
                >
                  <span>Official App Store Listing</span> ↗
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-sm">
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-rose-400 mb-2">The Challenge</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Shopify stores frequently mask thin margins behind high gross revenue. Merchants struggled to track real profit due to hidden ad costs, payment fees, shipping variances, and refunds, relying on hours of error-prone CSV spreadsheets.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-cyan-400 mb-2">The Solution</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Engineered an official embedded Shopify application using Shopify App Bridge and Polaris UI. Implemented real-time asynchronous webhook consumers, recurring App Store billing APIs, and a multi-factor profit calculation engine.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-amber-400 mb-2">Automated CI/CD</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Configured continuous container deployment pipelines on Render with encrypted environment variable secrets, zero-downtime rolling deploys, and automated health check endpoints for webhook resiliency.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-semibold text-emerald-400 mb-2">Business Outcome</h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    Passed Shopify’s rigorous App Store verification and security review. Provides merchants automated real-time margin tracking and SKU-level profit breakdown, saving 5–10 hours per week of manual financial work.
                  </p>
                </div>
              </div>

              {/* ProfitLens Interactive UI Showcase */}
              <div className="mt-8 space-y-6">
                {/* Hero Screenshot */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl transition hover:border-cyan-500/40">
                  <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      <span className="font-mono text-xs text-slate-300">
                        ProfitLens Admin · Live Embedded Merchant View
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-cyan-400">
                      Shopify App Store Certified
                    </span>
                  </div>
                  <img
                    src="/projects/profitlens/dashboard.png"
                    alt="ProfitLens Real-Time Profit Command Center"
                    className="w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                {/* 3-Column Feature Deep-Dive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                  {/* Order Dissection */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 hover:border-slate-700 transition flex flex-col justify-between">
                    <img
                      src="/projects/profitlens/recent-orders.png"
                      alt="Transaction Margin Dissection"
                      className="rounded-lg w-full object-cover border border-slate-800/80 mb-3"
                    />
                    <div>
                      <p className="text-xs font-semibold text-slate-200">Transaction Margin Dissection</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Flagging negative-margin sales (-21.3%) and isolating cost leaks at the SKU level.
                      </p>
                    </div>
                  </div>

                  {/* What-If Simulator */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 hover:border-slate-700 transition flex flex-col justify-between">
                    <img
                      src="/projects/profitlens/simulator.png"
                      alt="Live What-If Simulator"
                      className="rounded-lg w-full object-cover border border-slate-800/80 mb-3"
                    />
                    <div>
                      <p className="text-xs font-semibold text-slate-200">Live Forecasting Engine</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Real-time dynamic modeling for ad spend scaling, cost reductions, and target ROAS.
                      </p>
                    </div>
                  </div>

                  {/* Expense & Logistics Management */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 hover:border-slate-700 transition flex flex-col justify-between">
                    <img
                      src="/projects/profitlens/expenses.png"
                      alt="Total Visibility Expense Engine"
                      className="rounded-lg w-full object-cover border border-slate-800/80 mb-3"
                    />
                    <div>
                      <p className="text-xs font-semibold text-slate-200">Total Expense Visibility</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Automated multi-platform ad spend distribution, shipping profiles, and fee tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Shopify App Bridge",
                  "Shopify Polaris",
                  "Node.js",
                  "Express",
                  "GraphQL Admin API",
                  "OAuth 2.0",
                  "Webhooks",
                  "Render CI/CD",
                  "Health Monitoring"
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCTION CLIENT WORK SHOWCASE */}
        <section id="showcase" className="space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Track Record</h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">Production Client Websites & Platforms</p>
          </div>

          <div className="border border-slate-800 rounded-xl overflow-x-auto bg-slate-900/30">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 bg-slate-900/70 text-slate-400 uppercase text-xs font-mono">
                <tr>
                  <th className="py-4 px-6">Client / Platform</th>
                  <th className="py-4 px-6">Architecture & Tech</th>
                  <th className="py-4 px-6">Delivery Scope</th>
                  <th className="py-4 px-6 text-right">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {productionWork.map((project) => (
                  <tr key={project.name} className="hover:bg-slate-900/50 transition">
                    <td className="py-4 px-6 text-white font-semibold">{project.name}</td>
                    <td className="py-4 px-6 text-cyan-400 font-mono text-xs">{project.stack}</td>
                    <td className="py-4 px-6 text-slate-400 text-xs">{project.specialization}</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-300 hover:text-cyan-400 underline underline-offset-4 font-mono transition"
                      >
                        Visit ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: ENGINEERING PRINCIPLES (INCORPORATING DEVOPS OWNERSHIP) */}
        <section className="space-y-8 border-t border-slate-800/80 pt-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Why Work With Me</h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">Engineering Rigor & Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="text-cyan-400 font-bold text-lg">01. System Architecture</div>
              <h3 className="font-semibold text-white">No Fragile Quick Fixes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Relational schema design, role-based authorization, and resilient API contracts ensure applications withstand real enterprise data loads without breaking.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="text-cyan-400 font-bold text-lg">02. Cross-Device UI</div>
              <h3 className="font-semibold text-white">Desktop to Webviews</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clean CSS breakpoints and tailored drawer components ensure complex tabular workflows compress naturally into low-bandwidth mobile screens.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="text-cyan-400 font-bold text-lg">03. Production Deployment</div>
              <h3 className="font-semibold text-white">Full DevOps Ownership</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I do not stop at `localhost`. I configure cloud servers (AWS/DigitalOcean), set up firewalls, Nginx proxies, SSL, and automated deployment pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="text-cyan-400 font-bold text-lg">04. Clean Code</div>
              <h3 className="font-semibold text-white">Zero Technical Debt</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Handcrafted themes and components built without heavy, unstable third-party builders, ensuring fast load times and clean long-term maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT / CALL TO ACTION */}
        <section id="contact" className="border-t border-slate-800/80 pt-16 pb-12 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Start A Project</h2>
            <p className="text-3xl font-bold text-white mt-1">Let’s Build Something Reliable Together</p>
            <p className="text-slate-400 text-sm mt-2">
              Whether you need an enterprise ERP, an official Shopify SaaS application, or a fast Next.js web application deployed to production, share your requirements below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Project Scope</label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise ERP Dashboard, Shopify App Development, AWS/Next.js Migration"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Details / Timeline</label>
                <textarea
                  rows={4}
                  placeholder="Brief overview of objectives, required features, or target milestones..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition"
              >
                Send Project Inquiry
              </button>
            </form>

            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4 h-fit">
              <h3 className="font-semibold text-white">Direct Contacts</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Have an urgent requirement or prefer direct discussion? Connect via email or professional profiles:
              </p>
              <div className="space-y-2 pt-2 text-sm font-mono">
                <div>
                  <span className="text-slate-500 block text-xs">Email</span>
                  <a href="mailto:irfanmpmk@gmail.com" className="text-cyan-400 hover:underline">
                    Email Me ↗
                  </a>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block text-xs">LinkedIn</span>
                  <a href="https://linkedin.com/in/irfanmpmk" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    linkedin.com/in/irfanmpmk ↗
                  </a>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block text-xs">App Store</span>
                  <a
                    href="https://apps.shopify.com/profitlens-1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    apps.shopify.com/profitlens-1 ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Mohamed Irfan. Engineered with Next.js, Tailwind CSS & Production Cloud Architecture.
      </footer>
    </div>
  );
}