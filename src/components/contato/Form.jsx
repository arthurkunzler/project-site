import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './Form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Nome', placeholder: 'Insira seu nome...' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Telefone',
    placeholder: '(DDD) 9 9999-9999)',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'seu.email@exemplo.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Mensagem',
    placeholder: 'Insira aqui sua mensagem...',
  },
]

const Form = () => (
  <form className="form pt-3 pl-3">
    <h1 className="form-h2 text-center">Envie Sua Mensagem</h1>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}


    <button className="btn form-submit" type="submit">
        <Icon className="" icon={sendCircle} />  
    </button>
  </form>
)

export default Form