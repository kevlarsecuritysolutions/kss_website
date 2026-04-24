import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "@formspree/react";
import { Switch } from "@headlessui/react";
import { ArrowLeft, ArrowRight, Checkmark, Close, ChevronDown, ChevronUp } from "@carbon/icons-react";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ── Data ─────────────────────────────────────────────── */

const trustItems = [
  { label: "AI-Powered Analytics", sub: "Smart detection & recognition" },
  { label: "Remote Viewing",       sub: "Mobile & desktop access" },
  { label: "Permanent & Temporary", sub: "Fixed or deployable systems" },
  { label: "System Upgrades",      sub: "Training & troubleshooting" },
];

const features = [
  "Full site design — camera placement optimised for coverage and lighting",
  "High-definition IP cameras from leading manufacturers",
  "AI analytics: people counting, vehicle detection, facial recognition",
  "Remote live viewing via mobile app and web browser",
  "Temporary deployments for events, construction, and short-term needs",
  "System upgrades, operator training and ongoing support",
];

const brands = ["Axis", "Hanwha Wisenet", "Hikvision", "Dahua", "Avigilon"];

const capabilities = [
  { title: "Facial Recognition",   desc: "Identify known individuals and generate alerts on persons of interest" },
  { title: "Vehicle Detection",    desc: "Number plate recognition and vehicle classification for access and audit purposes" },
  { title: "People Counting",      desc: "Occupancy monitoring and traffic pattern analysis for retail and public spaces" },
  { title: "Loitering Detection",  desc: "Automated alerts when individuals remain in a zone beyond a set timeframe" },
  { title: "Perimeter Intrusion",  desc: "Virtual tripwires and zone entry alerts for after-hours monitoring" },
];

const useCases = [
  {
    title: "Retail", sub: "Loss prevention & analytics",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  },
  {
    title: "Corporate", sub: "Premises & car parks",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  },
  {
    title: "Construction", sub: "Site security & progress",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg>,
  },
  {
    title: "Residential", sub: "Home & estate coverage",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: "Events", sub: "Temporary deployments",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Industrial", sub: "Facility-wide coverage",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><polygon points="1 22 1 8 8 3 8 8 15 3 15 22 1 22"/><line x1="8" y1="22" x2="8" y2="12"/><line x1="15" y1="22" x2="23" y2="22"/><line x1="23" y1="22" x2="23" y2="8"/><line x1="15" y1="8" x2="23" y2="8"/></svg>,
  },
];

const processSteps = [
  { num: "01", title: "Site Survey & Needs Analysis",  desc: "We assess lighting conditions, coverage requirements, remote access needs, and integration options with any existing infrastructure before recommending a solution." },
  { num: "02", title: "Camera Placement Design",       desc: "A detailed coverage map is produced, specifying camera types, field of view, focal lengths, and mounting positions for optimal performance day and night." },
  { num: "03", title: "Installation & Configuration",  desc: "Certified technicians install all hardware and configure recording schedules, AI analytics rules, remote access, and storage retention to your requirements." },
  { num: "04", title: "Training & Handover",           desc: "We train your nominated staff on live viewing, footage retrieval, alert management, and the mobile app before completing a formal system handover." },
  { num: "05", title: "Ongoing Support",               desc: "We offer maintenance agreements, system health monitoring, firmware updates, and troubleshooting to keep your system performing at its best long-term." },
];

