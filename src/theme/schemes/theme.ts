import { createTheme, lighten, darken } from "@mui/material";
import localFont from "@next/font/local";

import "@mui/lab/themeAugmentation";

export const baseFont = localFont({
  src: [
    {
      path: "../../../public/fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const headingFont = localFont({
  src: [
    {
      path: "../../../public/fonts/roboto-condensed/RobotoCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roboto-condensed/RobotoCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roboto-condensed/RobotoCondensed-Bold.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const logoFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Taviraj-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const generalTypography = {
  baseFontFamily: baseFont.style.fontFamily,
  headingFontFamily: headingFont.style.fontFamily,
  logoFontFamily: logoFont.style.fontFamily,
};

const themeColors = {
  primary: "#444343",
  secondary: "#787878",
  success: "#2D882D",
  successBg: "#EEF7ED",
  warning: "#E49010",
  warningLight: "#F9A40C",
  highlight: "#FFF5BE",
  warningBg: "#FFF8E5",
  error: "#BF3434",
  mineShaft: "#2A2A2A",
  grey100: "#D0DBE5",
  grey200: "#A9BFCE",
  grey300: "#778BA9",
  grey400: "#475873",
  grey500: "#283850",
  blackSqueeze: "#F4F9FB",
  black: "#121212",
  white: "#ffffff",
};

export const theme = createTheme({
  palette: {
    common: {
      black: themeColors.black,
      white: themeColors.white,
    },

    primary: {
      light: lighten(themeColors.primary, 0.2),
      main: themeColors.primary,
      dark: darken(themeColors.primary, 0.2),
    },
    secondary: {
      light: lighten(themeColors.secondary, 0.2),
      main: themeColors.secondary,
      dark: darken(themeColors.secondary, 0.2),
    },
    success: {
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2),
    },
    warning: {
      light: lighten(themeColors.warning, 0.2),
      main: themeColors.warning,
      dark: darken(themeColors.warning, 0.2),
    },
    error: {
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2),
    },
    grey: {
      100: themeColors.grey100,
      200: themeColors.grey200,
      300: themeColors.grey300,
      400: themeColors.grey400,
      500: themeColors.grey500,
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1320,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        enableColorOnDark: true,
      },
      styleOverrides: {
        colorTransparent: {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: ({ theme }) => ({
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1232px",
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@keyframes pulse": {
          "0%": {
            transform: "scale(.75)",
          },
          "20%": {
            transform: "scale(1.1)",
          },
          "40%": {
            transform: "scale(.75)",
          },
          "60%": {
            transform: "scale(1.05)",
          },
          "80%": {
            transform: "scale(.75)",
          },
          "100%": {
            transform: "scale(.75)",
          },
        },
        "@keyframes ripple": {
          "0%": {
            transform: "scale(.8)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2.8)",
            opacity: 0,
          },
        },
        "@keyframes float": {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "100%": {
            transform: "translate(3%, 3%)",
          },
        },
        a: {
          textDecoration: "none",
        },
        strong: {
          fontWeight: "bold",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          display: "inline-flex",
          alignItems: "center",
          fontWeight: 500,
          padding: "8px 16px",
          borderRadius: "2px",
          fontSize: "13px",
          textTransform: "uppercase",
          gap: "3px",
          ".MuiSvgIcon-root": {
            transition: "all .2s",
          },
        },
        endIcon: {
          marginRight: -8,
        },
        // Primary
        containedPrimary: {
          backgroundColor: themeColors.primary,
          color: themeColors.white,
          border: `1px solid ${themeColors.primary}`,
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
          color: themeColors.primary,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.primary,
            color: themeColors.white,
          },
        },
        textPrimary: {
          color: themeColors.primary,
        },
        // Secondary
        containedSecondary: {
          backgroundColor: themeColors.secondary,
          color: themeColors.white,
          borderColor: themeColors.secondary,
        },
        outlinedSecondary: {
          backgroundColor: "transparent",
          color: themeColors.secondary,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.secondary,
            color: themeColors.white,
          },
        },
        textSecondary: {
          color: themeColors.secondary,
        },
        // Warning
        containedWarning: {
          backgroundColor: themeColors.warning,
          color: themeColors.white,
          borderColor: themeColors.warning,
        },
        outlinedWarning: {
          backgroundColor: "transparent",
          color: themeColors.warning,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.warning,
            color: themeColors.white,
          },
        },
        textWarning: {
          color: themeColors.warning,
        },
        // Info
        containedInfo: {
          color: themeColors.white,
        },
        outlinedInfo: {
          backgroundColor: "transparent",
          "&:hover, &.MuiSelected": {
            color: themeColors.white,
          },
        },
        textInfo: {
          color: themeColors.black,
          backgroundColor: themeColors.white,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.grey200,
            color: themeColors.black,
          },
        },
        // Error
        containedError: {
          backgroundColor: themeColors.error,
          color: themeColors.white,
          borderColor: themeColors.error,
        },
        outlinedError: {
          backgroundColor: "transparent",
          color: themeColors.error,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.error,
            color: themeColors.white,
          },
        },
        textError: {
          color: themeColors.error,
        },
        // Success
        containedSuccess: {
          backgroundColor: themeColors.success,
          color: themeColors.white,
          borderColor: themeColors.success,
        },
        outlinedSuccess: {
          backgroundColor: "transparent",
          color: themeColors.success,
          "&:hover, &.MuiSelected": {
            backgroundColor: themeColors.success,
            color: themeColors.white,
          },
        },
        textSuccess: {
          color: themeColors.success,
        },
        // Sizes
        sizeSmall: {
          minWidth: 'auto',
          padding: "4px 8px",
          lineHeight: 1.5,
        },
        sizeMedium: {
          padding: "8px 16px",
        },
        sizeLarge: {
          padding: "15px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: "flex",
          cursor: "pointer",
          position: "relative",
          textDecoration: "none",
          width: "fit-content",
          fontWeight: 500,
          alignItems: "center",
          flexDirection: "row",
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            transition: "transform .3s",
            transform: "scale(0)",
            transformOrigin: "center",
            backgroundColor: themeColors.grey200,
          },
          "&:hover::after": {
            transform: "scale(1)",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
        },
        color: "textPrimary",
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
        },
        paragraph: {
          fontSize: 16,
          lineHeight: 1.7,
        },
      },
    },
  },
  typography: {
    fontFamily: "inherit",

    h3: {
      fontWeight: 500,
      fontSize: 24,
      fontFamily: generalTypography.headingFontFamily,
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      fontFamily: generalTypography.headingFontFamily,
      lineHeight: 1.8,
    },
    h5: {
      fontFamily: generalTypography.baseFontFamily,
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.6,
    },
    h6: {
      fontFamily: generalTypography.baseFontFamily,
      fontSize: 16,
      lineHeight: 1.6,
      fontWeight: 400,
    },
  }
});

theme.typography.h2 = {
  fontWeight: 500,
  fontSize: 24,
  color: themeColors.secondary,
  fontFamily: generalTypography.headingFontFamily,
  [theme.breakpoints.up("lg")]: {
    fontSize: 32,
  },
};
