/* eslint-disable no-unused-vars */

const CounterReducer = (count, action) => {
  switch (action.type) {
    case "Increment": {
      return count * 2;
    }

    case "Dicrement": {
      return count > 1 ? count - 1 : 1;
    }
    case "Reset": {
      count = 1;
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return count;
    }
  }
};

export default CounterReducer;
