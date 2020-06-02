import React from 'react';

const LogItem = ({ id, endTime, startTime }) => {
  return (
    <div>
      <div><strong>время вывода строки в лог: </strong> {endTime}</div>
      <div><strong>номер кнопки: </strong> {id}</div>
      <div><strong>время нажатия кнопки: </strong> {startTime}</div>
    </div>
  )
}

export default LogItem;

