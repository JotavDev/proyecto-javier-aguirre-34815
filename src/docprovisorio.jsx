export function CartContextProvider({ children }) {

  ////ORDEN DE COMPRA

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(e) {
    let nameInput = e.target.name;
    let value = e.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }
  ////

  ///TOASTIFY
  const [style, setStyle] = useState("toastify active");
  ////
  return (
    <cartContext.Provider
      value={{
        setCart,
        formatPrice,
        saveInLocalStorage,
        onInputChange,
        data,
        setData,
        itemCount,
        setStyle,
        style,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}




//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("es-CL", {
//       style: "currency",
//       currency: "CLP",
//     }).format(price);
//   };