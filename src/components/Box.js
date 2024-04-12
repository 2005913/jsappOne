import {useDrag} from 'react-dnd'
import styles from '../css/Drag.module.css'


const Box = ({id, left, top, hideSourceOnDrag, children}) =>{
  const [{isDragging}, drag] = useDrag(
    ()=>({
      type: 'box',
      item: {id, left, top},
      collect: (moniter) => ({
        isDragging : moniter.isDragging()
      }),
    }),
    [id, left, top],
  )
  if (isDragging && hideSourceOnDrag){
    return <div ref={drag}/>
  }
  return(
    <div
      className={styles.box}
      ref={drag}
      style={{left, top}}
      data-testid="box">
        {children}
      </div>
  )
}

export default Box