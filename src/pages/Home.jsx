import React, { useEffect, useState } from "react";

const Home = ({ prop }) => {
    // 1. INITIALIZE STATE
    const [ state, setState ] = useState( false ); // Zet state van undefined naar de initiële state

    // 2. MOUNT
    useEffect( () => {
        console.log( "MOUNT" ); // Voert de functie eenmalig uit na het MOUNTEN
    }, [] );

    // 3. UPDATE
    useEffect( () => {
        console.log( "UPDATE" ); // Voert de functie uit na het MOUNTEN en na elke verandering in de dependency
    }, [ prop, state ] );

    // 4. UNMOUNT
    useEffect( () => {
        return function unmount() {
            console.log( "UNMOUNT" ); // Functie runt na het UNMOUNTEN
        };
    }, [] );

    return (
        <>

        </>
    );
};

export default Home;