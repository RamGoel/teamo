import { create } from 'zustand'

type EventsStore = {
    events: any,
    saveEvents: Function,
}

export const useEventsStore = create<EventsStore>((set) => ({
    events: null,
    saveEvents: (data:any) => set((state) => ({ events:data})),
}));