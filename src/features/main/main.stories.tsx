import type { Meta, StoryObj } from "@storybook/react-vite";
import Main from "./main";

const meta: Meta<typeof Main> = {
  title: "Features/Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Main component that displays a rectangle image. This is the main content area of the application.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {};

// Story with dark background
export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Main Content Area
          </h1>
          <Story />
        </div>
      </div>
    ),
  ],
};
