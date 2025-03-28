

import { create } from 'zustand'        // zustand 1.4k  vs Recoil 1740k (1.74M)

import { toCamelCase } from './index.js'

const storeInventory = {}     // where all the createStoreItem() items will be remembered by name

// -------------------------------------------------------------------------------------------------
export const createStoreItem = (name, initialValue) => {
    const setFn = toCamelCase('set '+name)

const useStore = create(set => ({
    [name]: initialValue,
    [setFn]: (newValue) => set(_state => ({ [name]: newValue})),
  }))

  storeInventory[name] = useStore

  return () => useStore(state => [state[name], state[setFn]])    // just the pieces we want out of the store
}                                                                // to act like a hook

storeInventory["useUsername"] = createStoreItem('username', '')   // useUsername() will be called later

// -------------------------------------------------------------------------------------------------
export const useStoreItem = (name) => {
    const setFn = toCamelCase('set '+name)

    if (!storeInventory[name]) {
      throw new Error("call createStoreItem() before calling useStoreItem().")
    }

    const useStore = storeInventory[name]

  return useStore(state => [state[name], state[setFn]])
}

// -------------------------------------------------------------------------------------------------
export const openGeneralStore = () => {       // must be called from inside a react component, usually App() or getUserInfo()

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

