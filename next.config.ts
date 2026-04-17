import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Apple App Site Association (AASA) — required for the iOS app's
  // Universal Links AND Strong-Password / Shared Web Credentials
  // integration. Apple is strict about two things:
  //   1. The file MUST be served as application/json (not text/plain).
  //   2. The path MUST be exactly /.well-known/apple-app-site-association
  //      with NO file extension. We keep the file in `public/.well-known/`
  //      and override its Content-Type via this header rule. Headers are
  //      checked before the filesystem so this matches the static file.
  // Apple's CDN does not follow redirects when fetching the AASA, so this
  // must work on whichever apex/www host iOS resolves first.
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
