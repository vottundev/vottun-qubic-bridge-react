import { Fuel, Hourglass } from "lucide-react";
import { AiFillDollarCircle } from "react-icons/ai";

////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { ComboChains } from "@/components/common";
import QubicEth from "@/assets/images/qubic-eth.png";
import type { BridgeExchange } from "@/interfaces";

interface BridgeInfoProps {
   data: BridgeExchange;
}

export const BridgeInfo: React.FC<BridgeInfoProps> = ({
   data,
}: BridgeInfoProps): FunctionComponent => {
   return (
      <div className="mt-6 p-4 border border-slate-600 rounded-xl">
         <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
               <div className="text-base font-bold leading-none">
                  Get on {data.toNetwork.name}
               </div>

               <ComboChains />
            </div>
            <div className="flex items-center gap-3">
               <div className="relative">
                  <img
                     alt={`Get on ${data.toNetwork.name}`}
                     className="h-12"
                     loading="lazy"
                     src={QubicEth}
                  />
               </div>

               <div className="flex flex-col gap-1">
                  <span className="text-3xl leading-none font-bold">
                     {data.exchange.tokenAmount} {data.toNetwork.symbol}
                  </span>
                  <span className="text-base leading-none text-muted-foreground font-semibold">
                     ${data.exchange.fiatAmount}
                  </span>
               </div>
            </div>

            <div className="flex justify-between text-sm">
               <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                     <AiFillDollarCircle size={18} />
                     <span>${data.exchange.fees} Fee</span>
                  </div>
                  <div className="flex items-center gap-1">
                     <Fuel size={18} />
                     <span>{data.exchange.gasPrice} Qu</span>
                  </div>
               </div>

               <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                     <span>~{data.exchange.estimateDuration}</span>
                     <Hourglass size={18} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
