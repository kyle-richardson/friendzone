import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../utils/validationSchema'
import { useHistory, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../utils/redux/actions'
import { Button, Checkbox } from "@material-ui/core"
import { TextField } from "formik-material-ui";

const Landing = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {isLoggedIn} = useSelector(state=> state)
  const { path } = useRouteMatch()
  const {push } = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if (user && isLoggedIn) push("/home")
    setLoading(false)
  }, [isLoggedIn])

  if (loading) return <h1>...</h1>
  return (
    <div className='form-container'>
      <h1>{path === '/signin' ? (
        "Sign in below"
      ) : 
        "Register below."
      }</h1>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          path === '/signin'
             ? dispatch(login(values))
             : dispatch(register(values))
        }}
      >
        {({ errors, touched }) => (
        <Form style={{
          display: "flex", 
          flexDirection: "column",
          width: "50%",
          margin: "0 auto"
        }}>
          {/* <Field type='text' name='username' placeholder='Username' /> */}
          <ErrorMessage name="username"/>
          <Field 
            style={{marginTop: "20px"}}
            component={TextField}
            type="username"
            name="username"
            className="username"
            // InputProps={{ onKeyUp: checkValues }}
            label="Username"
            required
          />
          <ErrorMessage name="password"/>
          <Field 
            style={{marginTop: "20px"}}
            component={TextField}
            type="password"
            name="password"
            className="password"
            // InputProps={{ onKeyUp: checkValues }}
            label="Password"
            required
          />
          <Button 
            style={{marginTop: "20px"}}
            type="submit"
          >
            {path === '/signin' ? "Sign In" : "Register"}
          </Button>
          {path === '/signin' ? 
              <Button onClick={()=>push('/register')}>I don't have an account</Button>
              :
              <Button onClick={()=>push('/signin')}>I already have an account</Button>
          }
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Landing
