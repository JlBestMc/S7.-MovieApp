import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Navbar> = {
  title: "Features/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="bg-gray-900 min-h-screen p-4">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
