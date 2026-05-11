import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-padrao",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={orbitron.variable}>
      <Component {...pageProps} />
    </main>
  )
}
