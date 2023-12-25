import { create } from 'zustand'

type LoaderStore = {
    isLoaderEnabled: any,
    enableLoader: Function,
    disableLoader: () => void,
}

export const useLoaderStore = create<LoaderStore>((set) => ({
    isLoaderEnabled: false,
    enableLoader: () => set(() => ({ isLoaderEnabled:true})),
    disableLoader: () => set(() => ({ isLoaderEnabled:false})),
}));