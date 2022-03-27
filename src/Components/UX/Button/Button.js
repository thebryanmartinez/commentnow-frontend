import React from 'react'
import './Button.css'

const BaseButton = ({children, ...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export const PrimaryButton = ({children, ...rest}) => {
  return (
    <BaseButton className="button-primary" {...rest}>
    {children}
    </BaseButton>
  )
}

export const SecondaryButton = ({children, ...rest}) => {
  return (
    <BaseButton className="button-secondary" {...rest}>
    {children}
    </BaseButton>
  )
}

export const Button = ({children, ...rest}) => {
  return (
    <BaseButton className="button" {...rest}>
    {children}
    </BaseButton>
  )
}
