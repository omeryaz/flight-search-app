import type { Metadata } from "next";

import "./globals.css";
import SearchForm from "./components/SearchForm/SearchForm";
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
          <SearchForm />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
