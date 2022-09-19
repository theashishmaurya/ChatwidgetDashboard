import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/dashboard/sidebar";
import { Container } from "../components/layout";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

function MyApp({ Component, pageProps, router }: AppProps) {
  Amplify.configure(awsconfig);

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
