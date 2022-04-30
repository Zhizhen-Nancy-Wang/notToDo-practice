import React from "react";
import { Button, Table } from "react-bootstrap";

export const TaskList = ({ taskList, removeFromTaskList, shiftToBadList }) => {
  // const handleDelete = (i) => {
  //   return removeFromTaskList(i);
  // };

  return (
    <div className="taskList mt-4 ">
      <h2> TaskList</h2>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Hours</th>
          </tr>
        </thead>

        <tbody>
          {taskList.map((item, i) => (
            <tr className="bg-light ">
              <td className="pt-3">{i + 1}</td>
              <td className="pt-3">{item.task}</td>
              <td className="pt-3">{item.hr}</td>

              <Button
                variant="warning"
                style={{ margin: "10px" }}
                onClick={() => {
                  removeFromTaskList(i);
                }}
                // onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                variant="warning"
                style={{ margin: "10px" }}
                onClick={() => {
                  shiftToBadList(i);
                }}
              >
                →
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