const faqs = [
  {
    q: "How many cameras do I need?",
    a: "Camera count depends on your property size, layout, entry points, and the level of coverage required. Following a site survey, we produce a detailed coverage plan showing exactly which areas each camera covers and why. We won't recommend more cameras than you need.",
  },
  {
    q: "How long is footage stored?",
    a: "Storage duration depends on the number of cameras, resolution, and recording schedule. We configure systems to meet your specific retention requirements — typically 7 to 30 days for standard installations. Extended retention is available with additional storage or cloud backup options.",
  },
  {
    q: "Can I view footage remotely on my phone?",
    a: "Yes. All systems we install include remote viewing capability via a mobile app and web browser. You can view live feeds, review recorded footage, and receive motion alerts from anywhere with an internet connection.",
  },
  {
    q: "Are there legal requirements around CCTV in Tasmania?",
    a: "Yes. CCTV systems must comply with Australian Privacy Principles and, in commercial settings, may require signage informing people they are being recorded. For workplace installations there may be additional obligations under workplace surveillance legislation. We advise clients on applicable requirements during the design phase.",
  },
  {
    q: "Can you upgrade my existing analogue CCTV system?",
    a: "Yes. We can often upgrade existing analogue infrastructure to HD-over-coax or full IP systems while reusing existing cabling, reducing upgrade costs significantly. We'll assess your current setup and provide options ranging from a cost-effective upgrade to a full IP replacement.",
  },
  {
    q: "Do you offer temporary CCTV hire for events or construction sites?",
    a: "Yes. We provide temporary CCTV solutions for events, construction sites, and short-term security needs. These can be deployed quickly, require no fixed infrastructure, and can include remote monitoring. Contact us to discuss your specific timeframe and coverage needs.",
  },
];

/* ── Sub-components ───────────────────────────────────── */

function CapabilityRow({ title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid", gridTemplateColumns: "160px 1fr",
        background: hov ? "rgba(38,153,251,0.06)" : "rgba(0,0,0,0.25)",
        border: "1px solid rgba(195,201,206,0.08)",
        transition: "all 150ms",
      }}
    >
      <div style={{ padding: "20px 18px", borderRight: "1px solid rgba(195,201,206,0.08)", display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "white", letterSpacing: "0.04em", lineHeight: 1.3 }}>{title}</span>
      </div>
      <div style={{ padding: "20px 20px", display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: 13, color: "#c3c9ce", lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
}

function UseCaseCard({ icon, title, sub }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(38,153,251,0.07)" : "rgba(0,0,0,0.25)",
        border: "1px solid rgba(195,201,206,0.1)",
        padding: "36px 28px",
        transition: "all 150ms",
      }}
    >
      <div style={{ marginBottom: 20 }}>{icon}</div>
      <div style={{ width: 32, height: 1, background: "linear-gradient(to right, #17415c, #646464, #003d64)", marginBottom: 16 }} />
      <div style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", color: "white", letterSpacing: "0.04em", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#c3c9ce", lineHeight: 1.6 }}>{sub}</div>
    </div>
  );
}

