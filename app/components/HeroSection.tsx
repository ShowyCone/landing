'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Extend Window interface to include Swiper
declare global {
  interface Window {
    Swiper: any
  }
}

const HeroSection = () => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    // Initialize Swiper when component mounts
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        swiperRef.current = new window.Swiper('.swiper-3d-7', {
          loop: true,
          spaceBetween: 0,
          slidesPerView: 1,
          centeredSlides: true,
          freeMode: true,
          watchSlidesProgress: true,
          effect: 'coverflow',
          grabCursor: true,
          coverflowEffect: {
            rotate: 15,
            stretch: 90,
            depth: 0,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          },
          on: {
            slideChange: function (this: any) {
              // Resetear todos los z-index primero
              const allSlides = this.slides
              allSlides.forEach((slide: any) => {
                const slideElement = slide as HTMLElement
                slideElement.style.zIndex = '1'
                slideElement.classList.remove('swiper-slide-center')
              })

              // Asignar z-index alto solo a la slide activa (la del centro)
              const activeSlide = allSlides[this.activeIndex]
              if (activeSlide) {
                activeSlide.style.zIndex = '999'
                activeSlide.classList.add('swiper-slide-center')
              }
            },
            slideChangeTransitionStart: function (this: any) {
              // También actualizar durante la transición
              const allSlides = this.slides
              allSlides.forEach((slide: any) => {
                const slideElement = slide as HTMLElement
                slideElement.style.zIndex = '1'
                slideElement.classList.remove('swiper-slide-center')
              })

              const activeSlide = allSlides[this.activeIndex]
              if (activeSlide) {
                activeSlide.style.zIndex = '999'
                activeSlide.classList.add('swiper-slide-center')
              }
            },
            init: function (this: any) {
              // Configurar z-index inicial después de que swiper se inicialice
              setTimeout(() => {
                const allSlides = this.slides
                allSlides.forEach((slide: any) => {
                  const slideElement = slide as HTMLElement
                  slideElement.style.zIndex = '1'
                  slideElement.classList.remove('swiper-slide-center')
                })

                // Slide activa inicial
                const activeSlide = allSlides[this.activeIndex]
                if (activeSlide) {
                  activeSlide.style.zIndex = '999'
                  activeSlide.classList.add('swiper-slide-center')
                }
              }, 50)
            },
          },
          navigation: {
            nextEl: '.next-3d',
            prevEl: '.prev-3d',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index: number, className: string) {
              return (
                '<span class="' + className + '">' + (index + 1) + '</span>'
              )
            },
          },
          breakpoints: {
            500: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          },
        })
      }
    }

    // Load Swiper dynamically
    if (typeof window !== 'undefined') {
      if (!window.Swiper) {
        const script = document.createElement('script')
        script.src = '/js/swiper-bundle.min.js'
        script.onload = initializeSwiper
        document.head.appendChild(script)
      } else {
        initializeSwiper()
      }
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy()
      }
    }
  }, [])

  const nftItems = [
    {
      id: 1,
      image: '/images/box-item/banner-01.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 2,
      image: '/images/box-item/banner-02.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 3,
      image: '/images/box-item/banner-03.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 4,
      image: '/images/box-item/banner-04.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 5,
      image: '/images/box-item/banner-05.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 6,
      image: '/images/box-item/banner-06.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
    {
      id: 7,
      image: '/images/box-item/banner-07.jpg',
      title: 'Dayco serpentine belt',
      price: '0,34',
    },
  ]

  return (
    <div className='flat-pages-title'>
      <div className='widget-bg-line'>
        <div className='wraper'>
          <div className='bg-grid-line y bottom'>
            <div className='bg-line'></div>
          </div>
        </div>
      </div>

      <div className='themesflat-container w1490'>
        <div className='row'>
          <div className='col-12 pages-title'>
            <div className='content'>
              <h1 data-wow-delay='0s' className='wow fadeInUp'>
                World of top works
              </h1>
              <p className='wow fadeInUp' data-wow-delay='0.1s'>
                Welcome to the world of rare digital art. Explore the best art
                from hand-picked digital artist out there and find the hidden
                gem.
              </p>
              <div
                data-wow-delay='0.2s'
                className=' wow fadeInUp flat-button flex justify-center'
              >
                <a href='#' className='tf-button style-1 h50 w190 mr-16'>
                  Discover more <i className='icon-arrow-up-right2'></i>
                </a>
                <a href='#' className='tf-button style-1 h50 w190 active'>
                  All collections <i className='icon-arrow-up-right2'></i>
                </a>
              </div>
            </div>

            {/* Background Items */}
            <div className='icon-background'>
              <Image
                className='absolute item1'
                src='/images/item-background/item1.png'
                alt=''
                width={35}
                height={35}
              />
              <Image
                className='absolute item2'
                src='/images/item-background/item2.png'
                alt=''
                width={28}
                height={28}
              />
              <Image
                className='absolute item3'
                src='/images/item-background/item3.png'
                alt=''
                width={42}
                height={42}
              />
              <Image
                className='absolute item4'
                src='/images/item-background/item1.png'
                alt=''
                width={25}
                height={25}
              />
              <Image
                className='absolute item5'
                src='/images/item-background/item1.png'
                alt=''
                width={32}
                height={32}
              />
              <Image
                className='absolute item6'
                src='/images/item-background/item4.png'
                alt=''
                width={38}
                height={38}
              />
              <Image
                className='absolute item7'
                src='/images/item-background/item5.png'
                alt=''
                width={28}
                height={28}
              />
              <Image
                className='absolute item8'
                src='/images/item-background/item5.png'
                alt=''
                width={35}
                height={35}
              />
            </div>

            {/* 3D Swiper */}
            <div className='relative'>
              <div
                className='swiper swiper-3d-7'
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1200px',
                }}
              >
                <div className='swiper-wrapper'>
                  {nftItems.map((item, index) => (
                    <div key={item.id} className='swiper-slide'>
                      <div className='tf-card-box'>
                        <div className='card-media'>
                          <a href='#'>
                            <Image
                              src={item.image}
                              alt=''
                              width={320}
                              height={240}
                              quality={95}
                              priority={item.id <= 3}
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                aspectRatio: '4/3',
                              }}
                            />
                          </a>
                          <span className='wishlist-button icon-heart'></span>

                          {/* Countdown Timer */}
                          <div className='featured-countdown'>
                            <span
                              className='js-countdown'
                              data-timer='7500'
                              data-labels='d,h,m,s'
                            ></span>
                          </div>

                          {/* Place Bid Button */}
                          <div className='button-place-bid'>
                            <a
                              href='#'
                              data-toggle='modal'
                              data-target='#popup_bid'
                              className='tf-button'
                            >
                              <span>Place Bid</span>
                            </a>
                          </div>
                        </div>

                        <div className='meta-info text-center'>
                          <h5 className='name'>
                            <a href='nft-detail-2.html'>{item.title}</a>
                          </h5>
                          <h6 className='price gem'>
                            <i className='icon-gem'></i>
                            {item.price}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='swiper-pagination pagination-number'></div>
              </div>

              {/* Navigation Buttons */}
              <div className='swiper-button-next next-3d over'></div>
              <div className='swiper-button-prev prev-3d over'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
