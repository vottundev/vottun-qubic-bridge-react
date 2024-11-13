////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";

interface SwapperProps {
   stepBack: () => void;
}

export const Swapper: React.FC<SwapperProps> = (): FunctionComponent => {
   return <div className="flex items-center justify-center p-8"></div>;
};
