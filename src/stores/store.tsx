import { create } from 'zustand';
import { ReactNode } from 'react';

// Interface cho Category
interface Category {
  id: number;
  title: string;
  isActive: boolean;
}

// Sản phẩm gốc (không quantity)
export interface BaseProduct {
  name: ReactNode;
  images: any;
  id: number;
  title: string;
  price: number;
  categoryId: number;
}

// Sản phẩm trong giỏ hàng (có quantity)
export interface CartItem extends BaseProduct {
  quantity: number;
}

// Interface Zustand Store
interface StoreState {
  categories: Category[];
  activeCategoryId: number;
  cart: CartItem[];
  addToCart: (product: BaseProduct) => void;
  removeFromCart: (productId: number) => void;
}

// Tạo Zustand store
const useStore = create<StoreState>((set) => ({
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
  activeCategoryId: 1,
  cart: [],

  // Thêm sản phẩm vào giỏ
  addToCart: (product: BaseProduct) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    });
  },

  // Xóa sản phẩm khỏi giỏ
  removeFromCart: (productId: number) => {
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === productId);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return {
            cart: state.cart.map(item =>
              item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ),
          };
        } else {
          return { cart: state.cart.filter(item => item.id !== productId) };
        }
      }
      return state;
    });
  },
}));

export default useStore;
