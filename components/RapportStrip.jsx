// Charysh Investors Site — Repeating ornament strip (rapport).
function RapportStrip({ variant = 1, tone = 'redOnWhite', height = 56 }) {
  const palette = {
    redOnWhite:  { bg: '#fff', fg: '#87000d' },
    whiteOnRed:  { bg: '#87000d', fg: '#fff' },
    goldOnBlack: { bg: '#0b0b0b', fg: '#b48a3c' },
    inkOnCream:  { bg: '#f6f1e7', fg: '#0b0b0b' },
  }[tone];
  const id = `rs-${variant}-${tone}-${Math.random().toString(36).slice(2,7)}`;
  const h = height, h2 = h / 2;
  let pattern;
  if (variant === 1) {
    pattern = (
      <pattern id={id} x="0" y="0" width="56" height={h} patternUnits="userSpaceOnUse">
        <g fill={palette.fg}>
          <path d={`M28 ${h2-20} L48 ${h2} L28 ${h2+20} L8 ${h2} Z`} />
          <path d={`M28 ${h2-12} L40 ${h2} L28 ${h2+12} L16 ${h2} Z`} fill={palette.bg} />
          <rect x="26" y={h2-6} width="4" height="12"/>
          <rect x="22" y={h2-2} width="12" height="4"/>
        </g>
      </pattern>
    );
  } else if (variant === 2) {
    pattern = (
      <pattern id={id} x="0" y="0" width="40" height={h} patternUnits="userSpaceOnUse">
        <g fill={palette.fg}>
          <path d={`M0 ${h2-16} L20 ${h2} L0 ${h2+16} Z`} />
          <path d={`M40 ${h2-16} L20 ${h2} L40 ${h2+16} Z`} />
          <rect x="18" y={h2-22} width="4" height="6"/>
          <rect x="18" y={h2+16} width="4" height="6"/>
        </g>
      </pattern>
    );
  } else {
    pattern = (
      <pattern id={id} x="0" y="0" width="50" height={h} patternUnits="userSpaceOnUse">
        <g fill="none" stroke={palette.fg} strokeWidth="2">
          <path d={`M25 ${h2-20} V${h2+20} M5 ${h2} H45`} />
          <path d={`M25 ${h2-20} L21 ${h2-24} M25 ${h2-20} L29 ${h2-24}`} />
          <path d={`M25 ${h2+20} L21 ${h2+24} M25 ${h2+20} L29 ${h2+24}`} />
        </g>
        <circle cx="25" cy={h2} r="2.5" fill={palette.fg} />
      </pattern>
    );
  }
  return (
    <div className="rapport" style={{ background: palette.bg, height: h }}>
      <svg width="100%" height={h} preserveAspectRatio="xMidYMid slice">
        <defs>{pattern}</defs>
        <rect width="100%" height={h} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
window.RapportStrip = RapportStrip;
