import React, { useState } from "react";
import List from "./components/List";
import data from "./components/data";
function App() {
  const [people, setPeople] = useState(data);

  const clickHandler = () => {
    setPeople([]);
  };
  const AddHandler = () => {
    setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3> {people.length} Peoples Birthday today</h3>
        <List people={people} />
        <button onClick={clickHandler}>Clear All</button>
        <button onClick={AddHandler}>Add</button>
      </section>
    </main>
  );
}

export default App;
