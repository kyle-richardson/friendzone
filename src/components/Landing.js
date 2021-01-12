import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../utils/validationSchema'
import { useHistory, useRouteMatch } from 'react-router'
import { useDispatch } from 'react-redux'
import { login, register } from '../utils/redux/actions'

const Landing = () => {
  const { path } = useRouteMatch()
  const { goBack, push } = useHistory()
  const dispatch = useDispatch()

  return (
    <div className='container'>
      {path === '/signin' ? (
        <h1>Sign in below</h1>
      ) : (
        <h1>New user? Register below.</h1>
      )}

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          path === '/signin'
             ? dispatch(login(values))
             : dispatch(register(values))
          resetForm()
          push('/home')
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
