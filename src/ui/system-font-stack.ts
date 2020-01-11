/**
 * system font stack:
 * https://gist.github.com/everdimension/1d7bf07a4e6b4b3886e778f64a6a55c3
 */
const systemFonts = [
  /* Safari for OS X and iOS (San Francisco) */
  "-apple-system",
  /* Chrome >= 56 for OS X (San Francisco), Windows, Linux and Android */
  "system-ui",
  /* Chrome < 56 for OS X (San Francisco) */
  "BlinkMacSystemFont",
  /* Windows */
  '"Segoe UI"',
  /* Android */
  "Roboto",
  /* Basic web fallback */
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
];

export const systemFontStackValue = systemFonts.join(", ");
