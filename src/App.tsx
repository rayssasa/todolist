import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 1, name: 'Comprar bolo na padaria', done: false}
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Planejamento Semanal</C.Header>

          {/* are ade adição */}

          {/* lista de tarefas */}
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
      </C.Area>
    </C.Container>

  );
}
export default App;