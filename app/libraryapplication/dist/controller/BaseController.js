sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/Fragment"],function(e,n){"use strict";return e.extend("com.app.libraryapplication.controller.BaseController",{getRouter:function(){return this.getOwnerComponent().getRouter()},loadFragment:async function(e){const t=await n.load({id:this.getView().getId(),name:`com.app.libraryapplication.fragments.${e}`,controller:this});this.getView().addDependent(t);return t},createData:async function(e,n,t){debugger;return new Promise((r,o)=>{e.create(t,n,{success:function(e){r(e)},error:function(e){o(e)}})})},createIssue:async function(e,n,t){debugger;return new Promise((r,o)=>{e.create(t,n,{success:function(e){r(e)},error:function(e){o(e)}})})},UpdateBook:async function(e,n,t){debugger;return new Promise((r,o)=>{e.update(t,n,{success:function(e){r(e)},error:function(e){o(e)}})})}})});