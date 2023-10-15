import { useState } from 'react';
const Form = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="formInput">
        <label> {label} </label>
        <input
          className="Inputform"
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
