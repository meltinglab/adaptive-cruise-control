function CodeDefine() { 
this.def = new Array();
this.def["rtDW"] = {file: "controller0_c.html",line:31,type:"var"};
this.def["rtU"] = {file: "controller0_c.html",line:34,type:"var"};
this.def["rtY"] = {file: "controller0_c.html",line:37,type:"var"};
this.def["controller0.c:rtM_"] = {file: "controller0_c.html",line:40,type:"var"};
this.def["rtM"] = {file: "controller0_c.html",line:41,type:"var"};
this.def["controller0_step"] = {file: "controller0_c.html",line:44,type:"fcn"};
this.def["controller0_initialize"] = {file: "controller0_c.html",line:169,type:"fcn"};
this.def["RT_MODEL"] = {file: "controller0_h.html",line:45,type:"type"};
this.def["DW"] = {file: "controller0_h.html",line:54,type:"type"};
this.def["ExtU"] = {file: "controller0_h.html",line:62,type:"type"};
this.def["ExtY"] = {file: "controller0_h.html",line:68,type:"type"};
this.def["int8_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:46,type:"type"};
this.def["uint8_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:47,type:"type"};
this.def["int16_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:48,type:"type"};
this.def["uint16_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:49,type:"type"};
this.def["int32_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:50,type:"type"};
this.def["uint32_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:51,type:"type"};
this.def["int64_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:52,type:"type"};
this.def["uint64_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:53,type:"type"};
this.def["real32_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:54,type:"type"};
this.def["real64_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:55,type:"type"};
this.def["real_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:61,type:"type"};
this.def["time_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:62,type:"type"};
this.def["boolean_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:63,type:"type"};
this.def["int_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:64,type:"type"};
this.def["uint_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:65,type:"type"};
this.def["ulong_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:66,type:"type"};
this.def["ulonglong_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:67,type:"type"};
this.def["char_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:68,type:"type"};
this.def["uchar_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:69,type:"type"};
this.def["byte_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:70,type:"type"};
this.def["pointer_T"] = {file: "../../slprj/ert/_sharedutils/html/rtwtypes_h.html",line:91,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["controller0_c.html"] = "../controller0.c";
	this.html2Root["controller0_c.html"] = "controller0_c.html";
	this.html2SrcPath["controller0_h.html"] = "../controller0.h";
	this.html2Root["controller0_h.html"] = "controller0_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "../../slprj/ert/_sharedutils/html/rtwtypes_h.html";
	this.html2SrcPath["rtmodel_h.html"] = "../rtmodel.h";
	this.html2Root["rtmodel_h.html"] = "rtmodel_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"controller0_c.html","controller0_h.html","rtwtypes_h.html","rtmodel_h.html"];
