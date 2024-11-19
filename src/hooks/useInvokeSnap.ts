/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { defaultSnapOrigin } from "@/config";
import { useRequest } from "./useRequest";

export type InvokeSnapParameters = {
   method: string;
   params?: Record<string, unknown>;
};

/**
 * Utility hook to wrap the `wallet_invokeSnap` method.
 *
 * @param snapId - The Snap ID to invoke. Defaults to the snap ID specified in the
 * config.
 * @returns The invokeSnap wrapper method.
 */
export const useInvokeSnap = (snapId = defaultSnapOrigin) => {
   const request = useRequest();

   /**
    * Invoke the requested Snap method.
    *
    * @param params - The invoke params.
    * @param params.method - The method name.
    * @param params.params - The method params.
    * @returns The Snap response.
    */
   const invokeSnap = async ({
      method,
      params,
   }: InvokeSnapParameters): Promise<unknown> =>
      request({
         method: "wallet_invokeSnap",
         params: {
            snapId,
            request: params ? { method, params } : { method },
         },
      });

   return invokeSnap;
};
