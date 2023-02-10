import { useEffect, useRef, useState } from 'react';
import { ICartProduct } from '../interfaces';

interface InitialValues {
  count?: number;
  maxCount?: number;
}

interface onChangeArgs {
  product: ICartProduct;
  count: number;
}

interface useProductArgs {
  product: ICartProduct;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  // Contador para el cambio de cantidad
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false); // Ref para saber si el componente está montado

  // Función para incrementar o decrementar el contador
  const increaseBy = (value: number) => {
    // Si el valor es negativo, lo pone en 1
    let newValue = Math.max(counter + value, 1);

    // Si tiene un máximo de cantidad
    if (initialValues?.maxCount) {
      // Si el valor es mayor que el máximo, lo pone en el máximo
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    // Cambiar el valor del contador
    setCounter(newValue);

    // Si hay un callback, se ejecuta
    onChange && onChange({ count: newValue, product });
  };

  // Reinicia el contador a 0
  const reset = () => {
    setCounter(initialValues?.count ?? value); // Si hay un valor inicial, lo pone, si no, lo pone el valor por defecto
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, [isMounted]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
