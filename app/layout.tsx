import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open9 | NFT Marketplace',
  description:
    'Welcome to the world of rare digital art. Explore the best art from hand-picked digital artist out there and find the hidden gem.',
  keywords: 'NFT, marketplace, digital art, crypto, blockchain, collectibles',
  authors: [{ name: 'Open9' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/icon/Favicon.png',
    apple: '/icon/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Theme Styles */}
        <link rel='stylesheet' type='text/css' href='/css/style.css' />
        <link rel='stylesheet' type='text/css' href='/css/responsive.css' />
        <link rel='stylesheet' type='text/css' href='/css/animate.min.css' />
        <link
          rel='stylesheet'
          type='text/css'
          href='/css/swiper-bundle.min.css'
        />

        {/* Fonts and Icons */}
        <link rel='stylesheet' type='text/css' href='/font/font.css' />
        <link rel='stylesheet' type='text/css' href='/icon/icon.css' />
      </head>
      <body className='body'>
        {/* Preloader */}
        <div className='preload preload-container'>
          <div className='middle'>
            <div className='bar bar1'></div>
            <div className='bar bar2'></div>
            <div className='bar bar3'></div>
            <div className='bar bar4'></div>
            <div className='bar bar5'></div>
            <div className='bar bar6'></div>
            <div className='bar bar7'></div>
            <div className='bar bar8'></div>
          </div>
        </div>

        {/* Main Wrapper */}
        <div id='wrapper'>
          <div id='page' className='pt-40 home-1'>
            {children}
          </div>
        </div>

        {/* Mouse Cursors */}
        <div className='tf-mouse tf-mouse-outer'></div>
        <div className='tf-mouse tf-mouse-inner'></div>

        {/* Progress Wrap */}
        <div className='progress-wrap active-progress'>
          <svg
            className='progress-circle svg-content'
            width='100%'
            height='100%'
            viewBox='-1 -1 102 102'
          >
            <path
              d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
              style={{
                transition: 'stroke-dashoffset 10ms linear 0s',
                strokeDasharray: '307.919, 307.919',
                strokeDashoffset: '286.138',
              }}
            ></path>
          </svg>
        </div>

        {/* Scripts */}
        <Script src='/js/jquery.min.js' strategy='beforeInteractive' />
        <Script src='/js/popper.min.js' strategy='beforeInteractive' />
        <Script
          src='/js/bootstrap.bundle.min.js'
          strategy='beforeInteractive'
        />
        <Script src='/js/bootstrap.min.js' strategy='beforeInteractive' />
        <Script src='/js/swiper-bundle.min.js' strategy='afterInteractive' />
        <Script src='/js/swiper.js' strategy='afterInteractive' />
        <Script src='/js/count-down.js' strategy='afterInteractive' />
        <Script src='/js/simpleParallax.min.js' strategy='afterInteractive' />
        <Script src='/js/gsap.js' strategy='afterInteractive' />
        <Script src='/js/SplitText.js' strategy='afterInteractive' />
        <Script src='/js/wow.min.js' strategy='afterInteractive' />
        <Script src='/js/ScrollTrigger.js' strategy='afterInteractive' />
        <Script src='/js/gsap-animation.js' strategy='afterInteractive' />
        <Script src='/js/tsparticles.min.js' strategy='afterInteractive' />
        <Script src='/js/tsparticles.js' strategy='afterInteractive' />
        <Script src='/js/main.js' strategy='afterInteractive' />
      </body>
    </html>
  )
}
