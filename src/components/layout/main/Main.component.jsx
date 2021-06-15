import React from 'react';
import './Main.styles.scss';

const Main = ({children}) => {
  return(
    <main>
      <div className='main'>
        {children}
      </div>
    </main>
  )
}

export default Main;