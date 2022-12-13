import { useRef } from 'react';
import { getInitialCharactersState } from '../utils/getInitialCharactersState';
import { CHARACTERS } from '../constants/characters';
import { useRerender } from './useRerender';

export function useCharactersState(board) {
  const rerender = useRerender();
  const charactersStateRef = useRef(getInitialCharactersState(CHARACTERS, board));

  function setCharactersStateRef(value) {
    charactersStateRef.current = value;
    rerender();
  }

  return [charactersStateRef, setCharactersStateRef];
}