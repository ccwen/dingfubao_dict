var require_kdb=[{filename:"dingfubao_dict.kdb", url:"http://rawgit.com/yapcheahshen/dingfubao_dict/master/dingfubao_dict.kdb" , desc:"dingfubao_dict"}];
var Main = React.createClass({
  mixins:[Require("defaultmain")],
  dbid:"dingfubao_dict",
  defaultTofind:"",
  require_kdb:require_kdb,
});
module.exports=Main;