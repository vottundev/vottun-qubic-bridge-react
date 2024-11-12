import { Outlet } from "@tanstack/react-router";
////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { Header } from "./Header";

export const Layout = (): FunctionComponent => {
   return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
         <Header /> 🎸
         <div>
            <Outlet />
         </div>
      </div>
   );
};
