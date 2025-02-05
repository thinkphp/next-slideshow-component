import './globals.css'

export const metadata = {
  title: 'Slideshow App',
  description: 'A simple slideshow built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
