import { Button } from "react-bootstrap"

export function AddToCartBn() {
    const quantity = 0
    return (
        <div className="mt-auto">
            {quantity === 0 ? <Button className="w-100"> + Add to Cart</Button>
                : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                        <Button> - </Button>
                        <span className="fs-4">{quantity}</span>donations in cart
                        <Button> + </Button>
                    </div>
                    <Button variant="danger" size="sm">Remove</Button>
                </div>}
        </div>
    )
}