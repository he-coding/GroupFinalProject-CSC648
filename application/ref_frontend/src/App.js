import './App.css';
import * as React from "react";
import Home from './components/unathenticated/home'
import Register from './components/unathenticated/register';
import Login from './components/unathenticated/login';
import Lists from './components/Lists/lists';
import Navbar1 from "./components/Navbar/navbar-1";
import SearchPage from './components/RecipePage/SearchPage';
import Account from './components/Account/account'
import Summary from './components/Summary/summary'
import ItemPage from './components/Lists/Modals/itemPage'
import Footer from "./components/Footer/Footer"
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }

// function Login() {
//   const [
//     redirectToReferrer,
//     setRedirectToReferrer
//   ] = React.useState(false)

//   const { state } = useLocation()

//   const login = () => fakeAuth.authenticate(() => {
//     setRedirectToReferrer(true)
//   })

//   if (redirectToReferrer === true) {
//     return <Redirect to={state?.from || '/'} />
//   }

//   return (
//     <div>
//       <p>You must log in to view the page</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   )
// }

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route {...rest} render={({ location }) => {
//       return fakeAuth.isAuthenticated === true
//         ? children
//         : <Redirect to={{
//             pathname: '/login',
//             state: { from: location }
//           }} />
//     }} />
//   )
// }

// function AuthButton () {
//   const history = useHistory()

//   return fakeAuth.isAuthenticated === true
//     ? <p>
//         Welcome! <button onClick={() => {
//           fakeAuth.signout(() => history.push('/'))
//         }}>Sign out</button>
//       </p>
//     : <p>Sign In</p>
// }

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path="/">
          <Redirect to="/home"  />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login />
        </Route>
        <>
          <Navbar1 />
          <Route path="/lists" component={Lists} />
          <Route path="/recipes" component={SearchPage} />
          <Route path="/account" component={Account} />
          <Route path="/summary" component={Summary} />
          <Route path="/item/:id" exact component={ItemPage}></Route>
          <Footer />
        </>
      </Switch>
    </div>
  );
}

export default App;
