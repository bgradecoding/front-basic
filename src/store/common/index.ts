import { create } from "zustand";

interface ConfigStore {
  theme: string;
  locale: string;
  setTheme: (theme: string) => void;
  setLocale: (locale: string) => void;
}

const useConfigStore = create<ConfigStore>((set) => ({
  theme: "light",
  locale: "en",
  setTheme: (theme: string) => set({ theme }),
  setLocale: (locale: string) => set({ locale }),
}));

export default useConfigStore;
