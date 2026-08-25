import "./globals.css";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import Backdrop from "@/components/three/Backdrop";
import { profile } from "@/data/profile";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const SITE = "https://usrjosephc.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    url: SITE,
    siteName: profile.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    images: ["/preview.png"],
  },
};

export const viewport = {
  themeColor: "#08080d",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
