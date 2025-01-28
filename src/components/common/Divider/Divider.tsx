import { FaArrowDown } from "react-icons/fa6";
import type { FunctionComponent } from "@/common/types";

export const Divider: React.FC = (): FunctionComponent => {
   return (
      <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center -my-[16px] mx-auto z-50 relative text-black font-bold text-xl">
         <FaArrowDown />
      </div>
   );
};
