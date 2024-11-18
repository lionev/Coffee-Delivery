import { DecriptionContainer, HeaderContainer, HomeContainer, CategoriesContainer, CategoryBox, IconBox, OrdersContainer, CoffeeContainer } from "./styles";

import CoffeCup from '../../assets/CoffeCup.png'
import { Coffee, Cube, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <DecriptionContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</p>
          <CategoriesContainer>
            <CategoryBox>
              <IconBox Icons="yellow" >
                <ShoppingCart size={16} weight="fill"/>
              </IconBox>
              <span>Compra simples e segura</span>
            </CategoryBox>
            <CategoryBox>
              <IconBox Icons="black">
                <Cube size={16} weight="fill"/>
              </IconBox>
              <span>Embalagem mantém o café intacto</span>
            </CategoryBox>
            <CategoryBox>
              <IconBox Icons="orange">
                <Timer size={16} weight="fill"/>
              </IconBox>
              <span>Entrega rápida e rastreada</span>
            </CategoryBox>
            <CategoryBox>
              <IconBox Icons="purple">
                <Coffee size={16} weight="fill"/>
              </IconBox>
              <span>O café chega fresquinho até você</span>
            </CategoryBox>
          </CategoriesContainer>
        </DecriptionContainer>
        <img src={CoffeCup} alt="" />
      </HeaderContainer>
      
      <OrdersContainer>
        <h1>Nossos cafés</h1>
        <CoffeeContainer>
          <CoffeeList />
        </CoffeeContainer>
      </OrdersContainer>
    </HomeContainer>
  )
}