import { BridgeType } from "@/common/types";
import { useWalletStore } from "@/store/walletStore";
import { Button } from "@/components/ui";
import { ConnectEvm } from "./ConnectEvm";
import { ConnectQubic } from "./ConnectQubic";

interface BridgeConnectionProps {
   stepForward: () => void;
}

export const BridgeConnection: React.FC<BridgeConnectionProps> = ({
   stepForward,
}) => {
   /*********************
	// #region Hooks
	**********************/
   const { environment, evmAddress, qubicAddress } = useWalletStore();

   return (
      <>
         {environment === BridgeType.EVM_TO_QUBIC && (
            <>
               <ConnectEvm />
               {evmAddress.address && evmAddress.isConnected && (
                  <div className="flex mt-8">
                     <Button
                        className="text-xl"
                        size={"full"}
                        onClick={stepForward}
                     >
                        Bridge to Qubic
                     </Button>
                  </div>
               )}
            </>
         )}
         {environment === BridgeType.QUBIC_TO_EVM && (
            <>
               <ConnectQubic />
               {qubicAddress.address && qubicAddress.isConnected && (
                  <div className="flex mt-8">
                     <Button
                        className="text-xl"
                        size={"full"}
                        onClick={stepForward}
                     >
                        Bridge to EVM
                     </Button>
                  </div>
               )}
            </>
         )}
      </>
   );
};
