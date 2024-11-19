import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { BridgeTypeProps } from "@/components/common";
import type { EvmWallet, QubicWallet } from "@/types/wallet";
import { BridgeType } from "@/common/types";

interface WalletState {
   environment: BridgeTypeProps | undefined;
   evmAddress: EvmWallet;
   qubicAddress: QubicWallet;
   setEnvironment: (env: BridgeTypeProps) => void;
   connectEvm: (payload: EvmWallet) => void;
   connectQubic: (payload: QubicWallet) => void;
   disconnectEvm: () => void;
   disconnectQubic: () => void;
}

const evmWalletInitialState: EvmWallet = {
   address: undefined,
   isConnected: false,
};

const qubicWalletInitialState: QubicWallet = {
   address: undefined,
   isConnected: false,
};

export const useWalletStore = create<WalletState>()(
   devtools(
      persist(
         (set) => ({
            environment: BridgeType.EVM_TO_QUBIC,
            evmAddress: evmWalletInitialState,
            qubicAddress: qubicWalletInitialState,
            setEnvironment: (payload: BridgeTypeProps): void => {
               set((state) => ({ ...state, environment: payload }));
            },
            connectEvm: (payload: EvmWallet): void => {
               set((state) => ({ ...state, evmAddress: payload }));
            },
            connectQubic: (payload: QubicWallet): void => {
               set((state) => ({ ...state, qubicAddress: payload }));
            },
            disconnectEvm: (): void => {
               set((state) => ({
                  ...state,
                  evmAddress: evmWalletInitialState,
               }));
            },
            disconnectQubic: (): void => {
               set((state) => ({
                  ...state,
                  qubicAddress: qubicWalletInitialState,
               }));
            },
         }),
         {
            name: "walletStore",
         }
      )
   )
);
