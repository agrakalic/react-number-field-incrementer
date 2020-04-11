import React, { useState, forwardRef, useEffect } from 'react';
import styled from 'styled-components';

const styleDefaults = {  
  fieldWidth: '60px',
  fieldHeight: '22px',
  fieldBorder: '1px solid #ccc',
  fieldBorderRadius: '2px',
  fieldBackground: '#fff',
  buttonWidth: '22px',
  buttonHeight: '22px',
  buttonColor: '#aaa',
  buttonBorder: '1px solid #ccc',
  buttonBorderRadius: '2px',
  buttonBackground: '#f1f1f1',
}

const Wrapper = styled.div`
  display: inline-flex;

  *:focus {
    outline: none;
  }

  button {
    width: ${styleDefaults.buttonWidth};
    height: ${styleDefaults.buttonHeight};
    border-radius: ${styleDefaults.buttonBorderRadius};
    line-height: ${styleDefaults.buttonHeight};
    cursor: pointer;
    text-indent: -8000px;
    overflow: hidden;
    position: relative;

    &:first-child {
      border: ${styleDefaults.buttonBorder};

      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 1px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:last-child {
      border: ${styleDefaults.buttonBorder};

      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 1px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:after {
        content: '';
        display: block;
        width: 1px;
        height: 10px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  input {
    width: ${styleDefaults.fieldWidth};
    height: ${styleDefaults.fieldHeight};
    line-height: ${styleDefaults.fieldHeight};
    text-align: center;
    border-radius: ${styleDefaults.fieldBorderRadius};
    padding: 0;
    border: ${styleDefaults.fieldBorder};
    font-size: inherit;
    margin: 0 5px;
    background: ${styleDefaults.fieldBackground};
    color: inherit;
  }
`;

const NumberIncrementer = forwardRef(
  ({ id, name, value, minValue, maxValue, onChange }, ref) => {
    const [val, setVal] = useState(1);
    const minVal = minValue || -Infinity;
    const maxVal = maxValue || Infinity;

    useEffect(() => {
      if (value) {
        setVal(value);
      }
    }, [value]);

    const handleChange = e => {
      const newVal = parseInt(e.target.value, 10);
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(newVal)) {
        if (newVal <= maxVal && newVal >= minVal) {
          setVal(newVal);
          onChange && onChange(newVal);
        }
      }
    };

    const increaseValue = e => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val + 1 >= maxVal ? maxVal : val + 1;
      setVal(newVal);
      onChange && onChange(newVal);
    };

   const decreaseValue = e => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val - 1 >= minVal ? val - 1 : minVal;
      setVal(newVal);
      onChange && onChange(newVal);
    };

    return (
      <Wrapper>
        <button type="button" onClick={decreaseValue}>
          -
        </button>
        <input
          type="text"
          name={name}
          id={id}
          ref={ref}
          value={val}
          onChange={handleChange}
        />
        <button type="button" onClick={increaseValue}>
          +
        </button>
      </Wrapper>
    );
  },
);

export default NumberIncrementer;