import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: "xl",
  },
  header: {},
  body: {},
  footer: {},
});

const secondaryVariant = definePartsStyle((props) => ({
  container: {
    boxShadow: "none",
    // background: mode(
    //   "linear-gradient(160deg, rgba(200, 200, 200, 1) 0%, rgba(240, 240, 240, 1) 100%)",
    //   "linear-gradient(140deg, #ffffff30 0%, #ffffff00 100%)",
    // )(props),
    bg: "card.bg",
    borderWidth: "1px",
    borderColor: "card.border",
    transition: "all ease-in-out 300ms",
  },
  body: {
    // bg: mode("#f5f5f5", "nocturnal.500")(props),
    // m: "0.090rem",
    borderRadius: "10px",
    padding: "13px",
    // _after: {
    //   content: "''",
    //   position: "absolute",
    //   backgroundImage: "radial-gradient(circle, #ffffff20, #fff0 50%)",
    //   bottom: "0px",
    //   left: "0",
    //   right: "0",
    //   height: "1px",
    //   width: "100%",
    // },
  },
}));

const sizes = {};
const variants = {
  secondary: secondaryVariant,
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
});
