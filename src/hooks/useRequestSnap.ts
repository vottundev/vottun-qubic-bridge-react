/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defaultSnapOrigin } from "@/config";
import type { Snap } from "../types";
import { useMetaMaskContext } from "./MetamaskContext";
import { useRequest } from "./useRequest";

/**
 * Utility hook to wrap the `wallet_requestSnaps` method.
 *
 * @param snapId - The requested Snap ID. Defaults to the snap ID specified in the
 * config.
 * @param version - The requested version.
 * @returns The `wallet_requestSnaps` wrapper.
 */
export const useRequestSnap = (snapId = defaultSnapOrigin) => {
   const request = useRequest();
   const { setInstalledSnap } = useMetaMaskContext();

   /**
    * Request the Snap.
    */
   const requestSnap = async (): Promise<void> => {
      const snaps = (await request({
         method: "wallet_requestSnaps",
         params: {
            "npm:@qubic-lib/qubic-mm-snap": {},
         },
      })) as Record<string, Snap>;

      console.log("Snaps:", snaps);

      // Updates the `installedSnap` context variable since we just installed the Snap.
      setInstalledSnap(snaps?.[snapId] ?? null);
   };

   return requestSnap;
};
