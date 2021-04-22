import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../utils/redux/actions'
import { useHistory} from 'react-router'

const Signin= ()=> {
    const {isLoggedIn} = useSelector(state=> state)
    const user = JSON.parse(sessionStorage.getItem("user"));
    const {push } = useHistory()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(login(data));
    }


    useEffect(()=> {
        if (user && isLoggedIn) push("/home")
        setLoading(false)
      }, [isLoggedIn])

    return (
        <div>
            <h2>FriendZone</h2>
            <form id="form" onSubmit={
                handleSubmit(onSubmit)
                }>
                {errors.username && <span style={{color:"red"}}>{errors.username.message}</span>}
                {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}
                <label htmlFor="username">Username*</label>
                <input type="text" {...register("username", {required: "Username required"})} />
                <label htmlFor="password">Password*</label>
                <input type="password" {...register("password", { required: "Password required"})} />
                <button type="submit">Sign in</button>
                <p>Don't have an account? <a href="/register">Create one</a></p>
            </form>
        </div>
       
    );
  }

  export default Signin