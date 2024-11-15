import { useCallback } from "react";
////////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import { useWalletStore } from "@/store/walletStore";
import { BridgeSelectorHeader } from "./BridgeSelectorHeader";
import { BridgeBox } from "@/components/common";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

export type BridgeTypeProps = BridgeType;

interface BridgeSelectorProps {
   stepForward: () => void;
}

export const BridgeSelector: React.FC<BridgeSelectorProps> = ({
   stepForward,
}) => {
   /*********************
	// #region Hooks
	**********************/
   const { setEnvironment } = useWalletStore();

   /*********************
	// #region Functions
	**********************/
   const handleWalletConnection = useCallback(
      (type: BridgeTypeProps) => {
         setEnvironment(type);
         stepForward();
      },
      [stepForward, setEnvironment]
   );

   return (
      <>
         <BridgeSelectorHeader />

         <div className="flex items-center gap-16 xl:mx-28 my-8">
            <BridgeBox
               logoFrom={ETHFrom}
               logoTo={QubicFrom}
               selectEnvironment={handleWalletConnection}
               text="EVM to qubic"
               type={BridgeType.EVM_TO_QUBIC}
            />
            <BridgeBox
               logoFrom={ETHTo}
               logoTo={QubicTo}
               selectEnvironment={handleWalletConnection}
               text="qubic to EVM"
               type={BridgeType.QUBIC_TO_EVM}
            />
         </div>
      </>
   );
};
