import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
};

// const Template = (args) => {
//   <Button {...args} />;
// };

// export const Success = Template.bind({})
// Success.args = {
//     variantColor
// }

export const Success = () => {
  <Button colorScheme="green">Button</Button>;
};

export const Danger = () => {
  <Button colorScheme="red">Button</Button>;
};
