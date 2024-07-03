let ClockTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time:{time.toLocaleDateString()} _
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
