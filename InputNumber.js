import React from 'react'

function InputNumber( props ){
  let value = props.value || props.defaultValue || null;
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default InputNumber;
