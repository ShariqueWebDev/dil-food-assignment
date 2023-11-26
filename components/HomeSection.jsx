import React from 'react'
import Wrapper from './Wrapper'
import BannerSection from './BannerSection'
import Products from './Products'
import Category from './Category'

const HomeSection = () => {
  return (
    <Wrapper>
            <BannerSection/>
            <Category/>
            <Products headingText={"Popular Products"}/>
    </Wrapper>
  )
}

export default HomeSection
