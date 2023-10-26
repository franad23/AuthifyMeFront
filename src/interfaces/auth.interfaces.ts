import { MainUserLogged } from "./mainUser.interface";


export interface State {
  token: string; 
  profile: MainUserLogged | null;
  isAuth: boolean;
}

export interface Actions {
  setToken: (token: string) => void;
  setProfile: (profile: MainUserLogged) => void;
  setLogout: () => void;
}

export interface PropsProtecredRoutes {
  isAllowed:  boolean;
  children?: React.ReactNode;
} 