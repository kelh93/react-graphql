import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [someone, setSomeone] = useState({
    name: '',
    age: '',
    city: '',
    hobby: '',
  });
  const [list, setList] = useState([]);

  const onInputChange = (e, key) => {
    setSomeone({ ...someone, [key]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setList(list.concat([someone]));
    setSomeone({
      name: '',
      age: '',
      city: '',
      hobby: '',
    })
  };

  const onDelete = (idx) => {
    const newList = [...list];
    newList.splice(idx, 1);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>
        {" "}
        Hello GraphQL <span className="sign">@kelinghong</span>{" "}
      </h1>
      <div className="playground">
        <div className="header">
          <input
            placeholder="姓名"
            onChange={(e) => onInputChange(e, "name")}
            value={someone.name}
            style={{ marginRight: 10 }}
          />
          <input
            placeholder="城市"
            onChange={(e) => onInputChange(e, "city")}
            value={someone.city}
            style={{ marginRight: 10 }}
          />
          <input
            placeholder="年龄"
            onChange={(e) => onInputChange(e, "age")}
            value={someone.age}
            style={{ marginRight: 10 }}
          />
          <input
            placeholder="爱好"
            onChange={(e) => onInputChange(e, "hobby")}
            value={someone.hobby}
            style={{ marginRight: 10 }}
          />
          <button onClick={onSubmit}>ADD</button>
        </div>
        <ul className="list">
          {list.map((item, index) => {
            return (
              <li key={index} className="item">
                <span>姓名：{item.name}</span>
                <span>年龄：{item.age}</span>
                <span>城市：{item.city}</span>
                <span>爱好：{item.hobby}</span>
                <button onClick={(index) => onDelete(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
