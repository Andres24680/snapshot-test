import logo from './logo.svg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GitHubCard from './GitHubCard/GitHubCard'

function App(){
  return(
    <div className="App">
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  )
}
export default App;
