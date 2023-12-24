import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";
type ComponentType = typeof Button;

const meta = {
  component: Button,
} satisfies Meta<ComponentType>;

export default meta;

type Story = StoryObj<ComponentType>;

export const Default = {
  args: {
    children: "ボタン",
    size: "4",
    color: "green",
  },
} satisfies Story;

export const Disabled = {
  args: {
    children: "非活性ボタン",
    size: "4",
    disabled: true,
  },
} satisfies Story;
