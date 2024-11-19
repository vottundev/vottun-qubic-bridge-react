export interface Wallet<TAddress = string> {
   address: TAddress | undefined;
   isConnected: boolean;
}

export type EvmWallet = Wallet<`0x${string}`>;
export type QubicWallet = Wallet<string>;
