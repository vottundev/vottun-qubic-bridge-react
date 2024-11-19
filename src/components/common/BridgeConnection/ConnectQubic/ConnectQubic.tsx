import { toast } from "sonner";
/////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import { BridgeBox } from "@/components/common";
import { ConnectQubicButton } from "@/components/ui";
import { useWalletStore } from "@/store/walletStore";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

export const ConnectQubic: React.FC = () => {
   /*********************
	// #region Hooks
	**********************/
   const { connectQubic } = useWalletStore();

   /*********************
	// #region Functions
	**********************/
   const handleConnection = ({
      connected,
      publicId,
   }: {
      connected: boolean;
      publicId: string;
   }): void => {
      connectQubic({
         address: publicId,
         isConnected: connected,
      });
      toast.success(
         `Account ${publicId} has been connected to Qubic succesfully`
      );
   };

   return (
      <div className="flex items-center gap-3 ">
         <BridgeBox
            className="mb-8 mt-4"
            logoFrom={ETHTo}
            logoTo={QubicTo}
            selectEnvironment={() => {}}
            text="qubic to EVM"
            type={BridgeType.QUBIC_TO_EVM}
         />
         <div className="flex flex-1 justify-center items-center px-16 py-24">
            <ConnectQubicButton isConnected={handleConnection} />
         </div>
      </div>
   );
};
