import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoMonitor - Dashboard Green Building",
  description: "Dashboard Monitoring Green Building & Circular Economy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} antialiased font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex overflow-hidden" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient Background Gradients */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]" />
            <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/10 dark:bg-secondary/10 blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-emerald-500/10 dark:bg-emerald-600/5 blur-[120px]" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
