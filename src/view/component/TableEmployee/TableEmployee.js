import React from 'react';
import MaterialTable from 'material-table';
import './TableEmployee.scss'
import axios from 'axios'
import Snackbar from '../Snackbar/Snackbar'

export default function MaterialTableDemo(props) {
  const [openSnack, setOpenSnack] = React.useState(false);
  const [messageSnack, setMessageSnack] = React.useState("");

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  }
  // console.log(props);
  
  return (
    <div>
      <MaterialTable
      title="Table Employee"
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const dataEmployee = {
                name: newData.employee_name,
                salary: newData.employee_salary,
                age: newData.employee_age,
              };
              axios.post('http://dummy.restapiexample.com/api/v1/create', dataEmployee)
              .then(function (response) {
                // Memanggil api lagi supaya data terbaru muncul
                props.callApiGetEmployee();
                //Memunculkan notifikasi snackbar
                setMessageSnack("Selamat ! data berhasil ditambahkan.");
                setOpenSnack(true);
              })
            }, 600);
          })
          ,
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
            //  disini
            const dataEmployee = {
              name: newData.employee_name,
              salary: newData.employee_salary,
              age: newData.employee_age,
            };
            axios.put('http://dummy.restapiexample.com/api/v1/update/'+oldData.id, dataEmployee)
              .then(function (response) {
                // Memanggil api lagi supaya data terbaru muncul
                props.callApiGetEmployee();
                //Memunculkan notifikasi snackbar
                setMessageSnack("Selamat ! data berhasil diubah.");
                setOpenSnack(true);
              })
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+oldData.id)
              .then(function (response) {
                // Memanggil api lagi supaya data terbaru muncul
                props.callApiGetEmployee();
                //Memunculkan notifikasi snackbar
                setMessageSnack("Selamat ! data berhasil dihapus.");
                setOpenSnack(true);
              })
            }, 600);
          }),
      }}
    />
    <Snackbar
    openSnack={openSnack}
    handleClose={handleClose}
    type="success"
    message={messageSnack}
    />
    </div>

  );
}
