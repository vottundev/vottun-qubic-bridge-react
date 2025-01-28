export interface BridgeToken {
   name: string;
   symbol: string;
   image: string;
}

export interface BridgeExchange {
   exchange: {
      tokenAmount: number;
      fiatAmount: number;
      gasPrice: number;
      estimateDuration: string;
      fees: number;
   };
   fromNetwork: BridgeToken;
   toNetwork: BridgeToken;
}
