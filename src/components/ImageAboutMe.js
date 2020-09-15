import React, { Component } from 'react';

import BeforeAfterSlider from 'react-before-after-slider';

class ImageABoutMe extends Component {
  render() {
    const before = 'https://ibb.co/7gvh3wJ';
    const after = 'https://ibb.co/gR406Tf';

    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    );
  }
}

export default ImageABoutMe;

{
  /* <ImageABoutMe  /> */
}
