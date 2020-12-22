import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import Column from "./Column";
import { AppContainer } from "./styles";

export default function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scafold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}