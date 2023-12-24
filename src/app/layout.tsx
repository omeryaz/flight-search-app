import type { Metadata } from "next";
import { store } from "../redux/store";

import "./globals.css";
import FlightSearchForm from "./components/SearchForm/SearchForm";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Amadeus Flight Search",
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
          <FlightSearchForm />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
