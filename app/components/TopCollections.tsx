'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopCollections = () => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        swiperRef.current = new window.Swiper('.carousel3', {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 30,
          observer: true,
          observeParents: true,
          breakpoints: {
            600: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
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

  const collections = [
    {
      id: 1,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-01.jpg',
        '/images/box-item/img-collection-02.jpg',
        '/images/box-item/img-collection-03.jpg',
        '/images/box-item/img-collection-04.jpg',
      ],
      avatar: '/images/avatar/avatar-03.png',
      items: 12,
      likes: 97,
    },
    {
      id: 2,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-05.jpg',
        '/images/box-item/img-collection-06.jpg',
        '/images/box-item/img-collection-07.jpg',
        '/images/box-item/img-collection-08.jpg',
      ],
      avatar: '/images/avatar/avatar-01.png',
      items: 12,
      likes: 97,
    },
    {
      id: 3,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-09.jpg',
        '/images/box-item/img-collection-10.jpg',
        '/images/box-item/img-collection-11.jpg',
        '/images/box-item/img-collection-12.jpg',
      ],
      avatar: '/images/avatar/avatar-02.png',
      items: 12,
      likes: 97,
    },
    {
      id: 4,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-13.jpg',
        '/images/box-item/img-collection-14.jpg',
        '/images/box-item/img-collection-15.jpg',
        '/images/box-item/img-collection-16.jpg',
      ],
      avatar: '/images/avatar/avatar-03.png',
      items: 12,
      likes: 97,
    },
    {
      id: 5,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-01.jpg',
        '/images/box-item/img-collection-02.jpg',
        '/images/box-item/img-collection-03.jpg',
        '/images/box-item/img-collection-04.jpg',
      ],
      avatar: '/images/avatar/avatar-01.png',
      items: 12,
      likes: 97,
    },
    {
      id: 6,
      name: 'Bored ape#21',
      username: '@Themesflat',
      images: [
        '/images/box-item/img-collection-01.jpg',
        '/images/box-item/img-collection-02.jpg',
        '/images/box-item/img-collection-03.jpg',
        '/images/box-item/img-collection-04.jpg',
      ],
      avatar: '/images/avatar/avatar-01.png',
      items: 12,
      likes: 97,
    },
  ]

  const ShopIcon = () => (
    <div className='icon'>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </div>
  )

  return (
    <div className='tf-section top-collections'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading-section pb-20'>
              <h2 className='tf-title'>Top collections in week</h2>
              <Link href='/explore' className=''>
                Discover more <i className='icon-arrow-right2'></i>
              </Link>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='featured pt-10 swiper-container carousel3'>
              <div className='swiper-wrapper'>
                {collections.map((collection) => (
                  <div key={collection.id} className='swiper-slide'>
                    <div className='tf-card-collection'>
                      <Link href={`/collection/${collection.id}`}>
                        <div className='media-images-collection'>
                          {collection.images.map((image, index) => (
                            <Image
                              key={index}
                              src={image}
                              alt={`${collection.name} ${index + 1}`}
                              width={150}
                              height={150}
                              className='collection-image'
                            />
                          ))}
                          <div className='author-poster'>
                            <Image
                              src={collection.avatar}
                              alt={collection.name}
                              width={60}
                              height={60}
                              className='w-full rounded-full'
                            />
                          </div>
                        </div>
                      </Link>

                      <div className='card-bottom'>
                        <div className='author'>
                          <h5>
                            <Link href={`/collection/${collection.id}`}>
                              {collection.name}
                            </Link>
                          </h5>
                          <div className='infor'>{collection.username}</div>
                        </div>

                        <div className='bottom-right'>
                          <div className='shop'>
                            <ShopIcon />
                            <p>{collection.items} Item</p>
                          </div>
                          <div className='like'>
                            <span className='wishlist-button icon-heart'></span>
                            <p>{collection.likes} like</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCollections
