import React from 'react'

export default function MyAlert(props) {
    return (
       props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.message}</strong>
        </div>
    )
}
