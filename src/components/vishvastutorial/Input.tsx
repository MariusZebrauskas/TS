import React from 'react'

const Input = () => {

const onChange = (params: React.ChangeEvent<HTMLInputElement>) => {
    console.log(params.target.value)
}

  return (
    <div>
        <input type="text" value="" onChange={(params) => onChange(params)} />
    </div>
  )
}

export default Input