/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { MetaMaskInpageProvider } from "@metamask/providers";
import {
   createContext,
   useContext,
   useEffect,
   useState,
   useMemo,
   memo,
   type ReactNode,
} from "react";

import type { Snap } from "@/types";
import { getSnapsProvider } from "@/components/utils";

type MetaMaskContextType = {
   provider: MetaMaskInpageProvider | null;
   installedSnap: Snap | null;
   error: Error | null;
   setInstalledSnap: (snap: Snap | null) => void;
   setError: (error: Error) => void;
};

export const MetaMaskContext = createContext<MetaMaskContextType>({
   provider: null,
   installedSnap: null,
   error: null,
   setInstalledSnap: () => {
      /* no-op */
   },
   setError: () => {
      /* no-op */
   },
});

/**
 * MetaMask context provider to handle MetaMask and snap status.
 *
 * @param props - React Props.
 * @param props.children - React component to be wrapped by the Provider.
 * @returns JSX.
 */
export const MetaMaskProvider = memo(
   ({ children }: { children: ReactNode }) => {
      const [provider, setProvider] = useState<MetaMaskInpageProvider | null>(
         null
      );
      const [installedSnap, setInstalledSnap] = useState<Snap | null>(null);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
         getSnapsProvider().then(setProvider).catch(console.error);
      }, []);

      useEffect(() => {
         if (error) {
            const timeout = setTimeout(() => {
               setError(null);
            }, 10000);

            return (): void => {
               clearTimeout(timeout);
            };
         }

         return undefined;
      }, [error]);

      const contextValue = useMemo(
         () => ({
            provider,
            error,
            setError,
            installedSnap,
            setInstalledSnap,
         }),
         [provider, error, installedSnap]
      );

      return (
         <MetaMaskContext.Provider value={contextValue}>
            {children}
         </MetaMaskContext.Provider>
      );
   }
);

/**
 * Utility hook to consume the MetaMask context.
 *
 * @returns The MetaMask context.
 */
export function useMetaMaskContext() {
   return useContext(MetaMaskContext);
}
