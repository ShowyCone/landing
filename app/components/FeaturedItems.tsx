'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedItems = () => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        swiperRef.current = new window.Swiper('.featured.carousel', {
          loop: false,
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          spaceBetween: 24,
          centeredSlides: false,
          watchOverflow: true,
          allowTouchMove: true,
          navigation: {
            clickable: true,
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          },
        })
      }
    }

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

  const featuredItems = [
    {
      id: 1,
      image: '/images/box-item/card-item-01.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Kathryn Murphy',
      avatar: '/images/avatar/avatar-box-01.jpg',
      price: '0,34',
    },
    {
      id: 2,
      image: '/images/box-item/card-item-02.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-02.jpg',
      price: '0,34',
    },
    {
      id: 3,
      image: '/images/box-item/card-item-03.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-03.jpg',
      price: '0,34',
    },
    {
      id: 4,
      image: '/images/box-item/card-item-04.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-04.jpg',
      price: '0,34',
    },
    // Duplicate items for carousel effect
    {
      id: 5,
      image: '/images/box-item/card-item-01.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-05.jpg',
      price: '0,34',
    },
    {
      id: 6,
      image: '/images/box-item/card-item-02.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-06.jpg',
      price: '0,34',
    },
    {
      id: 7,
      image: '/images/box-item/card-item-03.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-07.jpg',
      price: '0,34',
    },
    {
      id: 8,
      image: '/images/box-item/card-item-04.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-04.jpg',
      price: '0,34',
    },
  ]

  return (
    <div className='tf-section featured-item style-bottom'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading-section pb-20'>
              <h2 className='tf-title'>Featured Item</h2>
              <Link href='/explore'>
                Discover more <i className='icon-arrow-right2'></i>
              </Link>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='relative'>
              <div className='featured pt-10 swiper-container carousel overflow-hidden mx-20 px-4 pb-40'>
                <div className='swiper-wrapper'>
                  {featuredItems.map((item, index) => (
                    <div key={item.id} className='swiper-slide'>
                      <div className='featured-card group'>
                        <div className='featured-card-image'>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className='featured-card-image img'
                            sizes='(max-width: 640px) 100vw, 33vw'
                            priority={false}
                            unoptimized
                          />

                          <button
                            className='featured-favorite-btn'
                            aria-label='Add to favorites'
                          >
                            <i className='icon-heart'></i>
                          </button>

                          <div className='featured-countdown'>
                            <span
                              className='js-countdown'
                              data-timer='7500'
                              data-labels='d,h,m,s'
                            ></span>
                          </div>

                          <div className='featured-bid-btn'>
                            <button
                              className='tf-button'
                              data-toggle='modal'
                              data-target='#popup_bid'
                            >
                              <span>Place Bid</span>
                            </button>
                          </div>
                        </div>

                        <div className='px-1 flex flex-col grow'>
                          <div className='relative group/title mb-3'>
                            <h5 className='featured-title px-1'>
                              <Link href={`/nft/${item.id}`}>{item.title}</Link>
                            </h5>
                            <div className='featured-tooltip'>
                              {item.title}
                              <div className='featured-tooltip-arrow' />
                            </div>
                          </div>

                          <div className='px-1 mb-3'>
                            <div className='flex items-center justify-between'>
                              <span className='featured-price'>
                                <i className='icon-gem featured-price-icon'></i>
                                {item.price}
                              </span>
                              <span className='featured-badge'>Featured</span>
                            </div>
                          </div>

                          <div className='grow px-1 mb-3'>
                            <div className='relative group/desc w-full'>
                              <p className='featured-description'>
                                Digital collectible item by {item.creator}
                              </p>
                              <div className='featured-tooltip'>
                                Digital collectible item by {item.creator}
                                <div className='featured-tooltip-arrow' />
                              </div>
                            </div>
                          </div>

                          <div className='featured-divider'></div>

                          <div className='px-1 flex justify-between items-center'>
                            <span className='featured-creator-label'>
                              Created by:
                            </span>
                            <div className='relative group/author flex-1 min-w-0 ml-2'>
                              <span className='featured-creator-name block'>
                                <Link
                                  href={`/author/${item.creator
                                    .toLowerCase()
                                    .replace(' ', '-')}`}
                                >
                                  {item.creator}
                                </Link>
                              </span>
                              <div className='featured-tooltip featured-tooltip-right'>
                                {item.creator}
                                <div className='featured-tooltip-arrow featured-tooltip-arrow-right' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='swiper-pagination'></div>
              </div>
              <div className='slider-next swiper-button-next absolute bottom-0 -right-4 z-10'></div>
              <div className='slider-prev swiper-button-prev absolute bottom-0 -left-4 z-10'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
