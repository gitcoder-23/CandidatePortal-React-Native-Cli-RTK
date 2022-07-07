import {createAsyncThunk} from '@reduxjs/toolkit';
import rootApi from '../../rootApi';
import {ArticleInnerModel} from '../models/articleModel';

type articleActionType = {};

export const GetAllArticleAction = createAsyncThunk<
  ArticleInnerModel[],
  articleActionType,
  {}
>('articles/get', async () => {
  const response = await rootApi.get('/articles');
  console.log('responseAr1->', response);
  // if (response.data.articlesCount > 0) {
  return response.data.articles;
  // }
});
