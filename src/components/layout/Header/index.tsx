import type { FunctionComponent } from "@/common/types";
import { Logo } from "./Logo";
// import { ConnectEvmButton } from "@/components/ui";

export const Header = (): FunctionComponent => {
   return (
      <div className="container mx-auto flex justify-center py-10">
         <Logo />
         {/* <ConnectEvmButton /> */}
      </div>
   );
};
