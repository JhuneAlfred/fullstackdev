import React from 'react'
import { Sticky, StickyContainer } from '../sticky'
import Headroom from 'react-headroom'

import '../stylesheets/app.css'

let renderCount = 0
export const Header = () => (
  <div>
    <StickyContainer>
      {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => <Headroom style={style}>{/* ... */}full stack dev</Headroom>}
      </Sticky>
      {/* ... */}
    </StickyContainer>
  </div>
  //   <Sticky className="sticky-two">
  //     <div>Full StacK Dev</div>
  //   </Sticky>
)
