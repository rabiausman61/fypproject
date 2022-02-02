import { useHistory } from 'react-router-dom';

import React from 'react'
const Landingpage = () => {
    let history = useHistory();

  function handleClick() {
    history.push("/signin");
  }

  return (
    <button type="button" onClick={handleClick}>
      fuck
    </button>
    )
}

export default Landingpage
