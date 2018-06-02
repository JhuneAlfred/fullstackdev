import React from 'react'
import { Sticky, StickyContainer } from '../sticky'
import Headroom from 'react-headroom'

import '../stylesheets/app.css'
import '../stylesheets/sticky.css'

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
        }) => <Headroom style={style}>{/* ... */}full stack dev</Headroom>}
      </Sticky>
      {/* ... */}
    </StickyContainer>
  </div>
)
