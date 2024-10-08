'use client';
import { createContext, Dispatch, SetStateAction } from 'react';

const defaultState: {
  option: number;
  setOption: Dispatch<SetStateAction<number>>;
} = {
  option: 0,
  setOption: () => {},
};

export const NavbarContext = createContext(defaultState);
