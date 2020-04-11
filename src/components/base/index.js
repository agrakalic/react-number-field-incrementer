const base = ` 
  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none; 
  }

  html {
    box-sizing: border-box;
    height: 100%; 
  }

  body {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 1.5rem;
    color: #555;
    background: #fff;
    text-align: center;
    height: 100%;
    font-size: 15px; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #555;
    margin: 0 0 1.5rem 0;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 700; 
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    padding-top: 0.1875rem;
    margin-bottom: 1.3125rem; 
  }

  h2 {
    font-size: 2.1rem;
    line-height: 3rem;
    padding-top: 0.3375rem;
    margin-bottom: 1.1625rem; 
  }

  h3 {
    font-size: 1.75rem;
    line-height: 2.25rem;
    padding-top: 0.84375rem;
    margin-bottom: 1.40625rem; 
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700; 
  }

  h5,
  h6 {
    font-size: 1em;
    font-weight: 700; 
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  form,
  table,
  pre {
    display: block;
    margin: 0 0 1.5rem 0; 
  }

  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary {
    display: block; 
  }

  ul,
  ol,
  dl {
    padding: 0; 
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul,
  dd {
    margin: 0; 
  }

  li {
    margin: 0 0 0 3rem;
    padding: 0;
    display: list-item;
    list-style-position: outside; 
  }

  dd {
    padding: 0 0 0 1.5rem; 
  }

  pre,
  code,
  samp,
  kbd,
  var {
    font: .9em Monaco, "Courier New", monospace; 
  }

  code {
    color: inherit;
    background: rgba(0, 0, 0, 0.05);
    padding: 0 5px; 
  }

  pre {
    overflow: auto; 
  }

  abbr,
  acronym {
    text-transform: uppercase;
    border-bottom: 1px dotted #000;
    letter-spacing: .01em; 
  }

  abbr[title],
  acronym[title] {
    cursor: help; 
  }

  small {
    font-size: .9rem; 
  }

  sup {
    font-size: .8rem;
    vertical-align: top;
    position: relative;
    top: -.5rem; 
  }

  sub {
    font-size: .8rem;
    vertical-align: bottom;
    position: relative;
    bottom: -.5rem; 
  }

  em,
  cite,
  q {
    font-style: italic; 
  }

  ins {
    text-decoration: none;
    color: #be0000;
    font-style: italic; 
  }

  img {
    border: none; 
  }

  figure {
    margin: 0 0 .5em 0;
    display: table; 
  }

  meter,
  progress,
  audio,
  video {
    width: 100%; 
  }

  hr {
    display: block;
    clear: both;
    height: 1px;
    border: 0;
    border-top: 1px solid #ddd;
    margin: -1px 0 1.5rem 0;
    padding: 0; 
  }

  table {
    width: 100%;
    border-collapse: collapse;
    display: table; 
  }

  th,
  caption {
    text-align: left; 
  }

  label {
    display: block; 
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none; 
  }

  legend {
    font-weight: 700; 
  }

  input,
  select {
    vertical-align: middle; 
  }

  input[type="radio"],
  input[type="checkbox"],
  .radio,
  .checkbox {
    margin: 0 .25rem 0 0; 
  }

  ::-moz-focus-inner {
    border: 0;
    padding: 0; 
  }

  ::-moz-selection {
    background: #555;
    color: #fff; 
  }

  ::selection {
    background: #555;
    color: #fff; 
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none; 
  }

  table,
  input,
  textarea,
  select,
  li,
  button,
  p {
    font-family: inherit;
    line-height: inherit; 
  }

  a,
  a:visited {
    color: #2e7ec3; 
  }

  a:hover {
    color: #1d64a1; 
  }

  pre {
    padding: calc(1.5rem/2 - 1px) 1.5rem;
    border: 1px solid #ddd;
    line-height: inherit;
    background: #f7f7f7; 
  }

  blockquote {
    padding: 0;
    margin-left: 1.5rem;
    font-style: italic; 
  }

  dt {
    font-weight: 700; 
  }

  table {
    width: 100%; 
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto; 
  }

  th,
    td {
    padding: calc(1.5rem/2 - 1px) 0.75rem 0.75rem 0.75rem;
    line-height: 1.5rem;
    vertical-align: top;
    border-bottom: 1px solid #ddd; 
  }

  tr:nth-child(odd) td {
    background: #f7f7f7; 
  }

  caption {
    font-style: italic; 
  }

  figcaption {
    font-style: italic;
    margin: .25em 0;
    text-align: center;
    font-size: .9em;
    line-height: 1.5em; 
  }
`;

export default base;