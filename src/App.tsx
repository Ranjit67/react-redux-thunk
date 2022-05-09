import { Counter, IceCream, User } from "component";
import { Provider } from "react-redux";
import { store } from "store/cakeAction";
export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <User />
      <Counter number={1} />
      <IceCream />
    </Provider>
  );
}
