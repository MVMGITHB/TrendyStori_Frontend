import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import { AuthProvider } from "@/components/context/auth";
import BreadcrumbSchema from "@/components/Seo/breadcrumb";
// import DailyNewzMailPopup from "@/components/popup/registerpopup"; // enable if needed

// ✅ Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
});

export const metadata = {
  title: "DailyNews",
  description: "Get Latest News and Updates",
  icons: {
    icon: "/images/favicon.png", // served from /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen font-sans">
            {/* 🔝 Navbar (Logo can use font-prata in component) */}
            <Navbar />

            {/* <DailyNewzMailPopup /> */}

            {/* 📌 Breadcrumb SEO */}
            <BreadcrumbSchema />

            {/* 📄 Page Content */}
            <main className="flex-grow">{children}</main>

            {/* 🔻 Footer */}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
