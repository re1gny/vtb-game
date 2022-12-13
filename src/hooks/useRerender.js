import { useState } from 'react';

export function useRerender() {
  const [value, setValue] = useState(0);

  function rerender() {
    setValue(prev => prev + 1);
  }

  return rerender;
}