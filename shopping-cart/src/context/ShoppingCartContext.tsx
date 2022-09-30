import { createContext, useContext, ReactNode, useState } from "react"


type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartDonation = {
    id: number
    quantity: number
}

// here is logic/functionality that we need to use with the store items
type ShoppingCartContext = {
    getQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartDonations, setCartDonations] = useState<CartDonation[]>([])
    const getQuantity = (id: number) => {
        return cartDonations.find(donation => donation.id === id)?.quantity || 0
        //this means find the donation, and if found return the quantity. if not return 0
    }
    const increaseQuantity = (id: number) => {
        setCartDonations(current => {
            if (current.find(donation => donation.id === id) == null) {
                return [...current, { id, quantity: 1 }]
            } else {
                return current.map(donation => {
                    if (donation.id === id) {
                        return { ...donation, quantity: donation.quantity + 1 }
                    } else {
                        return donation
                    }
                })
            }
        })
    }
    const decreaseQuantity = (id: number) => {
        setCartDonations(current => {
            if (current.find(donation => donation.id === id)?.quantity === 1) {
                return current.filter(donation => donation.id !== id)
            } else {
                return current.map(donation => {
                    if (donation.id === id) {
                        return { ...donation, quantity: donation.quantity - 1 }
                    } else {
                        return donation
                    }
                })
            }
        })
    }
    const removeFromCart = (id: number) => {
        setCartDonations(current => {
            return current.filter(donation => donation.id !== id)
        })
    }
    return <ShoppingCartContext.Provider
        value={{
            getQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart
        }}>
        {children}
    </ShoppingCartContext.Provider>
}