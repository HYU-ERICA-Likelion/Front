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
  icons: {
    icon: "/Favicon.svg",
  },
  openGraph: {
    title: "멋쟁이사자처럼 :: 한양대 에리카",
    description: "🦁멋사 ERICA 13기 모집 중🔥",
    images: ["/assets/images/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="oLfYEMCtERBKIFl-mDMB-Eipxm1EQUZ7LJCSU7VRaFs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="멋쟁이사자처럼 한양대 에리카" />
        <meta
          name="keywords"
          content="멋쟁이사자처럼, 한양대 에리카, 한양대학교, 프로그래밍 동아리"
        />
        <meta property="og:title" content="멋쟁이사자처럼 :: 한양대 에리카" />
        <meta property="og:description" content="🦁멋사 ERICA 13기 모집 중🔥" />
        <meta property="og:image" content="/assets/images/thumbnail.png" />
        <meta property="og:url" content="https://your-site.com" />
        <title>멋쟁이사자처럼 :: 한양대 에리카</title>
      </head>

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
