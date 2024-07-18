import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { waitTwoSeconds } from '../../utils';

// 2초 지연 추가
export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

// 2초 지연 삭제
export const __deleteToDo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(__deleteToDo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
