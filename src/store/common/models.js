export const common = {
  state: {
    date: new Date(), // initial state
  },
  reducers: {
    // handle state changes with pure functions
    setDate(state, payload) {
      return {
        ...state,
        date: payload,
      }
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    /* async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    }, */
    async setDateAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // dispatch.count.increment(payload);
      dispatch({ type: "common/setDate", payload: new Date('December 17, 1995 03:24:00') });
    },
  }),
};
