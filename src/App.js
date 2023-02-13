import "./App.css";
import { useState } from "react";
import Select from "./components/select";
import { Button } from "./components/button";

function App() {
  const [selectConfig, setSelectConfig] = useState({
    autoselect: false,
    multiple: true,
  });
  const handleClick = ({ target }) => {
    const stateConfigID = target.dataset.state_id;
    setSelectConfig((prevState) => ({
      ...prevState,
      [stateConfigID]: !prevState[stateConfigID],
    }));
  };
  return (
    <>
      <h1 className="select__first-text">A custom select component</h1>
      <div>
        <Button data-state_id="autoselect" onClick={handleClick}>
          {selectConfig.autoselect ? `Disable` : `Enable`} autoselect mode
        </Button>{" "}
        <Button data-state_id="multiple" onClick={handleClick}>
          Enable {selectConfig.multiple ? `single` : `multiple`} selection mode
        </Button>
      </div>
      <br />
      <Select
        autoselect={selectConfig.autoselect}
        multiple={selectConfig.multiple}
        defaultArr={[1, 2, 3, 4]}
      />
    </>
  );
}
export default App;
