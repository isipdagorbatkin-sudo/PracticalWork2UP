import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = state.find((product) => product.id === action.product.id);

      if (item) {
        return state.map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }

      return [...state, { ...action.product, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const value = useMemo(() => {
    const cartCount = cart.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );

    return {
      cart,
      cartCount,
      totalPrice,
      addToCart: (product) => dispatch({ type: "ADD_ITEM", product }),
      removeFromCart: (id) => dispatch({ type: "REMOVE_ITEM", id }),
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

export { CartProvider, useCart };

