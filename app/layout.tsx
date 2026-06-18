import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/uiCommom/header/header";
import Footer from "@/components/uiCommom/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextefirebase.vercel.app"),

  title: {
    default: "PurrfectCare | Clínica Especializada em Cuidados Felinos",
    template: "%s | PurrfectCare",
  },

  description:
    "A PurrfectCare é uma clínica especializada em saúde e bem-estar felino. Consultas, vacinação, exames, internação e atendimento dedicado exclusivamente para gatos.",

  keywords: [
    "clínica felina",
    "veterinário para gatos",
    "cuidados felinos",
    "saúde felina",
    "consulta veterinária gatos",
    "vacinação gatos",
    "hospital felino",
    "bem-estar felino",
    "gatos",
    "veterinário especializado em gatos",
  ],

  authors: [
    {
      name: "PurrfectCare",
    },
  ],

  creator: "PurrfectCare",
  publisher: "PurrfectCare",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nextefirebase.vercel.app",
    siteName: "PurrfectCare",
    title: "PurrfectCare | Clínica Especializada em Cuidados Felinos",
    description:
      "Atendimento veterinário especializado para gatos. Consultas, exames, vacinação e cuidados completos para a saúde do seu felino.",
    images: [
      {
        url: "/images/imagem.png",
        width: 1200,
        height: 630,
        alt: "PurrfectCare - Clínica Especializada em Cuidados Felinos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PurrfectCare | Clínica Especializada em Cuidados Felinos",
    description:
      "Atendimento veterinário especializado para gatos com foco em saúde, conforto e bem-estar.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Veterinária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="min-h-screen flex flex-col justify-between">
        <Header />

        <main className="grow w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}