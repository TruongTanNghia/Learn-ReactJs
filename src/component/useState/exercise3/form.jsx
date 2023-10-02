/* eslint-disable react/prop-types */
import { useState } from 'react';
// import '../styles/From.css';
const Form = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="formInput">
        <lable> {label} </lable>
        <input
          className="inputform"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
          // eslint-disable-next-line react/no-unknown-property
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default Form;
