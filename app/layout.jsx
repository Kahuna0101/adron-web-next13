import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Adron Homes",
    default: "Adron Homes & Properties",
  },
  description:
    "Adron Homes and Properties is a leading real estate development company committed to providing exceptional and affordable housing solutions. With a focus on innovation, quality, and customer satisfaction, Adron Homes has established itself as a trusted name in the real estate industry. Our diverse portfolio includes residential estates, commercial properties, and luxury developments designed to meet the unique needs of our clients. We pride ourselves on creating communities that offer a perfect blend of modern amenities, green spaces, and a high standard of living. At Adron Homes, we believe in the power of home to transform lives, and our dedicated team works tirelessly to turn that belief into reality. Whether you are a first-time homebuyer, an investor, or seeking a dream home, Adron Homes and Properties is your partner in building a better future. Explore our range of properties, experience excellence in real estate, and let us help you find the home that suits your lifestyle. Welcome to Adron Homes and Properties – where dreams come home.",
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
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image":
      "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "adronhomesproperties.com",
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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
