import type { QubicWallet } from "@/types/wallet";
import { formatAddress } from "@/components/utils";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui";

interface QubicAddressProps {
   wallet: QubicWallet;
}

export const QubicAddress: React.FC<QubicAddressProps> = ({
   wallet,
}: QubicAddressProps) => {
   if (wallet.isConnected && !wallet.address) {
      return (
         <div className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
            <p>Getting Public ID...</p>
         </div>
      );
   }

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <div className="flex  gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div className="flex items-center gap-3">
                     <span>Qubic public ID:</span>
                     <div className="bg-slate-800 rounded-lg py-3 px-4 text-sm">
                        {formatAddress(wallet.address!)}
                     </div>
                  </div>
               </div>
            </TooltipTrigger>
            <TooltipContent>
               <p> {wallet.address}</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};
