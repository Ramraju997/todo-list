import logo from './logo.svg';
import Header from './components/header';
import Context from './components/Context';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import AddItem from './components/AddItem/AddItem';

function App() {
  const userName = "Ram Raju";
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "To learn react",
    },
    {
      id: 2,
      checked: false,
      item: "To learn angular",
    },
    {
      id: 3,
      checked: false,
      item: "To learn Vue",
    },
  ]);

  const onCheckBoxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(setItems));
  };

  const onDeleteClick = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(setItems));
  };
  
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1  : 1;
  const newItemToAdd = {
    id,checked: false ,item
  }
    const listItems = [...items, newItemToAdd];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(setItems));
  }
  
  const addItemToList = (e) => {
    e.preventDefault();
    if(!itemValue) return
    setItemValue("");
    addItem(itemValue);
  }
  




  return (
    <div className="App container-grid ">
      <Header userName={ userName } /> 
      <Context items={items} onCheckBoxChange={onCheckBoxChange} onDeleteClick={onDeleteClick} />
      <Footer length={items.length} items={ items } />
      <AddItem itemValue={ itemValue } setItemValue={setItemValue} addItemToList={ addItemToList } />
      
      
    </div>
  );
}

export default App;
