import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { PersistStore, ZustandStore } from "./model";
import { authSlice, themeSlice } from "./slices";
import { modalSlice } from "./slices/modal/modal.slice";

// export const useBearStore = create<ZustandStore>();

export const useBearStore = create<ZustandStore>()(
    devtools((set, get) => ({
        ...modalSlice(set, get),
    }))
);

export const usePersistStore = create<PersistStore>()(
    persist(
        (set, get) => ({
            ...themeSlice(set, get),
            ...authSlice(set, get),
        }),
        {
            name: "persist_store",
            // unique name
        }
    )
);

// export const useBearStore = create<BearState>()(
//     devtools(
//         persist((set, get) => ({
//             bears: 0,
//             increase: (by) => set((state) => ({ bears: state.bears + by })),
//         }))
//     )
// );
