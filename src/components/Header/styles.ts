import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 4rem;
      height: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
    }
  }
`

export const MenuNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};

  padding: 0.5rem;
  border-radius: 8px;
` 

export const CheckoutLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 8px;

  background: ${props => props.theme['yellow-light']};

  a {
    width: 1.125rem;
  }
`