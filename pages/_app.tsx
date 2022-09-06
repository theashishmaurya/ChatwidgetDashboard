import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/layout/container";
import { Footer } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </div>
  );
}

export default MyApp;
