import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

const Header = () => {
  return (
      <nav className="flex space-x-6 bg-custom-bg p-4 text-white font-anek font-semibold sticky top-0 z-50 shadow-custom">
          <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold font-anek">Cuevana Zenteno</h1>
              <div className="flex space-x-4">
                  <Link to={ROUTES.HOME} className="text-custom-text hover:text-custom-accent">
                      Home
                  </Link>
                  <Link to={ROUTES.POPULAR} className="text-custom-text hover:text-custom-accent">
                      Popular
                  </Link>
                  <Link to={ROUTES.UPCOMING} className="text-custom-text hover:text-custom-accent">
                      Up Coming
                  </Link>
                  <Link to={ROUTES.TOPRATED} className="text-custom-text hover:text-custom-accent">
                      Top Rated
                  </Link>
                  <Link to={ROUTES.FAVORITES} className="text-custom-text hover:text-custom-accent">
                      Favorites
                  </Link>
              </div>
          </div>
      </nav>
  )
}

export default Header