function ProcessStepCard({ num, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(0,26,47,0.8)" : "rgba(0,0,0,0.25)",
        border: "1px solid rgba(195,201,206,0.08)",
        padding: "32px 24px",
        transition: "all 150ms",
      }}
    >
      <div style={{ fontSize: 40, fontWeight: 700, color: "rgba(38,153,251,0.18)", lineHeight: 1, marginBottom: 20, letterSpacing: "-0.03em" }}>{num}</div>
      <div style={{ height: 4, background: "linear-gradient(to right, #17415c, #646464, #003d64)", marginBottom: 16 }} />
      <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", color: "white", letterSpacing: "0.04em", marginBottom: 12 }}>{title}</div>
      <p style={{ fontSize: 13, color: "#c3c9ce", lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(195,201,206,0.12)" }}>
      <button
        onClick={onToggle}
        style={{ width: "100%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "22px 0", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: "white", lineHeight: 1.4 }}>{q}</span>
        <div style={{ color: "#2699fb", flexShrink: 0, transition: "transform 250ms ease" }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      <div style={{ maxHeight: open ? "400px" : "0", overflow: "hidden", transition: "max-height 300ms ease-in-out" }}>
        <div style={{ paddingBottom: 24, paddingRight: 40 }}>
          <p style={{ fontSize: 15, color: "#c3c9ce", lineHeight: 1.8 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

const CCTVSurveillance = () => {
  const [state, handleSubmit] = useForm("mnqynzap");
  const [agreed, setAgreed] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (i) => setOpenFaqs((prev) => ({ ...prev, [i]: !prev[i] }));

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const anchorId = e.currentTarget.href.split("#")[1];
    const anchor = document.getElementById(anchorId);
    window.scrollTo({ top: anchor.offsetTop, behavior: "smooth" });
  };

  return (
    <Layout>
      <SEO
        title="CCTV Surveillance Tasmania | Kevlar Security Solutions"
        description="State-of-the-art CCTV systems with remote viewing, AI-powered analytics, and comprehensive coverage — permanently or temporarily deployed for your needs across Tasmania."
        slug="/services/cctv-surveillance"
        schema={{ "@type": "Service", "name": "CCTV Surveillance", "description": "State-of-the-art CCTV systems with remote viewing, AI-powered analytics, and comprehensive coverage — permanently or temporarily deployed for your needs across Tasmania.", "serviceType": "CCTV Surveillance and Installation Services" }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 580, display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0">
          <StaticImage
            className="!h-full !w-full !object-cover"
            src="../../assets/images/B-1.jpg"
            alt="CCTV surveillance system by Kevlar Security Solutions"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top right, rgba(0,14,23,0.9) 0%, rgba(0,35,64,0.6) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, #001a2f 100%)" }} />
        </div>
        <div className="relative z-10 w-full mx-auto max-w-screen-2xl px-4" style={{ paddingTop: 120, paddingBottom: 80 }}>
          <div className="mb-4">
            <Link
              to="/services/technical-services/"
              className="inline-flex items-center gap-2 rounded-none px-3 py-1 ring-1 ring-gray-100/40 hover:ring-gray-100/60 transition text-gray-200"
              style={{ fontSize: 13, fontWeight: 600, textDecoration: "none" }}
            >
              <ArrowLeft size={14} />
              Back To Technical Services
            </Link>
          </div>
          <h1
            className="text-white font-bold uppercase"
            style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.025em", lineHeight: 1.1, maxWidth: 760, marginBottom: 24, marginTop: 8 }}
          >
            CCTV Surveillance
          </h1>
          <p style={{ fontSize: 18, color: "#c3c9ce", lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
            State-of-the-art CCTV systems with remote viewing, AI-powered analytics, and comprehensive coverage — permanently or temporarily deployed for your needs.
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black transition text-sm font-bold"
              style={{ padding: "10px 28px" }}
            >
              Get a Free Site Assessment <ArrowRight size={16} />
            </a>
            <a
              href="#overview"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 hover:text-white transition text-sm font-bold"
              style={{ color: "#c3c9ce", padding: "10px 0" }}
            >
              View AI Capabilities <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <main style={{ background: "#03070a" }}>

        {/* ── Trust Bar ── */}
        <section style={{ background: "#001a2f", borderBottom: "1px solid rgba(195,201,206,0.1)" }}>
          <div className="mx-auto max-w-screen-xl" style={{ padding: "0 1rem" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(({ label, sub }, i) => (
                <div
                  key={label}
                  className="flex items-start gap-4"
                  style={{
                    padding: "24px 20px",
                    borderRight: i < 3 ? "1px solid rgba(195,201,206,0.1)" : "none",
                  }}
                >
                  <div style={{ width: 3, minWidth: 3, background: "#2699fb", alignSelf: "stretch", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.03em" }}>{label}</div>
                    <div style={{ fontSize: 13, color: "#c3c9ce", marginTop: 2 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Offer ── */}
        <section
          id="overview"
          style={{ background: "linear-gradient(to bottom, #001a2f, #001222)", padding: "80px 1rem", borderBottom: "1px solid rgba(195,201,206,0.08)" }}
        >
          <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
              <h2
                className="text-white font-bold uppercase"
                style={{ fontSize: "clamp(24px,3vw,38px)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 24 }}
              >
                Smart surveillance for every environment
              </h2>
              <p style={{ fontSize: 16, color: "#c3c9ce", lineHeight: 1.8, marginBottom: 36 }}>
                Modern CCTV is far more than a recording system. Our solutions incorporate AI-powered detection, remote access, and seamless integration with your existing security infrastructure to deliver genuine operational intelligence alongside traditional deterrence.
              </p>

              <div className="mb-9 space-y-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-blue-500/20 p-1">
                      <Checkmark className="h-4 w-4 text-blue-400" />
                    </div>
                    <span style={{ fontSize: 14, color: "#c3c9ce", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(195,201,206,0.12)", paddingTop: 28 }}>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      style={{ fontSize: 13, fontWeight: 700, color: "#c3c9ce", border: "1px solid rgba(195,201,206,0.2)", padding: "5px 14px", background: "rgba(0,0,0,0.3)" }}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: AI & Analytics Capabilities */}
            <div id="ai-capabilities">
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2699fb", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>AI &amp; Analytics Features</div>
              <div className="flex flex-col gap-0.5">
                {capabilities.map((cap) => (
                  <CapabilityRow key={cap.title} title={cap.title} desc={cap.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Applications ── */}
        <section style={{ background: "linear-gradient(to bottom, #03070a, #001222)", padding: "80px 1rem", borderTop: "1px solid rgba(195,201,206,0.08)" }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 12 }}
            >
              Where we deploy CCTV solutions
            </h2>
            <p style={{ fontSize: 16, color: "#c3c9ce", maxWidth: 560, marginBottom: 56 }}>
              From retail loss prevention to remote construction sites, our CCTV solutions are built for every environment and security challenge.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: 2 }}>
              {useCases.map((uc) => (
                <UseCaseCard key={uc.title} icon={uc.icon} title={uc.title} sub={uc.sub} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section style={{ background: "linear-gradient(to bottom, #001222, #03070a)", padding: "80px 1rem" }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 56 }}
            >
              How we deliver your CCTV system
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: 2 }}>
              {processSteps.map((step) => (
                <ProcessStepCard key={step.num} num={step.num} title={step.title} desc={step.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "#03070a", padding: "80px 1rem" }}>
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 12 }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 16, color: "#c3c9ce", marginBottom: 48 }}>
              Common questions about our CCTV surveillance solutions and services.
            </p>
            <div>
              {faqs.map(({ q, a }, i) => (
                <FAQItem key={i} q={q} a={a} open={!!openFaqs[i]} onToggle={() => toggleFaq(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <div id="contact" className="mx-auto max-w-7xl px-4 py-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="uppercase text-4xl font-bold tracking-tight text-white">
              See what your site is missing
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Book a free CCTV site assessment with one of our surveillance specialists.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 max-w-4xl mx-auto"
          >
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organisation"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-300">
                Phone number
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Brief description of your security needs
              </label>
              <div className="mt-1">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-400 focus:border-blue-400 border-white/30 border bg-transparent text-white"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-blue-500" : "bg-gray-700",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900",
                    )}
                    name="agreed-terms"
                    value={agreed}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-300">
                    By submitting this form, you agree to the terms outlined in our{" "}
                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      className="font-medium text-blue-400 hover:text-blue-300 underline"
                    >
                      Privacy Policy.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              {state.submitting ? (
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
                >
                  <svg className="fill-white animate-spin mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
                  </svg>{" "}
                  Submitting...
                </button>
              ) : (
                <button
                  disabled={!agreed}
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-white transition text-white bg-transparent hover:bg-white hover:text-black text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Talk to a Security Professional
                </button>
              )}
              {state.succeeded && (
                <div className="w-full mt-6 bg-gradient-to-r from-blue-900/50 to-transparent border border-blue-500/30 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Checkmark className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        Your submission has been received. We'll be in touch shortly.
                      </p>
                    </div>
                    <div className="ml-auto pl-3">
                      <div className="-mx-1.5 -my-1.5">
                        <button
                          type="button"
                          onClick={() => window.location.reload(false)}
                          className="inline-flex p-1.5 text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                        >
                          <span className="sr-only">Dismiss</span>
                          <Close className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

      </main>
    </Layout>
  );
};

export default CCTVSurveillance;
