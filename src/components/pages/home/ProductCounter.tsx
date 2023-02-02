import { FC, useMemo } from 'react';
import { ICartProduct } from '../../../interfaces';
import { useProduct } from '../../../hooks/useProduct';

interface InitialValues {
  count?: number;
  maxCount?: number;
}

interface Props {
  value?: number;
  initialValues?: InitialValues;
  product: ICartProduct;
  onUpdateQuantity: ({
    count,
    product,
  }: {
    count: number;
    product: ICartProduct;
  }) => void;
}

export const ProductCounter: FC<Props> = ({
  product,
  initialValues,
  onUpdateQuantity: onChange,
  value,
}) => {
  const { increaseBy, counter, maxCount } = useProduct({
    product,
    initialValues,
    onChange,
    value,
  });

  const isMaxReached = useMemo(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );

  return (
    <>
      <button onClick={() => increaseBy(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <p className="text-3xl">{counter}</p>
      <button
        onClick={() => increaseBy(+1)}
        className={isMaxReached ? 'opacity-50 cursor-not-allowed' : ''}
        disabled={isMaxReached}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </>
  );
};
