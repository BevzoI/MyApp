import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../styles/global";

const Button = ({ children, onPress, buttonStyle, accessibilityLabel }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      accessibilityRole="button"
      accessible={true}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  accessibilityLabel: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: {},
  accessibilityLabel: "Button",
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: colors.orange,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
