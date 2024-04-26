import './Content.css'
import { useRef, useState } from 'react'
import imgProduct1 from '../../Assets/images/desktop-image-hero-1.jpg'
import imgProduct2 from '../../Assets/images/desktop-image-hero-2.jpg'
import imgProduct3 from '../../Assets/images/desktop-image-hero-3.jpg'
import mobileImg1 from '../../Assets/images/mobile-image-hero-1.jpg'
import mobileImg2 from '../../Assets/images/mobile-image-hero-2.jpg'
import mobileImg3 from '../../Assets/images/mobile-image-hero-3.jpg'
import imgAboutDark from '../../Assets/images/image-about-dark.jpg'
import imgAboutLight from '../../Assets/images/image-about-light.jpg'

import iconsArrow from '../../Assets/images/icon-arrow.svg'
import iconsLeft from '../../Assets/images/icon-angle-left.svg'
import iconsRight from '../../Assets/images/icon-angle-right.svg'


const Content = () => {
    const [noProduct, setNoProduct] = useState(1);
    let paragraf 
    let Imagesproduct 
    let title
    let mobileImages

    if (noProduct === 1) {
        title = "Discover innovative ways to decorate"
        paragraf = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        Imagesproduct = imgProduct1
        mobileImages = mobileImg1
    }else if (noProduct === 2) {
        title = "Shop now We are available all across the globe"
        paragraf = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        Imagesproduct = imgProduct2
        mobileImages = mobileImg2
    }else if (noProduct === 3) {
        title = "Manufactured with the best materials"
        paragraf = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        Imagesproduct = imgProduct3
        mobileImages = mobileImg3
    } else {
        title = "Discover innovative ways to decorate"
        paragraf = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        Imagesproduct = imgProduct1
        mobileImages = mobileImg1
    }

    const clickTambah = () => {
        let newJumlah = noProduct + 1
        setNoProduct(newJumlah)
    }
    const clickKurang = () => {
        let newJumlah = noProduct - 1
        setNoProduct(newJumlah)
    }

    console.log(noProduct)
    return (
        <div className="content-container">
            <div className="content-product">
                <div className="mobile-img-product">
                    <img src={mobileImages} className='mobile-img' alt="" />
                    <div className="mobile-icons">
                        <div className="icons-right" onClick={noProduct <= 1 ? null : clickKurang}>
                            <img src={iconsLeft} className='mobile-right' alt="" />
                        </div>
                        <div className="icons-right" onClick={noProduct >= 4 ? null : clickTambah}>
                            <img src={iconsRight} className='mobile-right' alt="" />
                        </div>
                    </div>
                </div>
                <div className="images-product">
                    <img src={Imagesproduct} className='img-product' alt="" />
                </div>
                <div className="product-title">
                    <div className="title-icons">
                        <div className="icons-title" onClick={noProduct <= 1 ? null : clickKurang} >
                            <img src={iconsLeft}  className='dekstop-right' alt="" />
                        </div>
                        <div className="icons-title" onClick={noProduct >= 4 ? null : clickTambah}>
                            <img src={iconsRight}  className='dekstop-right' alt="" />
                        </div>
                    </div>
                    <div className="title-product">
                        <p className='title-product-first'>{title}</p>
                        <p className='title-product-second'>{paragraf}</p>
                        <div className="btn-shop">
                            <p className='title-btn-shop'>SHOP NOW</p>
                            <img className='icons-btn-shop' src={iconsArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-about">
                <div className="images-about">
                    <img src={imgAboutDark} alt="" />
                </div>
                <div className="about-titles">
                    <div className="title-about">
                        <p className='title-about-first'>About our furniture</p>
                        <p className='title-about-second'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                    </div>
                </div>
                <div className="images-about">
                    <img src={imgAboutLight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content