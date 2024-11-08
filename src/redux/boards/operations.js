import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskProApi, setAuthHeader } from "../../config/taskProApi";

// Додати борд
export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);
      console.log(data);

      const response = await taskProApi.post("/boards", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновити борд
export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async ({ boardId, editedBoardObject }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);

      const response = await taskProApi.patch(
        `/boards/${boardId}`,
        editedBoardObject
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити борд
export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(token);
      // console.log(boardId);

      await taskProApi.delete(`/boards/${boardId}`);
      return boardId; // повертаємо ID для видалення
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
