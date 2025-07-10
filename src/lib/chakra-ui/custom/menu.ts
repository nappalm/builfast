import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    py: 0,
    bg: "menu.bg",
    border: "1px solid",
    borderColor: "menu.border",
    p: 1,
    boxShadow: "md",
  },
  item: {
    bg: "transparent",
    borderTopRadius: "inherit",
    borderBottomRadius: "inherit",
    fontWeight: 500,
    fontSize: "sm",
    _focus: {
      bg: "menu.border",
    },
  },
  //   command: {
  //     // this will style the text defined by the command
  //     // prop in the MenuItem and MenuItemOption components
  //     opacity: '0.8',
  //     fontFamily: 'mono',
  //     fontSize: 'sm',
  //     letterSpacing: 'tighter',
  //     pl: '4',
  //   },
  divider: {
    my: 1,
    borderBottom: "1px solid",
    borderColor: "menu.border",
  },
});
// export the base styles in the component theme
export default defineMultiStyleConfig({ baseStyle });
