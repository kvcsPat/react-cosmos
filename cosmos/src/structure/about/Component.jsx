import React from "react";
import "./component.css";

export default function AboutComponent() {
  return (
    <div className="about-text">
      <h1>About this project</h1>
      <p>
        The idea of this app is based on an old Codecool project, in which I
        learned to fetch data in vanillaJS using this API. Since astronomy is
        awesome, I decided to create an extended version to deepen my knowledge
        in React.
      </p>
      <p>
        I really enjoyed working on this project and facing its challenges so I
        would like to extend it further in the future.
      </p>
      <p>
        In case you are a fellow explorer, I suggest you look at the stars to
        see the additional features I have in mind.
      </p>
    </div>
  );
}
