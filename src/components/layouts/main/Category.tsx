import { FC, useContext, useMemo } from 'react';
import { SeedCategory } from '../../../data/seed-data';
import { QuioscoContext } from '../../../context';

interface CategoryProps {
  category: SeedCategory;
}

export const Category: FC<CategoryProps> = ({ category }) => {
  const { name, iconName } = category;

  const { onSetCurrentCategory, currentCategory, onFilterProductsByCategory } =
    useContext(QuioscoContext);

  const isSelected = useMemo(() => {
    return currentCategory?.id === category.id;
  }, [currentCategory, category]);

  const onChangeCategory = () => {
    onFilterProductsByCategory(category);
    onSetCurrentCategory(category);
  };

  return (
    <div
      className={`flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer rounded-md transition-colors ${
        isSelected ? 'bg-amber-400' : ''
      }`}
      onClick={onChangeCategory}
    >
      <img
        src={`/img/icono_${iconName}.svg`}
        alt={`${name} icon`}
        className="w-12"
      />
      <p className="text-lg font-bold truncate">{name}</p>
    </div>
  );
};
