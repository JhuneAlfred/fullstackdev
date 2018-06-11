import React from 'react'
import { Sticky, StickyContainer } from '../sticky'
import Headroom from 'react-headroom'
import { Link } from 'react-router'

import '../stylesheets/header.css'
import '../stylesheets/sticky.css'

// const HeaderText = () => 'full stack dev'

const NavBar = () => (
  <div className="navbar">
    {/* <info className="siteName">full stack dev</info> */}
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/about">About</Link>
  </div>
)

export const Header = () => (
  <div>
    <StickyContainer>
      {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
      <Sticky>
        {({
          style = 'pinTop',

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop = '0',
          distanceFromBottom,
          calculatedHeight = '100%'
        }) => (
          <Headroom style={style}>
            {/* ... */}
            full stack dev <NavBar />
          </Headroom>
        )}
      </Sticky>
      {/* ... */}
    </StickyContainer>
  </div>
)
