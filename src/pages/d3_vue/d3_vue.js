// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
/* 以D3为主导 */
import {init, svg} from './D3-Vue'
const char = init
document.querySelector('#app').appendChild(svg.node())
char()
