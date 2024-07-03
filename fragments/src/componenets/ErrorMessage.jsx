const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>list is empty</h3>}</>;
};

export default ErrorMessage;
