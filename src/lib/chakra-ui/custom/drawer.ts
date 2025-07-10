import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system";
import { runIfFn } from "../utils/run-if-fn";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $bg = cssVar("drawer-bg");
const $bs = cssVar("drawer-box-shadow");

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === "full") {
    return definePartsStyle({
      dialog: { maxW: "100vw", h: "100vh" },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
}

const baseStyleOverlay = defineStyle({
  zIndex: "modal",
  bg: "transparent",
});

const baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center",
});

const baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: "100vh" }),
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    border: "1px solid",
    borderColor: "drawer.border",
    [$bg.variable]: "colors.drawer.bg",
    [$bs.variable]: "none",
    _dark: {
      [$bg.variable]: "colors.drawer.bg",
      [$bs.variable]: "red",
    },
    bg: $bg.reference,
    m: 2,
    borderRadius: "lg",
  };
});

const baseStyleHeader = defineStyle({
  fontSize: "xl",
});

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: 0,
  left: -10,
  border: "",
  color: "#fff",
  bg: "drawer.closeButton",
  _active: { bg: "drawer.closeButton" },
  borderRadius: "xl",
  fontSize: "10px",
});

const baseStyleBody = defineStyle({
  px: "12",
  py: "12",
  flex: "1",
  overflow: "auto",
});

const baseStyleFooter = defineStyle({
  px: "6",
  py: "4",
});

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter,
}));

const sizes = {
  xs: getSize("xs"),
  sm: getSize("md"),
  md: getSize("lg"),
  lg: getSize("2xl"),
  xl: getSize("4xl"),
  full: getSize("full"),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
});
