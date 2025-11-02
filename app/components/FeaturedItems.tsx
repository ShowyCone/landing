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
          spaceBetween: 30,
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
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
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
            <div className='featured pt-10 swiper-container carousel'>
              <div className='swiper-wrapper'>
                {featuredItems.map((item) => (
                  <div key={item.id} className='swiper-slide'>
                    <div className='tf-card-box style-1'>
                      <div className='card-media'>
                        <Link href={`/nft/${item.id}`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={300}
                            className='w-full h-auto'
                          />
                        </Link>
                        <span className='wishlist-button icon-heart'></span>

                        <div className='featured-countdown'>
                          <span
                            className='js-countdown'
                            data-timer='7500'
                            data-labels='d,h,m,s'
                          ></span>
                        </div>

                        <div className='button-place-bid'>
                          <button
                            className='tf-button'
                            data-toggle='modal'
                            data-target='#popup_bid'
                          >
                            <span>Place Bid</span>
                          </button>
                        </div>
                      </div>

                      <h5 className='name'>
                        <Link href={`/nft/${item.id}`}>{item.title}</Link>
                      </h5>

                      <div className='author flex items-center'>
                        <div className='avatar'>
                          <Image
                            src={item.avatar}
                            alt={item.creator}
                            width={40}
                            height={40}
                            className='rounded-full'
                          />
                        </div>
                        <div className='info'>
                          <span>Created by:</span>
                          <h6>
                            <Link
                              href={`/author/${item.creator
                                .toLowerCase()
                                .replace(' ', '-')}`}
                            >
                              {item.creator}
                            </Link>
                          </h6>
                        </div>
                      </div>

                      <div className='divider'></div>

                      <div className='meta-info flex items-center justify-between'>
                        <span className='text-bid'>Current Bid</span>
                        <h6 className='price gem'>
                          <i className='icon-gem'></i>
                          {item.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='swiper-pagination'></div>
              <div className='slider-next swiper-button-next'></div>
              <div className='slider-prev swiper-button-prev'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItems
