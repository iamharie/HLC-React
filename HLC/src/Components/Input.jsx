export default function Input({ result, keyStroke }) {
  //render checker log
  console.log("<Input/> comp rendering ");
  return (
    <div>
      <input type="text" value={result} onChange={keyStroke} />
    </div>
  );
}
