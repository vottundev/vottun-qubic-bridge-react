import React from "react";
///////////////////////////////////////////////
// import { ReactComponent as FlaskFox } from "@/assets/images/flask_fox.svg";
import { Button } from "@/components/ui";

export const InstallFlaskButton = React.memo(
   (): JSX.Element => (
      <a href="https://metamask.io/flask/" target="_blank">
         <Button className="flex items-center gap-2">
            {/* <FlaskFox /> */}
            <p>Install MetaMask Flask</p>
         </Button>
      </a>
   )
);
