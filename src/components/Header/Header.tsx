import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

const Header = () => {
  return (
    <nav>
        <div>Titulo</div>
        <ul>
            <Link to={ROUTES.HOME}>
                <li>Home</li>
            </Link>
        </ul>
        <ul>
            <Link to={ROUTES.POPULAR}>
            <li>Popular</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Header