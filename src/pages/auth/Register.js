import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Icon,
  PreviewCard,
} from "../../components/Component";
import { FormGroup, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { Hasher } from "../../helpers/hasher";
import { UserProviders } from "../../providers/account.provider";
import Swal from "sweetalert2";

const Register = () => {
  const [passState, setPassState] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`${process.env.PUBLIC_URL}/auth-success`);
    }, 1000);
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Demasiado corto!')
      .max(50, 'Demasiado largo!')
      .required('Required'),
    email: Yup.string().email('Correo electrónico no válido').required('Required'),
    passcode: Yup.string()
      .required('Se requiere contraseña')
      .min(5, 'Su contraseña es demasiado corta.')
      .matches(/[a-zA-Z]/, 'La contraseña sólo puede contener letras latinas.'),
    confirmpassword: Yup.string()
      .required('Se requiere contraseña')
      .min(5, 'Su contraseña es demasiado corta.')
      .oneOf([Yup.ref('passcode'), null], 'Passwords no coinciden')
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
                  // console.log(body)
                  const response = await new UserProviders().createUser(body);
                  if(response.data.state == true){
                    Swal.fire({
                      icon: 'success',
                      title: 'Cliente agregado Satisfactoriamente',
                      text: 'Muy bien!',
                    }).then(() => {
                      window.location.replace('/auth-login');
                    });
                  } else {
                    Swal.fire({
                      icon: 'warning',
                      title: 'Cliente no ingresado, verifique formato',
                      text: 'Algo salió mal!',
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
                      Nombre
                      </label>
                      <div className='form-control-wrap'>
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Enter your name'
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
                        Email
                        </label>
                      </div>
                      <div className='form-control-wrap'>
                        <Field
                          type='text'
                          name='email'
                          className='form-control-lg form-control'
                          placeholder='Enter your email address or username'
                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className='form-label-group'>
                        <label className='form-label' htmlFor='password'>
                      Contraseña
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
                      Confirmar contraseña
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
                        Registrar
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