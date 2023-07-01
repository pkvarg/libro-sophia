import './globals.css'
import Sidebar from './components/layout/Sidebar'
import FollowBar from './components/layout/FollowBar'
import Modal from './components/Modal'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Libro-Sophia',
  description: 'Social network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {/* <Modal actionLabel='Submit' isOpen title='Test-Modal' /> */}

        <RegisterModal />
        <LoginModal />

        <div className='h-screen bg-black'>
          <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
              <Sidebar />
              <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
