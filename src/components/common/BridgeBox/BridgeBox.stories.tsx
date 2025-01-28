import type { Meta, StoryFn } from "@storybook/react";
import { BridgeBox } from "./BridgeBox";
import { BridgeTypeEnum } from "@/enums";
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
            options: [BridgeTypeEnum.EVM_TO_QUBIC, BridgeTypeEnum.QUBIC_TO_EVM],
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
   type: BridgeTypeEnum.EVM_TO_QUBIC,
   text: "EVM to Qubic Swap",
   logoFrom: ETHFrom,
   logoTo: QubicFrom,
};

export const QubicToEvm = Template.bind({});
QubicToEvm.args = {
   type: BridgeTypeEnum.QUBIC_TO_EVM,
   text: "Qubic to EVM Swap",
   logoFrom: ETHTo,
   logoTo: QubicTo,
};
