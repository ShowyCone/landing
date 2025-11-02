import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const marketplaceLinks = [
    { name: 'All NFTs', href: '/nfts' },
    { name: 'Virtual worlds', href: '/virtual-worlds' },
    { name: 'Domain names', href: '/domains' },
    { name: 'Photography', href: '/photography' },
    { name: 'Digital art', href: '/digital-art' },
    { name: 'Music', href: '/music' },
  ]

  const resourceLinks = [
    { name: 'Help center', href: '/help' },
    { name: 'Platform status', href: '/status' },
    { name: 'Partners', href: '/partners' },
    { name: 'Discount community', href: '/community' },
    { name: 'Live auctions', href: '/auctions' },
    { name: 'Discover', href: '/discover' },
  ]

  const accountLinks = [
    { name: 'Authors', href: '/authors' },
    { name: 'My Collection', href: '/collection' },
    { name: 'Author Profile', href: '/profile' },
    { name: 'Go to dashboard', href: '/dashboard' },
    { name: 'Collection', href: '/collections' },
    { name: 'Create Collection', href: '/create-collection' },
  ]

  const companyLinks = [
    { name: 'Help center', href: '/help' },
    { name: 'Platform status', href: '/status' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'icon-facebook' },
    { name: 'Twitter', href: '#', icon: 'icon-twitter' },
    { name: 'VT', href: '#', icon: 'icon-vt' },
    { name: 'TikTok', href: '#', icon: 'icon-tiktok' },
    { name: 'YouTube', href: '#', icon: 'icon-youtube' },
  ]

  return (
    <footer id='footer'>
      <div className='themesflat-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='footer-content flex flex-grow'>
              {/* Logo Section */}
              <div className='widget-logo flex-grow'>
                <div className='logo-footer' id='logo-footer'>
                  <Link href='/'>
                    <Image
                      id='logo_footer'
                      src='/images/logo/logo.png'
                      alt='Open9 Logo'
                      width={120}
                      height={40}
                    />
                  </Link>
                </div>
              </div>

              {/* Marketplace Links */}
              <div className='widget widget-menu style-1'>
                <h5 className='title-widget'>Marketplace</h5>
                <ul>
                  {marketplaceLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resource Links */}
              <div className='widget widget-menu style-2'>
                <h5 className='title-widget'>Resource</h5>
                <ul>
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Account Links */}
              <div className='widget widget-menu style-3'>
                <h5 className='title-widget'>Account</h5>
                <ul>
                  {accountLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Social */}
              <div className='widget-last'>
                <div className='widget-menu style-4'>
                  <h5 className='title-widget'>Company</h5>
                  <ul>
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <h5 className='title-widget mt-30'>Join the community</h5>
                <div className='widget-social'>
                  <ul className='flex'>
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <Link
                          href={social.href}
                          className={social.icon}
                          aria-label={social.name}
                        ></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <p>© 2023 Open9 - Made By Themesflat</p>
          <ul className='flex'>
            <li>
              <Link href='/privacy'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='/terms'>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
