// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Nav } from "@/components/nav";
// import { Footer } from "@/components/footer";

// export const metadata: Metadata = {
//   title: "Matt Wilder",
//   description: "Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${GeistSans.variable} ${GeistMono.variable}`}
//       suppressHydrationWarning
//     >
//       <body className={cn("min-h-screen antialiased")}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {/* <div className="flex flex-col min-h-screen justify-between p-4">
//             <Nav />
//             <main className="mb-auto flex flex-col p-4">{children}</main>
//             <Footer />
//           </div> */}
//           <main className="h-screen overflow-hidden flex w-full py-14 max-w-2xl flex-col items-center mx-auto">
//             <Nav />
//             {children}
//             <Footer />
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Matt Wilder",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow flex flex-col items-center py-14 max-w-2xl w-full mx-auto overflow-y-auto">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
