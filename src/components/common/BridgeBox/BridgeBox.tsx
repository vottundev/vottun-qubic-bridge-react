import { IoMdSwap } from "react-icons/io";
import { cn } from "@/lib/utils";
////////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import type { BridgeTypeProps } from "@/components/common";

interface BridgeBoxProps {
   className?: string;
   type: BridgeTypeProps;
   text: string;
   logoFrom: string;
   logoTo: string;
   selectEnvironment: (env: BridgeTypeProps) => void;
}

export const BridgeBox: React.FC<BridgeBoxProps> = ({
   className,
   type,
   text,
   logoFrom,
   logoTo,
   selectEnvironment,
}) => {
   return (
      <div
         className={cn(
            "flex flex-1 flex-col items-center justify-center gap-2 px-16 py-24 rounded-2xl  cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:filter hover:brightness-90 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none",
            type === BridgeType.EVM_TO_QUBIC
               ? "bg-[#1F2A37]"
               : "bg-primary text-black",
            className
         )}
         onClick={() => {
            selectEnvironment(type);
         }}
      >
         <div className="flex flex-col gap-6 items-center">
            <p className="text-2xl font-semibold">{text}</p>

            <div className="flex items-center gap-2 text-4xl">
               {type == BridgeType.EVM_TO_QUBIC ? (
                  <img
                     alt={text}
                     className="w-[63px] h-[63px]"
                     src={logoFrom}
                  />
               ) : (
                  <img alt={text} className="w-[74px] h-[74px]" src={logoTo} />
               )}

               <div className="flex flex-1">
                  <IoMdSwap title="Swap icon" />
               </div>

               {type == BridgeType.EVM_TO_QUBIC ? (
                  <img alt={text} className="w-[74px] h-[74px]" src={logoTo} />
               ) : (
                  <img
                     alt={text}
                     className="w-[63px] h-[63px]"
                     src={logoFrom}
                  />
               )}
            </div>
         </div>
      </div>
   );
};
