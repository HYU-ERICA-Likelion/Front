import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "@/components/Common/NavigationHeader";
import localFont from "next/font/local";
import Footer from "@/components/Common/Footer";

const pretendard = localFont({
  src: "../../public/assets/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

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
      <body
        className={`${pretendard.variable} font-pretendard w-dvw h-screen pb-[257px]`}
      >
        <NavigationHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
