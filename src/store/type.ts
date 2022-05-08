export type InitialStateType = {
  count: number;
};

export type CounterReducerType = (
  state: InitialStateType,
  action: ActionType
) => InitialStateType;

export type ActionType = {
  payload: "INCREMENT" | `DECREMENT`;
};
export type DispatchType = ({ payload }: ActionType) => ActionType;
