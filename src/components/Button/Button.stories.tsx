import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button story
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Danger button story
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

// Disabled button stories
export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const DangerDisabled: Story = {
  args: {
    variant: "danger",
    children: "Disabled Button",
    disabled: true,
  },
};

// Different button types
export const SubmitButton: Story = {
  args: {
    variant: "primary",
    type: "submit",
    children: "Submit Form",
  },
};

export const ResetButton: Story = {
  args: {
    variant: "secondary",
    type: "reset",
    children: "Reset Form",
  },
};

// Long text example
export const LongText: Story = {
  args: {
    variant: "primary",
    children: "This is a button with very long text content",
  },
};

// Small text example
export const SmallText: Story = {
  args: {
    variant: "primary",
    children: "OK",
  },
};
