
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('jslibs/babel.min.js');
include('jslibs/react-dom.min.js');
include('jslibs/react.min.js');

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));