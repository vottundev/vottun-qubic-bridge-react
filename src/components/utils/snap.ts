/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Snap } from "@/types";
/**
 * Check if a snap ID is a local snap ID.
 *
 * @param snapId - The snap ID.
 * @returns True if it's a local Snap, or false otherwise.
 */
export const isLocalSnap = (snapId: string) => snapId.startsWith("local:");
export const shouldDisplayReconnectButton = (installedSnap: Snap | null) =>
   installedSnap && isLocalSnap(installedSnap?.id);
