import { useCallback, useEffect } from "react";
import { useAccount } from "wagmi";
////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { ConnectEvmButton } from "@/components/ui";
import { BridgeSelectorHeader } from "./BridgeSelectorHeader";
import { BridgeBox } from "@/components/common";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

export type BridgeTypeProps = "evm-qubic" | "qubic-evm";

interface BridgeSelectorProps {
   isCompleted: () => void;
}

export const BridgeSelector: React.FC<BridgeSelectorProps> = ({
   isCompleted,
}): FunctionComponent => {
   /*********************
	// #region Hooks
	**********************/
   // const account = useAccount();

   /*********************
	// #region Functions
	**********************/
   const handleWalletConnection = useCallback((type: BridgeTypeProps) => {
      console.log(type);
   }, []);

   /*********************
	// #region Effects
	**********************/
   // useEffect(() => {
   //    if (!account.isConnected) return;
   //    isCompleted();
   // }, [account.isConnected, isCompleted]);

   return (
      <>
         <BridgeSelectorHeader />

         <div className="flex items-center gap-16 mx-28 my-8">
            <BridgeBox
               connectWallet={handleWalletConnection}
               logoFrom={ETHFrom}
               logoTo={QubicFrom}
               text="EVM to qubic"
               type="evm-qubic"
            />
            <BridgeBox
               connectWallet={handleWalletConnection}
               logoFrom={ETHTo}
               logoTo={QubicTo}
               text="qubic to EVM"
               type="qubic-evm"
            />
         </div>
      </>
   );
};
