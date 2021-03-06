import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
//import { Card } from "./Card";
import Column from "./Column";
import { AppContainer } from "./styles";

export default function App() {
  const { state } = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
         <Column text={list.text} key={list.id} index={i}/>
            ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}