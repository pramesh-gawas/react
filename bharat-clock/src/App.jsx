import "./App.css";
import ClockSlogan from "./componets/ClockSlogan";
import ClockTime from "./componets/CurrentTime";
import ClockHeading from "./componets/ClockHeading";
function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
