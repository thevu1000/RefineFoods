import { create } from 'zustand';

// Interface cho Category
interface Category {
  id: number;
  title: string;
  isActive: boolean;
}

// Interface cho Product
interface Product {
  images: any;
  id: number;
  title: string;
  price: number;
  categoryId: number;
  quantity: number; // Thêm thuộc tính quantity để theo dõi số lượng
}

// Interface Zustand Store
interface StoreState {
  categories: Category[];
  activeCategoryId: number;
  cart: Product[]; // Thêm thuộc tính cart
  addToCart: (product: Product) => void; // Thêm hàm addToCart
  removeFromCart: (productId: number) => void; // Thêm hàm removeFromCart
}

// Tạo Zustand store
const useStore = create<StoreState>((set, get) => ({
  categories: [
    { id: 1, title: '🍟 Starters', isActive: true },
    { id: 2, title: '🍝 Pastas', isActive: false },
    { id: 3, title: '🍕 Pizzas', isActive: false },
    { id: 4, title: '🍔 Burgers', isActive: false },
    { id: 5, title: '🍩 Deserts', isActive: false },
    { id: 6, title: '🥗 Salads', isActive: false },
    { id: 7, title: '🍖 Grilled Meat', isActive: false },
    { id: 8, title: '🍗 Chicken', isActive: false },
    { id: 9, title: '🥤 Cold Drinks', isActive: false },
    { id: 10, title: '☕ Hot Drinks', isActive: false },
  ],
  activeCategoryId: 1, // Mặc định category đầu tiên active
  cart: [], // Khởi tạo giỏ hàng rỗng

  // Hàm thêm sản phẩm vào giỏ hàng
  addToCart: (product: Product) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        return {
          cart: state.cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới với số lượng = 1
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    });
  },

  // Hàm xóa sản phẩm khỏi giỏ hàng
  removeFromCart: (productId: number) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === productId);
      if (existingProduct) {
        // Nếu sản phẩm có số lượng lớn hơn 1, chỉ cần giảm số lượng
        if (existingProduct.quantity > 1) {
          return {
            cart: state.cart.map(item =>
              item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ),
          };
        } else {
          // Nếu số lượng = 1, xóa sản phẩm khỏi giỏ hàng
          return { cart: state.cart.filter(item => item.id !== productId) };
        }
      }
      return state; // Nếu sản phẩm không tồn tại, không làm gì
    });
  },
}));

export default useStore;
