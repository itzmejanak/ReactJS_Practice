function Practices() {
    /**
    In This code we are trying to update the value of the counter but in ui component is it not being sync or update 
    for this issue the React concept comes here. for using Hooks to update ui components with the changes made.

    For that Hooks Practices look at the Practices1.jsx
    * */
    let name = "Janak";
    let counter = 15;
  
    function UpadteCounter() {
      counter += 1;
      console.log(counter);
    }
  
    function UpdateSub() {
      counter -= 1;
      console.log(counter);
    }
  
    return (
      <>
        <h2>Hello This is my {name}</h2>
        <h3>Counter is Now {counter}</h3>
        <button onClick={UpadteCounter}>Add</button>
        <br />
        <br />
        <button onClick={UpdateSub}>Subtract</button>
      </>
    );
  }
  
  export default Practices;

