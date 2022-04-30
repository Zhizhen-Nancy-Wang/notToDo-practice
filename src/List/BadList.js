import React from "react";
import { Button, Table } from "react-bootstrap";

export const BadList = ({
  badList,
  removeFromBadList,
  shiftToTaskList,
  badListTotalHours,
}) => {
  return (
    <div className="badList mt-4 ">
      <h2> BadList</h2>
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
          {badList.map((item, i) => (
            <tr className="bg-light ">
              <td className="pt-3">{i + 1}</td>
              <td className="pt-3">{item.task}</td>
              <td className="pt-3">{item.hr} hr</td>

              <Button
                variant="warning"
                style={{ margin: "10px" }}
                onClick={() => {
                  return removeFromBadList(i);
                }}
              >
                Delete
              </Button>

              <Button
                variant="warning"
                style={{ margin: "10px" }}
                onClick={() => {
                  shiftToTaskList(i);
                }}
              >
                ←
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>You could have saved {badListTotalHours} hours</p>
    </div>
  );
};
