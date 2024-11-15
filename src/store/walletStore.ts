import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { BridgeTypeProps } from "@/components/common";
import { BridgeType } from "@/common/types";

interface Wallet {
   address: `0x${string}` | undefined;
   isConnected: boolean;
}

interface WalletState {
   environment: BridgeTypeProps | undefined;
   evmAddress: Wallet;
   qubicAddress: Wallet;
   setEnvironment: (env: BridgeTypeProps) => void;
   connectEvm: (payload: Wallet) => void;
   connectQubic: (payload: Wallet) => void;
   disconnectEvm: () => void;
   disconnectQubic: () => void;
}

const walletInitialState: Wallet = {
   address: undefined,
   isConnected: false,
};

export const useWalletStore = create<WalletState>()(
   devtools(
      persist(
         (set) => ({
            environment: BridgeType.EVM_TO_QUBIC,
            evmAddress: walletInitialState,
            qubicAddress: walletInitialState,
            setEnvironment: (payload: BridgeTypeProps): void => {
               set((state) => ({ ...state, environment: payload }));
            },
            connectEvm: (payload: Wallet): void => {
               set((state) => ({ ...state, evmAddress: payload }));
            },
            connectQubic: (payload: Wallet): void => {
               set((state) => ({ ...state, qubicAddress: payload }));
            },
            disconnectEvm: (): void => {
               set((state) => ({
                  ...state,
                  evmAddress: walletInitialState,
               }));
            },
            disconnectQubic: (): void => {
               set((state) => ({
                  ...state,
                  qubicAddress: walletInitialState,
               }));
            },
         }),
         {
            name: "walletStore",
         }
      )
   )
);
