import {NavLink} from "react-router-dom";
import classNames from "classnames";
import classes from "./Header.module.css";
import {LINKS} from "../../helpers/constants";
import {useUserInfo} from "../../contexts/UserProvider";


const Header = () => {
    const {user, setUser} = useUserInfo()
    const logOut = () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
        setUser(null)
    }

    return (
        <header className={classes.header}>
            <ul className={classes.ul}>
                {
                    LINKS.map(link => {
                        if(link.title === "Auth" && user) {
                            return null
                        }
                        return (
                            <li key={link.to}>
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
            {
                user && (
                    <div className={classes.headerInfo}>
                        <div className={classes.logo}>{user}</div>
                        <button className={classes.link} onClick={logOut}>Log out</button>
                    </div>
                )
            }
        </header>
    )
}

export default Header
