import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;

  background: ${props => props.theme['base-card']};
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;

  img {
    position: absolute;
    margin-top: -2rem;
  }

`

export const FormContainer = styled.div``

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const Category = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  font-size: 0.75rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  border-radius: 9999px;
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};
`

export const Title = styled.h1`
  font-size: 20px;

  color: ${props => props.theme['base-text']};
`

export const Description = styled.p`
  max-width: 200px;

  font-size: 0.875rem;
  text-align: center;

  color: ${props => props.theme['base-label']};
`