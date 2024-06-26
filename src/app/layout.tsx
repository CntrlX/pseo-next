import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

// FIXME: change this
export const metadata = {
  title: "pSEO",
  description: "A programmatic SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
        <CookieBanner />
      </body>
    </html>
  );
}
