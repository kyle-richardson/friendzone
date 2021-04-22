import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { register as reg } from '../utils/redux/actions'
import { useHistory} from 'react-router'

const Register= ()=> {
    const {isLoggedIn} = useSelector(state=> state)
    const user = JSON.parse(sessionStorage.getItem("user"));
    const {push } = useHistory()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        dispatch(reg(data));
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
        <input type="password" {...register("password", { required: "Password required", minLength: {value: 8, message: "Password must be at least 8 characters long"} })} />
        <button type="submit" >Register</button>
        <p>Already have an account? <a href="/signin">Sign in</a></p>
      </form>
      </div>
    );
  }

  export default Register