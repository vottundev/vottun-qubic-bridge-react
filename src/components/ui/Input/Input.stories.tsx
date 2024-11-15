import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
   title: "Shadcn/Input",
   component: Input,
   argTypes: {
      type: {
         control: { type: "select" },
         options: ["text", "password", "email", "number"],
      },
      placeholder: { control: "text" },
      disabled: { control: "boolean" },
   },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
   args: {
      type: "text",
      placeholder: "Enter text...",
   },
};

export const Password: Story = {
   args: {
      type: "password",
      placeholder: "Enter your password...",
   },
};

export const File: Story = {
   args: {
      type: "file",
      placeholder: "Upload a file...",
   },
};

export const Disabled: Story = {
   args: {
      type: "text",
      placeholder: "This input is disabled",
      disabled: true,
   },
};
