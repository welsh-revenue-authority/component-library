export const colors = [
  "wra-revenue",
  "wra-black",
  "wra-charcoal",
  "wra-light-grey",
  "wra-grey",
  "wra-mid-grey",
  "wra-dark-grey",
  "wra-light-red",
  "wra-red",
  "wra-light-blue",
  "wra-blue",
  "wra-mid-blue",
  "wra-dark-blue",
  "wra-light-green",
  "wra-green",
  "wra-light-yellow",
  "wra-yellow"
] as const;

export type WraColors = (typeof colors)[number];

export default colors;
