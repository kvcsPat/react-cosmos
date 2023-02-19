import React from "react";
import CardComponent from "./CardComponent";
import "./cardList.scss";

export default function CardList({ apodList }) {
  return (
    <>
      <div className="card-list">
        {apodList
          .map((apod) => <CardComponent key={apod.date} apod={apod} />)
          .reverse()}
      </div>
    </>
  );
}
