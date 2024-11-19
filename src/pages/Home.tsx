import { useCallback, useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { toast } from "sonner";
import { Step, Stepper } from "react-form-stepper";
////////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { BridgeConnection, BridgeSelector, Swapper } from "@/components/common";

export const Home = (): FunctionComponent => {
   /*********************
	// #region Hooks
	**********************/
   const account = useAccount();
   const { disconnect } = useDisconnect();

   /*********************
	// #region States
	**********************/
   const [activeStep, setActiveStep] = useState<number>(0);

   /*********************
	// #region Functions
	**********************/
   const handleStepForward = useCallback(() => {
      setActiveStep((previous) => previous + 1);
   }, []);

   const handleStepBack = useCallback(() => {
      setActiveStep((previous) => previous - 1);
   }, []);

   const resetProcess = useCallback(
      (shouldDisconnect: boolean) => {
         if (!shouldDisconnect) {
            setActiveStep(0);
            return;
         }

         disconnect();
         setActiveStep(0);

         toast.success(
            `Account ${account.address} has been disconnected from ${account.chain!.name} succesfully`
         );
      },
      [disconnect, account.address, account.chain]
   );

   useEffect(() => {
      if (account.isConnected) {
         setActiveStep(1);
         return;
      }

      setActiveStep(0);
   }, [account.isConnected]);

   return (
      <div className="mx-0 xl:mx-24">
         <Stepper
            activeStep={activeStep}
            connectorStyleConfig={{
               disabledColor: "#B3B3B3",
               activeColor: "#1BDEF5",
               completedColor: "#008C9C",
               size: "0.01em",
               stepSize: "3em",
               style: "solid",
            }}
            styleConfig={{
               activeBgColor: "#1BDEF5",
               activeTextColor: "#fff",
               completedBgColor: "#008C9C",
               completedTextColor: "#fff",
               inactiveBgColor: "#B3B3B3",
               inactiveTextColor: "#fff",
               size: "3em",
               circleFontSize: "1.3em",
               labelFontSize: "1rem",
               borderRadius: "100%",
               fontWeight: "500",
               fontFamily: '"Kumbh Sans", "sans-serif"',
            }}
         >
            <Step
               label="Select"
               onClick={() => {
                  resetProcess(account.isConnected);
               }}
            />
            <Step label="Connect" />
            <Step label="Bridge" />
         </Stepper>

         {activeStep === 0 && (
            <BridgeSelector stepForward={handleStepForward} />
         )}
         {activeStep === 1 && (
            <BridgeConnection stepForward={handleStepForward} />
         )}
         {activeStep === 2 && <Swapper stepBack={handleStepBack} />}
      </div>
   );
};
