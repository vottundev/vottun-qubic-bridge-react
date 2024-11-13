import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { isProduction } from "./src/common/utils";

const config = getDefaultConfig({
   appName: "Qubic Bridge",
   projectId: "8c7f8b30e03a8597ae308bbecd220154",
   chains: isProduction ? [mainnet] : [mainnet, sepolia],
   transports: isProduction
      ? {
           [mainnet.id]: http(),
        }
      : {
           [mainnet.id]: http(),
           [sepolia.id]: http(),
        },
});

export default config;
