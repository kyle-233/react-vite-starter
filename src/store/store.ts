import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

// Create your store, which includes both state and (optionally) actions
export const useBearStore = create<BearState>()(
  immer(
    devtools(
      persist(
        (set) => ({
          bears: 0,
          increase: (by) => set((state) => ({ bears: state.bears + by })),
        }),
        { name: 'bearStore', storage: createJSONStorage(() => sessionStorage) },
      ),
    ),
  ),
);
