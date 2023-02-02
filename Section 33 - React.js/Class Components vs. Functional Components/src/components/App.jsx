import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

// Class component. It was used previously in React as it was the only way to get hold of the state.
class App extends React.Component
{
    render()
    {
        return <ClassComponent />;
    }
}

export default App;
