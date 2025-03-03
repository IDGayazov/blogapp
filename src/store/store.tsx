import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi.tsx';
import { userApi } from './api/userApi.tsx';

export const store = configureStore({
    reducer: {  
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;