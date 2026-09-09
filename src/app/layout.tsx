import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.scss";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "제옹",
  description:
    "제옹 - zeong - ZEONG 의 인크래프트 맵 & 커맨드 & 리소스팩을 배포하는 제옹의 공식 페이지에옹",
  icons: {
    icon: "/zeongFace.svg",
  },
  keywords: [
    "제옹",
    "ZEONG",
    "마인크래프트",
    "Minecraft",
    "커맨드",
    "리소스팩",
    "마인크래프트 유튜버",
    "마크 유튜버",
    "마크 커맨드",
    "마크 리소스팩",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-4178613876564430"
        ></meta>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
