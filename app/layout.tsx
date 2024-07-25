import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css";
// import "react-datepicker/dist/react-datepicker.css";
const inter = Inter({ subsets: ["latin"] });
import 'react-datepicker/dist/react-datepicker.css'
export const metadata: Metadata = {
  title: "Vooom",
  description: "Video Calling App",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider 
      
      appearance={{ 
        layout:{
          logoImageUrl:'/icons/yoom-logo.svg',
          socialButtonsVariant:'iconButton'
        },
        
        variables :{
        colorText:'#FFF',
        colorPrimary:'#0E78F9',
        colorBackground:'#1C1F2E',
        colorInputBackground:'#252A41',
        colorInputText:"#FFF",

      } }}>
      <body className={`${inter.className} bg-dark-2 `}>
        
        {children}

        <Toaster/>
      </body>
      
      </ClerkProvider>
    </html>
  );
}