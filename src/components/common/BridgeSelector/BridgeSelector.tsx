////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { BridgeSelectorHeader } from "./BridgeSelectorHeader";
import { BridgeBox } from "@/components/common";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

interface BridgeSelectorProps {
   isCompleted: () => void;
}

export const BridgeSelector: React.FC<
   BridgeSelectorProps
> = (): FunctionComponent => {
   return (
      <>
         <BridgeSelectorHeader />

         <div className="flex items-center gap-16 mx-28 my-8">
            <BridgeBox
               logoFrom={ETHFrom}
               logoTo={QubicFrom}
               text="EVM to qubic"
               type="evm-qubic"
            />
            <BridgeBox
               logoFrom={ETHTo}
               logoTo={QubicTo}
               text="qubic to EVM"
               type="qubic-evm"
            />
         </div>
      </>
   );
};
