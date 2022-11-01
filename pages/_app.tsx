import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import "./home/Menu.scss";
import "./home/Home.scss";
import "./home/Instruction.scss";
import "./home/Footer.scss";
import "./home/TextHelper.scss";
import 'antd/dist/antd.css';
import 'animate.css'
import 'react-calendar/dist/Calendar.css';
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
