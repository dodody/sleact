import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
