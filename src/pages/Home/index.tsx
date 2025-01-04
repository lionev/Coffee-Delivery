import { HeaderContainer, HomeContainer, CategoriesContainer, CategoryBox, IconBox, OrdersContainer, TextsContainer } from "./styles";

import data from '../../data/Coffes.json'

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import CoffeCup from '/CoffeCup.svg'
import { useTheme } from "styled-components";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
  const props = useTheme()

  return (
    <HomeContainer>
      <HeaderContainer>
          <div>
            <TextsContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </TextsContainer>
            <CategoriesContainer>
              <CategoryBox>
                <IconBox Icons="yellow" >
                  <ShoppingCart size={16} weight="fill" color={props['white']}/>
                </IconBox>
                <span>Compra simples e segura</span>
              </CategoryBox>
              <CategoryBox>
                <IconBox Icons="black">
                  <Package size={16} weight="fill" color={props['white']}/>
                </IconBox>
                <span>Embalagem mantém o café intacto</span>
              </CategoryBox>
              <CategoryBox>
                <IconBox Icons="orange">
                  <Timer size={16} weight="fill" color={props['white']}/>
                </IconBox>
                <span>Entrega rápida e rastreada</span>
              </CategoryBox>
              <CategoryBox>
                <IconBox Icons="purple">
                  <Coffee size={16} weight="fill" color={props['white']}/>
                </IconBox>
                <span>O café chega fresquinho até você</span>
              </CategoryBox>
            </CategoriesContainer>
        </div>
        <img src={CoffeCup} alt="" />
      </HeaderContainer>
      
      <OrdersContainer>
        <h2>Nossos cafés</h2>
        <h1>Forced Reinstall windows</h1>
        <div>
          {data.coffees.map((coffe) => <CoffeeCard key={coffe.name} coffee={coffe} />)}
        </div>
      </OrdersContainer>
    </HomeContainer>
  )
}