import type { FunctionComponent } from "@/common/types";
import LogoImage from "@/assets/images/main-logo.svg";

export const Logo = (): FunctionComponent => {
   return <img alt="Qubic Bridge" src={LogoImage} />;
};
