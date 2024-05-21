import { useState } from 'react';
import Logo from './components/Logo.js';
import Form from './components/Form.js';
import PackingList from './components/PackingList.js';
import Stats from './components/Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function handleItemList(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      'Are you sure, you want to delete all items?'
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleItemList={handleItemList} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePackedItem={handlePackedItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
