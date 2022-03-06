import Lottie from "lottie-react";
import bitcoinLottieLogo from "../../assets/lotties/bitcoin-lottie-logo.json";

const BitcoinLottieLogo = () => {

  return <Lottie animationData={bitcoinLottieLogo} loop={0}  autoplay={true}/>;
};

export default BitcoinLottieLogo;