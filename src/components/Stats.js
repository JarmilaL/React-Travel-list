export default function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed === true);

  return (
    <footer className="stats">
      You have {items.length} items on your list and you have already packed{' '}
      {packedItems.length} (
      {Math.round((packedItems.length / items.length) * 100)}%).
    </footer>
  );
}
