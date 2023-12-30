import { create } from 'zustand'

type TeamsStore = {
    teams: any,
    saveTeams: Function,
}

export const useTeamsStore = create<TeamsStore>((set) => ({
    teams: null,
    saveTeams: (data:any) => set((state) => ({ teams:data})),
}));