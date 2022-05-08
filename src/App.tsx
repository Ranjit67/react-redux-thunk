import { Counter, IceCream } from "component";
import { Provider } from "react-redux";
import { store } from "store/cakeAction";
export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Counter />
      <IceCream />
    </Provider>
  );
}
