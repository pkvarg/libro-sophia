'use client'
import React, { useCallback, useState } from 'react'
import useLoginModal from '@/app/hooks/useLoginModal'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      // await signIn('credentials', {
      //   email,
      //   password,
      // })

      // toast.success('Logged in')

      loginModal.onClose()
    } catch (error) {
      console.log(error, 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }, [email, password, loginModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='Heslo'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Prihlásenie'
      actionLabel='Prihlásiť sa'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      // footer={footerContent}
    />
  )
}

export default LoginModal
