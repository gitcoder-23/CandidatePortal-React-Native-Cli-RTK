import {createAsyncThunk} from '@reduxjs/toolkit';
import rootApi from '../../rootApi';
import {AuthMainModel} from '../models/authModel';

type authActionType = {
  postRegister?: any;
};

export const RegisterAction = createAsyncThunk<
  AuthMainModel,
  authActionType,
  {}
>('register/auth/post', async postRegister => {
  console.log('RegisterAction@-->', postRegister);

  const response = await rootApi.post('/users', postRegister);
  console.log('responseLog1->', response);
  return response.data;
});
