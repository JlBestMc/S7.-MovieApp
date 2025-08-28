import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter as Router } from 'react-router-dom';
import ActorDetailsPage from './ActorDetailsPage';

const meta: Meta<typeof ActorDetailsPage> = {
  title: 'Pages/ActorDetailsPage',
  component: ActorDetailsPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
