import type { FunctionComponent } from "@/common/types";
import { BridgeTypeEnum } from "@/enums";
import { Input } from "@/components/ui";
import { ComboChains } from "@/components/common";
import { useBridgeStore } from "@/store";
import QubicMini from "@/assets/images/qubic-mini.png";

interface BridgeInputProps {
   setFromTokenAmount: React.Dispatch<React.SetStateAction<number>>;
   fromFiatAmount: number;
   fromBalance: number;
}
export const BridgeInput: React.FC<BridgeInputProps> = ({
   setFromTokenAmount,
   fromFiatAmount,
   fromBalance,
}: BridgeInputProps): FunctionComponent => {
   /*********************
	// #region Hooks
	**********************/
   const { environment } = useBridgeStore();

   /*********************
	// #region Functions
	**********************/
   const handleChangeAmount = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      const value = event.target.value;
      setFromTokenAmount(Number(value));
   };

   return (
      <div className="flex items-center justify-between px-4 bg-slate-700 rounded-lg h-24">
         <div className="flex flex-col ">
            <Input
               className="bg-slate-700 text-lg md:text-3xl  outline-none ring-offset-0 focus-visible:ring-offset-0 focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-bold max-w-[300px] w-auto min-w-0"
               placeholder={`0.00 ${environment === BridgeTypeEnum.QUBIC_TO_EVM ? "Qu" : "wQubic"}`}
               step={0.01}
               type="number"
               onChange={handleChangeAmount}
            />

            <span className="text-sm leading-none text-muted-foreground ml-3">
               ${fromFiatAmount}
            </span>
         </div>

         <div className="flex flex-col justify-center items-end gap-2 mt-2 ">
            {environment === BridgeTypeEnum.QUBIC_TO_EVM ? (
               <img alt="Qubic logo" className="h-6" src={QubicMini} />
            ) : (
               <ComboChains />
            )}

            <span className="text-sm leading-none text-muted-foreground">
               Balance: <span className="font-bold">{fromBalance}</span>{" "}
               {environment === BridgeTypeEnum.QUBIC_TO_EVM ? "Qu" : "wQubic"}
            </span>
         </div>
      </div>
   );
};
