import React from 'react'

import Card from '../Card/Card';
import SectionHeading from './SectionsHeading/SectionHeading';
import jeans from '../../assets/images/jeans.jpg';
import shirt from '../../assets/images/shirts.jpg';
import joggers from '../../assets/images/joggers.jpg';
import dresses from '../../assets/images/dresses.jpg';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';
import './NewArrivals.css';

const items = [{
  'title': 'Jeans',
  'imagePath': jeans
},
{
  'title': 'shirt',
  'imagePath': shirt
}
,
{
  'title': 'dresses',
  'imagePath': dresses
},{
  'title': 'joggers',
  'imagePath': joggers
},{
  'title': 'joggers',
  imagePath:require('../../assets/images/joggers.jpg')
},{
  'title': 'shirt',
    imagePath:require('../../assets/images/shirts.jpg')
}]


const NewArrivals = () => {
  return (
    <>
    <SectionHeading title={'New Arrivals'}/>
    <Carousel
    responsive={responsive}
    autoPlay={false}
    swipeable={true}
    draggable={false}
    showDots={false}
    infinite={false}
    partialVisbile={false}
    itemClass={'react-slider-custom-item'}
    className='px-8'
    >
        {items && items?.map((item, index)=> <Card key={item?.title + index} title={item.title} imagePath={item.imagePath}/>)}
    </Carousel>
    </>
  )
}


export default NewArrivals