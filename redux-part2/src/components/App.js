import { Provider } from "react-redux";
import store from "../store";
import Cake from "./features/cakes";
import NewCake from "./features/newCakes";
import IceCream from "./features/iceCreams";
import HookCakes from "./features/hookCakes";
import Item from "./features/items";
import User from "./features/users";
import PostForm from "./features/postForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <User />
        <Cake />
        <NewCake />
        <HookCakes />
        <IceCream />
        <p>Kindly confirm your order as below</p>
        <p>
          no. of cakes
          <strong>
            <Item cake="cakes" />
          </strong>
        </p>
        <p>
          no. of icecreams
          <strong>
            <Item />
          </strong>
        </p>
      </div>
    </Provider>
  );
}

export default App;
