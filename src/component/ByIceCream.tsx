import { useSelector, useDispatch } from "react-redux";
function IceCream() {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.ice);
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="h-[300px] w-[400px] flex items-center justify-center bg-purple-600 px-4 py-2 flex-col rounded-lg shadow-xl">
        <div className="w-full flex items-center justify-center mb-4 text-white">
          {selector.iceCreams}
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <button
            onClick={() => dispatch({ type: "INCREMENT-ICECREAM" })}
            className="rounded bg-slate-500 text-white p-2 text-lg"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT-ICECREAM" })}
            className="rounded bg-slate-500 text-white p-2 text-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default IceCream;
