import type { Metadata } from "next";
import "../styles/globals.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "dai chat",
  description: "みんなでチャット！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
