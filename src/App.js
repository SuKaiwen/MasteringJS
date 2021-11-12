import logo from './logo.svg';
import './App.css';

import DataTypes from './Components/DataTypes';
import InteractionsJS from './Components/InteractionJS';
import Operations from './Components/Operations';
import Comparisons from './Components/Comparisons';
import ConditionalOperator from './Components/ConditionalOperator';
import LoopsSwitch from './Components/LoopsSwitch';
import ArrowFuncitons from './Components/ArrowFuncitons';

function App() {
  return (
    <div className="App">
      <h1>Learning JS</h1>
      <DataTypes />
      <InteractionsJS />
      <Operations />
      <Comparisons />
      <ConditionalOperator />
      <LoopsSwitch />
      <ArrowFuncitons />
    </div>
  );
}

export default App;
