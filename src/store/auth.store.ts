import { create } from "zustand";
import { persist } from "zustand/middleware";

//Interfaces 
import { State, Actions } from "../interfaces/auth.interfaces";
import { MainUserLogged } from "../interfaces/mainUser.interface";

export const useAuthStore = create(persist<State & Actions>(
  (set) => ({
    token: "",
    profile: null,
    isAuth: false,
    setToken: (token: string) => set((state) => ({
      token,
      isAuth: true
    })),
    setProfile: (profile: MainUserLogged) => set((state) => ({
      profile
    })),
    setLogout: () => set((state) => ({
      token: "",
      profile: null,
      isAuth: false,
    }))
  
  }), {
    name: 'auth'
  }
))