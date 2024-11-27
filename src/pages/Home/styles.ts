import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 5.875rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  justify-content: flex-start;
  margin-bottom: 7rem;
`


export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
      ${mixins.fonts.titleXL}
      color: ${props => props.theme['base-title']};
    }

    > span {
      ${mixins.fonts.textL}
      color: ${props => props.theme['base-subtitle']};
    }
`

export const CategoriesContainer = styled.div`
  margin-top: 4.125rem;
  max-width: 35.313rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`

const CategoriesIcons = {
  yellow: 'yellow-dark',
  black: 'base-text',
  orange: 'yellow',
  purple: 'purple'
} as const

interface DescriptionsProps {
  Icons: keyof typeof CategoriesIcons
}

export const CategoryBox = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  gap: 0.35rem;

  span {
    ${mixins.fonts.textM}
    font-size: 0.950rem;
  }
`

export const IconBox = styled.div<DescriptionsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:  0.5rem;
  border-radius: 9999px;
  color: ${props => props.theme['base-white']};
  background: ${props => props.theme[CategoriesIcons[props.Icons]]};
`

export const OrdersContainer = styled.div`
    max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${props => props.theme['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
