import React from 'react'
import SubMenu from './components/SubMenu'
import CustomizedTables from './components/Table'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
      <SubMenu />
      <CustomizedTables />
    </Container>
  )
}

export default Home
