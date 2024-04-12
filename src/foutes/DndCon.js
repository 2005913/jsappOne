import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop, DndProvider } from 'react-dnd'
import Box from './Box.js'
import styles from '../css/Drag.module.css'


const DndCon = ({hideSourceOnDrag}) =>{
  const [boxes, setBoxes] = useState({
    a: {top: 20, left: 80, title: 'Drag me around'},
    b: {top: 200, left: 20, title: '드래그용'},
  })

  //이게 뭐하는 함수지 설정... 업데이트됐을 때 id별로 합친다?
  const moveBox = useCallback(
    (id, left, top) =>{
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: {left, top},
          },
        }),
      )
    },
    [boxes, setBoxes]
  )
  const [, drop] = useDrop(
    ()=>({
      accept: 'box',
      drop(item, monitor){
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox(item.id, left,top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
    <div
      className={styles.container}
      ref={drop}>
        {Object.keys(boxes).map((key)=>{
          const {left, top, title} = boxes[key]
          return (
            <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={true}>
              {title}
            </Box>
          )
        })}
      </div>
  )
}


export default DndCon