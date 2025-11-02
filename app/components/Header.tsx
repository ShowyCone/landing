'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [canvasMenuOpen, setCanvasMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header id='header_main' className='header_1 header-fixed'>
        <div className='themesflat-container'>
          <div className='row'>
            <div className='col-md-12'>
              <div id='site-header-inner'>
                <div className='wrap-box flex'>
                  <div id='site-logo'>
                    <div id='site-logo-inner'>
                      <Link href='/' rel='home' className='main-logo'>
                        <Image
                          id='logo_header'
                          src='/images/logo/logo.png'
                          alt='Open9 NFT Marketplace'
                          width={150}
                          height={40}
                          data-retina='/images/logo/logo@2x.png'
                        />
                      </Link>
                    </div>
                  </div>

                  <div
                    className='mobile-button'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <span></span>
                  </div>

                  <nav id='main-nav' className='main-nav'>
                    <ul id='menu-primary-menu' className='menu'>
                      <li className='menu-item menu-item-has-children current-menu-item'>
                        <a>Home</a>
                        <ul className='sub-menu'>
                          <li className='menu-item current-item'>
                            <Link href='/'>Home 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-2'>Home 2</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-3'>Home 3</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-4'>Home 4</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-5'>Home 5</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-6'>Home 6</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/home-7'>Home 7</Link>
                          </li>
                          <li className='menu-item has-item'>
                            <a href='#'>Home Slider Style</a>
                            <ul className='nav-sub-menu'>
                              <li className='nav-menu-item'>
                                <Link href='/slider-3d'>Slider 3d</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/slider-scroll'>Slider Scroll</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/slider-animation'>
                                  Slider Animation
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item'>
                        <Link href='/about-us'>About us</Link>
                      </li>
                      <li className='menu-item menu-item-has-children'>
                        <a>Explore</a>
                        <ul className='sub-menu'>
                          <li className='menu-item'>
                            <Link href='/explore-1'>Explore Style 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/explore-2'>Explore Style 2</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/explore-3'>Explore Style 3</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/explore-4'>Explore Style 4</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/nft-detail-1'>NFT Detail 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/nft-detail-2'>NFT Detail 2</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/nft-detail-3'>NFT Detail 3</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/ranking'>Ranking</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/upcoming'>Upcoming Projects</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item menu-item-has-children'>
                        <a>Pages</a>
                        <ul className='sub-menu'>
                          <li className='menu-item has-item'>
                            <Link href='/market'>Market</Link>
                            <ul className='nav-sub-menu'>
                              <li className='nav-menu-item'>
                                <Link href='/market-create'>Create</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market'>Market</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-active-bid'>
                                  Active Bid
                                </Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-explore'>Explore</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-collection'>
                                  My collection
                                </Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-favorite'>My favorite</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-wallet'>Wallet</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market-history'>History</Link>
                              </li>
                              <li className='nav-menu-item'>
                                <Link href='/market'>Settings</Link>
                              </li>
                            </ul>
                          </li>
                          <li className='menu-item'>
                            <Link href='/author-1'>Authors Style 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/author-2'>Authors Style 2</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/terms-condition'>
                              Terms & Condition
                            </Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/no-result'>No Result</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/faq'>FAQs</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/coming-soon'>Coming Soon</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/maintenance'>Maintenance</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/404'>404</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/login'>Login</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/sign-up'>Sign up</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item menu-item-has-children'>
                        <a>Blog</a>
                        <ul className='sub-menu'>
                          <li className='menu-item'>
                            <Link href='/blog-grid'>Blog Grid</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/blog-grid-1'>Blog Grid 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/blog-list'>Blog List</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/blog-list-1'>Blog List 1</Link>
                          </li>
                          <li className='menu-item'>
                            <Link href='/blog-detail'>Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item'>
                        <Link href='/contact-us'>Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  <div className='flat-wallet flex'>
                    <div className='' id='wallet-header'>
                      <Link
                        href='/market-wallet'
                        id='connectbtn'
                        className='tf-button style-1'
                      >
                        <span>Wallet connect</span>
                        <i className='icon-wa'></i>
                      </Link>
                    </div>
                    <div className='header-search relative'>
                      <a
                        href='#'
                        className='show-search'
                        onClick={(e) => {
                          e.preventDefault()
                          setSearchOpen(!searchOpen)
                        }}
                      >
                        <i className='icon-search'></i>
                      </a>
                      <div
                        className={`top-search ${searchOpen ? 'active' : ''}`}
                      >
                        <form
                          action='#'
                          method='get'
                          role='search'
                          className='search-form relative'
                        >
                          <input
                            type='search'
                            id='search'
                            className='search-field style-1'
                            placeholder='Search...'
                            name='s'
                            title='Search for'
                            required
                          />
                          <button
                            className='search search-submit'
                            type='submit'
                            title='Search'
                          >
                            <i className='icon-search'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div
                      className='canvas'
                      onClick={() => setCanvasMenuOpen(!canvasMenuOpen)}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Navigation */}
        <div className={`canvas-nav-wrap ${canvasMenuOpen ? 'active' : ''}`}>
          <div
            className='overlay-canvas-nav'
            onClick={() => setCanvasMenuOpen(false)}
          ></div>
          <div className='inner-canvas-nav'>
            <div className='side-bar'>
              <Link href='/' rel='home' className='main-logo'>
                <Image
                  id='logo_header'
                  src='/images/logo/logo.png'
                  alt='Open9'
                  width={150}
                  height={40}
                  data-retina='/images/logo/logo@2x.png'
                />
              </Link>
              <div
                className='canvas-nav-close'
                onClick={() => setCanvasMenuOpen(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  width='20px'
                  height='20px'
                  viewBox='0 0 122.878 122.88'
                >
                  <g>
                    <path d='M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z' />
                  </g>
                </svg>
              </div>
              <div className='widget-search mt-30'>
                <form
                  action='#'
                  method='get'
                  role='search'
                  className='search-form relative'
                >
                  <input
                    type='search'
                    id='search'
                    className='search-field style-1'
                    placeholder='Search...'
                    name='s'
                    title='Search for'
                    required
                  />
                  <button
                    className='search search-submit'
                    type='submit'
                    title='Search'
                  >
                    <i className='icon-search'></i>
                  </button>
                </form>
              </div>
              <div className='widget widget-categories'>
                <h5 className='title-widget'>Categories</h5>
                <ul>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>NFTs</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Digital Art</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Music</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Photography</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Trading Cards</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Utility</Link>
                    </div>
                  </li>
                  <li>
                    <div className='cate-item'>
                      <Link href='#'>Virtual Worlds</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='widget widget-menu style-1'>
                <h5 className='title-widget'>Browse</h5>
                <ul>
                  <li>
                    <Link href='/explore-1'>Explore</Link>
                  </li>
                  <li>
                    <Link href='/market'>Market</Link>
                  </li>
                  <li>
                    <Link href='/author-1'>Authors</Link>
                  </li>
                  <li>
                    <Link href='/blog-grid'>Blog</Link>
                  </li>
                  <li>
                    <Link href='/contact-us'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-nav-wrap ${mobileMenuOpen ? 'active' : ''}`}>
          <div
            className='overlay-mobile-nav'
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className='inner-mobile-nav'>
            <Link href='/' className='main-logo'>
              <Image
                id='mobile-logo_header'
                src='/images/logo/logo.png'
                alt='Open9'
                width={150}
                height={40}
                data-retina='/images/logo/logo@2x.png'
              />
            </Link>
            <div
              className='mobile-nav-close'
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                width='20px'
                height='20px'
                viewBox='0 0 122.878 122.88'
              >
                <g>
                  <path d='M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z' />
                </g>
              </svg>
            </div>
            <nav className='main-nav'>
              <ul className='menu'>
                <li className='menu-item current-item'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/about-us'>About us</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/explore-1'>Explore</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/market'>Market</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/author-1'>Authors</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/blog-grid'>Blog</Link>
                </li>
                <li className='menu-item'>
                  <Link href='/contact-us'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
