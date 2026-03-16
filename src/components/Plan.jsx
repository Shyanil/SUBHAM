import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = {
  blackish: "#041a14",
  vibrantOrange: "#F36F21",
  goldenYellow: "#F4B400",
  darkOrange: "#D64B27",
  deepOrange: "#D84315",
  warmCream: "#FFF4E6",
};

// ── Generate SVG floor plans (replace src with real image URLs if needed) ──
function generateFloorPlan(seed) {
  const variants = [
    [
      [20, 20, 200, 100, "Living", 1],
      [20, 130, 95, 80, "Bed 1", 2],
      [125, 130, 95, 80, "Bed 2", 2],
      [20, 220, 95, 60, "Kitchen", 3],
      [125, 220, 95, 60, "Bath", 4],
    ],
    [
      [20, 20, 90, 80, "Master", 2],
      [120, 20, 100, 80, "Living", 1],
      [20, 110, 200, 60, "Kitchen+Dining", 3],
      [20, 180, 90, 60, "Bath", 4],
      [120, 180, 100, 60, "Study", 5],
    ],
    [
      [20, 20, 200, 70, "Open Living", 1],
      [20, 100, 60, 140, "Bath", 4],
      [90, 100, 130, 70, "Bed 1", 2],
      [90, 180, 130, 60, "Bed 2", 2],
    ],
    [
      [20, 20, 100, 200, "Living", 1],
      [130, 20, 90, 80, "Kitchen", 3],
      [130, 110, 90, 60, "Bed", 2],
      [130, 180, 90, 40, "Bath", 4],
    ],
  ];
  const fills = ["", "#fff8f2", "#eef5ff", "#e8f9f0", "#f5f0ff", "#fffbe8"];
  const dims = ["240x180cm", "320x240cm", "280x200cm", "360x260cm"];
  const v = variants[seed % 4];
  const paths = v
    .map(
      ([x, y, w, h, lbl, type]) =>
        `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${fills[type] || "#f9f9f9"}" stroke="#c8a87a" stroke-width="1.5"/>` +
        (lbl
          ? `<text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" fill="#8a6a40" font-size="9" font-family="sans-serif" font-weight="500">${lbl}</text>`
          : "")
    )
    .join("\n");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="260" fill="#fdf6ed"/>
      <rect x="10" y="10" width="260" height="240" rx="4" fill="none" stroke="#d4a96a" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
      ${paths}
      <text x="140" y="253" text-anchor="middle" fill="#b08030" font-size="8" font-family="sans-serif" opacity="0.7">Plan ${String(seed + 1).padStart(2, "0")} · ${dims[seed % 4]}</text>
    </svg>`
  )}`;
}
const PLANS = [
  { id: 1, name: "BLOCK-A", tag: "2BHK", src: "/BLOCK-A.jpg" },
  { id: 2, name: "BLOCK-A ", tag: "UNIT B", src: "/BLOCK-A UNIT B.jpg" },
  { id: 3, name: "BLOCK A", tag: "UNIT B TYPE 1", src: "/BLOCK A UNIT B TYPE 1.jpg" },
  { id: 4, name: "BLOCK A  ", tag: "UNIT 1 TYPE 2", src: "/BLOCK A UNIT 1 TYPE 2.jpg" },
  
  { id: 5, name: "BLOCK A ", tag: "UNIT B TYPE 3", src: "/BLOCK A TYPE 3.jpg" },
  { id: 6, name: "BLOCK A ", tag: "UNIT B LOWER FLOOR", src: "/BLOCK A 13TH FLOOR.jpg" },
  { id: 7, name: "BLOCK A ", tag: "UNIT B UPPER FLOOR", src: "/BLOCK A 14TH FLOOR.jpg" },
  { id: 8, name: "BLOCK B ", tag: "UNIT C", src: "/BLOCK B UNIT C.jpg" },
  { id: 9, name: "BLOCK B ", tag: "UNIT D TYPE 1", src: "/BLOCK B UNIT D.jpg" },
  { id: 10, name: "BLOCK B ", tag: "UNIT D TYPE 2", src: "/BLOCK B UNIT 2 TYPE 2.jpg" },
  
  { id: 11, name: "BLOCK B", tag: "UNIT E", src: "/BLOCK B UNIT E.jpg" },
  { id: 12, name: "BLOCK B ", tag: "UNIT F LOWER FLOOR", src: "/BLOCK B UNIT F.jpg" },
  { id: 13, name: "BLOCK B ", tag: "UNIT F UPPER FLOOR", src: "/BLOCK B UNIT F UPPER FLOOR.jpg" },
  { id: 14, name: "BLOCK B ", tag: "UNIT G LOWER FLOOR", src: "/BLOCK B UNIT G.jpg" },
  { id: 15, name: "BLOCK B ", tag: "UNIT G UPPER FLOOR", src: "/BLOCK B UNIT G UPPER FLOOR.jpg" },
  { id: 16, name: "BLOCK B", tag: "UNIT H LOWER FLOOR", src: "/BLOCK B UNIT H LOWER FLOOR.jpg" },
  { id: 17, name: "BLOCK B", tag: "UNIT H UPPER FLOOR", src: "/BLOCK H UPPER FLOOR.jpg" },
];
// const PLANS = Array.from({ length: 16 }, (_, i) => ({
//   id: i + 1,
//   name: `Layout Plan ${String(i + 1).padStart(2, "0")}`,
//   tag: ["2BHK", "3BHK", "Villa", "Duplex", "Studio", "Penthouse", "4BHK", "Cottage"][i % 8],
//   src: "/BLOCK-A.jpg", // 🔁 Replace with: src: "/images/plan-01.jpg"
// }));

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({ plan, onClose, onPrev, onNext, total }) {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: "rgba(4,26,20,0.88)", backdropFilter: "blur(6px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="flex flex-col rounded-2xl overflow-hidden w-full max-w-2xl"
          style={{ background: "#fff", maxHeight: "90vh", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b"
            style={{ background: colors.warmCream, borderColor: "rgba(4,26,20,0.08)" }}
          >
            <span className="text-sm font-medium" style={{ color: colors.blackish }}>
              {plan.name} ·{" "}
              <span className="text-xs" style={{ color: "#b08030" }}>
                {plan.tag}
              </span>
            </span>
            <div className="flex items-center gap-2">
              <CtrlBtn onClick={zoomOut}>−</CtrlBtn>
              <button
                onClick={resetZoom}
                className="text-xs font-medium px-3 py-1 rounded-lg border transition-colors"
                style={{ borderColor: "rgba(4,26,20,0.12)", color: "rgba(4,26,20,0.5)" }}
              >
                {Math.round(zoom * 100)}%
              </button>
              <CtrlBtn onClick={zoomIn}>+</CtrlBtn>
              <div className="w-px h-5 mx-1" style={{ background: "rgba(4,26,20,0.1)" }} />
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-colors"
                style={{
                  border: `1.5px solid rgba(216,67,21,0.3)`,
                  background: "rgba(216,67,21,0.06)",
                  color: colors.deepOrange,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className="flex-1 overflow-auto flex items-center justify-center p-6"
            style={{ background: "#f5ece0", minHeight: 360 }}
          >
            <img
              src={plan.src}
              alt={plan.name}
              style={{
                maxWidth: "100%",
                maxHeight: "55vh",
                objectFit: "contain",
                borderRadius: 8,
                transform: `scale(${zoom})`,
                transformOrigin: "center",
                transition: "transform 0.25s ease",
                cursor: zoom > 1 ? "zoom-out" : "zoom-in",
              }}
              onClick={() => (zoom < 2 ? zoomIn() : resetZoom())}
            />
          </div>

          {/* Footer Nav */}
          <div
            className="flex items-center justify-center gap-3 px-5 py-3 border-t"
            style={{ background: colors.warmCream, borderColor: "rgba(4,26,20,0.08)" }}
          >
            <NavBtn onClick={onPrev}>← Prev</NavBtn>
            <span className="text-xs" style={{ color: "rgba(4,26,20,0.4)", padding: "0 12px" }}>
              {plan.id} / {total}
            </span>
            <NavBtn onClick={onNext}>Next →</NavBtn>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CtrlBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-colors"
      style={{ border: "1.5px solid rgba(4,26,20,0.12)", background: "#fff", color: colors.blackish }}
    >
      {children}
    </button>
  );
}

function NavBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-colors"
      style={{ border: "1.5px solid rgba(4,26,20,0.12)", background: "#fff", color: colors.blackish }}
    >
      {children}
    </button>
  );
}

// ── Plan Card ──────────────────────────────────────────────────────────────
function PlanCard({ plan, index, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 0.68, 0, 1.2] }}
      whileHover={{ scale: 1.035, y: -4 }}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "#fff",
        border: "1.5px solid rgba(4,26,20,0.07)",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={plan.src}
          alt={plan.name}
          className="w-full block"
          style={{ aspectRatio: "4/3", objectFit: "contain", background: "#f8f0e6", padding: 8 }}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          style={{ background: "rgba(4,26,20,0.45)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: colors.vibrantOrange, boxShadow: "0 4px 20px rgba(243,111,33,0.5)" }}
            initial={{ scale: 0.6, rotate: -15 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderTop: "1px solid rgba(4,26,20,0.06)" }}
      >
        <span className="text-sm font-medium" style={{ color: colors.blackish }}>
          {plan.name}
        </span>
        <span
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: "rgba(244,180,0,0.12)", color: "#a07800" }}
        >
          {plan.tag}
        </span>
      </div>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function PlanningSection() {
  const [active, setActive] = useState(null);

  const activePlan = active ? PLANS.find((p) => p.id === active) : null;
  const prev = () => setActive((a) => (a === 1 ? PLANS.length : a - 1));
  const next = () => setActive((a) => (a === PLANS.length ? 1 : a + 1));

  return (
    <section
    id="plan"
     style={{ background: colors.warmCream, padding: "80px 24px 100px" }}>
      {/* Section Header */}
      <div className="text-center mb-16">
        {/* <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          style={{
            color: colors.vibrantOrange,
            background: "rgba(243,111,33,0.08)",
            border: "1px solid rgba(243,111,33,0.25)",
            letterSpacing: "0.2em",
          }}
        >
          Floor Plans &amp; Layouts
        </motion.span> */}
        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4" style={{ color: colors.darkOrange }}>
            Floor Plans &amp; Layouts
          </p>

        {/* <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 54px)",
            fontWeight: 700,
            color: colors.blackish,
            lineHeight: 1.12,
            maxWidth: 640,
          }}
        >
          Explore Our{" "}
          <span style={{ color: colors.vibrantOrange }}>Planning Designs</span>
        </motion.h2> */}
        <h2 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.85] text-[#041a14] mb-12">
            Explore Our <br />
            <span className="italic font-light" style={{ color: colors.darkOrange }}>Planning Designs</span>
          </h2>

        {/* <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="mx-auto"
          style={{
            fontSize: 15,
            color: "rgba(4,26,20,0.55)",
            maxWidth: 480,
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Browse our curated collection of thoughtfully crafted floor plans —
          designed for modern living, comfort, and elegance.
        </motion.p> */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
  <p 
    className="text-lg md:text-xl font-medium leading-relaxed"
    style={{ color: colors.blackish }}
  >
    Browse our curated collection of thoughtfully crafted floor plans —
    designed for modern living, comfort, and elegance.
  </p>
</div>
        

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 rounded-full"
          style={{
            width: 60,
            height: 3,
            background: `linear-gradient(90deg, ${colors.vibrantOrange}, ${colors.goldenYellow})`,
            transformOrigin: "left",
          }}
        />

        <p className="mt-4 text-xs" style={{ color: "rgba(4,26,20,0.4)" }}>
          ● {PLANS.length} layouts available ●
        </p>
      </div>

      {/* Grid */}
      <div
        className="mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          maxWidth: 1280,
        }}
      >
        {PLANS.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} onClick={() => setActive(plan.id)} />
        ))}
      </div>

      {/* Modal */}
      {activePlan && (
        <Modal
          plan={activePlan}
          onClose={() => setActive(null)}
          onPrev={prev}
          onNext={next}
          total={PLANS.length}
        />
      )}

      {/* Responsive styles */}
      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
        @media (max-width: 1024px) {
          section > div:last-of-type { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          section > div:last-of-type { grid-template-columns: 1fr !important; }
          section { padding: 48px 16px 64px !important; }
        }
      `}</style>
    </section>
  );
}