import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StepOne from '../Steps/StepOne.jsx';
import StepTwo from '../Steps/StepTwo.jsx';
import StepThree from '../Steps/StepThree.jsx';
import StepFour from '../Steps/StepFour.jsx';
import Review from '../Steps/Review.jsx';
import ActivityList from '../ActivityList/ActivityList.jsx';
import { Container } from '@mui/material/';
import Header from '../Header/Header.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//! Wrap this around whole app
const theme = createTheme({
  palette: {
    primary: {
      main: '#546941',
    },
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <Container fixed>

            <Route exact path="/">
              {/* Step 1 component goes here */}
              <StepOne />
            </Route>

            <Route exact path="/step-2">
              {/* Step 2 component goes here */}
              <StepTwo />
            </Route>

            <Route exact path="/step-3">
              {/* Step 3 component goes here */}
              <StepThree />
            </Route>

            <Route exact path="/step-4">
              {/* Step 4 component goes here */}
              <StepFour />
            </Route>

            <Route exact path="/review">
              {/* Review component goes here */}
              <Review />
            </Route>

            <Route exact path="/activity-list">
              {/* Activity List component goes here */}
              <ActivityList />
            </Route>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );

}

export default App
