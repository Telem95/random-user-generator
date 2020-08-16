import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/components/navigation";
import { Provider as UserProvider } from "./src/context/UserContext";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    </ApplicationProvider>
  </>
);
