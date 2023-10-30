import React, { useState } from 'react';
import dashboardData from './dashboardData'; // Import the data

const Dashboard = () => {
  const [data, setData] = useState([...dashboardData]);
  const [editingRow, setEditingRow] = useState(null);

  const handleEditClick = (index) => {
    setEditingRow(index);
  };

  const handleSaveClick = (index) => {
    const updatedData = data.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          orderID: document.getElementById(`orderID-${index}`).value,
          orderValue: document.getElementById(`orderValue-${index}`).value,
          fulfillmentAction: document.getElementById(`fulfillmentAction-${index}`).value,
          cancelled: document.getElementById(`cancelled-${index}`).value,
          productName: document.getElementById(`productName-${index}`).value,
          trackingNumber: document.getElementById(`trackingNumber-${index}`).value,
          productASIN: document.getElementById(`productASIN-${index}`).value,
          productSKU: document.getElementById(`productSKU-${index}`).value,
        };
      }
      return item;
    });

    setData(updatedData);

    window.dashboardData = updatedData;
    setEditingRow(null);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Value</th>
            <th>Cancelled</th>
            <th>Fulfillment Action</th>
            <th>Product Name</th>
            <th>Tracking Number</th>
            <th>Product ASIN (Amazon)</th>
            <th>Product SKU (Other platforms)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={rowData.id}>
              <td>
                {editingRow === index ? (
                  <input type="text" id={`orderID-${index}`} defaultValue={rowData.orderID} />
                ) : (
                  rowData.orderID
                )}
              </td>
              <td>
                {editingRow === index ? (
                  <input type="text" id={`orderValue-${index}`} defaultValue={rowData.orderValue} />
                ) : (
                  rowData.orderValue
                )}
              </td>
              <td>
                {editingRow === index ? (
                  <select id={`cancelled-${index}`} defaultValue={rowData.cancelled}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                ) 
                  : (
                  rowData.cancelled
                )}
                </td>
              <td>
                {editingRow === index ? (
                  <select id={`fulfillmentAction-${index}`} defaultValue={rowData.fulfillmentAction}>
                    <option value="A5 IT">A5 IT</option>
                    <option value="TD SYNNEX">TD SYNNEX</option>
                    <option value="Ingram Micro">Ingram Micro</option>
                    <option value="Amazon">Amazon</option>
                  </select>
                ) : (
                  rowData.fulfillmentAction
                )}
              </td>
              <td>
                {editingRow === index ? (
                  <input type="text" id={`productName-${index}`} defaultValue={rowData.productName} />
                ) : (
                  rowData.productName
                )}
              </td>
              <td>
                {editingRow === index ? (
                    <input type="text" id={`trackingNumber-${index}`} defaultValue={rowData.trackingNumber} />
                  ) : (
                    rowData.trackingNumber
                  )}
              </td>
              
              <td>
                {
                  editingRow === index ? (
                    <input type="text" id={`productASIN-${index}`} defaultValue={rowData.productASIN} />
                  ) : (
                    rowData.productASIN
                  ) 
                }
        
              </td>
              
              <td>
              {
                  editingRow === index ? (
                    <input type="text" id={`productSKU-${index}`} defaultValue={rowData.productSKU} />
                  ) : (
                    rowData.productSKU
                  ) 
                }
              </td>
              
              <td>
                {editingRow === index ? (
                  <button onClick={() => handleSaveClick(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
