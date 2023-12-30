import { create } from 'zustand'

type UserStore = {
    user: any,
    saveUser: Function,
    removeUser: () => void,
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    saveUser: (userData:any) => set((state) => ({ user:userData})),
    removeUser: () => set((state) => ({ user:null})),
}));