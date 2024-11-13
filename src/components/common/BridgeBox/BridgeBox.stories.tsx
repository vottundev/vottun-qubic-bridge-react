import type { Meta, StoryFn } from "@storybook/react";
import { BridgeBox } from "./BridgeBox";
import ETHFrom from "@/assets/images/eth-from.svg";
import QubicFrom from "@/assets/images/qubic-from.svg";
import ETHTo from "@/assets/images/eth-to.svg";
import QubicTo from "@/assets/images/qubic-to.svg";

export default {
   title: "Components/BridgeBox",
   component: BridgeBox,
   argTypes: {
      type: {
         control: {
            type: "radio",
            options: ["evm-qubic", "qubic-evm"],
         },
      },
      text: { control: "text" },
      logoFrom: { control: "text" },
      logoTo: { control: "text" },
   },
} as Meta<typeof BridgeBox>;

const Template: StoryFn<typeof BridgeBox> = (args) => (
   <div style={{ width: "400px", margin: "50px auto" }}>
      <BridgeBox {...args} />
   </div>
);

export const EvmToQubic = Template.bind({});
EvmToQubic.args = {
   type: "evm-qubic",
   text: "EVM to Qubic Swap",
   logoFrom: ETHFrom,
   logoTo: QubicFrom,
};

export const QubicToEvm = Template.bind({});
QubicToEvm.args = {
   type: "qubic-evm",
   text: "Qubic to EVM Swap",
   logoFrom: ETHTo,
   logoTo: QubicTo,
};
