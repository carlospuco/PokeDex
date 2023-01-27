import React, { FC } from 'react'
import './layer.scss'


interface LayerProps{
    type?: 'text',
    name?: 'search',
    autoComplete?: 'off',
    placeholder?: string,
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
}

export const Layer:FC<LayerProps> = ({
    type,
    name,
    autoComplete,
    placeholder = "GIFT URL",
    url,
    setUrl,
}) => {

  return (
    <input
    type={type}
    name={name}
    autoComplete={autoComplete}
    className="layer"
    placeholder={placeholder}
    onChange={(e) => setUrl(e.target.value)}
    value={url}
  />
  )
}
