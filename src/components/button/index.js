import "./index.css";

export const Button = ({ children, ...restProps }) => {
  return (
    <button tabIndex={-1} {...restProps}>
      {children}
    </button>
  );
};
