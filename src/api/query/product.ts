import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/api/fetchData';

export const useFetchProducts = (currentPage: number, start: number, end: number, categoryId: number) => {
    const { data: { data: allProducts, totalCount } = {}, error, isLoading } = useQuery({
        queryKey: ['products', categoryId, currentPage],
        queryFn: () => fetchProducts(start, end, categoryId),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // Dữ liệu được coi là mới trong 5 phút
    });

    return { allProducts, totalCount, error, isLoading };
};


