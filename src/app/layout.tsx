import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog criado em NextJs",
  description: "Generated by create next app",
};

// Esse Readonly é para não alterar o conteúdo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
