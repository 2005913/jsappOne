import { useState } from 'react';
import {useDrag, useDrop, DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'


const DragAndDropItem = ({text, index, moveItem}) =>{

  const[{isDragging}, drag] = useDrag(
    () => ({
      type: "item",
      item: {text},
      collect: (monitor) =>({
        isDragging: monitor.isDragging(),
      }),
    }));
  

  const [{canDrop, isOver}, drop]= useDrop({
    accept: 'item',
    drop : (item) => moveItem(item.index, index),
    collect:(monitor) =>({
      canDrop:monitor.canDrop(),
      isOver:monitor.isOver(),
    }),
  })
  const opacity = isDragging ? 0.5 : 1;
  const backgroundColor=isOver ? 'lightblue' : 'white';

  return (
    <div ref={drag} style={{opacity, backgroundColor}}>{text}</div>
  )
}

const DragAndDropApp = () =>{
  const [items, setItems] = useState(['item 1', 'item2', 'item 3']);

  const moveItem = (dragIndex, hoverIndex) =>{
    const draggedItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    setItems(newItems);
  };
  console.log(items)
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      {items.map((text, index)=>
    
        <DragAndDropItem
          key={index}
          index={index}
          text={text}
          moveItem={moveItem}
        />
      )}
      </DndProvider>
    </div>
  )
}

export default DragAndDropApp;