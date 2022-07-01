import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Open Auto</title>
        <meta name="description" content="Open Auto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" p-primary bg-primary bg-primary-image">
        <div className="pt-5">
          <div className="w-p-40 main">
            <h1 className='h1 '>
              Vechile Maintainance From The Comfort of Your Home
            </h1>
            <p className="p ">
              Open Auto Soothes the hassle of maintaining you vechile and helps your deals with unexpected repairs worry-free.
            </p>
            <Formik
              initialValues={{ name: "", email: "" }}
              onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
              validationSchema={SignupSchema}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  <Input name="name" type="text" className="mt-1 custom-btn-input" placeHolder="Enter Your Name" value={values.name} onChange={handleChange} />
                  {errors.name && touched.name && <div className="center p">{errors.name}</div>}
                  <Input name="email" type="email" className="mt-1 custom-btn-input" placeHolder="Enter Your Email" value={values.email} onChange={handleChange} />
                  {errors.email && touched.email && <div className="center  p">{errors.email}</div>}
                  <Button type="submit" classes="mt-1 custom-btn-input border-1-secondary" text="Submit" />
                </Form>)}
            </Formik>
          </div>


          <Footer onlySocailLinks={true} />
        </div>
      </main>
      <div className="flex p-primary main-2">
        <div className="p-2 w-p-50">
          <Image src="/picku_service.png" height={500} width={500} />
        </div>
        <div className="w-p-50">
       
            <h1 className='h1 w-p-50'>
              Focused on Time Saving
            </h1>
            <p className="p ">
              Open Auto Soothes the hassle of maintaining you vechile and helps your deals with unexpected repairs worry-free.
            </p>
            <Button classes="mt-1 custom-btn-input border-1-secondary" text="Download The Mobile App" />


        </div>
      </div>

    </div>
  )
}
