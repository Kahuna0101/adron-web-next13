import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Adron Homes",
    default: "Adron Homes & Properties",
  },
  description:
    "Adron Homes and Properties is a leading real estate development company committed to providing exceptional and affordable housing solutions. With a focus on innovation, quality, and customer satisfaction.",
  keywords: [
    "properties",
    "sale",
    "emmanuelking",
    "adron",
    "realestate",
    "lands",
    "homes",
    "intelligent",
    "aderonke",
    "olori",
    "estates",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image":
      "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
    "twitter:card": "summary_large_image",
    "twitter:title": "Adron Homes & Properties",
    "twitter:description":
      "Adron Homes and Properties is a leading real estate development company committed to providing exceptional and affordable housing solutions. With a focus on innovation, quality, and customer satisfaction, Adron Homes has established itself as a trusted name in the real estate industry.",
    "og:url": "adronhomesproperties.com",
    "og:title": "Adron Homes & Properties",
    "og:description":
      "Adron Homes and Properties is a leading real estate development company committed to providing exceptional and affordable housing solutions. With a focus on innovation, quality, and customer satisfaction, Adron Homes has established itself as a trusted name in the real estate industry.",
    "og:image":
      "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen font-poppins">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics mode={'production'}/>
          </ThemeProvider>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/654263c6f2439e1631eab21b/1he5lbgs2';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
        </body>
      </html>
    </>
  );
}