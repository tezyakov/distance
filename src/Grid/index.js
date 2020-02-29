import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import styles from './styles.module.scss';
import '../ag-grid-overrides.scss'


class Gridd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Дата", 
        field: "date", 
        editable: true, 
        width: 158, 

      }, {
        headerName: "Дистанция", 
        field: "distance", 
        editable: true, 
        width: 175,
      }],
      rowData: [{
        date: "Toyota", 
        distance: "Celica"
      }, {
        date: "Toyota", 
        distance: "Celica"
      }, {
        date: "Toyota", 
        distance: "Celica"
      }, {
        date: "Toyota", 
        distance: "Celica"
      }, {
        date: "Toyota", 
        distance: "Celica"
      }]
      
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3000/walking')
    .then(data => data.data)
    .then(rowData => this.setState({rowData}))
  }

  render() {
    return (
      <div className={styles.contentContainer}>
        <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '335px' }}
      >
        <AgGridReact
          rowHeight={40}
          enableSorting={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
        <button className={styles.gridButton} onClick={() => alert('Не сделал')}>Добавить запись</button>
      </div>
      </div>
    );
  }
}

export default Gridd;