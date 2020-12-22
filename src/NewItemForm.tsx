import React from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
   const [text, setText] = React.useState("");

   return (
     <NewItemFormContainer>
       <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)} 
       >
       <NewItemButton onClick={() => onAdd(text)}>
         Create
       </NewItemButton>
       </NewItemInput>
     </NewItemFormContainer>
   )
}