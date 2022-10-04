import React from 'react'

import loading from './Settings.gif'

export default function Spinner() {
    return (
        <div className="text-center">
            <img src={loading} alt="loader" />
        </div>
    )
}
