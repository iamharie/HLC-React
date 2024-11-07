export default function Button({ children, ...props }) {
  //render checker log
  console.log("<Button/> comp rendering ");
  return (
    <>
      <button {...props} className="btn">
        {children}
      </button>
    </>
  );
}
