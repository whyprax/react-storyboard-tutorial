import React from "react";
import Button from "./Button";
// import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  // args: {
  //   children: "button wala story",
  // },
  // decorators: [
  //   (Story) => (
  //     <Center>
  //       <Story />
  //     </Center>
  //   ),
  // ],
  argTypes: {
    children: { control: "text" },
    onClick: {
      action: "Clicked",
    },
  },
};

// export const Primary = () => <Button variant="primary">Primary</Button>;
// Primary.storyName = "I am the primary";

export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
//   // children: "Button",
// };
