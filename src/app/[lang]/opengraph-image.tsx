import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { meta, site } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export const alt = "Clément Dubosq";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : "en";
  const [anton, photo] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/anton-latin-400-normal.woff")),
    readFile(join(process.cwd(), "public/img/clement-cyano.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1F3FD8", color: "#F2F1EC", fontFamily: "Anton" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 0 0 64px", width: 760 }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 1, textTransform: "uppercase" }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 118, lineHeight: 0.92, textTransform: "uppercase" }}>{meta.ogLine[lang]}</div>
          <div style={{ display: "flex", marginBottom: 56 }}>
            <div style={{ display: "flex", background: "#F2F1EC", color: "#0E0E10", border: "3px solid #0E0E10", padding: "10px 18px", fontSize: 26, textTransform: "uppercase" }}>
              {site.status[lang]}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <img src={photoSrc} width={340} height={425} alt="" style={{ border: "12px solid #fff", transform: "rotate(-3deg)", objectFit: "cover" }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }] },
  );
}
