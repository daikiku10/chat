import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "6rem",
});

export const title = style({
  fontSize: "48px",
  marginBottom: "24px",
});
