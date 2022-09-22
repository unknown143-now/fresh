import React, { useState } from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
function FaqList({item}) {
  const [click, setClick] = useState('false')
  return (
    <div className='faq-listt'>
      <div
        className={!click ? 'list-top active' : 'list-top'}
        onClick={() => setClick(!click)}
      >
        <FaRegQuestionCircle />
        <p>{item.title}</p>
      </div>
      {!click && (
        <div className='faq-body'>
          <p>{item.content}</p>
        </div>
      )}
    </div>
  )
}

export default FaqList
