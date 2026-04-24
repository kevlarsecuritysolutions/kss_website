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
  { label: "Biometric Authentication", sub: "Fingerprint & facial options" },
  { label: "Time-Based Access",        sub: "Zone & schedule permissions" },
  { label: "Audit & Muster Reports",   sub: "Full accountability trail" },
  { label: "Video Intercom",           sub: "Building entry solutions" },
];

const features = [
  "Granular time-based access permissions by zone, user, and day",
  "Biometric readers: fingerprint, facial recognition, and palm vein",
  "NFC and smart card credential management",
  "Full audit trails and muster reports for compliance and evacuation",
  "Video intercom and door release systems for building entry",
  "Integration with alarm, CCTV, and HR systems",
];

const brands = ["TECOM", "Integriti", "Inception", "Gallagher", "HID Global", "Suprema"];

const capabilities = [
  { title: "Smart Cards & Fobs",   desc: "RFID/NFC credentials issued to staff, contractors, and visitors with revocable access" },
  { title: "Mobile Credentials",   desc: "Bluetooth and NFC-enabled smartphone access for keyless, convenient entry" },
  { title: "Biometric Readers",    desc: "Fingerprint and facial recognition for high-security areas requiring identity verification" },
  { title: "PIN & Multi-Factor",   desc: "Combined PIN and credential entry for additional security layers" },
  { title: "Visitor Management",   desc: "Temporary credentials for contractors and visitors with automatic expiry" },
];

