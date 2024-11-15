import { useAccount } from "wagmi";
import { useEffect } from "react";
////////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import { ConnectEvmButton } from "@/components/ui";
import { BridgeBox } from "@/components/common";
import { useWalletStore } from "@/store/walletStore";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";

export const ConnectEvm: React.FC = () => {
   /*********************
	// #region Hooks
	**********************/
   const account = useAccount();
   const { connectEvm } = useWalletStore();

   /*********************
	// #region Effects
	**********************/
   useEffect(() => {
      console.log(account);
      if (account.isConnected) {
         connectEvm({
            address: account.address,
            isConnected: account.isConnected,
         });

         return;
      }
      connectEvm({
         address: undefined,
         isConnected: false,
      });
   }, [account, connectEvm]);

   return (
      <>
         <BridgeBox
            className="mb-8 mt-4"
            logoFrom={ETHFrom}
            logoTo={QubicFrom}
            selectEnvironment={() => {}}
            text="EVM to qubic"
            type={BridgeType.EVM_TO_QUBIC}
         />
         <div className="flex justify-center items-center my-8 w-full">
            <ConnectEvmButton />
         </div>
      </>
   );
};
