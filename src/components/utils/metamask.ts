/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { MetaMaskInpageProvider } from "@metamask/providers";

/**
 * Check if the current provider supports snaps by calling `wallet_getSnaps`.
 *
 * @param provider - The provider to use to check for snaps support. Defaults to
 * `window.ethereum`.
 * @returns True if the provider supports snaps, false otherwise.
 */
export async function hasSnapsSupport(
   provider: MetaMaskInpageProvider = window.ethereum
) {
   try {
      await provider.request({
         method: "wallet_getSnaps",
      });

      return true;
   } catch {
      return false;
   }
}

/**
 * Get a provider that supports snaps. This will loop through all the detected
 * providers and return the first one that supports snaps.
 *
 * @returns The provider, or `null` if no provider supports snaps.
 */
export async function getSnapsProvider() {
   // debugger;
   if (typeof window === "undefined") {
      return null;
   }

   if (await hasSnapsSupport()) {
      return window.ethereum;
   }

   if (window.ethereum?.detected) {
      for (const provider of window.ethereum.detected) {
         if (await hasSnapsSupport(provider)) {
            return provider;
         }
      }
   }

   if (window.ethereum?.providers) {
      for (const provider of window.ethereum.providers) {
         if (await hasSnapsSupport(provider)) {
            return provider;
         }
      }
   }

   //  if (eip6963Provider && (await hasSnapsSupport(eip6963Provider))) {
   //     return eip6963Provider;
   //  }

   return null;
}
