import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'algoexpert',
      storage: AsyncStorage,
      whitelist: ['auth', 'question', 'video', 'config'],
    },
    reducers
  );

  return persistedReducer;
};
