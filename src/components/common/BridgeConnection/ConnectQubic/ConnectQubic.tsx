////////////////////////////////////////////////////////
import { BridgeType } from "@/common/types";
import { BridgeBox } from "@/components/common";
import { Input, Label } from "@/components/ui";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

export const ConnectQubic: React.FC = () => {
   return (
      <>
         <div className="flex gap-8 mb-8 mt-4">
            <BridgeBox
               logoFrom={ETHTo}
               logoTo={QubicTo}
               selectEnvironment={() => {}}
               text="qubic to EVM"
               type={BridgeType.QUBIC_TO_EVM}
            />

            <div className="flex-1 flex items-center justify-center border border-gray-300 px-16 py-24 rounded-2xl">
               <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" type="file" />
               </div>
            </div>
         </div>
      </>
   );
};
