(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{926:function(e,r,o){"use strict";o.r(r);var t=o(1),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.")]),e._v(" "),o("p",[e._v("Modules are encouraged to define and register their own errors to provide better\ncontext on failed message or handler execution. Typically, these errors should be\ncommon or general errors which can be further wrapped to provide additional specific\nexecution context.")]),e._v(" "),o("h2",{attrs:{id:"registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[e._v("#")]),e._v(" Registration")]),e._v(" "),o("p",[e._v("Modules should define and register their custom errors in "),o("code",[e._v("x/{module}/types/errors.go")]),e._v(". Registration\nof errors is handled via the "),o("code",[e._v("types/errors")]),e._v(" package.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:""}})],1),e._v(" "),o("p",[e._v('Each custom module error must provide the codespace, which is typically the module name\n(e.g. "distribution") and is unique per module, and a uint32 code. Together, the codespace and code\nprovide a globally unique SDK error. Typically, the code is monotonically increasing but does not\nnecessarily have to be. The only restrictions on error codes are the following:')]),e._v(" "),o("ul",[o("li",[e._v("Must be greater than one, as a code value of one is reserved for internal errors.")]),e._v(" "),o("li",[e._v("Must be unique within the module.")])]),e._v(" "),o("p",[e._v("Note, the SDK provides a core set of "),o("em",[e._v("common")]),e._v(" errors. These errors are defined in "),o("code",[e._v("types/errors/errors.go")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"wrapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wrapping"}},[e._v("#")]),e._v(" Wrapping")]),e._v(" "),o("p",[e._v("The custom module errors can be returned as their concrete type as they already fulfill the "),o("code",[e._v("error")]),e._v("\ninterface. However, module errors can be wrapped to provide further context and meaning to failed\nexecution.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBCYXNlS2VlcGVyKSBEZWxlZ2F0ZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgZGVsZWdhdG9yQWRkciwgbW9kdWxlQWNjQWRkciBzZGsuQWNjQWRkcmVzcywgYW10IHNkay5Db2lucykgZXJyb3IgewoJbW9kdWxlQWNjIDo9IGsuYWsuR2V0QWNjb3VudChjdHgsIG1vZHVsZUFjY0FkZHIpCglpZiBtb2R1bGVBY2MgPT0gbmlsIHsKCQlyZXR1cm4gc2RrZXJyb3JzLldyYXBmKHNka2Vycm9ycy5FcnJVbmtub3duQWRkcmVzcywgJnF1b3Q7bW9kdWxlIGFjY291bnQgJXMgZG9lcyBub3QgZXhpc3QmcXVvdDssIG1vZHVsZUFjY0FkZHIpCgl9CgoJaWYgIWFtdC5Jc1ZhbGlkKCkgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySW52YWxpZENvaW5zLCBhbXQuU3RyaW5nKCkpCgl9CgoJYmFsYW5jZXMgOj0gc2RrLk5ld0NvaW5zKCkKCglmb3IgXywgY29pbiA6PSByYW5nZSBhbXQgewoJCWJhbGFuY2UgOj0gay5HZXRCYWxhbmNlKGN0eCwgZGVsZWdhdG9yQWRkciwgY29pbi5EZW5vbSkKCQlpZiBiYWxhbmNlLklzTFQoY29pbikgewoJCQlyZXR1cm4gc2RrZXJyb3JzLldyYXBmKAoJCQkJc2RrZXJyb3JzLkVyckluc3VmZmljaWVudEZ1bmRzLCAmcXVvdDtmYWlsZWQgdG8gZGVsZWdhdGU7ICVzIGlzIHNtYWxsZXIgdGhhbiAlcyZxdW90OywgYmFsYW5jZSwgYW10LAoJCQkpCgkJfQoKCQliYWxhbmNlcyA9IGJhbGFuY2VzLkFkZChiYWxhbmNlKQoJCWVyciA6PSBrLlNldEJhbGFuY2UoY3R4LCBkZWxlZ2F0b3JBZGRyLCBiYWxhbmNlLlN1Yihjb2luKSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIGVycgoJCX0KCX0KCglpZiBlcnIgOj0gay50cmFja0RlbGVnYXRpb24oY3R4LCBkZWxlZ2F0b3JBZGRyLCBjdHguQmxvY2tIZWFkZXIoKS5UaW1lLCBiYWxhbmNlcywgYW10KTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHNka2Vycm9ycy5XcmFwKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHRyYWNrIGRlbGVnYXRpb24mcXVvdDspCgl9CgoJZXJyIDo9IGsuQWRkQ29pbnMoY3R4LCBtb2R1bGVBY2NBZGRyLCBhbXQpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJcmV0dXJuIG5pbAp9"}})],1),e._v(" "),o("p",[e._v("Regardless if an error is wrapped or not, the SDK's "),o("code",[e._v("errors")]),e._v(" package provides an API to determine if\nan error is of a particular kind via "),o("code",[e._v("Is")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"abci"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI")]),e._v(" "),o("p",[e._v("If a module error is registered, the SDK "),o("code",[e._v("errors")]),e._v(" package allows ABCI information to be extracted\nthrough the "),o("code",[e._v("ABCIInfo")]),e._v(" API. The package also provides "),o("code",[e._v("ResponseCheckTx")]),e._v(" and "),o("code",[e._v("ResponseDeliverTx")]),e._v(" as\nauxiliary APIs to automatically get "),o("code",[e._v("CheckTx")]),e._v(" and "),o("code",[e._v("DeliverTx")]),e._v(" responses from an error.")]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/interfaces/interfaces-intro.html"}},[e._v("interfaces")])],1)])}),[],!1,null,null,null);r.default=a.exports}}]);