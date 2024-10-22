import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/api/fetchData';

export const useFetchProducts = () => {
    const { data: allProducts, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    return { allProducts, error, isLoading };
};

