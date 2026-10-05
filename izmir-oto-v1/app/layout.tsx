import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İzmir Oto Yedek Parça",
  description: "Oto yedek parça katalog ve satış sistemi"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="tr"><body>{children}</body></html>;
}