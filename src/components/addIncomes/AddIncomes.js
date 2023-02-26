import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap"
import Categories from "./Categories"

function AddIncomes() {


  return <Container className="py-3">
    <div><h2>Add incomes / expenses</h2></div>
    <InputGroup>
      <Categories/>
      <FormControl
      as='select'
      className="select">
        <option>Not Selected</option>
      </FormControl>
      <FormControl placeholder="Price"/>
      <FormControl placeholder="Notes"/>
      <Button variant="success" className="px-5">Add</Button>
    </InputGroup>
    <h2>Today's transactions:</h2>
  </Container>
}

export default AddIncomes