import React, { useState } from "react";

const BlankInput = ({
    correctValue,
    increaseFilledBlanksCount,
    decreaseFilledBlanksCount,
  }) => {
    const [value, setValue] = useState('');
  
    const isValid = value.toLowerCase() === correctValue.toLowerCase();
  
    const isInputEmpty = value === '';
  
    function getBorderColor() {
      const mistake = {
        borderColor: 'red',
        animationName: 'showmistake',
        animationIterationCount: 'infinite',
        animationDuration: '1s',
      };
  
      const empty = {
        borderColor: 'rgb(133,80,255)',
      };
  
      const correct = {
        borderColor: 'green',
        animationName: 'showcorrect',
        animationIterationCount: 'linear',
        animationDuration: '2s',
      };
  
      if (isInputEmpty) {
        return empty;
      }
  
      if (isValid) {
        return correct;
      }
  
      return mistake;
    }
  
    function onChange(e) {
      setValue(e.target.value);
      if (value !== '' && e.target.value !== '') {
        return;
      }
  
      if (e.target.value !== '') {
        increaseFilledBlanksCount();
      } else {
        decreaseFilledBlanksCount();
      }
    }
  
    return (
      <div className="BlankInput">
        <input value={value} maxLength="1" onChange={onChange} />
        <div className="BlankInput__result" style={getBorderColor()} />
      </div>
    );
  };
  
  
  export default BlankInput;