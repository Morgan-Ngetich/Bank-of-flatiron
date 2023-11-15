//import React and neccessary hooks form the ''react' library
import React, { useEffect, useState } from 'react';
import './App.css';
import TransactionTable from "./TransactionTable"
import TransactionForm from "./TransactionForm"

//Defined the main App component
function App() {
  //State to store fetched transactions data and new transaction details
  const [fetchedData, setFetchedData] = useState(null); //Statevalue is set to null as default
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',     //initial values of "newTransaction" stateObject
    category: '',        //Initial values are set to an empty string showing that there is no default value
    amount: 0,           
  })

  //Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/transactions') //Fetch transaction data from the server
      .then((res) => res.json()) //Parse the response an JSON format
      .then((data) =>  setFetchedData(data)) //Update state with the fetched data
      .catch((error) => console.error('Error fetching data:', error));//Log any errors
  }, []); //Empty dependency array ensures useEffect runs only once

  //Event handlers to update newTransaction state when input values change
  const handleInputChange = (event) => {                        //const obj = {   
                                                               // [name]: value,
    const { name, value } = event.target;                        //}      
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  // Event handlers to submit a new transaction to the server
  const handleSubmit = (event) => {
    event.preventDefault() //Prevent the dafault form behaviour
    fetch("http://localhost:3000/transactions", { // Send a POST request to add a new transaction
      method: "POST",
      headers: {
        'Content-Type' : 'application/json', //Specify JOSN content type
      },
      body: JSON.stringify(newTransaction), //Convert the newTransaction to JSON and include it in the request body
    })
    .then((res) => res.json())
    .then((data) => {

      setFetchedData((prevData) => {  //prevData is parameter that returns a new state
        return [...prevData, data]; //newState is created bt spreading the elements of the previous state(...prevData) & appending data at the end of the Object
      });

      //Reset newTransaction state to clear the form
      setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: 0,
      });
    })
    .catch((error) => console.error("Error adding transactions:", error)) //Log any errors
  }

  // If data is not yet fetched, displayed a loading message
 if(!fetchedData) return <h2 className="app">Loading...</h2>; //image is falsely

 //Event handler to delete transaction by ID
 function handleDelete(id) {
  // Filter creates a new array (updatedTodos) that contains all the new todos except the one that matches the id
  const updatedTransactions = fetchedData.filter(transaction => transaction.id !== id);
  setFetchedData(updatedTransactions);
 }

  //Rnder the main structure of the app
  return (
    <div className="app">
    <h1>Transaction Details</h1>
    
    <TransactionForm 
      newTransaction={newTransaction}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
    
    <TransactionTable transactions={fetchedData} handleDelete={handleDelete}/>
  </div>
  );
}
//Export the App component as the dafault export
export default App;
