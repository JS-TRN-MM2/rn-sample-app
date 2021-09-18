import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import {
  consts, // size of text
  //, // color if text
} from '../../constants';

export interface TextProps {
  size?: 'S' | 'M' | 'L' | 'XL' | 'XXL'; // size name
  style?: TextStyle;
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
}

const getSize: { [key: string]: number } = consts;

const checkSize = (size: string): number => {
  return getSize[size] || 0;
};

const Text: React.FC<TextProps> = ({ size = 'M', children, style, bold, color, ...rest }) => (
  <RNText
    {...rest}
    style={{
      ...style,
      fontSize: checkSize(size),
      fontWeight: bold ? '700' : '400',
      //color: color || colors.primaryDark,
    }}
  >
    {children}
  </RNText>
);

export default Text;
