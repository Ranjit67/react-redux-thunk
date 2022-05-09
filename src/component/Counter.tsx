import { connect } from "react-redux";
function Counter({ count, increment, decrement }: any) {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="h-[300px] w-[400px] flex items-center justify-center bg-purple-600 px-4 py-2 flex-col rounded-lg shadow-xl">
        <div className="w-full flex items-center justify-center mb-4 text-white">
          {count}
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <button
            onClick={() => increment("test")}
            className="rounded bg-slate-500 text-white p-2 text-lg"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="rounded bg-slate-500 text-white p-2 text-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, { number }: { number: number }) => {
  return {
    count: state.cake.count,
  };
};
const mapDispatchToProps = (dispatch: any, { number }: { number: number }) => {
  return {
    increment: (parms: any) => {
      dispatch({ type: "", payload: "INCREMENT" });
    },
    decrement: () => dispatch({ type: "", payload: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
