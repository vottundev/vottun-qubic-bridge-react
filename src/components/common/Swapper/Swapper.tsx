// import { useAccount } from "wagmi";
////////////////////////////////////////////////////////
import { ConnectEvmButton } from "@/components/ui";
import type { FunctionComponent } from "@/common/types";

interface SwapperProps {
   stepBack: () => void;
}

export const Swapper: React.FC<SwapperProps> = (): FunctionComponent => {
   /*********************
	// #region Hooks
	**********************/
   // const account = useAccount();

   return (
      <div className="flex items-center justify-center p-8">
         {/* {!account.isConnected && ( */}
         <div className="flex justify-center">
            <ConnectEvmButton />
         </div>
         {/* )} */}
      </div>
   );
};
