import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import HomePage from "./HomePage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Signup from "./Signup";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
 