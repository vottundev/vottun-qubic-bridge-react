import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
////////////////////////////////////////////////////////
// import { useBridgeStore } from "@/store";
import { BridgeInput, BridgeInfo } from "@/components/common";
import { Button } from "@/components/ui";
// import type { BridgeExchange } from "@/interfaces";
import QubicToken from "@/assets/images/qubic-token.png";
// import QubicNetwork from "@/assets/images/qubic-network.png";
import EthereumNetwork from "@/assets/images/eth-network.png";

interface SwapperProps {
   stepBack: () => void;
}

export const Swapper: React.FC<SwapperProps> = (): React.ReactElement => {
   /*********************
	// #region States
	**********************/
   const [fromTokenAmount, setFromTokenAmount] = useState<number>(0);
   const [fromFiatAmount, setFromFiatAmount] = useState<number>(0);
   const [fromBalance, setFromBalance] = useState<number>(512);

   /*********************
	// #region Hooks
	**********************/
   const debouncedFromTokenAmount = useDebounce(fromTokenAmount, 400);

   /*********************
	// #region Effects
	**********************/
   // This useEffect can be removed when logic is added. Until then, it's here to prevent a warning.
   useEffect(() => {
      console.log(setFromFiatAmount);
      console.log(setFromBalance);
   }, []);
   useEffect(() => {}, [debouncedFromTokenAmount]);

   return (
      <div className="bg-slate-800 mx-auto max-w-[650px] rounded-xl p-8 mt-12 relative">
         <BridgeInput
            fromBalance={fromBalance}
            fromFiatAmount={fromFiatAmount}
            setFromTokenAmount={setFromTokenAmount}
         />

         <BridgeInfo
            data={{
               exchange: {
                  tokenAmount: 0.004129864,
                  fiatAmount: 20.32,
                  gasPrice: 0.001233,
                  estimateDuration: "2 minutes",
                  fees: 0.002,
               },
               fromNetwork: {
                  name: "Qubic",
                  symbol: "Qu",
                  image: QubicToken,
               },
               toNetwork: {
                  name: "Ethereum",
                  symbol: "wQu",
                  image: EthereumNetwork,
               },
            }}
         />

         <Button className="mt-6 w-full py-8">Confirm</Button>
      </div>
   );
};
