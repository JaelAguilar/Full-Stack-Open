import React, {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      key:0,
    }
  ])

  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
  setNewName(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault() //prevent reload 
    
    //Creates an array of the names in the phonebook and the checks if the newName is in there
    if (persons.map((person) => person.name).includes(newName)) { alert(`${newName} is already added to phonebook`) }
    else {
      console.log("submit", newName)
      const personObject = {
        name: newName,
        key: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName("")
    }
    }
    

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>{persons.map(person => <div key={person.key}>{person.name}</div>)}</div>
    </div>
  )
}

export default App;
