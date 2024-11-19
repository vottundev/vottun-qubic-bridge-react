/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { RequestArguments } from "@metamask/providers";

import { useMetaMaskContext } from "./MetamaskContext";

export type Request = (parameters: RequestArguments) => Promise<unknown | null>;

/**
 * Utility hook to consume the provider `request` method with the available provider.
 *
 * @returns The `request` function.
 */
export const useRequest = () => {
   const { provider, setError } = useMetaMaskContext();

   /**
    * `provider.request` wrapper.
    *
    * @param parameters - The request params.
    * @param params.method - The method to call.
    * @param params.params - The method params.
    * @returns The result of the request.
    */
   const request: Request = async ({ method, params }) => {
      try {
         const data =
            (await provider?.request({
               method,
               params,
            } as RequestArguments)) ?? null;

         return data;
      } catch (requestError: any) {
         setError(requestError);

         return null;
      }
   };

   return request;
};
