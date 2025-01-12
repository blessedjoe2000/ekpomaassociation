import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ekpoma Association of Houston",
  description:
    "A community of Esan West Local Government of Edo State, Nigeria supporting and promoting the culture and tradition of Esan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
