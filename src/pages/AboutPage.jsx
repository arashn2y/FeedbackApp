import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <div className='about'>
      <Card>
        <h1>About this project</h1>
        <p>This is a React app to leave a feedback for a proudct</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </Card>
    </div>
  )
}

export default AboutPage
