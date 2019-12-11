import React, { useState } from "react";
import "./App.css";

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  const handleChange = event => {
    setValue(event.target.value);
    props.onChange(value);
  };

  return (
    <input
      className="form-control"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Todo Item"
    />
  );
}

function Button(props) {
  return (
    <button {...props} type="button" class="btn btn-primary btn-lg btn-block">
      Add
    </button>
  );
}

// function App() {
//   const [todos, setTodos] = useState({});
//   const [todosInputs, setTodosInputs] = useState({});

//   const handleChange = (value, index) => {
//     todosInputs[index] = value;
//     setTodosInputs(todosInputs);
//   };

//   const handleButtonClick = index => {
//     // let tempTodos = { ...todos };
//     // if (!tempTodos[index]) {
//     //   tempTodos[index] = [];
//     // }
//     // tempTodos[index].push(value);
//     // setTodos(tempTodos);
//   };

//   return (
//     <div className="App">
//       {[1, 2, 3, 4, 5].map((t, index) => {
//         return (
//           <div className="container">
//             <Input
//               onChange={value => {
//                 handleChange(value, index);
//               }}
//               value="init"
//             />
//             <Button />
//             {todos &&
//               todos[index] &&
//               todos[index].map((todo, index, todosCopy) => {
//                 return <div key>{todo}</div>;
//               })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function App() {
  const API_RETURNED_VAL = "initia l valueu";

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState(API_RETURNED_VAL);

  const handleChange = value => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    let tempTodos = [...todos];
    tempTodos.push(inputValue);
    setTodos(tempTodos);
  };

  return (
    <div className="container">
      <Input
        onChange={value => {
          handleChange(value);
        }}
        value={API_RETURNED_VAL}
      />
      <Button onClick={handleButtonClick} />
      {todos &&
        todos.length > 0 &&
        todos.map((todo, index, todosCopy) => {
          return <div key>{todo}</div>;
        })}
    </div>
  );
}

export default App;
