import styled from "styled-components";

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

export const DecriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  height: 12rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.25;
  }
  p {
    margin-top: 0.875rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
`
export const CategoriesContainer = styled.div`
  margin-top: 4.125rem;
  max-width: 35.313rem;
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
  width: 100%;
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
