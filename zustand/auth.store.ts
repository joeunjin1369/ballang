import { create } from "zustand";

type AuthStoreState = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  isLoginModalOpen: boolean;
  initializeAuth: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  toggleLoginModal: () => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isAuthInitialized: false,
  isLoggedIn: false,
  isLoginModalOpen: false,
  initializeAuth: () => set({ isAuthInitialized: true }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })), // 상태 반전
}));
