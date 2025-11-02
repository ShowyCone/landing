'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DiscoverItems = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    items: 'All',
    status: 'All',
    priceRange: 'All',
    sortBy: 'recently added',
  })

  const [dropdowns, setDropdowns] = useState({
    category: false,
    items: false,
    status: false,
    priceRange: false,
    sortBy: false,
  })

  const discoverItems = [
    {
      id: 1,
      image: '/images/box-item/card-item-05.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-01.jpg',
      price: '0,34',
    },
    {
      id: 2,
      image: '/images/box-item/card-item-06.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-02.jpg',
      price: '0,34',
    },
    {
      id: 3,
      image: '/images/box-item/card-item-07.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-03.jpg',
      price: '0,34',
    },
    {
      id: 4,
      image: '/images/box-item/card-item-08.jpg',
      title: 'Dayco serpentine belt',
      creator: 'Cody Fisher',
      avatar: '/images/avatar/avatar-box-04.jpg',
      price: '0,34',
    },
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
      avatar: '/images/avatar/avatar-box-01.jpg',
      price: '0,34',
    },
  ]

  const toggleDropdown = (dropdownName: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }))
  }

  const handleFilterChange = (
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
    setDropdowns((prev) => ({
      ...prev,
      [filterType]: false,
    }))
  }

  const CategoryIcon = () => (
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
      />
    </svg>
  )

  return (
    <div className='tf-section-3 discover-item'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading-section pb-30'>
              <h2 className='tf-title'>Discover item</h2>
              <Link href='/explore' className=''>
                Discover more <i className='icon-arrow-right2'></i>
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className='col-md-12 pb-30'>
            <div className='tf-soft flex items-center justify-between'>
              <div className='soft-left'>
                {/* Category Dropdown */}
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    onClick={() => toggleDropdown('category')}
                  >
                    <CategoryIcon />
                    <span className='inner'>Category</span>
                  </button>
                  {dropdowns.category && (
                    <div className='dropdown-menu'>
                      {['All', 'Art', 'Photography', 'Music'].map((option) => (
                        <button
                          key={option}
                          className='dropdown-item'
                          onClick={() => handleFilterChange('category', option)}
                        >
                          <div
                            className={`sort-filter ${
                              filters.category === option ? 'active' : ''
                            }`}
                          >
                            <span>{option}</span>
                            <span className='icon-tick'>
                              <span className='path2'></span>
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort By Dropdown */}
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    onClick={() => toggleDropdown('sortBy')}
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Sort by: {filters.sortBy}</span>
                  </button>
                  {dropdowns.sortBy && (
                    <div className='dropdown-menu'>
                      <h6>Sort by</h6>
                      {[
                        'recently added',
                        'Price: Low to High',
                        'Price: High to Low',
                        'Auction ending soon',
                      ].map((option) => (
                        <button
                          key={option}
                          className='dropdown-item'
                          onClick={() => handleFilterChange('sortBy', option)}
                        >
                          <div
                            className={`sort-filter ${
                              filters.sortBy === option ? 'active' : ''
                            }`}
                          >
                            <span>{option}</span>
                            <span className='icon-tick'>
                              <span className='path2'></span>
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Items Grid */}
          {discoverItems.map((item, index) => (
            <div
              key={item.id}
              className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp`}
              data-wow-delay={`${index * 0.1}s`}
            >
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
                    <span>Posted by:</span>
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
      </div>
    </div>
  )
}

export default DiscoverItems
