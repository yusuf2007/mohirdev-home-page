import React from "react";
import Card from "./Card";
import cards from "./Cards";

const CardList = () => {
  const cardList = cards.map((card) => <Card card={card}></Card>);

  return <>{cardList}</>;
};

export default CardList;
