import Link from "next/link"
import { MainLayout } from "../../components/layout/MainLayout"

const pricing = () => {
  return (
    <MainLayout>
        <div className={'center2'}>
          <h3>Pricing Page</h3>
          <h1>
            Ir a <Link className={'linkBlue'} href={'/about'}>About</Link>
          </h1>
        </div>
        
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/pricing</code>
        </p>
    </MainLayout>
  )
}

export default pricing