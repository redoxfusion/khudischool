
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Khudi Institute | Alternative School & Homeschool Resource Center",
    description: "Khudi Institute is an alternative school and resource center for homeschoolers, focused on the holistic development of each learner through project-based learning rooted in Islamic values.",
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
    icon: "/logo.svg",
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
