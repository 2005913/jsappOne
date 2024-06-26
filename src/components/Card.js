import { useRef } from "react";
import {useDrag, useDrop} from "react-dnd"

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}


export const Card = ({id, text, index, moveCard}) =>{
  const ref = useRef(null)
  const [{handlerId}, drop] = useDrop({
    accept: 'card',
    collect(monitor){
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor){
      if (!ref.current){
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex){
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
      (hoverBoundingRect.botton - hoverBoundingRect.top) / 2
      //높이
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top// 물체의 세로값과 y값의 차이

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY){
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY){
        return
      }

      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{isDragging}, drag] = useDrag({
    type: 'card',
    item: () => {
      return {id, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref))
  return(
    <div 
      ref={ref} style={{ ...style, opacity}}
      data-handler-id={handlerId}
    >
      {text}
    </div>
  )
}