import { FC, useContext, useMemo } from 'react';
import { QuioscoContext } from '../../../context';
import { ICategory } from '../../../interfaces';

interface CategoryProps {
  category: ICategory;
}

export const Category: FC<CategoryProps> = ({ category }) => {
  const { name, icon_name } = category;

  const { setCurrentCategory, currentCategory } = useContext(QuioscoContext);

  const isSelected = useMemo(() => {
    return currentCategory?.id === category.id;
  }, [currentCategory, category]);

  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer rounded-md transition-colors ${
        isSelected ? 'bg-amber-400' : ''
      }`}
      onClick={() => setCurrentCategory(category)}
    >
      <img
        src={`/img/icono_${icon_name}.svg`}
        alt={`${name} icon`}
        className="w-12"
      />
      <p className="text-lg font-bold truncate">{name}</p>
    </div>
  );
};
