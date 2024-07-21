import "./App.css";
import Form from "./Components/Form";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";

function App() {
  const users = useSelector((state) => state.loggedInUser);

  console.log('hhh',users)
  if (users) {
    return (
      <>
        <Logout />
      </>
    );
  } else
    return (
      <>
        <Form />
      </>
    );
}

export default App;
