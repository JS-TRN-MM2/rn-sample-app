import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  activeOpacity?: number;
  title: string;
  onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ activeOpacity, title, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} activeOpacity={activeOpacity} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  activeOpacity: 0.8,
};

export default Button;
