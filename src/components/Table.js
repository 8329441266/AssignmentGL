import React from "react";
import { useState, useRef } from "react";
const initialTask = [{ id: 1, title: "ABC", inProgress: "In-Progress" }];

function Table() {
  let [task, setTask] = useState(initialTask);
  let [inputData, setInputData] = useState("");

  const onInputChange = (e) => {
    setInputData(e.target.value);
    console.log(inputData);
  };

  const addInputData = (e) => {
    e.preventDefault();

    let generateID = task[task.length - 1].id + 1;
    let id = generateID;
    let inProgress = "In-Progress";
    let title = e.target.value;

    let obj = { id: id, title: inputData, inProgress: "In-Progress" };
    setTask([...task, obj]);
    setInputData("");
  };
  const handleChange = (index) => {
    debugger;
    const newTask = [...task];
    newTask[index] = {
      ...newTask[index],
      inProgress: "Completed",
    };
    setTask(newTask);
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        data-testid="input-field"
        name="name"
        autoComplete="off"
        placeholder="Enter Here"
        onChange={onInputChange}
      />
     
      <button className="button" disabled={!inputData} onClick={addInputData}>
        save
      </button>

      <br />

      <table border="1" width="80%">
        <tbody>
          <tr>
            <th> Task Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          {task &&
            task.map((item, i) => {
              console.log(item.inProgress);
              return (
                
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.inProgress}</td>
                  
                  <td>
                    <button onClick={() => handleChange(i)}>
                      ChangeStatus
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
