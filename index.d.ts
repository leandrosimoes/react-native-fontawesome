declare module "react-native-fontawesome" {
  import React from "react";
  import { TextProperties } from "react-native";
  export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "react-native-fontawesome/FontAwesomeIcons";

  interface IIconProps extends TextProperties {
    icon: string
  }

  const Icon: React.ComponentClass<IIconProps>;
  export default Icon;
}
