import React from "react";
import { createRoot } from "react-dom/client";

const reactElement = <span>react element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {reactElement}
    <br />
    Title Component
  </h1>
);
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1>React with parcel</h1>
  </div>
);

const test = (
  <div>
    <HeadingComponent />
  </div>
);
const root = createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
root.render(test);
