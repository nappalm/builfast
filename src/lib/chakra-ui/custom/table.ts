import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const variantSolid = definePartsStyle((props) => {
  const { colorScheme: c, colorMode } = props;

  return {
    table: {
      borderRadius: "13px",
      overflow: "hidden",
    },
    th: {
      // borderBottom: "1px solid",
      // borderColor: "table.border",
      height: "40px",
      textTransform: "capitalize",
      color: mode("gray.600", "whiteAlpha.800")(props),
      fontWeight: 500,
      "&:first-of-type": {
        borderTopLeftRadius: "xl",
        borderBottomLeftRadius: "xl",
      },
      "&:last-child": {
        borderTopRightRadius: "xl",
        borderBottomRightRadius: "xl",
      },
      bg: mode("gray.300", "whiteAlpha.200")(props),
      "&[data-is-numeric=true]": {
        textAlign: "end",
      },
    },
    td: {
      "&[data-is-numeric=true]": {
        textAlign: "end",
      },
      "&:first-of-type": {
        borderLeft: "none",
      },
      "&:last-child": {
        borderRight: "none",
        // borderBottom: "1px solid",
        // borderColor: "table.border",
      },
      _hover: {
        // background: "table.border",
      },
    },
    caption: {
      m: 0,
      color: colorMode === "light" ? `${c}.600` : `table.caption`,
    },
    tbody: {
      // bg: "table.body",
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            // borderWidth: "1px",
            // borderColor: "table.border",
          },
        },
        "&:nth-of-type(even)": {
          "th, td": {
            // borderWidth: "1px",
            // borderColor: "table.border",
          },
        },
        "&:last-of-type": {
          td: {
            "&:first-of-type": {
              borderBottomLeftRadius: "11px",
            },
            "&:last-child": {
              borderBottomRightRadius: "11px",
              // borderBottom: "1px solid",
              // borderColor: "table.border",
            },
          },
        },
      },
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const sizes = {
  sm: definePartsStyle({
    th: {
      px: "4",
      py: "2",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4",
    },
  }),
};

export default defineMultiStyleConfig({
  sizes,
  variants: {
    solid: variantSolid,
  },
  defaultProps: {
    variant: "solid",
  },
});
