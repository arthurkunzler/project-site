import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import './Info.css'

const contactDetails = [
  {
    value: 'Felizardo Furtado, 320 Loja: 05. Bairro Petrópolis, Porto Alegre - RS.',
    icon: locationIcon,
  },
  { value: '(51) 3333-3333', icon: phoneIcon },
  { value: 'natafitness@exemplo.com', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const Info = () => (
  <section className="info pt-3">
    <h1 className="info-h2">Informações para contato</h1>

    <div className="info-details-container">{renderContactDetails()}</div>
  </section>
)

export default Info