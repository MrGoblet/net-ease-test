import React from 'react'
import ReactDOM from 'react-dom'

const confirm = message =>
  new Promise((fulfill) => {
    const holder = document.createElement('div')
    document.body.appendChild(holder)

    const close = () => {
      document.body.removeChild(holder)
    }

    ReactDOM.render(
      <div>
        <div>{message}</div>
        <div>
          <button onClick={close}>
            取消
          </button>
          <button onClick={() => {
            close()
            fulfill()
          }}>
            确定
          </button>
        </div>
      </div>,
      holder
    )
  })

export default confirm
