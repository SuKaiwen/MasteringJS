import logo from './logo.svg';
import './App.css';

import DataTypes from './Components/DataTypes';
import InteractionsJS from './Components/InteractionJS';
import Operations from './Components/Operations';
import Comparisons from './Components/Comparisons';
import ConditionalOperator from './Components/ConditionalOperator';
import LoopsSwitch from './Components/LoopsSwitch';
import ArrowFuncitons from './Components/ArrowFuncitons';

import ObjectsJS from './Components/ObjectsJS';
import ClassInheritance from './Components/ClassInheritance';

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
      <ObjectsJS />
      <ClassInheritance />
    </div>
  );
}

export default App;
