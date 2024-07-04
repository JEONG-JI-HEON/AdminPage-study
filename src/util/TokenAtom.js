import { atom, selector } from "recoil";

export const tokenAtom = atom({
  key: "tokenAtom",
  default: undefined,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(tokenAtom),
  set: ({ set }, newValue) => {
    if (!newValue) {
      set(tokenAtom, undefined); // 로그아웃 시 tokenAtom을 undefined로 설정
    }
  },
});
