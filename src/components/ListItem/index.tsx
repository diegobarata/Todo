import * as C from './styles';
import {Item} from '../../types/Item';
import { useState } from 'react';

type Props ={
  item: Item;
}

export const ListItem = ({item}: Props) => {
  const [isChecked,setIsCheacked] = useState(item.done);

  return(
    <C.Container done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={e => setIsCheacked(e.target.checked)}
        
        />
      <label>{item.name}</label>
    </C.Container>
  )
}
