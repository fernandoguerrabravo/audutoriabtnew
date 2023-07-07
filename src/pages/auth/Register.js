import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  PreviewCard,
} from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { Hasher } from "../../helpers/hasher";
import { UserProviders } from "../../providers/account.provider";
import Swal from "sweetalert2";

const Register = () => {

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'too short!')
      .max(50, 'too large!')
      .required('Required'),
    email: Yup.string().email('invalid mail').required('Required'),
    passcode: Yup.string()
      .required('password is required')
      .min(5, 'your password is too short')
      .matches(/[a-zA-Z]/, 'password cant contain latin characters.'),
    confirmpassword: Yup.string()
      .required('password is required')
      .min(5, 'your password is too short')
      .oneOf([Yup.ref('passcode'), null], 'Passwords not match')
  });

  return <>
    <Head title="Register" />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo pb-4 text-center">
          <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>
        <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Register</BlockTitle>
              <BlockDes>
                <p>Create New Dashlite Account</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          <Formik
                initialValues={{
                  name: '',
                  tax_id: '',
                  email: '',
                  passcode: '',
                  confirmpassword: ''
                }}
                validationSchema={UserSchema}
                onSubmit={ async (values) => {
                  const passwd = Hasher.hash.asSHA512((values.passcode));
                  const body = {
                    name: values.name ,
                    mail: values.email ,
                    password: passwd,
                  };
                  const response = await new UserProviders().createUser(body);
                  if(response.data.state === true){
                    Swal.fire({
                      icon: 'success',
                      title: 'User created successfully',
                      text: 'all right!',
                    }).then(() => {
                      window.location.replace('/auth-login');
                    });
                  } else {
                    Swal.fire({
                      icon: 'warning',
                      title: 'User cant be created, please verify',
                      text: 'something error!',
                    }).then(() => {
                      window.location.reload();
                    });
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form className='is-alter'>
                    <FormGroup>
                      <label className='form-label' htmlFor='name'>
                      User Name
                      </label>
                      <div className='form-control-wrap'>
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Enter your user name'
                          className='form-control-lg form-control'
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className='form-label-group'>
                        <label className='form-label' htmlFor='default-01'>
                        Mail
                        </label>
                      </div>
                      <div className='form-control-wrap'>
                        <Field
                          type='text'
                          name='email'
                          className='form-control-lg form-control'
                          placeholder='Enter your email address '
                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className='form-label-group'>
                        <label className='form-label' htmlFor='password'>
                      Password
                        </label>
                      </div>
                      <div className='form-control-wrap'>
                        <Field
                          type='password'
                          name='passcode'
                          placeholder='Enter your password'
                          className='form-control-lg form-control'
                        />
                        {errors.passcode && touched.passcode ? (
                          <div>{errors.passcode}</div>
                        ) : null}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className='form-label-group'>
                        <label className='form-label' htmlFor='password'>
                      Confirm Password
                        </label>
                      </div>
                      <div className='form-control-wrap'>
                        <Field
                          type='password'
                          name='confirmpassword'
                          placeholder='Confirm your password'
                          className='form-control-lg form-control'
                        />
                        {errors.confirmpassword && touched.confirmpassword ? (
                          <div>{errors.confirmpassword}</div>
                        ) : null}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      {/* <button type='submit'>holi</button> */}
                      <Button type='submit' color='primary' size='lg' className='btn-block' outline={undefined} disabled={undefined}>
                        Register
                      </Button>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
          <div className="form-note-s2 text-center pt-4">
            {" "}
            Already have an account?{" "}
            <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
              <strong>Sign in instead</strong>
            </Link>
          </div>
          {/* <div className="text-center pt-4 pb-3">
            <h6 className="overline-title overline-title-sap">
              <span>OR</span>
            </h6>
          </div>
          <ul className="nav justify-center gx-8">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Google
              </a>
            </li>
          </ul> */}
        </PreviewCard>
      </Block>
      <AuthFooter />
  </>;
};
export default Register;