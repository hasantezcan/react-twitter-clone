import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
         <div>
           <ThemeButton>Tweet</ThemeButton>
           <ThemeButton full>Tweet Full</ThemeButton>
           <ThemeButton full big>Tweet Big Full</ThemeButton>
         </div>
       )

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
