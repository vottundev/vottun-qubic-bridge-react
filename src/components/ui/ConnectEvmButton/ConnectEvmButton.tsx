import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";
///////////////////////////////////////////////////
import "./ConnectEvmButton.styles.css";
import type { FunctionComponent } from "@/common/types";
import { Button } from "@/components/ui";

interface Styles {
   container: React.CSSProperties;
   mediaQuery: React.CSSProperties;
}

export const ConnectEvmButton = (): FunctionComponent => {
   return (
      <Connect.Custom>
         {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
         }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
               ready &&
               account &&
               chain &&
               (!authenticationStatus ||
                  authenticationStatus === "authenticated");

            return (
               <div
                  {...(!ready && {
                     "aria-hidden": true,
                     style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                     },
                  })}
               >
                  {((): FunctionComponent => {
                     if (!connected) {
                        return (
                           <Button
                              className="px-0"
                              size="sm"
                              type="button"
                              onClick={openConnectModal}
                           >
                              Connect EVM Wallet
                           </Button>
                        );
                     }

                     if (chain.unsupported) {
                        return (
                           <button
                              className="wrong-network"
                              type="button"
                              onClick={openChainModal}
                           >
                              Wrong network
                           </button>
                        );
                     }

                     const styles: Styles = {
                        container: {
                           display: "flex",
                           gap: 24,
                           justifyContent: "center",
                           alignItems: "center",
                           flexDirection: "row",
                        },
                        mediaQuery: {
                           flexDirection: "column",
                           justifyContent: "flex-start",
                        },
                     };

                     return (
                        <div
                           style={{
                              ...styles.container,
                              ...(window.innerWidth <= 768 &&
                                 styles.mediaQuery),
                           }}
                        >
                           <button
                              className="network-selector"
                              type="button"
                              style={{
                                 display: "flex",
                                 alignItems: "center",
                              }}
                              onClick={openChainModal}
                           >
                              {chain.hasIcon && window.innerWidth >= 768 && (
                                 <div
                                    style={{
                                       background: chain.iconBackground,
                                       width: 20,
                                       height: 20,
                                       borderRadius: 999,
                                       overflow: "hidden",
                                       marginRight: 4,
                                    }}
                                 >
                                    {chain.iconUrl && (
                                       <img
                                          alt={chain.name ?? "Chain icon"}
                                          src={chain.iconUrl}
                                          style={{
                                             width: 20,
                                             height: 20,
                                          }}
                                       />
                                    )}
                                 </div>
                              )}
                              {chain.name}
                           </button>

                           <Button
                              size="default"
                              type="button"
                              onClick={openAccountModal}
                           >
                              {account.displayName}

                              <span
                                 style={{
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    // paddingLeft: "15px",
                                 }}
                              >
                                 {account.displayBalance
                                    ? ` (${account.displayBalance})`
                                    : ""}
                              </span>
                           </Button>
                        </div>
                     );
                  })()}
               </div>
            );
         }}
      </Connect.Custom>
   );
};
