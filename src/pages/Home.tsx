import { useCallback, useState } from "react";
import { Step, Stepper } from "react-form-stepper";
////////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { BridgeSelector, Swapper } from "@/components/common";

export const Home = (): FunctionComponent => {
   /*********************
	// #region States
	**********************/
   const [activeStep, setActiveStep] = useState<number>(0);

   /*********************
	// #region States
	**********************/
   const handleStepCompleted = useCallback(() => {
      setActiveStep((previous) => previous + 1);
   }, []);

   const handleStepBack = useCallback(() => {
      setActiveStep((previous) => previous - 1);
   }, []);

   return (
      <div className="mx-24">
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
                  setActiveStep(0);
               }}
            />
            <Step
               label="Bridge"
               onClick={() => {
                  console.log("clicked");
                  setActiveStep(1);
               }}
            />
         </Stepper>

         {activeStep === 0 && (
            <BridgeSelector isCompleted={handleStepCompleted} />
         )}
         {activeStep === 1 && <Swapper stepBack={handleStepBack} />}
      </div>
   );
};
