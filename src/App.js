import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Header } from "./header/Header";
import { TaskList } from "./List/TaskList";
import { BadList } from "./List/BadList";
import { InputForm } from "./form/InputForm";
import { useState } from "react";

const weeklyHrs = 7 * 24;

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addToTaskList = (newInfo) => {
    if (ttlHrs + +newInfo.hr <= weeklyHrs) {
      console.log(newInfo);
      setTaskList([...taskList, newInfo]);
    } else {
      alert("You have exceeded the weekyly limit of " + weeklyHrs + "hrs");
    }
    // console.log(taskList);
  };
  console.log(taskList);

  const removeFromTaskList = (i) => {
    const filteredAry = taskList.filter((item, index) => index !== i);
    console.log(filteredAry);
    setTaskList(filteredAry);
  };
  const removeFromBadList = (i) => {
    const filteredAry = badList.filter((item, index) => index !== i);
    setBadList(filteredAry);
  };

  const shiftToBadList = (i) => {
    const item = taskList[i];
    setBadList([...badList, item]);
    removeFromTaskList(i);
  };

  const shiftToTaskList = (i) => {
    removeFromBadList(i);
    const item = badList[i];
    setTaskList([...taskList, item]);
  };

  const taskListTotalHours = taskList.reduce(
    (accumulation, item) => accumulation + +item.hr,
    0
  );

  const badListTotalHours = badList.reduce(
    (accumulation, item) => accumulation + +item.hr,
    0
  );

  const ttlHrs = badListTotalHours + taskListTotalHours;

  return (
    <div className="wrapper">
      <Container>
        <Header />
        <InputForm addToTaskList={addToTaskList} />
        <Row>
          <Col>
            <TaskList
              taskList={taskList}
              removeFromTaskList={removeFromTaskList}
              shiftToBadList={shiftToBadList}
            />
          </Col>
          <Col>
            <BadList
              badList={badList}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
              badListTotalHours={badListTotalHours}
            />
          </Col>
        </Row>
        <div className="total-hours"> Total {ttlHrs} hours </div>
      </Container>
    </div>
  );
}

export default App;
