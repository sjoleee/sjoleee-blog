import FramerLazyMotion from "@/components/FramerLazyMotion";
import ThemeProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { USER_INFORMATIONS } from "@/constants/data";
import { Analytics } from "@vercel/analytics/next";
import cn from "@/utils/cn";

export const metadata: Metadata = {
  metadataBase: new URL(USER_INFORMATIONS.domain),
  title: USER_INFORMATIONS.meta.title,
  description: USER_INFORMATIONS.meta.description,
  openGraph: {
    title: USER_INFORMATIONS.meta.title,
    description: USER_INFORMATIONS.meta.description,
    type: "website",
    url: USER_INFORMATIONS.domain,
    images: `${USER_INFORMATIONS.domain}/images/share.png`,
  },
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const tossface = localFont({
  src: "../../public/fonts/TossFace.otf",
  display: "swap",
  variable: "--font-tossface",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ko"
      className={cn(pretendard.variable, tossface.variable, "bg-backgroundHeavy")}
      data-theme="light"
    >
      <FramerLazyMotion>
        <ThemeProvider>
          <body className="relative antialiased">
            {children}
            <Analytics />
          </body>
        </ThemeProvider>
      </FramerLazyMotion>
    </html>
  );
};

export default RootLayout;
