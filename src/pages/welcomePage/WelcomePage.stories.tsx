import type { Meta, StoryObj } from "@storybook/react-vite";
import WelcomePage from "./WelcomePage";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof WelcomePage> = {
  title: "Pages/WelcomePage",
  component: WelcomePage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "MoviePage is a complete page component that combines the Navbar and Main content areas. It represents the main movie listing or detail page of the application.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/movies"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {};
