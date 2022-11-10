import React, { useEffect, useState } from "react";

const Counter = ( { prop } ) => {

    // 1. INITIALIZE COMPONENT & STATE
    // --> Set initial state from 'undefined' to '0'
    const [ count, setCount ] = useState( 0 );
    // --> Execute function before each render
    ( () => {
        console.log( "DEFAULT FUNCTION" );
    } )()

    // 3. DID MOUNT
    // --> Execute function after mounting
    useEffect( () => {
        console.log( "MOUNT" );
    }, [] );

    // 4. DID UPDATE
    // --> Functie runt na het mounten en na elke verandering in de dependency
    useEffect( () => {
        console.log( "UPDATE" );
    }, [ count, prop ] );

    // 5. DID UNMOUNT
    // --> Functie runt na het unmouten
    useEffect( () => {
        return function unmount() {
            console.log( "UNMOUNT" );
        };
    }, [] );

    // 2. RENDER
    return (
        <>
            <p>Current count: { count }</p>
            <button onClick={ () => {
                setCount( count + 1 )
            } }>+1
            </button>
        </>
    );
};

export default Counter;