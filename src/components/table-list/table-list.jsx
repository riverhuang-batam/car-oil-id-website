import React from 'react' 
import {Table} from 'reactstrap'
const TableList= () =>(
    <div className="mb-4">
        <h1 className="text-center mt-4 mb-4">List Harga Oli Shell Helix</h1>
         <Table bordered className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Jenis Oli Shell Helix</th>
          <th>spesifikasi</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Oli Shell Helix Hx3</td>
          <td>SAE 20W - 50 & API SL/CF</td>
          <td>Rp 154.000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Oli Shell Helix Hx5</td>
          <td>SAE 15W - 40 & API SN/CF</td>
          <td>Rp 258.000</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Oli Shell Helix Hx6</td>
          <td>SAE 10W - 40 & API SN PLUS/Semi Synthetic</td>
          <td>Rp 272.000</td>
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Oli Shell Helix Hx7</td>
          <td>SAE 5W - 40 & API SN PLUS/Full Synthetic</td>
          <td>Rp 386.000</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Oli Shell Helix Hx8</td>
          <td>SAE 5W - 40 & API SN/CF Full Synthetic</td>
          <td>Rp 568.000</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Oli Shell Helix Ultra</td>
          <td>SAE 5W - 30 & SN/CF Full Synthetic</td>
          <td>Rp 936.000</td>
        </tr>
      </tbody>
    </Table>
    </div>
)
export default TableList;