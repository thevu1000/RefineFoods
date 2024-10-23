import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ProductItem from './ProductItem';
import { useFetchProducts } from '@/api/query/product';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: { url: string }[];
    title: string;
    categoryId: number;
    category: {
        id: number;
    };
}

const ProductList: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>(); 
    const location = useLocation(); 
    const navigate = useNavigate(); 

    const queryParams = new URLSearchParams(location.search);
    const initialPageSize = parseInt(queryParams.get('pageSize') || '6', 10);
    const [pageSize, setPageSize] = useState<number>(initialPageSize);
    const [currentPage, setCurrentPage] = useState<number>(parseInt(queryParams.get('page') || '1', 10));

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    var { allProducts, error, isLoading, totalCount } = useFetchProducts(currentPage, start, end, categoryId);

    const totalPages = Math.ceil(totalCount / pageSize); 

    // Cập nhật URL khi pageSize hoặc currentPage thay đổi
    useEffect(() => {
        const newParams = new URLSearchParams(location.search);
        newParams.set('pageSize', pageSize.toString());
        newParams.set('page', currentPage.toString());
        navigate(`?${newParams.toString()}`, { replace: true }); 
    }, [pageSize, currentPage, navigate, location.search]);

    // Reset currentPage về 1 khi categoryId thay đổi
    useEffect(() => {
        setCurrentPage(1); 
    }, [categoryId]);

    if (isLoading) return (
        <Skeleton className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
            {/* Hiển thị skeleton loading */}
        </Skeleton>
    );

    if (error instanceof Error) return <p>An error occurred: {error.message}</p>;
    if (!allProducts?.length) return <p>No products found.</p>;

    const filteredProducts: Product[] = allProducts.filter((product: Product) => {
        return product.category.id === parseInt(categoryId!, 10);
    });

    if (!filteredProducts.length) return <p>No products found for this category.</p>;

    const productsToDisplay = filteredProducts.slice(0, pageSize);

    return (
        <div className='bg-white py-[20px] lg:min-h-[524px] flex flex-col justify-between rounded-b-[36px]'>
            <div className='container mx-auto flex flex-col gap-10'>
                {productsToDisplay.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>

            <div className='flex justify-end mt-4 container mx-auto'>
                <Link
                    className='border px-2 py-2 text-sm font-medium hover:bg-gray-50'
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    to={`/categories/${categoryId}?pageSize=${pageSize}&page=${currentPage - 1}`}
                >
                    <svg className='h-[20px] text-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='currentColor' d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </Link>

                <div className="flex">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Link
                            key={index + 1}
                            className={`px-3 py-1 bg-white border ${currentPage === index + 1 && 'text-primary'}`}
                            onClick={() => setCurrentPage(index + 1)}
                            to={`?pageSize=${pageSize}&page=${index + 1}`}
                        >
                            {index + 1}
                        </Link>
                    ))}
                </div>

                <Link
                    className='border px-2 py-2 text-sm font-medium hover:bg-gray-50'
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    to={`/categories/${categoryId}?pageSize=${pageSize}&page=${currentPage + 1}`}
                >
                    <svg className='h-[20px] text-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='currentColor' d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </Link>
            </div>
        </div>
    );
};

export default ProductList;
