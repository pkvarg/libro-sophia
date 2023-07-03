'use client'
import React, { useCallback, useState } from 'react'
import useLoginModal from '@/hooks/useLoginModal'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import useRegisterModal from '@/hooks/useRegisterModal'

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (isLoading) {
      return
    }

    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal, isLoading])

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      // await axios.post('/api/register', {
      //   email,
      //   password,
      //   username,
      //   name,
      // });

      // setIsLoading(false)

      // toast.success('Account created.');

      // signIn('credentials', {
      //   email,
      //   password,
      // });

      registerModal.onClose()
    } catch (error) {
      console.log(error, 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }, [registerModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        disabled={isLoading}
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder='Meno'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder='Užívateľské meno'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder='Heslo'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  )

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>
        Už máte vytvorený účet?
        <span
          onClick={onToggle}
          className='
            text-white 
            cursor-pointer 
            hover:underline
          '
        >
          {' '}
          Prihlásiť sa
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Vytvorte si účet'
      actionLabel='Registrovať'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
