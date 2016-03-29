# React battle.net style progress bar
[![MIT License][license-image]][license-url]   
Nice progress bar ported to react from [codepen.io/simeydotme/pen/IrGqz](http://codepen.io/simeydotme/pen/IrGqz)   
Based on nice react-boilerplate from [survivejs.com](http://survivejs.com/)    

---
#### Example
[dellax.github.com/react-progress-bar-battlenet-style](http://dellax.github.io/react-progress-bar-battlenet-style)

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: license.txt

#### Install
`npm i react-progress-bar-battlenet-style --save`

#### Usage
```javascript
import ProgressBar from 'react-progress-bar-battlenet-style';
import ReactDOM from 'react-dom';
ReactDOM.render(<ProgressBar completed={30} />, container);
```

**Optional props**   
`colors={[orange,yellow,green]}`   
default: `colors={[30, 55, 85]}`  
Percentage value at which the progress bar changes to given color

```javascript
import ProgressBar from 'react-progress-bar-battlenet-style';
import ReactDOM from 'react-dom';
ReactDOM.render(<ProgressBar completed={30} colors={[30, 70, 95]} />, container);
```
