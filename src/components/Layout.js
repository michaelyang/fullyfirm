import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import './styles.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Fully Firm" />
    <Header />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
