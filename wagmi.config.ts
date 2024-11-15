import { http } from "wagmi";
import { arbitrum, arbitrumSepolia, mainnet, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { isProduction } from "./src/common/utils";

const config = getDefaultConfig({
   appName: "Qubic Bridge",
   projectId: "8c7f8b30e03a8597ae308bbecd220154",
   chains: isProduction
      ? [mainnet, arbitrum]
      : [mainnet, sepolia, arbitrum, arbitrumSepolia],
   transports: isProduction
      ? {
           [mainnet.id]: http(),
           [arbitrum.id]: http(),
        }
      : {
           [mainnet.id]: http(),
           [sepolia.id]: http(),
           [arbitrum.id]: http(),
           [arbitrumSepolia.id]: http(),
        },
});

export default config;
