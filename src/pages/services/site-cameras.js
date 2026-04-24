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
  { label: "Solar Powered",      sub: "No mains power required" },
  { label: "Fully Wireless",     sub: "4G/LTE connectivity" },
  { label: "Relocatable",        sub: "Deploy anywhere, anytime" },
  { label: "Remote Monitoring",  sub: "24/7 live view & alerts" },
];

const features = [
  "Rapid deployment — operational within hours of arrival on site",
  "Solar and battery powered for complete infrastructure independence",
  "4G/LTE connectivity for live remote viewing from anywhere",
  "AI analytics: people counting, vehicle detection, perimeter alerts",
  "Facial recognition and licence plate detection options",
  "Easy relocation as site requirements change",
];

const brands = ["Hikvision", "Dahua", "Axis", "Hanwha Wisenet", "Avigilon", "IDIS"];

const capabilities = [
  { title: "Solar Panel Array",         desc: "High-efficiency panels sized to maintain full operation through cloudy conditions and seasonal variation in Tasmania" },
  { title: "Battery Backup",            desc: "Multi-day autonomous operation without solar input, ensuring no gap in coverage" },
  { title: "Adjustable Pole Height",    desc: "Camera height optimised per site to maximise coverage and reduce blind spots" },
  { title: "Tamper-Resistant Enclosure", desc: "IP66-rated housing with anti-tamper mounting for outdoor durability" },
  { title: "Dual Camera Options",       desc: "Wide-angle overview camera plus PTZ or fixed zoom for detail capture on a single pole" },
];

const useCases = [
  {
    title: "Construction Sites", sub: "Theft, vandalism & safety monitoring",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg>,
  },
  {
    title: "Events & Festivals", sub: "Crowd safety & security",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Remote Properties", sub: "Farms & rural sites",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    title: "Temporary Worksites", sub: "Infrastructure projects",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    title: "Car Parks", sub: "Licence plate recognition & incident coverage",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    title: "Public Spaces", sub: "Parks & recreational areas",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M17 8C8 10 5.9 16.17 3.82 20H19V8z"/><path d="M9.5 9.5c1-1.5 3-3.5 6.5-4"/></svg>,
  },
];

const processSteps = [
  { num: "01", title: "Site Brief & Coverage Planning", desc: "We discuss your specific risk areas, operational hours, remote access needs, and budget. A coverage plan is produced showing pole positions and camera fields of view." },
  { num: "02", title: "Equipment Configuration",        desc: "Cameras, solar panels, batteries, and 4G modems are configured and tested at our workshop before delivery — minimising on-site setup time." },
  { num: "03", title: "On-Site Deployment",             desc: "Our technicians deploy and position all units, optimise camera angles, confirm 4G connectivity, and verify remote access is operational before leaving site." },
  { num: "04", title: "Remote Access Setup",            desc: "You receive access to live feeds and recorded footage via mobile app. Alert rules for motion, perimeter intrusion, and AI events are configured to your requirements." },
  { num: "05", title: "Redeployment or Decommission",   desc: "When your site requirements change, we relocate units to new positions or recover them at the end of a project — footage is retained or exported as required." },
];

