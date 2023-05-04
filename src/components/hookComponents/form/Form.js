// React
import React, { useState } from "react";

// Components
import Button from "../../functionalComponents/button/Button";

// Native
import { View, TextInput } from "react-native";

// Style
import { formStyle } from "./formStyle";

function Form(props) {
  const [state, setState] = useState({
    name: "",
  });

  async function onChangeText(e) {
    setState({
      ...state,
      name: e.trim(),
    });
  }

  function onSubmitHandler() {
    props.onSubmit(state.name);
  }

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        style={[formStyle.input, props.noOutline && { outlineStyle: "none" }]}
      />
      <Button onPressButton={onSubmitHandler} label="let's play!" />
    </View>
  );
}

export default Form;
