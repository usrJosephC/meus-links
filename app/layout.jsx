import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Links Pessoais",
  description: "Coleção de links pessoais, portfólio e redes sociais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="h-full w-full">
      <body className="font-sans h-full w-full text-text-default bg-gradient-to-br from-background-light to-background-dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
""