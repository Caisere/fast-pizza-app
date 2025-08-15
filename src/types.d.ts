export type cartItem = {
    pizzaId: number,
    name: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
}

export type createOrderError = {
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