import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ProductItem from './ProductItem';
import { useFetchProducts } from '@/api/query/product';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    name: string; // Thêm thuộc tính name
    description: string; // Thêm thuộc tính description
    price: number; // Thêm thuộc tính price
    images: { url: string }[]; // Thêm thuộc tính images
    title: string; // Thêm thuộc tính title
    categoryId: number; // Thêm thuộc tính categoryId
    category: {
        id: number;
    };
    // Thêm các thuộc tính khác của sản phẩm nếu cần
}

type categoryId = number;


const ProductList: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>(); // Lấy categoryId từ URL
    const location = useLocation(); // Lấy thông tin location
    const navigate = useNavigate(); // Sử dụng navigate để thay đổi URL
    const { allProducts, error, isLoading } = useFetchProducts();
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Lấy pageSize từ URL, mặc định là 6 nếu không có trong URL
    const queryParams = new URLSearchParams(location.search);
    const initialPageSize = parseInt(queryParams.get('pageSize') || '6', 10);
    const [pageSize, setPageSize] = useState<number>(initialPageSize);

    // Reset currentPage về 1 khi categoryId thay đổi
    useEffect(() => {
        setCurrentPage(1); // Reset currentPage về 1
    }, [categoryId]);

    useEffect(() => {
        // Cập nhật URL khi pageSize hoặc currentPage thay đổi
        const newParams = new URLSearchParams(location.search);
        newParams.set('pageSize', pageSize.toString());
        newParams.set('page', currentPage.toString()); // Có thể thêm page nếu bạn muốn theo dõi số trang
        navigate(`?${newParams.toString()}`, { replace: true });
    }, [pageSize, currentPage, navigate, location.search]);

    if (isLoading) return (
        <Skeleton className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
            <Skeleton className='h-32 w-32 md:h-40 md:w-40 rounded-full' />
            <Skeleton className='flex-1 flex-col text-center md:text-left' />
            <Skeleton className='w-16 shrink-0 text-lg font-bold text-gray-800' />
            <Skeleton className='flex items-center gap-2' />
        </Skeleton>
    );

    if (error instanceof Error) return <p>An error occurred: {error.message}</p>;
    if (!allProducts?.length) return <p>No products found.</p>;

    // Lọc sản phẩm theo categoryId
    const filteredProducts: Product[] = allProducts.filter((product: Product) => {
        return product.category.id === parseInt(categoryId!, 10); // Using '!' to assert it's not undefined
    });


    if (!filteredProducts.length) return <p>No products found for this category.</p>;

    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className='bg-white py-[20px] lg:min-h-[524px] flex flex-col justify-between rounded-b-[36px]'>
            <div className='container mx-auto flex flex-col gap-10'>
                {productsToDisplay.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>

            <div className='flex justify-end mt-4 container mx-auto'>
                <button className='border px-2 py-2 text-sm font-medium hover:bg-gray-50' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    <svg className='h-[20px] text-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='currentColor' d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </button>

                <div className="flex">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`px-3 py-1 bg-white border ${currentPage === index + 1 && 'text-primary'}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button className='border px-2 py-2 text-sm font-medium hover:bg-gray-50' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    <svg className='h-[20px] text-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='currentColor' d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default ProductList;
