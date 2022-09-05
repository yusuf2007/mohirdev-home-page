import React from "react";
import BigCard from "./BigCard";
import bigcards from "./BigCards";

const BigCardList = () => {
  const bigcardlist = bigcards.map((bigcard) => (
    <BigCard bigcard={bigcard}></BigCard>
  ));

  return <>{bigcardlist}</>;
};

export default BigCardList;
