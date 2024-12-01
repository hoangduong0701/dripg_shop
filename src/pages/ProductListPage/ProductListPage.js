import React, { useMemo } from 'react'

import FilterIcon from '../../components/common/FilterIcon'
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import content from '../../data/content.json';
import Category from '../../components/Sections/Categories/Category';
import Categories from '../../components/Filters/Categories';
import ProductCard from './ProductCard.js';
const categories = content?.categories;


const ProductListPage = ({CategoryType}) => {
const categoriesContent = useMemo(()=>{
 return categories?.find((Category)=> Category.code === CategoryType);
}, [CategoryType]); 

const productListItems = useMemo(()=>{
  return content?.products?.filter((product)=> product?.category_id === categoriesContent?.id );
},[categoriesContent]);

  return (
    <div>
   
        <div className='flex'>
            <div className='w-[20%] p-[10px] border rounded-lg m-[20px]'>
                {/* Filters */}
                <div className='flex justify-between '>
                <p className='text-[16px] text-gray-600'>Tìm kiếm</p>
                <FilterIcon />
                
                </div>
                <div>
                  {/* Product types */}
                <p className='text-[16px] text-black mt-5'>Loại</p>
                <Categories types={categoriesContent?.types}/>

                <hr></hr>
                </div>
                  {/* Price */}
                  <PriceFilter />
                  <hr></hr>
                  {/* Colors */}
                  <ColorsFilter colors={categoriesContent?.meta_data.colors}/>
                  <hr></hr>
                   {/* Sizes */}
                   <SizeFilter sizes={categoriesContent.meta_data.sizes}/>
                
            </div>
            <div className='p-[15px]'>
                <p className='text-black text-lg'>{categoriesContent.description}</p>
                {/* product */}
                <div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2'>
                {productListItems?.map((item,index)=>(
                  <ProductCard key={index} {...item}/>
                ))}
                </div>
               
            </div>

      
        </div>
    </div>
  )
}

export default ProductListPage