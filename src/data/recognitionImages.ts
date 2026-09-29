// Intrinsic pixel sizes for the recognition screenshots, used to set explicit
// width/height attributes and avoid layout shift. Keep in sync with the files
// in public/recognition/.
export const recognitionImageMeta: Record<string, { width: number; height: number }> = {
  'tumpak-2.jpg': { width: 1104, height: 622 },
  'tumpak-award-1.jpg': { width: 1125, height: 634 },
  'kudos.jpg': { width: 1532, height: 1343 },
  'longest-feedback.jpg': { width: 1910, height: 2088 },
  'ic-1.jpg': { width: 352, height: 362 },
  'ic-2.jpg': { width: 337, height: 406 },
};
