import { useCallback } from "react";
////////////////////////////////////////////////////////
import { BridgeTypeEnum } from "@/enums";
import { useBridgeStore } from "@/store";
import { BridgeBox } from "@/components/common";
import { BridgeSelectorHeader } from "./BridgeSelectorHeader";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

interface BridgeSelectorProps {
   stepForward: () => void;
}

export const BridgeSelector: React.FC<BridgeSelectorProps> = ({
   stepForward,
}) => {
   /*********************
	// #region Hooks
	**********************/
   const { setEnvironment } = useBridgeStore();

   /*********************
	// #region Functions
	**********************/
   const handleWalletConnection = useCallback(
      (type: BridgeTypeEnum) => {
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
               type={BridgeTypeEnum.EVM_TO_QUBIC}
            />
            <BridgeBox
               logoFrom={ETHTo}
               logoTo={QubicTo}
               selectEnvironment={handleWalletConnection}
               text="qubic to EVM"
               type={BridgeTypeEnum.QUBIC_TO_EVM}
            />
         </div>
      </>
   );
};
