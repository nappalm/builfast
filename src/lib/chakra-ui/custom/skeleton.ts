import {
  cssVar,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/styled-system";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const baseStyle = defineStyle({
  [$startColor.variable]: "colors.base.200",
  [$endColor.variable]: "colors.base.300",
  _dark: {
    [$startColor.variable]: "colors.base.200",
    [$endColor.variable]: "colors.base.300",
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "lg",
});

export default defineStyleConfig({
  baseStyle,
});
