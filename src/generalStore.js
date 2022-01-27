
import create from 'zustand'

import { toCamelCase } from './camel'

export const genStoreItem = (name, initialValue) => {
    const setFn = toCamelCase('set '+name)

const useStore = create(set => ({
    [name]: initialValue,
    [setFn]: (newValue) => set(state => ({ [name]: newValue})),
  }))

  return () => useStore(state => [state[name], state[setFn]])
}



const storeInventory = {}

export const openGeneralStore = () => {       // must be called from inside a react component, usually App() or getUserInfo()

    if (!storeInventory["useMenuParms"])
        storeInventory.useMenuParms = genStoreItem('menuParms', {});
    
    if (!storeInventory["useMenuState"])
        storeInventory.useMenuState = genStoreItem('menuState', '');
    
    if (!storeInventory["useUsername"])
        storeInventory.useUsername = genStoreItem('username', null);
    
    return storeInventory
}    




// taken from https://github.com/pmndrs/zustand


// const bears = useStore(state => state.bears)
// const [nuts, honey] = useStore(state => [state.nuts, state.honey], shallow)
// const [name, setFn] = useStore(state => [state[name], state[setFn]])
/*
const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))
*/

