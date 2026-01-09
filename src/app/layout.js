
import "./globals.css";

export const metadata = {
  title: {
    default: "Khudi Institute | Alternative School & Homeschool Resource Center",
    template: "%s | Khudi Institute",
  },
  description: "Khudi Institute is an alternative school and resource center for homeschoolers, focused on the holistic development of each learner through project-based learning rooted in Islamic values.",
  keywords: ["Khudi Institute", "alternative school", "homeschool", "Islamic education", "project-based learning", "holistic development"],
  authors: [{ name: "Khudi Institute" }],
  creator: "Khudi Institute",
  publisher: "Khudi Institute",
  metadataBase: new URL("https://www.khudi.institute"),
  openGraph: {
    title: "Khudi Institute | Alternative School & Homeschool Resource Center",
    description: "Khudi Institute is an alternative school and resource center for homeschoolers, focused on the holistic development of each learner through project-based learning rooted in Islamic values.",
    url: "https://www.khudi.institute",
    siteName: "Khudi Institute",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/khudi-logo.png",
        width: 512,
        height: 512,
        alt: "Khudi Institute Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Khudi Institute | Alternative School & Homeschool Resource Center",
    description: "Khudi Institute is an alternative school and resource center for homeschoolers, focused on the holistic development of each learner through project-based learning rooted in Islamic values.",
    images: ["/khudi-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/khudi-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/khudi-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/khudi-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/khudi-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
