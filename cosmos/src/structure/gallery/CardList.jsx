import React from "react";
import CardComponent from "./CardComponent";

export default function CardList({ apodList }) {
  return (
    <>
      <section className="cardlist">
        {apodList.map((apod) => (
          <CardComponent key={apod.date} apod={apod} />
        ))}
      </section>
    </>
  );
}
