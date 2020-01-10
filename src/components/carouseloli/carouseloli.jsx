import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../../images/olihelix.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: require('../../images/olihelix2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: require('../../images/olihelix3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} style={{width:"100px", height:"100px"}} />;

export default Example;