import React from 'react';
import { selectdiv } from '../styles/Select.module.css';

export default function Select({ text, value, onChange, list, mapFunc }) {

  return (
    <div className={ selectdiv }>
      <label htmlFor={ text + "77" }>Select { text }:</label>
      <select
        value={ value }
        id={ text + "77" }
        onChange={ e => onChange(e.target.value) }
      >
        <option hidden>{ value }</option>
        { list.map(mapFunc) }
      </select>
    </div>
  );

}