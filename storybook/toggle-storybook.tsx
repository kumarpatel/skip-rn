import React, { useState, useEffect } from "react";
import { DevSettings } from "react-native";
import Config from "react-native-config";

// import { loadString, saveString } from "../app/utils/storage";

export function ToggleStorybook(props) {
  const [showStorybook, setShowStorybook] = useState(false);
  const [StorybookUIRoot, setStorybookUIRoot] = useState(null);

  useEffect(() => {
    if (__DEV__ && DevSettings) {
      setShowStorybook(true);

      // Add our toggle command to the menu
      DevSettings.addMenuItem("Toggle Storybook", () => {
        setShowStorybook((show) => {
          // On toggle, flip the current value
          show = !show;

          // Return it to change the local state
          return show;
        });
      });

      // Load the storybook UI once
      setStorybookUIRoot(() => require("./storybook").StorybookUIRoot);
    }
  }, []);

  if (showStorybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : null;
  } else {
    return props.children;
  }
}
