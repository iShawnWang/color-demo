import _range from "lodash.range";
import chroma from "chroma-js";

// source : https://vis4.net/palettes
function autoGradient(color: string, numColors: number) {
  const lab = chroma(color).lab();
  const lRange = 100 * (0.95 - 1 / numColors);
  const lStep = lRange / (numColors - 1);
  let lStart = (100 - lRange) * 0.5;
  const range = _range(lStart, lStart + numColors * lStep, lStep);
  let offset = 9999;

  for (let i = 0; i < numColors; i++) {
    let diff = lab[0] - range[i];
    if (Math.abs(diff) < Math.abs(offset)) {
      offset = diff;
    }
  }

  //@ts-ignore
  return range.map((l) => chroma.lab([l + offset, lab[1], lab[2]]));
}

export const gen = (baseColor: string, platteCount: number) => {
  const genColors = autoGradient(baseColor, platteCount);
  const stepsLeft = chroma
    .scale(genColors)
    .correctLightness(true)
    .colors(platteCount);
  return stepsLeft;
};
