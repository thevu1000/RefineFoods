import { useState, useEffect } from 'react'; // Import useEffect để theo dõi sự thay đổi
import useStore from '@/stores/store'; // Đảm bảo import đúng đường dẫn đến store

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    images: { url: string }[];
    title: string; // Thêm thuộc tính title
    categoryId: number; // Thêm thuộc tính categoryId
};

const ProductItem = ({ product }: { product: Product }) => {
    const addToCart = useStore((state) => state.addToCart); // Lấy hàm addToCart từ store
    const removeFromCart = useStore((state) => state.removeFromCart); // Lấy hàm removeFromCart từ store
    const cart = useStore((state) => state.cart); // Lấy giỏ hàng từ store
    const [itemCount, setItemCount] = useState(0); // Thêm state để theo dõi số lượng item

    useEffect(() => {
        // Cập nhật itemCount dựa trên giỏ hàng
        const productInCart = cart.find(item => item.id === product.id);
        setItemCount(productInCart ? productInCart.quantity : 0);
    }, [cart, product.id]);

    const opacity = itemCount < 1 ? 0 : 1; // Đặt opacity dựa trên itemCount

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id); // Gọi hàm removeFromCart với product.id
    };

    return (
        <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
            <div className='h-32 w-32 flex-none'>
                <img
                    className='h-full w-full object-cover rounded-full'
                    src={product.images[0]?.url || 'default-image-url'} // Thay thế bằng URL hình ảnh mặc định
                    alt={product.name}
                />
            </div>
            <div className='flex-1 flex-col text-center md:text-left'>
                <h3 className='text-lg font-bold text-gray-800'>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className='w-16 shrink-0 text-lg font-bold text-gray-800 text-center lg:text-left'>
                ${product.price.toFixed(2)}
            </div>
            <div className='flex items-center gap-2 flex-col-reverse lg:flex-row'>
                <div className="relative flex items-center overflow-hidden transition-opacity duration-300 ease-in-out" style={{ opacity }}>
                    <button
                        className="h-full rounded-tl-md rounded-bl-md border p-2 transition-all hover:bg-gray-50 active:bg-gray-50"
                        onClick={handleRemoveFromCart} // Thêm sự kiện click cho nút giảm
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-4 w-4">
                            <polyline points="6 12 18 12"></polyline>
                        </svg>
                    </button>
                    <input className="focus:outline-primary focus:border-primary h-full w-10 border p-[5px] transition-colors text-center" min="0" disabled value={itemCount} />
                    <button
                        className="h-full rounded-tr-md rounded-br-md border p-2 transition-all hover:bg-gray-50 active:bg-gray-50"
                        onClick={handleAddToCart} // Thêm sự kiện click cho nút tăng
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-4 w-4"><path fill='currentColor' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    </button>
                </div>

                <button
                    className="bg-primary flex h-8 items-center gap-1 rounded-lg pl-2 pr-2 font-bold text-white transition-all hover:bg-orange-500 active:scale-95"
                    onClick={handleAddToCart} // Thêm sự kiện click cho nút "Add to Cart"
                >
                    <svg className='h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='currentColor' d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
