// import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Suspense } from 'react';

import LoadPokeball from "./components/ui/Loader";
import Layout from './components/layout/Layout';

import AllPokemon from './pages/AllPokemon';
import PokemonDetail from './pages/PokemonDetails';
import Search from './components/ui/Search';
import Navbar from './components/layout/Navbar';


function App() {
  return (
      <Layout>
        <Suspense fallback={
          <LoadPokeball />
        }>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/pokemon' /> 
            </Route>
            <Route path='/pokemon' exact>
              <AllPokemon />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
  )
}

export default App;
