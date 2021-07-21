import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

function TextField({ className, ...props }: TextFieldProps) {
  return <input {...props} className={className} />
}

const StyledTextField = styled(TextField)`
  color: ${theme('colors.textPrimary')};
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 5px 10px;
  border: none;
  border: 2px solid ${theme('colors.textSecondary')};
  border-radius: 10px;
  height: 50px;
  font-size: 20px;

  &::placeholder {
    color: ${theme('colors.textSecondary')};
  }

  &:focus {
    border-color: ${theme('colors.primary')};
  }
`

export { StyledTextField as TextField }
