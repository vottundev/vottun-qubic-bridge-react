import type { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
   title: "Shadcn/Label",
   component: Label,
   args: {
      children: "Example Label",
   },
   argTypes: {
      className: {
         control: "text",
         description: "Optional additional CSS classes.",
      },
   },
};

export default meta;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
   children: "Default Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
   children: "Disabled Label",
   className: "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
};
