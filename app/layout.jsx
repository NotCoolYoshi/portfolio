import "./globals.css";

export const metadata = {
  title: "Sean Dai — Mathematics & Music",
  description: "Classically trained pianist and mathematics researcher. Tutoring in algebra through elementary analysis, data analysis, and real-world mathematical projects.",
  openGraph: {
    title: "Sean Dai — Mathematics & Music",
    description: "Classically trained pianist and mathematics researcher offering tutoring in advanced mathematics.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" />
        <div className="wrap">{children}</div>
      </body>
    </html>
  );
}
