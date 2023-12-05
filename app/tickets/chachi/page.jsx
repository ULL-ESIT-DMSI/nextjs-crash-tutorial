import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'ESIT Next',
    description: 'Generated by create next app',
}

export default function () {
    return (
        <div>
            <h1>Chachi</h1>
            <Link href="/" >Go back to the beginning home page</Link>
        </div>
    );
}
