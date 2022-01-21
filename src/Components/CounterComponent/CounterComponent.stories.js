import React from "react";

import CounterComponent from "./CounterComponent";

export default {
  title: "Components / Counter Component",
  component: CounterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: "clicked" },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export const Component = (args) => <CounterComponent {...args}/>;
Component.args={
  backgroundColor: 'green'
}

export const Component2 = (args) => <CounterComponent {...args}/>;
Component2.args={
  backgroundColor: 'blue'
}

export const Component3 = (args) => <CounterComponent {...args}/>;
