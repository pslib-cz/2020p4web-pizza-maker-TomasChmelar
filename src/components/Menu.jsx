import React from 'react';

const Menu = () => (
    <div>
     <Router>
      <Switch>
        <Route exact path="/order/pizza"  component={Pizza}/>
        <Route exact path="/order/calzone"  component={Calzone}/>
        <Route exact path="/ingredients"  component={Ingredients}/>
        <Route exact path="/"  component={Menu}/>
        <Route  component={NotFound} status={404}/>
      </Switch>
    </Router>
    </div>
);

export default Menu;