import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../styles/global";

const Input = ({
  value,
  onTextChange,
  placeholder,
  outerStyles,
  inputStyle,
  rightButton,
  autofocus = false,
  secureTextEntry = false,
  keyboardType = "default",
  maxLength,
  editable = true,
  onBlur: onBlurCustom,
  accessibilityLabel,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => {
    setIsFocused(false);
    if (onBlurCustom) onBlurCustom();
  };

  return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
      <TextInput
        value={value}
        onChangeText={onTextChange}
        placeholder={placeholder}
        autoFocus={autofocus}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        style={[styles.baseText, inputStyle]}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize="none"
        accessibilityLabel={accessibilityLabel}
      />
      {rightButton}
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onTextChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  outerStyles: PropTypes.object,
  inputStyle: PropTypes.object,
  rightButton: PropTypes.element,
  autofocus: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    "default",
    "email-address",
    "numeric",
    "phone-pad",
    "number-pad",
  ]),
  maxLength: PropTypes.number,
  editable: PropTypes.bool,
  onBlur: PropTypes.func,
  accessibilityLabel: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  placeholder: "Enter text",
  outerStyles: {},
  inputStyle: {},
  rightButton: null,
  autofocus: false,
  secureTextEntry: false,
  keyboardType: "default",
  maxLength: undefined,
  editable: true,
  onBlur: null,
  accessibilityLabel: "Text input field",
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
  },
  baseText: {
    flex: 1,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: colors.black_primary,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
});
