import React, { useState, useEffect, useRef } from 'react';
import { div, pre } from '../styles/Form.module.css';

export default function Form({ offsetList, postQuery }) {
  const code1 = useRef('');
  const [queryText, setQueryText] = useState(null);
  const [selectValue, setSelectValue] = useState('Select...');
  // const [radioValue, setRadioValue] = useState(null);
  const [offsetCheckboxValue, setOffsetCheckboxValue] = useState(false);
  const [placesCheckboxValue, setPlacesCheckboxValue] = useState(false);

  useEffect(() => {
    setQueryText(code1.current.textContent);
  }, [
    // radioValue,
    selectValue,
    offsetCheckboxValue,
    placesCheckboxValue,
  ]);

  return (
    <form>

      <select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
        id="sort"
      >
        <option hidden>Select...</option>
        {offsetList.map(({ offset }, i) => <option key={i} value={offset}>{offset}</option>)}
      </select>

      <label htmlFor="offset">offset</label>
      <input onChange={() => setOffsetCheckboxValue(val => !val)} type="checkbox" id="offset" name="fields" value={offsetCheckboxValue}/>

      <label htmlFor="places">places</label>
      <input onChange={() => setPlacesCheckboxValue(val => !val)} type="checkbox" id="places" name="fields" value={placesCheckboxValue}/>

          <div className={ div }>
            <pre className={ pre }>
              <code ref={code1} className="code">{`
{
  timezone(offset: "${selectValue}") {
    ${offsetCheckboxValue ? 'offset' : ''}
    ${placesCheckboxValue ? 'places' : ''}
  }
}
              `}</code>
            </pre>
          </div>


      {
        selectValue !== 'Select...' && !!queryText && (offsetCheckboxValue || placesCheckboxValue) &&
          <button type="button" onClick={() => postQuery(queryText)}>submit query</button>
      }


    </form>
  );

}

// <label htmlFor="dewey">Dewey</label>
// <input onChange={e => setRadioValue(e.target.value)} type="radio" id="dewey" name="drone" value="dewey"/>

      // <textarea readOnly value={queryText} onChange={e => setQueryText(e.target.value)} cols="40" rows="15" name="query"></textarea>

      // <label htmlFor="huey">huey</label>
      // <input onChange={e => setRadioValue(e.target.value)} type="radio" id="huey" name="drone" value="huey"/>
