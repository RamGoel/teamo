import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '../utils/handlers'
import ActionLoader from '@/components/common/action-loader'
import MarginWrapper from '@/wrapper/margin-wrapper'
import { APP_NAME } from '@/constants/strings'



export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: `Chat with your documents easily!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <MarginWrapper>
          {children}
        </MarginWrapper>
      </body>
    </html>
  )
}
