import classes from './Input.module.css';

// line 9 auto sets all input values, eg type: "text"...

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
