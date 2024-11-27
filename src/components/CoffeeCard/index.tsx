import { useTheme } from "styled-components"

import { ShoppingCart } from "@phosphor-icons/react"

import { FormContainer, CardContainer, Title, Description, CategoriesContainer, PriceContainer, OrdersContainer } from "./styles"
import { QuantityInput } from "../Form/QuantityInput"
import { useState } from "react"

type Props = {
    coffee: {
      name: string;
      description: string;
      tag: string[];
      image: string;
      price: number;
    }
}

export function CoffeeCard({ coffee }: Props){
  const [quantity, setQuantity] = useState(1)
  // const [itemAdded, setItemAdded] = useState(false)

  const props = useTheme()

  function increasedQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  // function handleAddItem() {
  //   addItem({ id: coffee.id, quantity })
  //   setIsItemAdded(true)
  //   setQuantity(1)
  // }

  return(
    <CardContainer>
      <img src={coffee.image} />
      <CategoriesContainer>
        {coffee.tag.map((tags) => {
          return (
            <span key={tags}>{tags}</span>
          )
        })}
      </CategoriesContainer>
      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>
      <OrdersContainer>
          <PriceContainer>
            <span>R$</span>
            <span>{coffee.price}</span>
          </PriceContainer>
          <FormContainer>
            <QuantityInput 
              quantity={quantity} 
              increasedQuantity={increasedQuantity}   
              decreaseQuantity={decreaseQuantity}
            />
            <button>
              <ShoppingCart size={24} weight="fill" color={props['base-card']}/>
            </button>
          </FormContainer>
        </OrdersContainer>
    </CardContainer>
  )
}