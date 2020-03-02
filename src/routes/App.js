import React from 'react'
import { ListOfHeroCards } from '../components/ListOfHeroCards'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from '../containers/NotFound'
import { Layout } from '../components/Layout'
import { HeroeDetail } from '../components/HeroeDetail'

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={ListOfHeroCards} />
        <Route exact path='/heroe/:id' component={HeroeDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
