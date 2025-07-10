export default {
  blue: {
    500: "#017afa",
  },
  red: {
    400: "#ff7b78",
    500: "#ff605c",
    600: "#e65551",
  },
  yellow: {
    500: "#FFB84C",
  },
  green: {
    400: "#42c58a",
    500: "#48d698",
    600: "#3ba87a",
  },
  nocturnal: {
    200: "#4A4B57",
    300: "#292A32",
    400: "#1A1B23",
    500: "#0B0C14",
  },
  button: {
    secondary: {
      bg: {
        default: "#f5f5f5",
        _dark: "nocturnal.400",
      },
      border: {
        default: "#5a5a5a40",
        _dark: "nocturnal.300",
      },
    },
  },

  body: {
    dark: "nocturnal.500",
    light: "#fffffff",
  },
  text: {
    body: {
      default: "#000000",
      _dark: "#ffffff",
    },
  },
  // --- card
  card: {
    bg: {
      default: "body.light",
      _dark: "body.dark",
    },
    border: {
      default: "#5a5a5a30",
      _dark: "nocturnal.400",
    },
  },
  // --- checknox
  checkbox: {
    border: {
      default: "#5a5a5a30",
      _dark: "nocturnal.200",
    },
    bg: {
      default: "#5a5a5a40",
      _dark: "nocturnal.300",
    },
  },
  // --- sidebar
  sidebar: {
    button: {
      default: "#5a5a5a90",
      _dark: "#ffffff80",
    },
    buttonActive: {
      default: "#000",
      _dark: "#fff",
    },
  },
  // --- menu
  menu: {
    bg: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
    border: {
      default: "#5a5a5a30",
      _dark: "nocturnal.300",
    },
  },
  // --- divider
  divider: {
    border: {
      default: "#5a5a5a50",
      _dark: "#ffffff15",
    },
  },
  // -- dateselect
  dateleSelect: {
    calendarBadge: {
      default: "#5a5a5a30",
      _dark: "nocturnal.300",
    },
    items: {
      inactive: {
        default: "#5a5a5a90",
        _dark: "#ffffff50",
      },
      active: {
        default: "nocturnal.400",
        _dark: "#fff",
      },
      range: {
        default: "#5a5a5a30",
        _dark: "nocturnal.200",
      },
    },
  },
  // --- loading-content
  loadingContent: {
    background: {
      default: "#5a5a5a20",
      _dark: "#1A1B2390",
    },
    progress: {
      default: "#5a5a5a60",
      _dark: "#292A32",
    },
  },
  // --- switch
  switch: {
    bg: {
      light: "#5a5a5a50",
      dark: "nocturnal.300",
    },
  },
  // --- modal
  modal: {
    overlay: {
      default: "#f5f5f5",
      _dark: "#0B0C1490",
    },
    bg: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
    border: {
      default: "#f5f5f5",
      _dark: "nocturnal.500",
    },
  },
  // --- drawer
  drawer: {
    bg: {
      default: "#f5f5f5",
      _dark: "nocturnal.500",
    },
    border: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
    closeButton: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
  },
  input: {
    bg: {
      default: "#f5f5f5",
      _dark: "nocturnal.500",
    },
    border: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
  },
  // --- table
  table: {
    body: {
      default: "#f5f5f5",
      _dark: "body.dark",
    },
    th: {
      default: "#f5f5f5",
      _dark: "nocturnal.400",
    },
    thColor: {
      default: "#00000080",
      _dark: "#ffffff90",
    },
    border: {
      default: "#5a5a5a40",
      _dark: "nocturnal.300",
    },
    caption: {
      default: "#ffffff80",
      _dark: "red",
    },
  },
};
