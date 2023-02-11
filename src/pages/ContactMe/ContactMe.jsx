import React from "react";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className='contact-page'>
      <div className='contact-section'>
        <SectionTitle title='Contact Me' />
        <div className='contact-container'>
          <h4>
            <span>Phone :</span>
            <a href='tel:+989103931258' target='_blank'>
              +98 910 393 1258
            </a>
          </h4>
          <h4>
            <span>Address :</span>
            Shahre-kord
          </h4>
          <h4>
            <span>Email :</span>
            <a href='mailto: aliasad.3128@gmail.com' target='_blank'>
              aliasad.3128@gmail.com
            </a>
          </h4>
          <h4>
            <span>Workplace type :</span>
            remote
          </h4>
        </div>
      </div>
      <div className='email-seciton'>
        <SectionTitle title='Send message' />
        <form action='POST' className='message-form'>
          <div className='message-form-wrap'>
            <div className='message-form__fullname'>
              <Input
                element='input'
                type='text'
                placeholder='Fullname'
                className='message-form__fullname-input'
                disable={true}
              />
            </div>
            <div className='message-form__email'>
              <Input
                element='input'
                type='text'
                placeholder='Email'
                className='message-form__email-input'
                disable={true}
              />
            </div>
            <div className='message-form__text'>
              <Input
                element='textarea'
                type='text'
                placeholder='Email'
                className='message-form__text-input'
                disable={true}
              />
            </div>
          </div>
          <div className='message-form__btns'>
            <Button
              className='message-form__submit-btn disable'
              type='submit'
              disabled={true}
              onClick={(e) => e.preventDefault()}>
              <span className='message-form__btn-text'>Send Message</span>
              <BsArrowRight className='message-form__btn-icon' />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
