import React from "react";
import withScrollReveal from "react-scrollreveal";

class MyComponent extends React.component {
  render() {
    const { animationContainerReference } = this.props;

    return (
      <div ref={animationContainerReference}>
        <p>hola</p>
      </div>
    );
  }
}

export default withScrollReveal([
  {
    selector: ".sr",
    options: {
      reset: true,
      delay: 400
    },
    interval: 100
  }
])(MyComponent);
