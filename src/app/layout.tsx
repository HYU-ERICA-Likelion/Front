import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "@/components/Common/NavigationHeader";

export const metadata: Metadata = {
  title: "멋쟁이사자처럼 :: 한양대 에리카",
  description: "멋쟁이사자처럼 한양대 에리카 공식 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}
