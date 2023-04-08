import React from "react";

import Brand from "./Brand";

export default {
  title: "Components/BrandA",
  component: Brand,

  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    description: { control: "text" },
    compBackground: {
      control: {
        type: "select",
        options: ["blue", "white", "red", "green", "yellow"],
      },
    },
  },
};

const Template = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Possit etimam",
  subtitle: "Morbi eget efficitur nunc.",
  description:
    "A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
  hideUnderline: false,
  compBackground: "blue",
};
