import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system";
import { runIfFn } from "../utils/run-if-fn";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $bg = cssVar("modal-bg");
const $shadow = cssVar("modal-shadow");

const baseStyleOverlay = defineStyle({
  bg: "modal.overlay",
  zIndex: "modal",
});

const baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none",
  };
});

const baseStyleDialog = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    borderRadius: "xl",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : undefined,
    border: "1px solid",
    borderColor: "modal.border",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
    [$bg.variable]: "colors.modal.bg",
    [$shadow.variable]: "none",
    _dark: {
      [$bg.variable]: "colors.modal.bg",
      [$shadow.variable]: "none",
    },
    bg: $bg.reference,
    boxShadow: $shadow.reference,
  };
});

const baseStyleHeader = defineStyle({
  px: 5,
  py: 5,
  fontSize: "2xl",
  fontWeight: 600,
  letterSpacing: "-0.01em",
});

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3",
});

const baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "7",
    py: "5",
    pb: "20",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : undefined,
  };
});

const baseStyleFooter = defineStyle({
  px: "5",
  py: "3",
  borderTop: "1px solid",
  borderColor: "modal.border",
  borderBottomRadius: "xl",
  bg: "modal.bg",
});

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: runIfFn(baseStyleDialogContainer, props),
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: runIfFn(baseStyleBody, props),
  footer: baseStyleFooter,
}));

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === "full") {
    return definePartsStyle({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0",
      },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full"),
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: "md" },
});
