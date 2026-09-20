"use client";



const Content = () => (
  <span className="inline-flex items-center gap-0 whitespace-nowrap">
    <span className="text-white/40"></span>
    <span className="text-white/40"></span>
    <span className="inline-flex items-center gap-2 px-6">
      {/* <FaFire className="text-red-200" /> */}
      <span>Special discount on RA Registration </span>
    </span>
    <span className="text-white/40"></span>
    <span className="text-white/40"></span>
    <span className="inline-flex items-center gap-2 px-6">
      {/* <FaFire className="text-red-200" /> */}
      <span> Premium Accounting Services</span>
    </span>

    <span className="text-white/40"></span>
    <span className="text-white/40"></span>
    <span className="inline-flex items-center gap-2 px-6">
      {/* <FaStar className="text-orange-100" /> */}
      <span>Contact us @ 9643862867 </span>
    </span>
    <span className="text-white/40"></span>
    <span className="text-white/40 px-6"></span>
    <span>RA Licence</span>
  </span>
);

export default function AnnouncementBar() {
  return (
    <div
      className="w-full relative"
      style={{ height: "40px", overflow: "hidden" }}
      aria-label="Promotional announcement"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E4E8C] via-[#2560aa] to-[#163665]" />

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          animation: "shimmer-sweep 3s ease-in-out infinite",
        }}
      />

      {/* Marquee track */}
      <div
        className="relative flex items-center h-full text-white font-semibold text-sm"
        style={{ overflow: "hidden" }}
      >
        {/* The track is inline-flex so it sizes to content, not the container */}
        <div
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "marquee-full-screen 15s linear infinite",
          }}
        >
          {/* Single copy that sweeps across the entire screen */}
          <Content />
        </div>
      </div>
    </div>
  );
}
