import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'
import type  { NextPageWithLayout } from './_app'

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
        <div className={'center2'}>
          <h3>About Page</h3>
          <h1>
            Ir a <Link className={'linkBlue'} href={'/'}>Home</Link>
          </h1>
        </div>
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page: JSX.Element | JSX.Element[] ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage