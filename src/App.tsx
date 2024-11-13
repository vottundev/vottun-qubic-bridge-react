import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
//////////////////////////////////////////////////////////////////////////////
import config from "../wagmi.config";
import type { FunctionComponent } from "@/common/types";
import { TanStackRouterDevelopmentTools } from "@/components/utils/development-tools/TanStackRouterDevelopmentTools";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
   return (
      <WagmiProvider config={config}>
         <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
               appInfo={{
                  appName: "Qubic Bridge",
                  learnMoreUrl: "",
               }}
               theme={darkTheme({
                  accentColor: "#111927",
                  accentColorForeground: "white",
                  overlayBlur: "small",
               })}
            >
               <RouterProvider router={router} />
               <TanStackRouterDevelopmentTools
                  initialIsOpen={false}
                  position="bottom-left"
                  router={router}
               />
               <ReactQueryDevtools initialIsOpen={false} />
            </RainbowKitProvider>
         </QueryClientProvider>
      </WagmiProvider>
   );
};

export default App;
