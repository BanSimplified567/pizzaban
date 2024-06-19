import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   pizzas: [],
   totalPrice: 0,
   counters: [0, 0, 0],
};

const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      buyPizza: (state, action) => {
         const pizzaIndex = state.pizzas.findIndex((pizza) => pizza.id === action.payload.id);
         if (pizzaIndex !== -1) {
            state.pizzas[pizzaIndex].count += 1;
         } else {
            state.pizzas.push({ ...action.payload, count: 1 });
         }
         state.totalPrice += action.payload.price;
      },
      cancelPizza: (state, action) => {
         const pizzaIndex = state.pizzas.findIndex((pizza) => pizza.id === action.payload);
         if (pizzaIndex !== -1) {
            state.pizzas[pizzaIndex].count -= 1;
            state.totalPrice -= state.pizzas[pizzaIndex].price;
            if (state.pizzas[pizzaIndex].count === 0) {
               state.pizzas.splice(pizzaIndex, 1);
            }
         }
      },
   },
});

export const { buyPizza, cancelPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
