import { Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function AddToCartBn() {
    const {getQuantity, increaseQuantity, decreaseQuantity, removeFromCart} = useShoppingCart()
    const quantity = getQuantity(id)
    return (
        <div className="mt-auto">
            {quantity === 0 ? <Button className="w-100" onClick={() => increaseQuantity(id)}> + Add to Cart</Button>
                : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                        <Button onClick={() => decreaseQuantity(id)}> - </Button>
                        <span className="fs-4">{quantity}</span>donations in cart
                        <Button onClick={() => increaseQuantity(id)}> + </Button>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                </div>}
        </div>
    )
}