const faqs = [
  {
    q: "How long does it take to deploy a site camera system?",
    a: "For most deployments we can have units on site and operational within 24–72 hours of order confirmation. Because units are pre-configured in our workshop, on-site installation is typically completed within a few hours per pole. Contact us as early as possible to discuss your timeline.",
  },
  {
    q: "What happens at night or on cloudy days?",
    a: "Our units are specified with battery capacity to provide multiple days of autonomous operation without solar input. Cameras include IR or thermal imaging for 24/7 low-light and night-time coverage. For extended periods of reduced solar generation in Tasmania's winter months, battery size is scaled accordingly during the design phase.",
  },
  {
    q: "Can the cameras be monitored 24/7?",
    a: "Yes. Site camera systems can be connected to our ASIAL A Grade monitoring centre for professional 24/7 monitoring with alarm response. Alternatively, AI-triggered alerts can be sent directly to nominated contacts via mobile app for self-managed monitoring.",
  },
  {
    q: "What connectivity do you use and what if 4G signal is poor?",
    a: "We use 4G LTE SIM cards with multi-network failover to maximise connectivity in regional and remote Tasmania. For sites with very poor cellular coverage, we can assess options including directional antennas, satellite connectivity, or point-to-point wireless links back to a connected location.",
  },
  {
    q: "Can I hire site cameras for a short-term project?",
    a: "Yes, we provide both short-term hire and longer-term managed deployments. Minimum hire periods and pricing depend on the number of units and duration. Contact us with your project dates and we can provide a quote.",
  },
  {
    q: "What happens to footage when units are recovered?",
    a: "On-device footage is retained until overwritten by new recordings. If you need to preserve footage from a project — for example, for an insurance claim or incident investigation — we can export recordings prior to recovery. Cloud backup options are also available throughout the deployment period.",
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
        display: "grid", gridTemplateColumns: "180px 1fr",
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

const SiteCameras = () => {
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
        title="Site Cameras & CCTV Poles Tasmania | Kevlar Security Solutions"
        description="Solar-powered and wireless surveillance solutions for remote sites, construction projects, events, and locations where fixed infrastructure isn't available or practical."
        slug="/services/site-cameras"
        schema={{ "@type": "Service", "name": "Site Cameras & CCTV Poles", "description": "Solar-powered and wireless surveillance solutions for remote sites, construction projects, events, and locations where fixed infrastructure isn't available or practical.", "serviceType": "Solar-Powered Site Camera and CCTV Pole Deployment Services" }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 580, display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0">
          <StaticImage
            className="!h-full !w-full !object-cover"
            src="../../assets/images/D-1.jpg"
            alt="Site camera and CCTV pole by Kevlar Security Solutions"
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
            Site Cameras &amp; CCTV Poles
          </h1>
          <p style={{ fontSize: 18, color: "#c3c9ce", lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
            Solar-powered and wireless surveillance solutions for remote sites, construction projects, events, and locations where fixed infrastructure isn't available or practical.
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black transition text-sm font-bold"
              style={{ padding: "10px 28px" }}
            >
              Get a Site Camera Quote <ArrowRight size={16} />
            </a>
            <a
              href="#overview"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 hover:text-white transition text-sm font-bold"
              style={{ color: "#c3c9ce", padding: "10px 0" }}
            >
              View Deployment Options <ArrowRight size={16} />
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
                Surveillance that goes wherever you need it
              </h2>
              <p style={{ fontSize: 16, color: "#c3c9ce", lineHeight: 1.8, marginBottom: 36 }}>
                Our site camera solutions are built for the environments that traditional fixed CCTV can't reach. Self-contained solar and wireless units on purpose-built CCTV poles deliver professional-grade surveillance with AI analytics, remote viewing, and rapid deployment — no trenching, no mains power, no problem.
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

            {/* Right: Pole & Unit Specifications */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2699fb", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Pole &amp; Unit Specifications</div>
              <div className="flex flex-col gap-0.5">
                {capabilities.map((cap) => (
                  <CapabilityRow key={cap.title} title={cap.title} desc={cap.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Common Deployments ── */}
        <section style={{ background: "linear-gradient(to bottom, #03070a, #001222)", padding: "80px 1rem", borderTop: "1px solid rgba(195,201,206,0.08)" }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 12 }}
            >
              Where site cameras get deployed
            </h2>
            <p style={{ fontSize: 16, color: "#c3c9ce", maxWidth: 560, marginBottom: 56 }}>
              From construction sites to public events, our solar and wireless camera systems deliver professional surveillance wherever you need it.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: 2 }}>
              {useCases.map((uc) => (
                <UseCaseCard key={uc.title} icon={uc.icon} title={uc.title} sub={uc.sub} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Deployment Process ── */}
        <section style={{ background: "linear-gradient(to bottom, #001222, #03070a)", padding: "80px 1rem" }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 56 }}
            >
              From brief to operational in days
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
              Common questions about our site camera and CCTV pole solutions.
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
              Need surveillance where the wires don't reach?
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Get a quote for solar and wireless site camera deployment anywhere in Tasmania.
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

export default SiteCameras;
