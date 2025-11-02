'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopSellers = () => {
  const swiperRef = useRef<any>(null)
  const [selectedPeriod, setSelectedPeriod] = useState('1 day')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        swiperRef.current = new window.Swiper('.seller-slider2', {
          loop: false,
          slidesPerView: 2,
          observer: true,
          grabCursor: true,
          observeParents: true,
          spaceBetween: 30,
          navigation: {
            clickable: true,
            nextEl: '.seller-next',
            prevEl: '.seller-prev',
          },
          breakpoints: {
            500: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1070: {
              slidesPerView: 6,
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

  const topSellers = [
    {
      id: 1,
      name: 'Courtney Henry',
      avatar: '/images/avatar/avatar-01.png',
      earnings: '7,080.95',
      rank: 1,
    },
    {
      id: 2,
      name: 'Robertson',
      avatar: '/images/avatar/avatar-02.png',
      earnings: '7,080.95',
      rank: 2,
    },
    {
      id: 3,
      name: 'Midjourney NFTs',
      avatar: '/images/avatar/avatar-03.png',
      earnings: '7,080.95',
      rank: 3,
    },
    {
      id: 4,
      name: 'Kristin Watson',
      avatar: '/images/avatar/avatar-04.png',
      earnings: '7,080.95',
      rank: 4,
    },
    {
      id: 5,
      name: 'Dianne Russell',
      avatar: '/images/avatar/avatar-05.png',
      earnings: '7,080.95',
      rank: 5,
    },
    {
      id: 6,
      name: 'Jenny Wilson',
      avatar: '/images/avatar/avatar-06.png',
      earnings: '7,080.95',
      rank: 6,
    },
    {
      id: 7,
      name: 'Courtney Henry',
      avatar: '/images/avatar/avatar-02.png',
      earnings: '7,080.95',
      rank: 7,
    },
    {
      id: 8,
      name: 'Courtney Henry',
      avatar: '/images/avatar/avatar-01.png',
      earnings: '7,080.95',
      rank: 8,
    },
  ]

  const periodOptions = ['1 day', '3 day', '7 day']

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period)
    setIsDropdownOpen(false)
  }

  return (
    <div className='tf-section seller'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading-section'>
              <h2 className='tf-title pb-30'>
                Top seller in{' '}
                <span className='dropdown' id='select-day'>
                  <span
                    className='btn-selector tf-color'
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedPeriod}</span>
                  </span>
                  {isDropdownOpen && (
                    <ul>
                      {periodOptions.map((period) => (
                        <li key={period}>
                          <span
                            onClick={() => handlePeriodSelect(period)}
                            className={
                              selectedPeriod === period ? 'active' : ''
                            }
                          >
                            {period}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              </h2>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='swiper-container seller seller-slider2'>
              <div className='swiper-wrapper'>
                {topSellers.map((seller) => (
                  <div key={seller.id} className='swiper-slide'>
                    <div className='tf-author-box text-center'>
                      <div className='author-avatar'>
                        <Image
                          src={seller.avatar}
                          alt={seller.name}
                          width={80}
                          height={80}
                          className='avatar rounded-full'
                        />
                        <div className='number'>{seller.rank}</div>
                      </div>
                      <div className='author-infor'>
                        <h5>
                          <Link
                            href={`/author/${seller.name
                              .toLowerCase()
                              .replace(' ', '-')}`}
                          >
                            {seller.name}
                          </Link>
                        </h5>
                        <h6 className='price gem style-1'>
                          <i className='icon-gem'></i>
                          {seller.earnings}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='swiper-button-next seller-next over active'></div>
            <div className='swiper-button-prev seller-prev over'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSellers
