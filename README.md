
 <p align="center">ComponentCraft is the cross-platform UI kit library containing a collection of customizable components</p>
 
## Getting Started

Open a Terminal in your project's folder and run:
```
npm i component-craft
```
- To run iOS, you need to execute the command
  ```
  "npx pod-install"
  ```
  in your project's directory.
  
- To utilize the components in the desired screen, simply import them and pass the desired properties.
  
  Example :
```
  import React from "react";
  import { CustomButton } from "react-native";

  function App(): JSX.Element {
  return (
    <View>
      <CustomButton mode="outlined" buttonTitle="Outlined Button"/>
    </View>
  );
  }
  export default App;
```
## Features

- Works on Web, iOS and Android.

## Try it out

 🙇 Run the [example app] to see it in action. The source code for the examples are under the /example folder.


