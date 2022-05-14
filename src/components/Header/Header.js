import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import classNames from "classnames";
import {HEADER_LINKS} from "../../helpers/constants";
import {useUserInfo} from "../../contexts/UserProvider";


const Header = () => {
    const {user, setUser} = useUserInfo()

    const logOut = () => {
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        setUser(null)
    }

    // JWT

    return (
        <header className={classes.header}>
            <ul className={classes.ul}>
                {
                    HEADER_LINKS.map(link => {
                        if(link.title === "AUTH" && user) {
                            return null
                        }
                        return (
                            <li key={link.id}>
                                <NavLink
                                    className={({isActive}) => classNames(classes.link, {
                                        [classes.active]: isActive
                                    })}
                                    to={link.to}
                                >{link.title}</NavLink>
                            </li>
                        )

                    })
                }
            </ul>
            <div className={classes.headerInfo}>
                {user && <input className={classes.link} type="button" onClick={logOut} value='logout'/>}
                {user && <div className={classes.logo}>{user.name}</div>}
            </div>
        </header>
    )
}

export default Header
