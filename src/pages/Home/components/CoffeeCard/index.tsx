import { FormContainer, CardContainer, Title, Description, Category, CategoriesContainer } from "./styles"
import { ShoppingCart } from "@phosphor-icons/react"

export interface CoffeeCardProps {
    name: string;
    description: string;
    tag: string[];
    image: string;
    price: number;
}

export function CoffeeCard({ name, description, price, image, tag }: CoffeeCardProps){

  return(
    <CardContainer>
      <img src={image} />
      <CategoriesContainer>
        {tag.map((tags, i) => {
          return (
            <Category key={i}>{tags}</Category>
          )
        })}
      </CategoriesContainer>
      <Title>{ name }</Title>
      <Description>{description}</Description>
      <FormContainer>
        <span>R$</span>
        <span>{price}</span>
        <input 
          type="number" 
          id="coffeAmount"
          step={1}
          min={1}
        />
        <button>
          <ShoppingCart size={24} />
        </button>
      </FormContainer>
    </CardContainer>
  )
}