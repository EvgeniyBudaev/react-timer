import React from 'react';

const Reset = ({ timeLeft, handleReset }) => {
  return (
    <>
      {
        timeLeft
          ?
          <button disabled>
            Сбросить
          </button>
          :
          <button onClick={handleReset}>
            Сбросить
             </button>
      }
    </>
  )
}

export default Reset;