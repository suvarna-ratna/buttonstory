import React from "react";
import C2 from "./C2";

export default {
  title: "Components / C2 Component",
  component: C2,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: "clicked" },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export const Co2 = (args) => <C2 {...args}/>;
Co2.args={
  backgroundColor: 'green'
}