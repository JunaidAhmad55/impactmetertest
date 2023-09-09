import { Navbar } from "@/components";

import { AppProps } from "next/app";
import "../global.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
