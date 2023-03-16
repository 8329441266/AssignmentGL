import React from "react";
import { useState } from "react";
const initialTask = [{ id: 1, title: "ABCS", inProgress: "In-Progress" }];

function Table() {
  const [task, setTask] = useState(initialTask);
  const [inputData, setInputData] = useState("");

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

  const handleDelete = (id) => {
    const newList = task.filter((li) => li.id !== id);
    setTask(newList);
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
            <th>Button</th>
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
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
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
