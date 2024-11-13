import type { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo";

export default {
   title: "Components/Logo",
   component: Logo,
} as Meta;

const Template: StoryFn = () => <Logo />;

export const Default = Template.bind({});
Default.storyName = "Main Logo";
