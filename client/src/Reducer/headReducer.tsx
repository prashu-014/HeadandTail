import type {State,Action} from '../types/stateType'


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_COIN": {
      const selection = action.payload;
      const lastChar = state.charMap[state.charMap.length - 1];

      let updatedColumns = [...state.columns.map((col) => [...col])];
      let updatedCharMap = [...state.charMap];

      if (lastChar === selection) {
        const targetIndex = updatedCharMap.lastIndexOf(selection);
        updatedColumns[targetIndex].push(selection);
      } else {
        updatedColumns.push([selection]);
        updatedCharMap.push(selection);
      }

      return {
        columns: updatedColumns,
        charMap: updatedCharMap,
      };
    }

    case "RESET":
      return { columns: [], charMap: [] };

    default:
      return state;
  }
};

export default reducer;
