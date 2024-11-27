import { Minus, Plus } from "@phosphor-icons/react";
import { ContainerInput } from "./styles";

type Props = {
  quantity: number
  increasedQuantity: () => void
  decreaseQuantity: () => void
}

export function QuantityInput({ quantity, increasedQuantity, decreaseQuantity }: Props){
  return (
    <ContainerInput>
      <button onClick={decreaseQuantity}>
        <Minus size={14}/>
      </button>
      <span>{quantity}</span>
      <button onClick={increasedQuantity}> 
        <Plus size={14} />
      </button>
    </ContainerInput>
  )
}