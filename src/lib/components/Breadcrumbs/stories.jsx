import React from "react";
import { Breadcrumb } from "./index";
export default {
  title: "Menu/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    links: {
      type: "array",
    },
   
  },
};

export const Default = (args) => <Breadcrumb {...args} />;
Default.args = {
  links:['History', 'Create', 'Settings' ],

};
