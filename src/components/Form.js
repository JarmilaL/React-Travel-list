import { useState } from 'react';

export default function Form({ handleItemList }) {
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
  
      handleItemList(newItem);
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