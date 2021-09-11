import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

// padding, margin, fontSize, ....
export const scale = function (size: number): number {
  return (width / guidelineBaseWidth) * size;
};

// width
export const wScale = function (size: number): number {
  return (height / guidelineBaseHeight) * size;
};

// height
export const hScale = function (size: number, factor = 0.5): number {
  return size + (scale(size) - size) * factor;
};
