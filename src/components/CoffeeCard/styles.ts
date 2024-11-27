import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
  width: 256px;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;

  img {
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
  }

`

export const CategoriesContainer = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
  `

export const Title = styled.h1`
  margin-top: 1rem;
  
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;
  
  color: ${props => props.theme['base-label']};
  ${mixins.fonts.textS}
`

export const OrdersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${props => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
  } 
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${props => props.theme['base-text']};
  }

  span:last-child {
     ${mixins.fonts.titleM};
    color: ${props => props.theme['base-text']}
  }
`

export const Currency = styled.span`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme['base-text']};
  font-weight: 400;
`

export const Price = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
`

export const CoffeeAmountInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2.5rem;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 8px;
  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-button']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

