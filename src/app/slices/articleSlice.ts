import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticleInnerModel} from '../models/articleModel';
import {GetAllArticleAction} from '../actions/articleAction';

export interface AuthState {
  articleItems: ArticleInnerModel[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  articleItems: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  reducers: {
    // Reducer action
  },
  extraReducers: function (builder) {
    builder.addCase(GetAllArticleAction.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(
      GetAllArticleAction.fulfilled,
      (state, action: PayloadAction<ArticleInnerModel[]>) => {
        state.isLoading = false;
        const newPayload = action.payload;
        if (newPayload) {
          state.isError = false;
          state.articleItems = newPayload;
        }
      },
    );

    builder.addCase(GetAllArticleAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default articleSlice.reducer;
