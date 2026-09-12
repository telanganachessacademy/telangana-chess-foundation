import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Telangana Chess Foundation - Premier FIDE Certified Chess Training Academy",
  description:
    "Official Telangana Chess Foundation website. Premier FIDE certified chess academy offering beginner to grandmaster level coaching, online classrooms, state tournaments, and expert mentors in Hyderabad & Telangana.",
  keywords: [
    "Telangana Chess Foundation",
    "Telangana Chess Academy",
    "Chess Coaching Hyderabad",
    "FIDE Rated Chess Academy",
    "Online Chess Classes Telangana",
    "Chess Tournaments Hyderabad",
    "Best Chess Academy Telangana",
    "Kids Chess Training"
  ],
  authors: [{ name: "Telangana Chess Foundation" }],
  creator: "Telangana Chess Foundation",
  publisher: "Telangana Chess Foundation",
  metadataBase: new URL("https://telanganachessfoundation.com"),
  openGraph: {
    title: "Telangana Chess Foundation - Master Chess with FIDE Rated Coaches",
    description: "Empowering future chess champions across Telangana. Live online classes, offline coaching, grandmaster masterclasses, and certified tournaments.",
    url: "https://telanganachessfoundation.com",
    siteName: "Telangana Chess Foundation",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Telangana Chess Foundation Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telangana Chess Foundation",
    description: "FIDE Certified Chess Training & Tournaments in Telangana.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Telangana Chess Foundation",
    "alternateName": "TCF",
    "url": "https://telanganachessfoundation.com",
    "logo": "https://telanganachessfoundation.com/logo.jpg",
    "email": "telanganachessfoundation@gmail.com",
    "telephone": "+91 9864646481",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No 2, Alkapuri, Kothapet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500035",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/telanganachessacademy",
      "https://telanganachessacademy.com/"
    ],
    "description": "Telangana Chess Foundation is a leading chess organization offering FIDE certified coaching, online training, and state-level chess tournaments."
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
