import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import classNames from "classnames";
import {HEADER_LINKS} from "../../helpers/constants";
import {useUserInfo} from "../../contexts/UserProvider";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, userSelector} from "../../redux/slices/userSlice";


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const logOut = () => {
        dispatch(removeUser())
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
                {user && <div className={classes.logo}>{user}</div>}
            </div>
        </header>
    )
}

export default Header
