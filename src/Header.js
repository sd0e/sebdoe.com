import React from 'react'
import { Helmet } from 'react-helmet'

export default function Header({ Title }) {
    return (
        <Helmet>
            <title>{Title} | Seb Doe</title>
        </Helmet>
    )
}