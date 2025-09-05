import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York', 'Chicago', 'Delhi', 'Tokyo', 'London'];
  return <div> <ListGroup items = {items} heading = "Cities"/> </div>
}
export default App;