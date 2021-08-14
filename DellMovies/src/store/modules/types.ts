export type Reducer<State = any, Action = any> = (
    state: State,
    action: Action,
  ) => State;
  
  export type StateError<T> = Partial<T> & {
    geral?: string;
  };
  
  export type GenericState = {
    loading: boolean;
    errors: StateError<any>;
  };
  