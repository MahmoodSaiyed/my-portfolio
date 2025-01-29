import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import validator from 'validator'
import emailjs from '@emailjs/browser'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault()


    if (validEmail && message && name && phone) {
      try {
        await emailjs.send(
          'service_j006t9d',
          'template_khmsyoh',
          { to_mail: email, name, phone, message },
          'vWSfDh9TyA0kqnFX3'
        )
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
      } catch (error) {
        toast.error('Failed to send the email. Please try again.', {
          position: toast.POSITION.BOTTOM_LEFT,
        })
      }
    } else {
      toast.error('Please fill out all fields correctly.', {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
          sendEmail(e)
        }}
      >
        <input
          placeholder="Your Name"
          id="name"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          placeholder="Your Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
            setEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div style={{ display: 'flex', gap: '8px' }}>
        
          <input
            placeholder="Your Phone Number"
            id="phone"
            maxLength={10}
            type="number"
            name="phone"
            pattern="^\d{7,15}$" // Ensures phone number format is valid
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting || !validEmail || !message || !name || !phone}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
