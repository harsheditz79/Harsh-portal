import { useState } from "react";
import EntryScreen from "./screens/EntryScreen";
import BootScreen from "./screens/BootScreen";
import RevealScreen from "./screens/RevealScreen";

function App() {
  const [screen, setScreen] = useState("entry");

  return (
    <>
      {screen === "entry" && (
        <EntryScreen onEnter={() => setScreen("boot")} />
      )}

      {screen === "boot" && (
        <BootScreen onComplete={() => setScreen("reveal")} />
      )}

      {screen === "reveal" && (
        <RevealScreen />
      )}
    </>
  );
}

export default App;