import Counter from "./components/Counter.jsx";
import { useState } from "react";

function App() {
    const [ displayCounter, toggleDisplayCounter ] = useState( true )

    return (
        <>
            <button onClick={ () => {
                toggleDisplayCounter( !displayCounter )
            } }>Toggle show/hide counter
            </button>
            { displayCounter && <Counter/> }
        </> );
}

export default App;
