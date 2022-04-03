import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"

const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Header />
        </Link>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
