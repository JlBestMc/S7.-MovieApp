import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Features/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Footer component for MovieApp, including logo, navigation links, legal info, and contact details.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
