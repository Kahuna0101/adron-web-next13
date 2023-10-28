import '@/styles/globals.css'

export const metadata = {
  title: 'Adron Homes',
  description: 'Adron Homes and Properties',
  other: {
    'theme-color': "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "adronhomesproperties.com",
    "og:image": "https://res.cloudinary.com/daamcwt3y/image/upload/v1693341349/logo_n24gyg.jpg",
    "og:type": "website",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">
        {children}
      </body>
    </html>
  )
}