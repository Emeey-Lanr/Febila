import "./globals.css";
import type { Metadata } from "next";

import { ReduxProvider } from "@/Redux/Provider";
import { AppProvider } from "@/context api/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import DonationNtAvailModal from "@/components/DonationNtAvailModal";


export const metadata: Metadata = {
  title: "Febila",
  description: "Febila App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AppProvider>
            <body className="bg-grey-50 p-0 m-0">
              <Navbar/>
              {children}
              <Footer />
            <Sidebar/>
              <DonationNtAvailModal/>
            </body>
          </AppProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
