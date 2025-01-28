import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
/////////////////////////////////////////////////////////////
import type { EvmWallet, QubicWallet } from "@/types/wallet";

interface WalletState {
   evmAddress: EvmWallet;
   qubicAddress: QubicWallet;
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
            evmAddress: evmWalletInitialState,
            qubicAddress: qubicWalletInitialState,
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
