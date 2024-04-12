import { useDrag } from "react-dnd";
import { useCallback, useState } from "react";
import update from "immutability-helper"
import { Card } from "../components/Card";
const style = {
  width:400,
}

//https://react-dnd.github.io/react-dnd/examples/sortable/simple

const cardInfo = [
  {
    id : 1,
    text : "그는 내가 이 세상에 혼자인 사람으로 있지 않을 수 있도록 내 곁에 있었다."
  },
  {
    id : 2,
    text : "표류하는 동안에 우리는 좀 더 나은 생활을 할 수 있었지만"
  },
  {
    id : 3,
    text : "그는 이 순간을 위해 그렇게 하지 않았다."
  },
  {
    id : 4,
    text : "그와 함께 누려야 했던 것들을 나는 단 열흘 동안"
  },
  {
    id : 5,
    text : "혼자서 써버렸다."
  },
  {
    id : 6,
    text : "크고 안락한 침대에 누워서,"
  },
  {
    id : 7,
    text : "낡고 더러워진 아름다운 책을 읽으면서 말이다."
  },
]

const DndConTwo = () =>{
const [cards, setCards] = useState(cardInfo);

  const moveCard = useCallback((dragIndex, hoverIndex) =>{
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const renderCard = useCallback((card, index) =>{
    return (
      <Card
      key = {card.id}
      index={index}
      id={card.id}
      text={card.text}
      moveCard={moveCard}
      />
    )
  }, [])
  return (
    <>
      <div
      style={style}
      >{cards.map((card,i)=> renderCard(card, i))}</div>
    </>)


}


export default DndConTwo