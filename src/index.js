import _ from 'lodash';
import './style.css'

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Tasty', 'Bites'], ' ');

   return element;
 }
// alert('everything works fine')

 document.body.appendChild(component());