// ==UserScript==
// @name         XERO New Invoicing Laoyout
// @license      CC BY-NC-SA https://creativecommons.org/licenses/by-nc-sa/4.0/
// @namespace    https://robosavvy.co.uk/
// @version      1.0
// @description  Change the new invoicing laouyt on XERO for a more compact one for easier reading
// @author       Nuno Gato
// @match        https://go.xero.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xero.com
// @grant        none
// ==/UserScript==

function GM_addStyle(cssStr){

    var n = document.createElement('style');
    n.type = "text/css";
    n.innerHTML = cssStr;
    document.getElementsByTagName('head')[0].appendChild(n);

}


GM_addStyle(`
.xui-padding-vertical-xsmall {
            padding-left:2px !important;
            padding-right:2px !important;
            padding-top:2px !important;
            padding-bottom:2px !important;
            }
.xui-textinput--input.xui-textinput,.xui-textinput--input:first-child {
    padding-left: var(--x-s-standard,2px) !important;
    font-size:12px !important;
}

.xui-textinput--input.xui-textinput,.xui-textinput--input:last-child {
    padding-right: var(--x-s-standard,2px) !important
    font-size:12px !important;
}

.xui-textinput--input {
    padding-top: 2px !important;
    padding-bottom: 2px !important;
}

.xui-editabletable{
    --table-cell-padding-vertical: 2px !important;
    --table-heading-cell-padding: 2px !important;
    --table-heading-cell-height: 10px !important;
}

.xui-editabletable .xui-editabletablecell{
    font-size:12px !important;
}

.xui-textinput-medium{
    font-size:12px !important;
}

.xui-editabletableheadingcell{
    padding: 2px !important;
}


.xui-editabletable, .xui-editabletable-pinfirst, .xui-editabletable-pinlast{
  colgroup col:nth-child(2) { width:270px !important; }
  colgroup col:nth-child(4) { width:40px !important; }
  colgroup col:nth-child(5) { width:60px !important; }
  colgroup col:nth-child(6) { width:60px !important; }
  colgroup col:nth-child(9) { width:80px !important; }
  colgroup col:nth-child(10) { width:80px !important; }
  colgroup col:nth-child(11) { width:60px !important; }
}

`)