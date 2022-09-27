import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 1, name: 'Comprar bolo na padaria', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id ===id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Planejamento Semanal</C.Header>

          {/* area de adição */}
          <AddArea onEnter={handleAddTask} />
          {/* lista de tarefas */}
          {list.map((item, index) => (
            <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange} 
            />
          ))}
      </C.Area>
    </C.Container>

  );
}
export default App;