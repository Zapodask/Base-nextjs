import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container } from '@/styles/components/input'

interface Props {
  name: string
  label: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input
        className="form__field"
        id={fieldName}
        ref={inputRef}
        placeholder={label}
        defaultValue={defaultValue}
        {...rest}
      />
      <label className="form__label" htmlFor={fieldName}>
        {label}
      </label>
    </Container>
  )
}
