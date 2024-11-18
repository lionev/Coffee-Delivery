import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '/Logo.svg'

import { NavLink } from 'react-router-dom'

import { HeaderContainer, MenuNav, Location, CheckoutLink } from './styles'

export function Header() {
  return (
    <HeaderContainer>
     <NavLink to='/'>
      <img src={Logo} alt="" />
     </NavLink>
      <MenuNav>
        <Location>
          <MapPin size={22} weight='fill' />
          <span>Recife, PE</span>
        </Location>
        <NavLink to="/checkout" title="Checkout">
          <CheckoutLink>
              <ShoppingCart size={18} weight='fill' color="#C47F17" />
          </CheckoutLink>
        </NavLink>
       
      </MenuNav>
    </HeaderContainer>
  )
}