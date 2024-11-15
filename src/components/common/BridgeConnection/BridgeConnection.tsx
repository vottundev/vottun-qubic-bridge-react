// import { useCallback, useEffect } from "react";
////////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import { useWalletStore } from "@/store/walletStore";
import { ConnectEvm } from "./ConnectEvm";
import { ConnectQubic } from "./ConnectQubic";
import { useEffect } from "react";

interface BridgeConnectionProps {
   stepForward: () => void;
   stepBack: () => void;
}

export const BridgeConnection: React.FC<BridgeConnectionProps> = ({
   stepForward,
   stepBack,
}) => {
   /*********************
	// #region Hooks
	**********************/
   const {
      environment,
      // evmAddress,
      // qubicAddress,
      // connectEvm,
      // connectQubic,
      // disconnectEvm,
      // disconnectQubic,
   } = useWalletStore();

   /*********************
	// #region Functions
	**********************/

   /*********************
	// #region Effects
	**********************/
   useEffect(() => {
      console.log(stepBack, stepForward);
   }, [stepBack, stepForward]);

   return (
      <>
         {environment === BridgeType.EVM_TO_QUBIC && <ConnectEvm />}
         {environment === BridgeType.QUBIC_TO_EVM && <ConnectQubic />}
      </>
   );
};
