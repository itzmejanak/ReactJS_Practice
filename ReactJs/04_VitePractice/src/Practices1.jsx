import { useState } from "react";

function Practices1() {
    /**
     Here we fix that issue using useState hooks from where we set the variable name and one method like option or features of 
     hooks which will set the value for the need basic
     */

    // Initial values
    const initialCounter = 15;
    const initialName = "Janak";

    // Hooks
    const [newCounter, setCounter] = useState(initialCounter);
    const [newName, setName] = useState(initialName);

    // Functions
    function updateCounter() {
        if (newCounter < 20) {
            setCounter(newCounter + 1);
            console.log(newCounter);
        } else {
            alert("Value is max now");
        }
    }

    function updateSub() {
        if (newCounter > 0) {
            setCounter(newCounter - 1);
            console.log(newCounter);
        } else {
            alert("Value is min now");
        }
    }

    // Returns
    return (
        <>
            <h2>Hello, this is me {newName}</h2>
            <h3>Counter is now {newCounter}</h3>
            <button onClick={updateCounter}>Add</button>
            <br />
            <br />
            <button onClick={updateSub}>Subtract</button>
        </>
    );
}

export default Practices1;
