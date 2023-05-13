import './App.css';
import {data} from './Data';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'

function App() {
// fetch('https://winred.com/', {
//     method: 'POST',
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         query: `
//             query {
//                 first_name
//                 last_name
//                 state
//                 default_page_url
//             }
//         `
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data.data)
// })
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <div className ="App">
      <Container>
        <h1 className = 'text-center mt-4'>WinRed Directory</h1>
        <Form>
          <InputGroup className = 'my-3'>
            <Form.Control onChange = {(e) => setSearch(e.target.value)}placeholder = 'Search by State Abbreviations' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>State</th>
              <th>Office</th>
              <th>Donation Page</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              if (item.first_name && item.last_name && item.state) {return (search === '' ? item : item.state.toLowerCase().includes(search.toLowerCase()))
            }}).map(item => {
              if (item.first_name && item.last_name && item.state) {
                return ( 
                <tr key = {item.revv_uid}>
                  <td><img src = {item.avatar}/></td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.state}</td>
                  <td>{item.office}</td>
                  <td><a href={item.default_page_url}>DONATE</a></td>
                </tr>)
              }
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
