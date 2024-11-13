import type { FunctionComponent } from "@/common/types";
import { Logo } from "./Logo";

export const Header = (): FunctionComponent => {
   return (
      <div className="flex justify-center py-10">
         <Logo />
      </div>
   );
};
