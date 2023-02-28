//src/store/hooks/useStore.js
import { useContext, createContext } from 'react';
import { authDefault } from '../reducers/auth';
// import { counterDefault } from '../reducers/counter';

export const defaultStore = {
    store: { ...authDefault },
    dispatch: () => { },
};

export const StoreContext = createContext(defaultStore);
export default () => {
    return useContext(StoreContext);
};