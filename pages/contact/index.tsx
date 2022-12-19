import Link from 'next/link'
import { MainLayout } from '../../components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
        <div className={'center2'}>
          <h3>Contact Page</h3>
          <h1>
            Ir a <Link className={'linkBlue'} href={'/about'}>About</Link>
          </h1>
        </div>
        
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
