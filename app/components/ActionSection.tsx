'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ActionSection = () => {
  useEffect(() => {
    // Initialize particles when component mounts
    const initializeParticles = () => {
      if (typeof window !== 'undefined' && window.tsParticles) {
        window.tsParticles.load('tsparticles1', {
          fpsLimit: 60,
          particles: {
            color: {
              value: '#161616',
            },
            links: {
              color: '#000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        })
      }
    }

    // Load tsParticles dynamically
    if (typeof window !== 'undefined') {
      if (!window.tsParticles) {
        const script = document.createElement('script')
        script.src = '/js/tsparticles.min.js'
        script.onload = initializeParticles
        document.head.appendChild(script)
      } else {
        initializeParticles()
      }
    }
  }, [])

  return (
    <div className='tf-section action'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='action__body'>
              <div className='tf-tsparticles'>
                <div
                  id='tsparticles1'
                  data-color='#161616'
                  data-line='#000'
                ></div>
              </div>

              <h2>Discover, create and sell your own NFT</h2>

              <div className='flat-button flex'>
                <Link
                  href='/explore'
                  className='tf-button style-2 h50 w190 mr-10'
                >
                  Explore now
                  <i className='icon-arrow-up-right2'></i>
                </Link>
                <Link href='/create' className='tf-button style-2 h50 w230'>
                  Create your first NFT
                  <i className='icon-arrow-up-right2'></i>
                </Link>
              </div>

              {/* Background Animation */}
              <div className='bg-home7'>
                {/* First vertical slider */}
                <div className='swiper-container autoslider3reverse'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                  </div>
                </div>

                {/* Second vertical slider (reverse) */}
                <div className='swiper-container autoslider4reverse'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                  </div>
                </div>

                {/* Third vertical slider */}
                <div className='swiper-container autoslider3reverse'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                    <div className='swiper-slide'>
                      <Image
                        src='/images/item-background/bg-action-1.png'
                        alt='Background animation'
                        width={100}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for tsParticles
declare global {
  interface Window {
    tsParticles: any
  }
}

export default ActionSection
