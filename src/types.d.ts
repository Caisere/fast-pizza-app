export type CartItem = {
    pizzaId: number,
    name: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
}

export type CreateOrderError = {
    phone?: string
}


export type PizzaType = {
    id: number;
    imageUrl: string;
    ingredients: string[];
    name: string;
    soldOut: boolean;
    unitPrice: number;
};