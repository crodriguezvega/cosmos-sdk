(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{703:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"module-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-manager"}},[e._v("#")]),e._v(" Module Manager")]),e._v(" "),o("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Introduction to SDK Modules")])],1)]),e._v(" "),o("h2",{attrs:{id:"application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-module-interfaces"}},[e._v("#")]),e._v(" Application Module Interfaces")]),e._v(" "),o("p",[e._v("Application module interfaces exist to facilitate the composition of modules together to form a functional SDK application. There are 3 main application module interfaces:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#appmodulebasic"}},[o("code",[e._v("AppModuleBasic")])]),e._v(" for independent module functionalities.")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" for inter-dependent module functionalities (except genesis-related functionalities).")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodulegenesis"}},[o("code",[e._v("AppModuleGenesis")])]),e._v(" for inter-dependent genesis-related module functionalities.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface exists to define independent methods of the module, i.e. those that do not depend on other modules in the application. This allows for the construction of the basic application structure early in the application definition, generally in the "),o("code",[e._v("init()")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[e._v("main application file")]),e._v(".")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface exists to define inter-dependent module methods. Many modules need to interract with other modules, typically through "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")]),e._v("s")]),e._v(", which means there is a need for an interface where modules list their "),o("code",[e._v("keeper")]),e._v("s and other methods that require a reference to another module's object. "),o("code",[e._v("AppModule")]),e._v(" interface also enables the module manager to set the order of execution between module's methods like "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(", which is important in cases where the order of execution between modules matters in the context of the application.")],1),e._v(" "),o("p",[e._v("Lastly the interface for genesis functionality "),o("code",[e._v("AppModuleGenesis")]),e._v(" is separated out from full module functionality "),o("code",[e._v("AppModule")]),e._v(" so that modules which\nare only used for genesis can take advantage of the "),o("code",[e._v("Module")]),e._v(" patterns without having to define many placeholder functions.")]),e._v(" "),o("h3",{attrs:{id:"appmodulebasic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulebasic"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleBasic")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface defines the independent methods modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlQmFzaWMgaXMgdGhlIHN0YW5kYXJkIGZvcm0gZm9yIGJhc2ljIG5vbi1kZXBlbmRhbnQgZWxlbWVudHMgb2YgYW4gYXBwbGljYXRpb24gbW9kdWxlLgp0eXBlIEFwcE1vZHVsZUJhc2ljIGludGVyZmFjZSB7CglOYW1lKCkgc3RyaW5nCglSZWdpc3RlckNvZGVjKCpjb2RlYy5Db2RlYykKCgkvLyBnZW5lc2lzCglEZWZhdWx0R2VuZXNpcygpIGpzb24uUmF3TWVzc2FnZQoJVmFsaWRhdGVHZW5lc2lzKGpzb24uUmF3TWVzc2FnZSkgZXJyb3IKCgkvLyBjbGllbnQgZnVuY3Rpb25hbGl0eQoJUmVnaXN0ZXJSRVNUUm91dGVzKGNvbnRleHQuQ0xJQ29udGV4dCwgKm11eC5Sb3V0ZXIpCglHZXRUeENtZCgqY29kZWMuQ29kZWMpICpjb2JyYS5Db21tYW5kCglHZXRRdWVyeUNtZCgqY29kZWMuQ29kZWMpICpjb2JyYS5Db21tYW5kCn0="}})],1),e._v(" "),o("p",[e._v("Let us go through the methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Name()")]),e._v(": Returns the name of the module as a "),o("code",[e._v("string")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("RegisterCodec(*codec.Codec)")]),e._v(": Registers the "),o("code",[e._v("codec")]),e._v(" for the module, which is used to marhsal and unmarshal structs to/from "),o("code",[e._v("[]byte")]),e._v(" in order to persist them in the moduel's "),o("code",[e._v("KVStore")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis()")]),e._v(": Returns a default "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#genesisstate"}},[o("code",[e._v("GenesisState")])]),e._v(" for the module, marshalled to "),o("code",[e._v("json.RawMessage")]),e._v(". The default "),o("code",[e._v("GenesisState")]),e._v(" need to be defined by the module developer and is primarily used for testing.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(json.RawMessage)")]),e._v(": Used to validate the "),o("code",[e._v("GenesisState")]),e._v(" defined by a module, given in its "),o("code",[e._v("json.RawMessage")]),e._v(" form. It will usually unmarshall the "),o("code",[e._v("json")]),e._v(" before running a custom "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis")])]),e._v(" function defined by the module developer.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRESTRoutes(context.CLIContext, *mux.Router)")]),e._v(": Registers the REST routes for the module. These routes will be used to map REST request to the module in order to process them. See [../interfaces/rest.md] for more.")]),e._v(" "),o("li",[o("code",[e._v("GetTxCmd(*codec.Codec)")]),e._v(": Returns the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#tx"}},[o("code",[e._v("Tx")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new transactions containing "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" defined in the module.")],1),e._v(" "),o("li",[o("code",[e._v("GetQueryCmd(*codec.Codec)")]),e._v(": Return the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query"}},[o("code",[e._v("query")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new queries to the subset of the state defined by the module.")],1)]),e._v(" "),o("p",[e._v("All the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application are managed by the "),o("a",{attrs:{href:"#basicmanager"}},[o("code",[e._v("BasicManager")])]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"appmodulegenesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulegenesis"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleGenesis")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface is a simple embedding of the "),o("code",[e._v("AppModuleBasic")]),e._v(" interface with two added methods.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlR2VuZXNpcyBpcyB0aGUgc3RhbmRhcmQgZm9ybSBmb3IgYW4gYXBwbGljYXRpb24gbW9kdWxlIGdlbmVzaXMgZnVuY3Rpb25zCnR5cGUgQXBwTW9kdWxlR2VuZXNpcyBpbnRlcmZhY2UgewoJQXBwTW9kdWxlQmFzaWMKCUluaXRHZW5lc2lzKHNkay5Db250ZXh0LCBqc29uLlJhd01lc3NhZ2UpIFtdYWJjaS5WYWxpZGF0b3JVcGRhdGUKCUV4cG9ydEdlbmVzaXMoc2RrLkNvbnRleHQpIGpzb24uUmF3TWVzc2FnZQp9"}})],1),e._v(" "),o("p",[e._v("Let us go through the two added methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("InitGenesis(sdk.Context, json.RawMessage)")]),e._v(": Initializes the subset of the state managed by the module. It is called at genesis (i.e. when the chain is first started).")]),e._v(" "),o("li",[o("code",[e._v("ExportGenesis(sdk.Context)")]),e._v(": Exports the latest subset of the state managed by the module to be used in a new genesis file. "),o("code",[e._v("ExportGenesis")]),e._v(" is called for each module when a new chain is started from the state of an existing chain.")])]),e._v(" "),o("p",[e._v("It does not have its own manager, and exists separately from "),o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" only for modules that exist only to implement genesis functionalities, so that they can be managed without having to implement all of "),o("code",[e._v("AppModule")]),e._v("'s methods. If the module is not only used during genesis, "),o("code",[e._v("InitGenesis(sdk.Context, json.RawMessage)")]),e._v(" and "),o("code",[e._v("ExportGenesis(sdk.Context)")]),e._v(" will generally be defined as methods of the concrete type implementing hte "),o("code",[e._v("AppModule")]),e._v(" interface.")]),e._v(" "),o("h3",{attrs:{id:"appmodule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodule"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModule")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface defines the inter-dependent methods modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlIGlzIHRoZSBzdGFuZGFyZCBmb3JtIGZvciBhbiBhcHBsaWNhdGlvbiBtb2R1bGUKdHlwZSBBcHBNb2R1bGUgaW50ZXJmYWNlIHsKCUFwcE1vZHVsZUdlbmVzaXMKCgkvLyByZWdpc3RlcnMKCVJlZ2lzdGVySW52YXJpYW50cyhzZGsuSW52YXJpYW50UmVnaXN0cnkpCgoJLy8gcm91dGVzCglSb3V0ZSgpIHN0cmluZwoJTmV3SGFuZGxlcigpIHNkay5IYW5kbGVyCglRdWVyaWVyUm91dGUoKSBzdHJpbmcKCU5ld1F1ZXJpZXJIYW5kbGVyKCkgc2RrLlF1ZXJpZXIKCgkvLyBBQkNJCglCZWdpbkJsb2NrKHNkay5Db250ZXh0LCBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrKQoJRW5kQmxvY2soc2RrLkNvbnRleHQsIGFiY2kuUmVxdWVzdEVuZEJsb2NrKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlCn0="}})],1),e._v(" "),o("p",[o("code",[e._v("AppModule")]),e._v("s are managed by the "),o("a",{attrs:{href:"#manager"}},[e._v("module manager")]),e._v(". This interface embeds the "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface so that the manager can access all the independent and genesis inter-dependent methods of the module. This means that a concrete type implementing the "),o("code",[e._v("AppModule")]),e._v(" interface must either implement all the methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" (and by extension "),o("code",[e._v("AppModuleBasic")]),e._v("), or include a concrete type that does as parameter.")]),e._v(" "),o("p",[e._v("Let us go through the methods of "),o("code",[e._v("AppModule")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("RegisterInvariants(sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[o("code",[e._v("invariants")])]),e._v(" of the module. If the invariants deviates from its predicted value, the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html#registry"}},[o("code",[e._v("InvariantRegistry")])]),e._v(" triggers appropriate logic (most often the chain will be halted).")],1),e._v(" "),o("li",[o("code",[e._v("Route()")]),e._v(": Returns the name of the module's route, for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" to be routed to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[o("code",[e._v("baseapp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("NewHandler()")]),e._v(": Returns a "),o("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[o("code",[e._v("handler")])]),e._v(" given the "),o("code",[e._v("Type()")]),e._v(" of the "),o("code",[e._v("message")]),e._v(", in order to process the "),o("code",[e._v("message")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("QuerierRoute()")]),e._v(": Returns the name of the module's query route, for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("queries")])]),e._v(" to be routes to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[o("code",[e._v("baseapp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("NewQuerierHandler()")]),e._v(": Returns a "),o("RouterLink",{attrs:{to:"/building-modules/querier.html"}},[o("code",[e._v("querier")])]),e._v(" given the query "),o("code",[e._v("path")]),e._v(", in order to process the "),o("code",[e._v("query")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("BeginBlock(sdk.Context, abci.RequestBeginBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the beginning of each block. Implement empty if no logic needs to be triggered at the beginning of each block for this module.")]),e._v(" "),o("li",[o("code",[e._v("EndBlock(sdk.Context, abci.RequestEndBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the beginning of each block. This is also where the module can inform the underlying consensus engine of validator set changes (e.g. the "),o("code",[e._v("staking")]),e._v(" module). Implement empty if no logic needs to be triggered at the beginning of each block for this module.")])]),e._v(" "),o("h3",{attrs:{id:"implementing-the-application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-application-module-interfaces"}},[e._v("#")]),e._v(" Implementing the Application Module Interfaces")]),e._v(" "),o("p",[e._v("Typically, the various application module interfaces are implemented in a file called "),o("code",[e._v("module.go")]),e._v(", located in the module's folder (e.g. "),o("code",[e._v("./x/module/module.go")]),e._v(").")]),e._v(" "),o("p",[e._v("Almost every module need to implement the "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(" interfaces. If the module is only used for genesis, it will implement "),o("code",[e._v("AppModuleGenesis")]),e._v(" instead of "),o("code",[e._v("AppModule")]),e._v(". The concrete type that implements the interface can add parameters that are required for the implementation of the various methods of the interface. For example, the "),o("code",[e._v("NewHandler()")]),e._v("  function often calls a "),o("code",[e._v("NewHandler(k keeper)")]),e._v(" function defined in "),o("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[o("code",[e._v("handler.go")])]),e._v(" and therefore needs to pass the module's "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")])]),e._v(" as parameter.")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZXhhbXBsZQp0eXBlIEFwcE1vZHVsZSBzdHJ1Y3QgewoJQXBwTW9kdWxlQmFzaWMKCWtlZXBlciAgICAgICBLZWVwZXIKfQo="}}),e._v(" "),o("p",[e._v("In the example above, you can see that the "),o("code",[e._v("AppModule")]),e._v(" concrete type references an "),o("code",[e._v("AppModuleBasic")]),e._v(", and not an "),o("code",[e._v("AppModuleGenesis")]),e._v(". That is because "),o("code",[e._v("AppModuleGenesis")]),e._v(" only needs to be implemented in modules that focus on genesis-related functionalities. In most modules, the concrete "),o("code",[e._v("AppModule")]),e._v(" type will have a reference to an "),o("code",[e._v("AppModuleBasic")]),e._v(" and implement the two added methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" directly in the "),o("code",[e._v("AppModule")]),e._v(" type.")]),e._v(" "),o("p",[e._v("If no parameter is required (which is often the case for "),o("code",[e._v("AppModuleBasic")]),e._v("), just declare an empty concrete type like so:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGVCYXNpYyBzdHJ1Y3R7fQo="}}),e._v(" "),o("h2",{attrs:{id:"module-managers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-managers"}},[e._v("#")]),e._v(" Module Managers")]),e._v(" "),o("p",[e._v("Module managers are used to manage collections of "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"basicmanager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basicmanager"}},[e._v("#")]),e._v(" "),o("code",[e._v("BasicManager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("BasicManager")]),e._v(" is a structure that lists all the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmFzaWNNYW5hZ2VyIGlzIGEgY29sbGVjdGlvbiBvZiBBcHBNb2R1bGVCYXNpYwp0eXBlIEJhc2ljTWFuYWdlciBtYXBbc3RyaW5nXUFwcE1vZHVsZUJhc2ljCg=="}})],1),e._v(" "),o("p",[e._v("It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewBasicManager(modules ...AppModuleBasic)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(" and builds a new "),o("code",[e._v("BasicManager")]),e._v(". This function is generally called in the "),o("code",[e._v("init()")]),e._v(" function of "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[o("code",[e._v("app.go")])]),e._v(" to quickly initialize the independent elements of the application's modules (click "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/master/app/app.go#L59-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to see an example).")],1),e._v(" "),o("li",[o("code",[e._v("RegisterCodec(cdc *codec.Codec)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[o("code",[e._v("codec")]),e._v("s")]),e._v(" of each of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(". This function is usually called early on in the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor"}},[e._v("application's construction")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis()")]),e._v(": Provides default genesis information for modules in the application by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#defaultgenesis"}},[o("code",[e._v("DefaultGenesis()")])]),e._v(" function of each module. It is used to construct a default genesis file for the application.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(genesis map[string]json.RawMessage)")]),e._v(": Validates the genesis information modules by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis()")])]),e._v(" function of each module.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRESTRoutes(ctx context.CLIContext, rtr *mux.Router)")]),e._v(": Registers REST routes for modules by calling the "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#register-routes"}},[o("code",[e._v("RegisterRESTRoutes")])]),e._v(" function of each module. This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("AddTxCommands(rootTxCmd *cobra.Command, cdc *codec.Codec)")]),e._v(": Adds modules' transaction commands to the application's "),o("RouterLink",{attrs:{to:"/interfaces/cli.html#transaction-commands"}},[o("code",[e._v("rootTxCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("AddQueryCommands(rootQueryCmd *cobra.Command, cdc *codec.Codec)")]),e._v(": Adds modules' query commands to the application's "),o("RouterLink",{attrs:{to:"/interfaces/cli.html#query-commands"}},[o("code",[e._v("rootQueryCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manager"}},[e._v("#")]),e._v(" "),o("code",[e._v("Manager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Manager")]),e._v(" is a structure that holds all the "),o("code",[e._v("AppModule")]),e._v(" of an application, and defines the order of execution between several key components of these modules:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWFuYWdlciBkZWZpbmVzIGEgbW9kdWxlIG1hbmFnZXIgdGhhdCBwcm92aWRlcyB0aGUgaGlnaCBsZXZlbCB1dGlsaXR5IGZvciBtYW5hZ2luZyBhbmQgZXhlY3V0aW5nCi8vIG9wZXJhdGlvbnMgZm9yIGEgZ3JvdXAgb2YgbW9kdWxlcwp0eXBlIE1hbmFnZXIgc3RydWN0IHsKCU1vZHVsZXMgICAgICAgICAgICBtYXBbc3RyaW5nXUFwcE1vZHVsZQoJT3JkZXJJbml0R2VuZXNpcyAgIFtdc3RyaW5nCglPcmRlckV4cG9ydEdlbmVzaXMgW11zdHJpbmcKCU9yZGVyQmVnaW5CbG9ja2VycyBbXXN0cmluZwoJT3JkZXJFbmRCbG9ja2VycyAgIFtdc3RyaW5nCn0="}})],1),e._v(" "),o("p",[e._v("The module manager is used throughout the application whenever an action on a collection of modules is required. It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewManager(modules ...AppModule)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModule")]),e._v("s and builds a new "),o("code",[e._v("Manager")]),e._v(". It is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderInitGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module will be called when the application is first started. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderExportGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module will be called in case of an export. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderBeginBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("BeginBlock()")]),e._v(" function of each module will be called at the beginning of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderEndBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("EndBlock()")]),e._v(" function of each module will be called at the beginning of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterInvariants(ir sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[e._v("invariants")]),e._v(" of each module.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRoutes(router sdk.Router, queryRouter sdk.QueryRouter)")]),e._v(": Registers module routes to the application's "),o("code",[e._v("router")]),e._v(", in order to route "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" to the appropriate "),o("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[o("code",[e._v("handler")])]),e._v(", and module query routes to the application's "),o("code",[e._v("queryRouter")]),e._v(", in order to route "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("queries")])]),e._v(" to the appropriate "),o("RouterLink",{attrs:{to:"/building-modules/querier.html"}},[o("code",[e._v("querier")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("InitGenesis(ctx sdk.Context, genesisData map[string]json.RawMessage)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module when the application is first started, in the order defined in "),o("code",[e._v("OrderInitGenesis")]),e._v(". Returns an "),o("code",[e._v("abci.ResponseInitChain")]),e._v(" to the underlying consensus engine, which can contain validator updates.")],1),e._v(" "),o("li",[o("code",[e._v("ExportGenesis(ctx sdk.Context)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderExportGenesis")]),e._v(". The export constructs a genesis file from a previously existing state, and is mainly used when a hard-fork upgrade of the chain is required.")],1),e._v(" "),o("li",[o("code",[e._v("BeginBlock(ctx sdk.Context, req abci.RequestBeginBlock)")]),e._v(": At the beginning of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[o("code",[e._v("baseapp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("BeginBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderBeginBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseBeginBlock")]),e._v(" which contains the aforementioned events.")],1),e._v(" "),o("li",[o("code",[e._v("EndBlock(ctx sdk.Context, req abci.RequestEndBlock)")]),e._v(": At the end of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[o("code",[e._v("baseapp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("EndBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderEndBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseEndBlock")]),e._v(" which contains the aforementioned events, as well as validator set updates (if any).")],1)]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn more about "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[o("code",[e._v("message")]),e._v("s and "),o("code",[e._v("queries")])])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);