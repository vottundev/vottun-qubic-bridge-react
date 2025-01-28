import type { FunctionComponent } from "@/common/types";
import { memo } from "react";
import LogoImage from "@/assets/images/main-logo.svg";

export const Logo = memo((): FunctionComponent => {
   return <img alt="Qubic Bridge" src={LogoImage} />;
});
