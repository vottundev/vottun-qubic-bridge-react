import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
////////////////////////////////////////////////////////
import type { BridgeTypeProps } from "@/types";
import type { BridgeToken } from "@/interfaces";
import { BridgeTypeEnum } from "@/enums";

interface BridgeState {
   environment: BridgeTypeEnum | undefined;
   fromToken: BridgeToken;
   toToken: BridgeToken;
   setEnvironment: (env: BridgeTypeProps) => void;
   setFromToken: (token: BridgeToken) => void;
   setToToken: (token: BridgeToken) => void;
}

export const useBridgeStore = create<BridgeState>()(
   devtools(
      persist(
         (set) => ({
            environment: BridgeTypeEnum.EVM_TO_QUBIC,
            fromToken: {} as BridgeToken,
            toToken: {} as BridgeToken,
            setEnvironment: (payload: BridgeTypeEnum): void => {
               set((state) => ({ ...state, environment: payload }));
            },
            setFromToken: (payload: BridgeToken): void => {
               set((state) => ({ ...state, fromToken: payload }));
            },
            setToToken: (payload: BridgeToken): void => {
               set((state) => ({ ...state, toToken: payload }));
            },
         }),
         {
            name: "bridgeStore",
         }
      )
   )
);
