/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect } from "react";
////////////////////////////////////////////////////////
import {
   useInvokeSnap,
   useMetaMask,
   // useMetaMaskContext,
   useRequestSnap,
} from "@/hooks";
import { shouldDisplayReconnectButton } from "@/components/utils";
import { InstallFlaskButton, QubicAddress } from "@/components/common";
import { Button } from "@/components/ui";
import { useWalletStore } from "@/store/walletStore";

interface ConnectQubicParameters {
   connected: boolean;
   publicId: string;
}
interface ConnectQubicButtonProps {
   isConnected: ({ connected, publicId }: ConnectQubicParameters) => void;
}

export const ConnectQubicButton: React.FC<ConnectQubicButtonProps> = ({
   isConnected,
}): JSX.Element => {
   /*********************
	// #region Hooks
	**********************/
   const { qubicAddress } = useWalletStore();
   const requestSnap = useRequestSnap();
   const invokeSnap = useInvokeSnap();
   const { isFlask, installedSnap } = useMetaMask();

   /*********************
	// #region Effects
	**********************/
   useEffect(() => {
      if (!installedSnap) return;
      if (!isFlask) return;
      if (qubicAddress.address) return;

      const getPublicId = async () => {
         try {
            const publicId = (await invokeSnap({
               method: "getPublicId",
               params: {
                  accountIdx: 0,
                  confirm: false,
               },
            })) as string;

            isConnected({ connected: true, publicId });
         } catch (error) {
            console.error("Error fetching public ID:", error);
            isConnected({ connected: false, publicId: "" }); // Emit a failure state
         }
      };

      void getPublicId();
   }, [installedSnap, isFlask]);

   if (!isFlask && !installedSnap) {
      return <InstallFlaskButton />;
   }

   if (!installedSnap) {
      return (
         <Button
            className="flex items-center gap-2"
            size="default"
            onClick={requestSnap}
         >
            Connect Qubic Wallet
         </Button>
      );
   }

   if (shouldDisplayReconnectButton(installedSnap)) {
      return (
         <Button
            className="flex items-center gap-2"
            size="default"
            onClick={requestSnap}
         >
            Connect Qubic Wallet
         </Button>
      );
   }

   return <QubicAddress wallet={qubicAddress} />;
};
