import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center */
  // align-items: center; /* Vertically center */
  height: 63vh; /* Set height to full viewport height */
`;
const MapContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc; /* Add border */
  border-radius: 5px; /* Add border radius */
  width: 850px; /* Adjust width as needed */
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 430px; /* Adjust height as needed */
  border: none;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: ${props => props.textarea ? '100px' : '40px'};
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;



const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <Container>
      <CenteredContainer>
      <MapContainer>
        <MapFrame
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1751.9673094015345!2d88.22601817395648!3d22.491752995266342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI5JzMwLjMiTiA4OMKwMTMnMzguMSJF!5e1!3m2!1sen!2sin!4v1713467843244!5m2!1sen!2sin"
          width="400"
          height="430"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></MapFrame>
      </MapContainer>
      </CenteredContainer>
      <FormContainer>
        <strong className="purple"><h1>Fill Free to Contact me</h1></strong> 
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='row formRow'>
            <div className='col-6'>
              <Input
                type='text'
                name='name'
                {...register('name', {
                  required: true,
                  maxLength: 30
                })}
                placeholder='Name'
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>
            <div className='col-6'>
              <Input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                placeholder='Email address'
              />
              {errors.email && <ErrorMessage>Please enter a valid email address</ErrorMessage>}
            </div>
          </div>
          <div className='row formRow'>
            <div className='col'>
              <Input
                type='text'
                name='subject'
                {...register('subject', {
                  required: true,
                  maxLength: 75
                })}
                placeholder='Subject'
              />
              {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
            </div>
          </div>
          <div className='row formRow'>
            <div className='col'>
              <Input
                textarea
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                placeholder='Message'
              />
              {errors.message && <ErrorMessage>Please enter a message</ErrorMessage>}
            </div>
          </div>
          <SubmitButton type='submit' disabled={disabled}>
            Submit
          </SubmitButton>
        </form>
      </FormContainer>
      
    </Container>
  );
};

export default ContactForm;
