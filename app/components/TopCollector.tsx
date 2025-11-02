'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopCollector = () => {
  const swiperRef1 = useRef<any>(null)
  const swiperRef2 = useRef<any>(null)

  useEffect(() => {
    const initializeSwipers = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // First autoslider
        swiperRef1.current = new window.Swiper('.autoslider1', {
          loop: false,
          spaceBetween: 28,
          slidesPerView: 'auto',
          centeredSlides: false,
          observer: true,
          observeParents: true,
          grabCursor: true,
          breakpoints: {
            0: {
              spaceBetween: 20,
            },
            480: {
              spaceBetween: 20,
            },
            767: {
              spaceBetween: 28,
            },
            992: {
              spaceBetween: 28,
            },
          },
        })

        // Second autoslider
        swiperRef2.current = new window.Swiper('.autoslider2', {
          loop: false,
          spaceBetween: 28,
          slidesPerView: 'auto',
          centeredSlides: false,
          observer: true,
          observeParents: true,
          grabCursor: true,
          breakpoints: {
            0: {
              spaceBetween: 20,
            },
            480: {
              spaceBetween: 20,
            },
            767: {
              spaceBetween: 28,
            },
            992: {
              spaceBetween: 28,
            },
          },
        })
      }
    }

    if (typeof window !== 'undefined') {
      if (!window.Swiper) {
        const script = document.createElement('script')
        script.src = '/js/swiper-bundle.min.js'
        script.onload = initializeSwipers
        document.head.appendChild(script)
      } else {
        initializeSwipers()
      }
    }

    return () => {
      if (swiperRef1.current) {
        swiperRef1.current.destroy()
      }
      if (swiperRef2.current) {
        swiperRef2.current.destroy()
      }
    }
  }, [])

  const topCollectors1 = [
    {
      id: 1,
      name: 'EHT senders',
      avatar: '/images/avatar/avatar-small-01.png',
    },
    {
      id: 2,
      name: 'Girls riding things',
      avatar: '/images/avatar/avatar-small-02.png',
    },
    {
      id: 3,
      name: 'The lobstars',
      avatar: '/images/avatar/avatar-small-03.png',
    },
    { id: 4, name: 'Nakamigos', avatar: '/images/avatar/avatar-small-04.png' },
    {
      id: 5,
      name: 'Beanz office',
      avatar: '/images/avatar/avatar-small-01.png',
    },
    {
      id: 6,
      name: 'Sproto gremilins',
      avatar: '/images/avatar/avatar-small-02.png',
    },
    { id: 7, name: 'Psyop gang', avatar: '/images/avatar/avatar-small-03.png' },
    {
      id: 8,
      name: 'EHT senders',
      avatar: '/images/avatar/avatar-small-04.png',
    },
    {
      id: 9,
      name: 'Girls riding things',
      avatar: '/images/avatar/avatar-small-01.png',
    },
    {
      id: 10,
      name: 'The lobstars',
      avatar: '/images/avatar/avatar-small-02.png',
    },
    { id: 11, name: 'Nakamigos', avatar: '/images/avatar/avatar-small-03.png' },
    {
      id: 12,
      name: 'Beanz office',
      avatar: '/images/avatar/avatar-small-04.png',
    },
  ]

  const topCollectors2 = [
    { id: 1, name: 'Psyop gang', avatar: '/images/avatar/avatar-small-01.png' },
    { id: 2, name: 'EHT', avatar: '/images/avatar/avatar-small-02.png' },
    {
      id: 3,
      name: 'EHT senders',
      avatar: '/images/avatar/avatar-small-03.png',
    },
    {
      id: 4,
      name: 'Sproto gremilins',
      avatar: '/images/avatar/avatar-small-04.png',
    },
    {
      id: 5,
      name: 'Beanz office',
      avatar: '/images/avatar/avatar-small-01.png',
    },
    { id: 6, name: 'Nakamigos', avatar: '/images/avatar/avatar-small-02.png' },
    {
      id: 7,
      name: 'The lobstars',
      avatar: '/images/avatar/avatar-small-03.png',
    },
    {
      id: 8,
      name: 'Girls riding things',
      avatar: '/images/avatar/avatar-small-04.png',
    },
    { id: 9, name: 'Nakamigos', avatar: '/images/avatar/avatar-small-01.png' },
    {
      id: 10,
      name: 'EHT senders',
      avatar: '/images/avatar/avatar-small-02.png',
    },
    {
      id: 11,
      name: 'Sproto gremilins',
      avatar: '/images/avatar/avatar-small-03.png',
    },
    {
      id: 12,
      name: 'Girls riding things',
      avatar: '/images/avatar/avatar-small-04.png',
    },
  ]

  return (
    <div className='tf-section top-collector'>
      <div className='top-collector-wrapper'>
        <div className='bg-text'>
          <h2>Top Collector</h2>
        </div>

        <div className='heading-section'>
          <h2 className='tf-title'>Top Collector Buys Today</h2>
        </div>

        {/* First Row */}
        <div className='featured swiper-container autoslider1'>
          <div className='swiper-wrapper'>
            {topCollectors1.map((collector) => (
              <div key={collector.id} className='swiper-slide'>
                <div className='tf-author-box style-1 text-center flex'>
                  <div className='author-avatar'>
                    <Image
                      src={collector.avatar}
                      alt={collector.name}
                      width={60}
                      height={60}
                      className='avatar rounded-full'
                    />
                  </div>
                  <div className='author-infor'>
                    <h5>
                      <Link
                        href={`/author/${collector.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {collector.name}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className='featured mt-17 swiper-container autoslider2'>
          <div className='swiper-wrapper'>
            {topCollectors2.map((collector) => (
              <div key={collector.id} className='swiper-slide'>
                <div className='tf-author-box style-1 text-center flex'>
                  <div className='author-avatar'>
                    <Image
                      src={collector.avatar}
                      alt={collector.name}
                      width={60}
                      height={60}
                      className='avatar rounded-full'
                    />
                  </div>
                  <div className='author-infor'>
                    <h5>
                      <Link
                        href={`/author/${collector.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {collector.name}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCollector
