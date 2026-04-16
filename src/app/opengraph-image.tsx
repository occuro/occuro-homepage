import { ImageResponse } from 'next/og';

// Rendered at build time (no request-time APIs used) and cached by Next.
// Every page inherits this OG image because it lives at the root of
// app/ — no per-page override needed for the landing site.

export const alt = 'occuro — Entdecke Events. Verbinde dich. Teile Momente.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Google Fonts helper: pull the woff2 URL out of the CSS2 endpoint,
// then fetch the binary. Gives Satori a real font to work with instead
// of its fallback Noto Sans.
async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&text=${encodeURIComponent(text)}`;
  try {
    const css = await fetch(url, {
      // Satori requires TTF, and the CSS2 endpoint returns woff2 by
      // default for modern user-agents. Spoofing an older UA gets us
      // the TTF source it supports.
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bot)' },
    }).then((r) => r.text());
    const srcMatch = css.match(/src:\s*url\(([^)]+)\)\s*format\('(truetype|opentype)'\)/);
    const fontUrl = srcMatch?.[1] ?? css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!fontUrl) return null;
    const clean = fontUrl.replace(/^['"]|['"]$/g, '');
    const res = await fetch(clean);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const wordmarkText = 'occuro';
  const taglineText = 'Entdecke Events. Verbinde dich. Teile Momente.';
  const hostText = 'occuroapp.com';

  const [outfitBold, poppinsRegular, poppinsMedium] = await Promise.all([
    loadGoogleFont('Outfit', 700, wordmarkText),
    loadGoogleFont('Poppins', 400, taglineText),
    loadGoogleFont('Poppins', 500, hostText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0B',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Outfit',
        }}
      >
        {/* Subtle violet glow, top-right — echoes the site's brand
            gradient without competing with the wordmark. */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            right: -260,
            width: 900,
            height: 900,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(124,58,237,0.38) 0%, rgba(124,58,237,0) 70%)',
          }}
        />
        {/* Secondary cool glow, bottom-left, for depth. */}
        <div
          style={{
            position: 'absolute',
            bottom: -320,
            left: -220,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0) 70%)',
          }}
        />
        {/* Faint grid lines — nod to the interactive grid on the site. */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: 220,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          {wordmarkText}
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'Poppins',
            fontWeight: 400,
            letterSpacing: '-0.005em',
            display: 'flex',
          }}
        >
          {taglineText}
        </div>

        {/* Host tag bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            right: 56,
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'Poppins',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          {hostText}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(outfitBold
          ? [{ name: 'Outfit', data: outfitBold, style: 'normal' as const, weight: 700 as const }]
          : []),
        ...(poppinsRegular
          ? [{ name: 'Poppins', data: poppinsRegular, style: 'normal' as const, weight: 400 as const }]
          : []),
        ...(poppinsMedium
          ? [{ name: 'Poppins', data: poppinsMedium, style: 'normal' as const, weight: 500 as const }]
          : []),
      ],
    },
  );
}
