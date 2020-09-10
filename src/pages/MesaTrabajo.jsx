import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import useInitialState from '../hooks/useInitialState';

const API = 'https://jsonplaceholder.typicode.com/todos';

const MesaTrabajo = () => {
  const tarjetas = useInitialState(API);

  const linkBody = (rowData) => {
    const link = `/pruebas?${rowData.id}`;
    return <a href={link}>{rowData.title}</a>;
  };

  const header = (
    <div className='table-header'>
      Tarjetas
    </div>
  );

  return (
    <div className='card'>
      <DataTable value={tarjetas} className='card' header={header}>
        <Column field='id' header='Id' />
        <Column
          field='title'
          header='Nombre'
          filter
          filterMatchMode='contains'
          body={linkBody}
        />
        <Column field='completed' header='Problema' />
      </DataTable>
    </div>
  );
};

export default MesaTrabajo;
