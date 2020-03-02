import React from 'react'
import { ListOfHeroCards } from '../containers/ListOfHeroCards'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from '../containers/NotFound'
import { Layout } from '../components/Layout'
import { HeroeDetail } from '../containers/HeroeDetail'

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
