import React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Theme } from "@radix-ui/themes";
import { MantineProvider } from "@mantine/core";

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
        <MantineProvider>
          <Theme>{children}</Theme>
        </MantineProvider>
      </body>
    </html>
  );
}
