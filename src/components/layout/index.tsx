import { Outlet } from "@tanstack/react-router";
////////////////////////////////////////////////////////
import type { FunctionComponent } from "@/common/types";
import { Header } from "./Header";

export const Layout = (): FunctionComponent => {
   return (
      <div className="w-screen h-screen">
         <Header />

         <div className="container mx-auto px-12">
            <Outlet />
         </div>
      </div>
   );
};
