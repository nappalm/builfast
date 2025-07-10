import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode, transparentize } from "@chakra-ui/theme-tools";
import { runIfFn } from "../utils/run-if-fn";
import _colors from "../_colors";

const baseStyle = defineStyle({
  lineHeight: "1.2",
  borderRadius: "lg",
  fontWeight: 500,
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
});

const variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `base.400`)(props),
      },
      _active: { bg: mode(`gray.200`, `base.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
      { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
      { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props),
  };
});

const variantPrimary = defineStyle((props) => {
  return {
    color: mode("body.light", "body.dark")(props),
    bg: `linear-gradient(137.74deg, ${_colors.green[400]} 19.53%, ${_colors.green[600]} 95%)`,
    border: "1px solid",
    boxShadow: "none",
    borderColor: _colors.green[400],
    transition: "all 0.2s ease-in-out",
    _hover: {
      bg: `linear-gradient(137.74deg, ${_colors.green[500]} 19.53%, ${_colors.green[500]} 95%)`,
      _disabled: {
        bg: `linear-gradient(137.74deg, ${_colors.green[400]} 19.53%, ${_colors.green[600]} 95%)`,
      },
    },
    _active: {
      bg: `linear-gradient(137.74deg, ${_colors.green[400]} 19.53%, ${_colors.green[600]} 95%)`,
    },
  };
});

const variantError = defineStyle(() => {
  return {
    color: "body.dark",
    bg: `linear-gradient(137.74deg, ${_colors.red[400]} 19.53%, ${_colors.red[600]} 95%)`,
    border: "1px solid",
    boxShadow: "none",
    borderColor: _colors.red[400],
    transition: "all 0.2s ease-in-out",
    _hover: {
      bg: `linear-gradient(137.74deg, ${_colors.red[500]} 19.53%, ${_colors.red[500]} 95%)`,
    },
    _active: {
      bg: `linear-gradient(137.74deg, ${_colors.red[400]} 19.53%, ${_colors.red[600]} 95%)`,
    },
  };
});

const variantSecondary = defineStyle(() => {
  return {
    bg: "button.secondary.bg",
    border: "1px solid",
    borderColor: "button.secondary.border",
    _hover: {
      bg: "button.secondary.border",
    },
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  };
});

const variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0",
});

const variantSidebar = defineStyle((props) => {
  const { isActive } = props;

  return {
    variant: "ghost",
    gap: 2,
    pl: 2,
    justifyContent: "flex-start",
    h: "32px",
    w: "full",
    letterSpacing: -0.4,
    color: isActive ? "sidebar.buttonActive" : "sidebar.button",
    bg: isActive ? "button.secondary.bg" : undefined,
    _hover: {
      bg: "button.secondary.bg",
      color: "sidebar.buttonActive",
    },
  };
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  link: variantLink,
  unstyled: variantUnstyled,
  primary: variantPrimary,
  secondary: variantSecondary,
  error: variantError,
  sidebar: variantSidebar,
};

const sizes = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6",
  }),
  md: defineStyle({
    h: "9",
    minW: "10",
    fontSize: "md",
    px: "4",
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3",
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
