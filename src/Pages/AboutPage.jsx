import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <div>
            <Card>
                <p>This is a feedback App made with ReactJs</p>
                <p>Version: 1.0.0</p>
                <Link to="/">Home Page</Link>
            </Card>
        </div>
    )
}

export default AboutPage
