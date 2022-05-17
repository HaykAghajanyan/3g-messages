import {useForm} from "react-hook-form";
import {useAuthRoute} from "../../contexts/RouteProvider";
import {ACTIVE_ROUTES} from '../../helpers/constants'
import classes from './Login.module.css'
import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../../api/api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/slices/userSlice";

const [, REGISTRATION] = ACTIVE_ROUTES

const Login = () => {
    const [isAuthFailed, setIsAuthFailed] = useState(false)
    const {setActiveRoute} = useAuthRoute()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(user => user.name === data.login && user.password === data.password)
                if (user) {
                    if(data.save) {
                        localStorage.setItem('user', user.name)
                    } else {
                        sessionStorage.setItem('user', user.name)
                    }
                    dispatch(setUser(data.login))
                    navigate('../messages')
                } else {
                    setIsAuthFailed(true)
                    console.error('USER is not found!')
                }
            })
    }

    return (
        <div>
            <form
                className={classes.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {minLength: 2})} type="text"/>
                    {errors && <div>{errors.login?.message}</div>}
                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password')} type="password"/>
                </label>
                <label>
                    <input type="checkbox" {...register('save')}/>
                    Remember me
                </label>
                <button type='submit'>LOG IN</button>
            </form>
            {
                isAuthFailed && <button onClick={() => setActiveRoute(REGISTRATION)}>go to registration</button>
            }
        </div>
    )
}

export default Login
