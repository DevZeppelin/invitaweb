import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Invitaciones Web",
  description: "Tarjetas de invitación digitales, originales y lindas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>        
        {children}        
      </body>
    </html>
  );
}
