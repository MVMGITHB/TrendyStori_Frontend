import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import { AuthProvider } from "@/components/context/auth";
import BreadcrumbSchema from "@/components/Seo/breadcrumb";
import Breadcrumb from "@/components/BreadCrumb/BreadcrumbVisible";

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

// ✅ Metadata only works in Server Components
export const metadata = {
  title: "trendingstori",
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
            <div className="w-full bg-gray-100">
              <Breadcrumb />
            </div>

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
