import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.css";


const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

type Props = {
    text: string,
    href: string
}

export const ActiveLink = ({ text, href }: Props) => {
  
    const {asPath} = useRouter()

    return (
        <Link className={(asPath === href) ? styles.linkActive : ''} href={ href }>
            { text }
        </Link>
  )
}
