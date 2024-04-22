import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 4, 12),
    description: "Холодильник",
    amount: 1000

  },
  {
    id: 'c2',
    date: new Date(2020, 4, 10),
    description: "Ноутбук",
    amount: 500

  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: "Телефон",
    amount: 300

  },
]


function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
