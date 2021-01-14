import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../utils/validationSchema'
import { useHistory, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../utils/redux/actions'

const Landing = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const {isLoggedIn} = useSelector(state=> state)
  const { path } = useRouteMatch()
  const { goBack, push } = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if (user || isLoggedIn) push("/home")
    setLoading(false)
  }, [isLoggedIn])
  if (loading) return <h1>...</h1>
  return (
    <div className='container'>
      <h1>{path === '/signin' ? (
        "Sign in below"
      ) : 
        "New user? Register below."
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
        <Form>
          <ErrorMessage name='username' />
          <Field type='text' name='username' placeholder='Username' />
          <ErrorMessage name='password' />
          <Field type='password' name='password' placeholder='Password' />
          <button className='btn' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>

      <button className='btn' type='button' onClick={() => goBack()}>
        Back
      </button>
    </div>
  )
}

export default Landing
