import React, { Component } from 'react'
import {Button} from 'reactstrap';

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Item</th>    
//         <th>Action</th>
//       </tr>
//     </thead>
//   )
// }

const TableBody = props => {

  // console.log(this.props.characterData)
  
  const rows = props.characterData.map((row, index) => {
    // console.log("TEST" + row)
    return (
      <tr key={index}>
        <td id="leftAlign">{row}</td>
        <td id="floatRight"><Button onClick={() => props.removeItem(index)}> Remove </Button></td>    
  
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    const { characterData, removeItem } = this.props

    return (
      <table>
        {/* <TableHeader /> */}
        <TableBody characterData={characterData} removeItem={removeItem} />
      </table>
    )
  }
}
export default Table