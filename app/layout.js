import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Configuration de la police avec une variable CSS
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit", // <--- C'est ça qui fait le lien avec le CSS
});

export const metadata = {
  title: 'Mon Portfolio Warmr',
  description: 'Design inspiré',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* On ajoute la variable de police ici */}
      <body className={`${outfit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}