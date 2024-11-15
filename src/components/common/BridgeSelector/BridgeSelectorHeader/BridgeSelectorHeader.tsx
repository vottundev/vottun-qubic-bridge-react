import { IoMdSwap } from "react-icons/io";
////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";

export const BridgeSelectorHeader = (): FunctionComponent => {
   return (
      <div className="flex flex-col p-8 xl:mx-28">
         <div className="flex items-center gap-2 mb-4">
            <div className="text-primary text-3xl">
               <IoMdSwap title="Swap icon" />
            </div>
            <p className="text-3xl xl:text-4xl">
               Which type of swap do you want to do?
            </p>
         </div>
         <p className="text-lg xl:text-xl">
            Select the type of swap that you want to do
         </p>
      </div>
   );
};
