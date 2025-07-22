import "./globals.css"; 
import type { Metadata } from 'next';
import RootLayoutContent from './root-layout-content'; 
export const metadata: Metadata = {
  title: "Lux Defenders | Cybersecurity Services",
  description: "Lux Defenders is a leading cybersecurity company offering comprehensive cybersecurity services to protect your digital assets.",
  keywords: ["cybersecurity", "cyber security services", "data protection", "network security", "threat intelligence", "Lux Defenders"],
  openGraph: {
    title: "Lux Defenders | Cybersecurity Services",
    description: "Lux Defenders is a leading cybersecurity company offering comprehensive cybersecurity services to protect your digital assets.",
    url: "https://www.luxdefenders.com", 
    siteName: "Lux Defenders",
    images: [
      {
        url: "https://www.luxdefenders.com/lux-defenders-logo.png", 
        width: 800,
        height: 600,
        alt: "Lux Defenders Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LuxDefenders",
    creator: "@LuxDefenders",
    title: "Lux Defenders | Cybersecurity Services",
    description: "Lux Defenders is a leading cybersecurity company offering comprehensive cybersecurity services to protect your digital assets.",
    images: ["https://www.luxdefenders.com/lux-defenders-logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
            <RootLayoutContent>
          {children}
        </RootLayoutContent>
      </body>
    </html>
  );
}