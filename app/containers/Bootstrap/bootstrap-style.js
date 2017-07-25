import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
.show-grid [class^=col-] {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #eee;
    background-color: rgba(86,61,124,.15);
    border: 1px solid #ddd;
    border: 1px solid rgba(86,61,124,.2);
}

.btn{
	margin-bottom: 15px;
}

.show-grid.row{
	margin-bottom: 15px;
}

`;