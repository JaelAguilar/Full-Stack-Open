import React, {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name:'Arto Hellas'}
  ])

  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
  setNewName(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault() //prevent reload
    console.log('submit',newName)
    const personObject = {
      name:newName,
      id:persons.length+1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
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
      <div>{persons.map(person => <div>{person.name}</div>)}</div>
    </div>
  )
}

export default App;