const keyBenefits = [
  {
    title: "Eliminate lost key risk",
    desc: "Instantly revoke a lost or stolen credential from the management software — no locks to re-key, no delay, no security gap.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="12" y1="15" x2="12" y2="17"/></svg>,
  },
  {
    title: "Automated scheduling",
    desc: "Define access hours by user group — cleaners access common areas only after hours, contractors restricted to their work zone, etc.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: "Muster & evacuation",
    desc: "Real-time reports show exactly who is on site in an emergency, with muster point confirmation for compliance and duty of care.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Full audit trails",
    desc: "Every access event is logged with timestamp, location, and credential. Exportable reports for internal investigations, HR, and compliance audits.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2699fb" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
];

const processSteps = [
  { num: "01", title: "Security Audit",              desc: "We map all entry points, internal zones, and user groups to understand exactly who needs access to what, and when. Existing infrastructure is assessed for integration potential." },
  { num: "02", title: "System Design",               desc: "We produce a detailed system design specifying controller locations, reader types, door hardware, credential technology, and software configuration." },
  { num: "03", title: "Installation & Commissioning", desc: "Our technicians install all hardware, configure the management software, set up user groups, permissions, and schedules, and test every door and credential." },
  { num: "04", title: "Administrator Training",      desc: "We train your nominated system administrators on day-to-day management: adding/removing users, running reports, adjusting permissions, and handling credential loss." },
  { num: "05", title: "Credential Rollout",          desc: "We assist with issuing credentials to all staff and setting initial permission groups, ensuring a smooth transition from your previous access arrangements." },
];

const faqs = [
  {
    q: "What's the difference between access control and a standard door lock?",
    a: "A standard lock uses a physical key that can be copied, lost, or handed on without your knowledge. An electronic access control system uses programmable credentials — cards, fobs, biometrics, or mobile phones — that can be instantly revoked, scheduled, restricted to specific areas, and audited. You always know exactly who entered, where, and when.",
  },
  {
    q: "Can access control integrate with our CCTV and alarm system?",
    a: "Yes. We specialise in integrated security systems where access, alarms, and CCTV work together. For example, an access event at a door can automatically call up the associated camera view, or a forced door alarm can trigger a local siren and send an alert to your monitoring platform.",
  },
  {
    q: "What happens in a power outage — are doors locked or unlocked?",
    a: "Door hardware is specified based on your fail-safe or fail-secure requirements. Fire exits must fail-safe (unlock on power loss) for life safety compliance. Secure areas can be fail-secure (remain locked). Battery backup ensures the system continues to log access events and maintain control during brief outages.",
  },
  {
    q: "Can contractors and visitors be managed through the system?",
    a: "Yes. We configure visitor management workflows that issue temporary credentials valid only for specific dates, times, and areas. Credentials expire automatically, ensuring contractors and visitors cannot retain access after their engagement ends.",
  },
  {
    q: "Is biometric data stored securely?",
    a: "Modern biometric readers store only an encrypted mathematical template derived from the biometric — not an image. This template cannot be reverse-engineered into the original biometric data. Storage is on the reader device itself or encrypted on the access control server, never in an open database.",
  },
  {
    q: "How do muster reports work?",
    a: "Muster reports are generated in real time from the access control system, showing every person currently on site based on their last access event. In an emergency, a supervisor can pull this report instantly to account for all staff and direct emergency services accordingly.",
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

function BenefitCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(38,153,251,0.07)" : "rgba(0,0,0,0.25)",
        border: "1px solid rgba(195,201,206,0.1)",
        padding: "32px 28px",
        transition: "all 150ms",
      }}
    >
      <div style={{ marginBottom: 16 }}>{icon}</div>
      <div style={{ width: 32, height: 1, background: "linear-gradient(to right, #17415c, #646464, #003d64)", marginBottom: 16 }} />
      <div style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", color: "white", letterSpacing: "0.04em", marginBottom: 10 }}>{title}</div>
      <p style={{ fontSize: 13, color: "#c3c9ce", lineHeight: 1.7 }}>{desc}</p>
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

const AccessControl = () => {
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
        title="Electronic Access Control Systems Tasmania | Kevlar Security"
        description="Intelligent entry management systems with time-based permissions, biometric authentication, audit reporting, and seamless integration with your broader security setup."
        slug="/services/access-control"
        schema={{ "@type": "Service", "name": "Electronic Access Control", "description": "Intelligent entry management systems with time-based permissions, biometric authentication, audit reporting, and seamless integration with your broader security setup.", "serviceType": "Electronic Access Control Services" }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 580, display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0">
          <StaticImage
            className="!h-full !w-full !object-cover"
            src="../../assets/images/D-3.jpg"
            alt="Electronic access control system by Kevlar Security Solutions"
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
            Electronic Access Control
          </h1>
          <p style={{ fontSize: 18, color: "#c3c9ce", lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
            Intelligent entry management systems with time-based permissions, biometric authentication, audit reporting, and seamless integration with your broader security setup.
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black transition text-sm font-bold"
              style={{ padding: "10px 28px" }}
            >
              Get a Free Consultation <ArrowRight size={16} />
            </a>
            <a
              href="#overview"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2 hover:text-white transition text-sm font-bold"
              style={{ color: "#c3c9ce", padding: "10px 0" }}
            >
              Explore System Options <ArrowRight size={16} />
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
                Control who enters, where, and when
              </h2>
              <p style={{ fontSize: 16, color: "#c3c9ce", lineHeight: 1.8, marginBottom: 36 }}>
                Access control systems are a critical component of any business security strategy — managing not just entry, but internal movement, shift accountability, and emergency evacuation. We install and maintain systems from TECOM, Integriti, and Inception, designed and configured specifically for your environment.
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

            {/* Right: Credential & Control Options */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2699fb", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Credential &amp; Control Options</div>
              <div className="flex flex-col gap-0.5">
                {capabilities.map((cap) => (
                  <CapabilityRow key={cap.title} title={cap.title} desc={cap.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Benefits ── */}
        <section style={{ background: "linear-gradient(to bottom, #03070a, #001222)", padding: "80px 1rem", borderTop: "1px solid rgba(195,201,206,0.08)" }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ width: 48, height: 4, background: "white", marginBottom: 16 }} />
            <h2
              className="text-white font-bold uppercase"
              style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.02em", marginBottom: 56 }}
            >
              More than just a locked door
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
              {keyBenefits.map((b) => (
                <BenefitCard key={b.title} icon={b.icon} title={b.title} desc={b.desc} />
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
              Delivering your access control system
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
              Common questions about electronic access control systems and installation.
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
              Take control of who enters your premises
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Talk to a Kevlar access control specialist about the right system for your business.
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

export default AccessControl;
