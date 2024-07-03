import Header from "./header";
import Footer from "./footer";
import Food from "./food.jsx";
import Card from "./card.jsx";
import Button from "./button.jsx";
import Student from "./student.jsx";
import Usergreeting from "./conditional_rendering.jsx";
import List from "./list.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <Food></Food>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Button></Button>
      <Student name="kaka" age={23} isStudent={true}></Student>
      <Student name="parray"></Student>
      <Usergreeting isloggedIn={true} username="roy"></Usergreeting>
      <Footer></Footer>
      <List ></List>
    </>
  );
}
export default App;
