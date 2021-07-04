import React from 'react';
import './ScrollBtn.styles.scss';

class ScrollBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }


  render() {
    return(
      <button className='scrollBtn'></button>
    )
  }
} 

export default ScrollBtn;