import {useAuthTab} from "../../contexts/AuthTabProvider";
import {AUTH_TABS} from "../../helpers/constants";
import classes from "../Login/Login.module.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import {baseUrl} from "../../api/api";
import {useState} from "react";

const [LOGIN] = AUTH_TABS

const Register = () => {
    const [isRegisterSucceed, setIsRegisterSucceed] = useState(false)

    const {setAuthRoute} = useAuthTab()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        if(data.password === data.rePassword) {
            const user = {
                name: data.login,
                password: data.password
            }

            axios.post(`${baseUrl}/users`, user)
                .then(() => {
                    setIsRegisterSucceed(true)
                    setTimeout(() => {
                        setAuthRoute(LOGIN)
                    }, 2000)
                })

        } else {
            console.log('Passwords are not the same!')
        }
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {
                        required: true,
                        minLength: 4
                    })} type="text"/>
                    <div>{errors?.login?.type}</div>
                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {
                        required: true,
                        minLength: 4
                    })} type="password"/>
                    <div>{errors?.password?.type}</div>
                </label>
                <label className={classes.label}>
                    Repeat PASSWORD
                    <input {...register('rePassword', {required: true})} type="password"/>
                    <div>{errors?.rePassword?.type}</div>
                </label>
                <button type='submit'>register</button>
            </form>
            <button onClick={() => setAuthRoute(LOGIN)}>go to login</button>
            {isRegisterSucceed && <p>Registration succeed!</p>}
        </div>
    )
}

export default Register
