
import "./globals.css";

export const metadata = {
  title: "KHUDI INSTITUTE",
  description: "A premier institute for learning and development",
  icons: {
    icon: "/logo.svg", // path to your uploaded image
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
