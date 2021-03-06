// import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Suspense } from 'react';

import LoadPokeball from "./components/ui/Loader";
import Layout from './components/layout/Layout';

import AllPokemon from './pages/AllPokemon';


function App() {
  return (
      <Layout>
        <h2>Explore the game’s fictional world by looking for wild Pokémon creatures and learning all you need to know about every pokemon</h2>
        <Suspense fallback={
          <LoadPokeball />
        }>
          <Switch>
            <Route path='/' exact>
              <AllPokemon />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
  )
}

export default App;
