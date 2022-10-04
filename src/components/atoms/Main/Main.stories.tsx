import { ComponentMeta, ComponentStory } from "@storybook/react";
import Main from ".";

export default {
  title: "Atoms/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => (
  <Main>
    <h1>Welcome To React</h1>
  </Main>
);

export const Basic = Template.bind({});
