import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="jakarta-font">{children}</body>
    </html>
  );
}
