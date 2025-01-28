import { useAccount } from "wagmi";
import { useEffect, memo } from "react";
////////////////////////////////////////////////////////
import { BridgeTypeEnum } from "@/enums";
import { BridgeBox, ConnectEvmButton } from "@/components/common";
import { useWalletStore } from "@/store/walletStore";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";

export const ConnectEvm: React.FC = memo(() => {
   /*********************
	// #region Hooks
	**********************/
   const account = useAccount();
   const { connectEvm } = useWalletStore();

   /*********************
	// #region Effects
	**********************/
   useEffect(() => {
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
      <div className="flex items-center gap-3 ">
         <BridgeBox
            className="mb-8 mt-4"
            logoFrom={ETHFrom}
            logoTo={QubicFrom}
            selectEnvironment={() => {}}
            text="EVM to qubic"
            type={BridgeTypeEnum.EVM_TO_QUBIC}
         />
         <div className="flex flex-1 justify-center items-center px-16 py-24">
            <ConnectEvmButton />
         </div>
      </div>
   );
});
