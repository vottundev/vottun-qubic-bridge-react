import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

// interface ComboChainsProps {
//    wallet: QubicWallet;
// }
import { cn } from "@/lib/utils";

import {
   Button,
   Command,
   CommandGroup,
   CommandItem,
   CommandList,
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui";
import EthIcon from "@/assets/images/eth-icon.png";
import ArbIcon from "@/assets/images/arbitrum-icon.png";

const chains = [
   {
      value: "eth",
      label: {
         name: "Ethereum Mainnet",
         icon: EthIcon,
      },
   },
   {
      value: "arb",
      label: {
         name: "Arbitrum Mainnet",
         icon: ArbIcon,
      },
   },
];

export const ComboChains: React.FC = () => {
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = React.useState("eth");

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               aria-expanded={open}
               className="px-4 h-8 justify-between border-none hover:bg-slate-800 hover:text-white bg-slate-900 rounded-full"
               role="combobox"
               variant="outline"
            >
               {value ? (
                  <>
                     <img
                        className="h-4 w-4"
                        alt={
                           chains.find((chain) => chain.value === value)?.label
                              .name
                        }
                        src={
                           chains.find((chain) => chain.value === value)?.label
                              .icon
                        }
                     />
                     <span className="text-sm ml-1">
                        {
                           chains.find((chain) => chain.value === value)?.label
                              .name
                        }
                     </span>
                  </>
               ) : (
                  "Select chain..."
               )}
               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="p-2 border-none bg-transparent">
            <Command>
               {/* <CommandInput placeholder="Search chain..." /> */}
               <CommandList>
                  {/* <CommandEmpty>No chain found.</CommandEmpty> */}
                  <CommandGroup>
                     {chains.map((chain) => (
                        <CommandItem
                           key={chain.value}
                           className="my-2 bg-slate-900 rounded-full"
                           value={chain.value.toString()}
                           onSelect={(currentValue) => {
                              setValue(
                                 currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                           }}
                        >
                           <Check
                              className={cn(
                                 "mr-1 h-3 w-3 text-white",
                                 value === chain.value
                                    ? "opacity-100"
                                    : "opacity-0"
                              )}
                           />
                           <img
                              alt={chain.label.name}
                              className="h-6 w-6"
                              src={chain.label.icon}
                           />
                           <span className="text-base">{chain.label.name}</span>
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
};
