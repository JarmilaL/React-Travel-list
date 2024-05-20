import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function handleItemList(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleSetItems={handleItemList} />
      <PackingList items={items} handleSetItems={handleItemList} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🎒</h1>;
}

function Form({ handleSetItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    handleSetItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list and you have already packed X
    </footer>
  );
}
