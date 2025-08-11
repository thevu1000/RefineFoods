import { Link, useParams } from 'react-router-dom';
import useStore from '@/stores/store'; // Đường dẫn đến Zustand store

const Category = () => {
  const { categories } = useStore();
  const { categoryId } = useParams();

  // Chuyển đổi categoryId sang kiểu number hoặc để nó là undefined
  const selectedCategoryId = categoryId ? Number(categoryId) : undefined;

  return (
    <div className='flex justify-center gap-[10px] flex-wrap lg:no-wrap'>
      {categories.map((category) => (
        <Link to={`/categories/${category.id}`} key={category.id}>
          <h2
            className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ease-in-out duration-100 whitespace-nowrap ${
              selectedCategoryId === category.id ? 'bg-primary text-white' : 'text-black hover:bg-primary/50'
            }`}
          >
            {category.title}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default Category;
