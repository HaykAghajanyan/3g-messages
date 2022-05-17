import {useForm} from "react-hook-form";
import {useAuthTab} from "../../contexts/AuthTabProvider";
import {AUTH_TABS} from "../../helpers/constants";
import classes from './Login.module.css'
import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../../api/api";
import {useNavigate} from "react-router-dom";
import {useUserInfo} from "../../contexts/UserProvider";

const [, REGISTRATION] = AUTH_TABS

const Login = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const {setAuthRoute} = useAuthTab()
    const {setUser} = useUserInfo()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(item => item.name === data.login && item.password === data.password)

                if(user) {
                    if(data.save) {
                        localStorage.setItem('user', data.login)
                    } else {
                        sessionStorage.setItem('user', data.login)
                    }
                    setUser(data.login)
                    navigate('../messages')
                } else {
                    setIsLoginFailed(true)
                    console.log('User is not found!')
                }
            })
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {required: true})} type="text"/>
                    <div>{errors?.login?.type}</div>
                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {required: true})} type="password"/>
                    <div>{errors?.password?.type}</div>
                </label>
                <label>
                    <input type="checkbox" {...register('save')}/>
                    Remember me?
                </label>

                <button type='submit'>log in</button>
            </form>

            {(isLoginFailed || (errors.login || errors.password)) &&
            <button onClick={() => setAuthRoute(REGISTRATION)}>go to registration</button>}

        </div>
    )
}

export default Login
