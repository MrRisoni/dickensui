(this.webpackJsonpdickensui=this.webpackJsonpdickensui||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),s=(a(37),a(2)),o=a(3),i=a(4),d=a(5),m=a(11);var u=function(e){return l.a.createElement("section",{className:"Pagination"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped table-bordered table-hover "},l.a.createElement("thead",null,l.a.createElement("tr",null,e.columns.map((function(e){return l.a.createElement("th",{key:e.id},e.title)})))),l.a.createElement("tbody",null,e.data.map((function(t){return l.a.createElement("tr",{key:t[e.keyName]},Object.keys(t).map((function(a,n){return n>0?l.a.createElement("td",{key:n},t[a]):l.a.createElement("td",null,l.a.createElement(m.b,{key:n,to:e.urlRef+t[e.keyName]},t[a]))})))}))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,e.columns.map((function(e){return l.a.createElement("th",{key:e.id},e.title)})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},"Total Records ",e.totalRecords,"Total Records ",e.totalPages)))};a(43);var E=function(){return l.a.createElement("div",{className:"bg-dark border-right",id:"sidebar-wrapper"},l.a.createElement("div",{className:"sidebar-heading"},"Dickens"),l.a.createElement("div",{className:"list-group list-group-flush"},l.a.createElement("a",{href:"/",className:"list-group-item list-group-item-action "},"Dashboard"),l.a.createElement("a",{href:"/",className:"list-group-item list-group-item-action "},"Timetable"),l.a.createElement("li",{className:"list-group-item list-group-item-action"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarCoursesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Courses"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarCoursesDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"/courses"},"Courses List"))),l.a.createElement("li",{className:"list-group-item list-group-item-action"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarStudentsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Students"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarStudentsDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"New Student"),l.a.createElement("a",{className:"dropdown-item",href:"/students"},"Students List"))),l.a.createElement("li",{className:"list-group-item list-group-item-action"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarTeachersDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Teachers"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarTeachersDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"New Teacher"),l.a.createElement("a",{className:"dropdown-item",href:"/teachers"},"Teachers List"))),l.a.createElement("li",{className:"list-group-item list-group-item-action"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Groups"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"New Group"),l.a.createElement("a",{className:"dropdown-item",href:"/groups"},"Groups List"))),l.a.createElement("a",{href:"/analytics",className:"list-group-item list-group-item-action "},"Analytics")))},p=a(6),h=a.n(p),b=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pages:0,totalRecords:0,data:[],fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/students").then((function(t){e.setState({data:t.data.students,totalRecords:t.data.totalRecords,fetched:!0})}))}},{key:"render",value:function(){return l.a.createElement("section",{id:"studentsList"},this.state.fetched&&l.a.createElement(u,{columns:[{id:0,title:"id"},{id:1,title:"Name"},{id:2,title:"Registration Date"},{id:3,title:"#Groups"},{id:4,title:"Payments"},{id:5,title:"Debts"},{id:6,title:"Last Payed"}],urlRef:"/student/info/",keyName:"entityId",data:this.state.data}))}}]),a}(l.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pages:0,totalRecords:0,data:[],fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/teachers").then((function(t){e.setState({data:t.data.teachers,totalRecords:t.data.totalRecords,fetched:!0})}))}},{key:"render",value:function(){console.log(this.state.data);return l.a.createElement("section",{id:"teachersList"},this.state.fetched&&l.a.createElement(u,{columns:[{id:0,title:"id"},{id:1,title:"Name"},{id:2,title:"Registration Date"},{id:3,title:"#Groups"},{id:4,title:"Payments"},{id:5,title:"Debts"}],urlRef:"/teacher/info/",keyName:"entityId",data:this.state.data}))}}]),a}(l.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pages:0,totalRecords:0,data:[],fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/groups").then((function(t){e.setState({data:t.data.groups,totalRecords:t.data.totalRecords,fetched:!0})}))}},{key:"render",value:function(){return l.a.createElement("section",{id:"groupsList"},this.state.fetched&&l.a.createElement(u,{columns:[{id:0,title:"id"},{id:1,title:"title"},{id:2,title:"Speed"},{id:3,title:"Age"},{id:4,title:"Wage"},{id:5,title:"Fee"},{id:6,title:"Starts"},{id:7,title:"Ends"},{id:8,title:"Students"},{id:9,title:"Hours"},{id:10,title:"Payments Teacher"},{id:11,title:"Payments Students"},{id:12,title:"Debts Teacher"},{id:13,title:"Debts Students"}],urlRef:"/group/info/",keyName:"id",data:this.state.data}))}}]),a}(l.a.Component),g=a(30),y=a(29),N=a.n(y),k=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){for(var e=[],t=[],a=0,n=Object.entries(this.props.data);a<n.length;a++){var r=Object(g.a)(n[a],2),c=r[0],s=r[1];console.log(c,s),e.push(s),t.push(c)}var o={series:e,options:{chart:{width:380,type:"donut"},labels:t,dataLabels:{enabled:!0},fill:{type:"gradient"},legend:{formatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex]}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}};return l.a.createElement("div",{className:"donut"},l.a.createElement(N.a,{options:o.options,series:o.series,type:"donut",width:"600"}))}}]),a}(l.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pieData:{profit:0,grossIncome:0,netIncome:0,studentPayments:0,totalExpenses:0,taxes:0,staffPayments:0,staffInsurances:0,staffNetPayments:0,studentDebts:0,staffInDebt:0},fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/revenue/pie").then((function(t){e.setState({pieData:{profit:t.data[0].profit,grossIncome:t.data[0].grossIncome,netIncome:t.data[0].netIncome,studentPayments:t.data[0].studentPayments,totalExpenses:t.data[0].totalExpenses,taxes:t.data[0].taxes,staffPayments:t.data[0].staffPayments,staffInsurances:t.data[0].staffInsurances,staffNetPayments:t.data[0].staffNetPayments,studentDebts:t.data[0].studentDebts,staffInDebt:t.data[0].staffInDebt},fetched:!0})}))}},{key:"render",value:function(){return this.state.fetched?l.a.createElement(k,{data:this.state.pieData}):l.a.createElement("p",null,"Wait...")}}]),a}(l.a.Component),D=a(31),O=a(1);a(61);var j=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"text-muted"},"Place sticky footer content here.")))},S=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return l.a.createElement(O.a,Object.assign({},a,{render:function(e){return l.a.createElement("main",null,l.a.createElement("div",{className:"d-flex",id:"wrapper"},l.a.createElement(E,null),l.a.createElement("div",{id:"page-content-wrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(t,e)))),l.a.createElement(j,null))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={details:{},fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/group/info/2").then((function(t){e.setState({data:t.data,fetched:!0})}))}},{key:"render",value:function(){return this.state.fetched?l.a.createElement("section",{className:"groupSection"},l.a.createElement("h2",null,this.state.data.course),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Started"),l.a.createElement("td",null,this.state.data.createdAt),l.a.createElement("td",null,"Student Debt"),l.a.createElement("td",null,this.state.data.sumStudentDebts)),l.a.createElement("tr",null,l.a.createElement("td",null,"Members"),l.a.createElement("td",null,this.state.data.totalMembers),l.a.createElement("td",null,"Student Payments"),l.a.createElement("td",null,this.state.data.sumStudentPayments)),l.a.createElement("tr",null,l.a.createElement("td",null,"Speed"),l.a.createElement("td",null,this.state.data.speed),l.a.createElement("td",null,"Teacher Debt"),l.a.createElement("td",null,this.state.data.sumTeacherDebts)),l.a.createElement("tr",null,l.a.createElement("td",null,"Hours"),l.a.createElement("td",null,this.state.data.sumHours),l.a.createElement("td",null,"Teacher Payements"),l.a.createElement("td",null,this.state.data.sumTeacherPayments)),l.a.createElement("tr",null,l.a.createElement("td",null,"Wage"),l.a.createElement("td",null,this.state.data.wage),l.a.createElement("td",null,"Fee"),l.a.createElement("td",null,this.state.data.fee)))))),this.state.data.seminarModules.length>0&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"alert alert-primary  alert-height",role:"alert"},l.a.createElement("h5",null,"Seminar Modules")),l.a.createElement("table",{className:"table table-sm  table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name")),l.a.createElement("tbody",null)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"alert alert-danger  alert-height",role:"alert"},l.a.createElement("h5",null,"Teacher Debts")),l.a.createElement("table",{className:"table table-sm  table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Amount")),l.a.createElement("tbody",null,this.state.data.teacherDebts.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.entityId),l.a.createElement("td",null,e.fullName),l.a.createElement("td",null,e.monthTitle," ",e.year),l.a.createElement("td",null,e.amount))}))))),l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"alert alert-danger  alert-height",role:"alert"},l.a.createElement("h5",null,"Student Debts")),l.a.createElement("table",{className:"table table-sm  table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Amount")),l.a.createElement("tbody",null,this.state.data.studentsDebts.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.entityId),l.a.createElement("td",null,e.fullName),l.a.createElement("td",null,e.monthTitle," ",e.year),l.a.createElement("td",null,e.amount))})))))),l.a.createElement("h5",null,"Students list"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("table",{className:"table table-sm table-striped table-bordered table-hover"},l.a.createElement("thead",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Joined"),l.a.createElement("th",null,"Dropped"),l.a.createElement("th",null,"Payed"),l.a.createElement("th",null,"Debt")),l.a.createElement("tbody",null,this.state.data.studentsList.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.studentId),l.a.createElement("td",null,e.fullName),l.a.createElement("td",null,e.joined),l.a.createElement("td",null,e.dropped),l.a.createElement("td",null,e.sumPayed),l.a.createElement("td",null,e.sumOwns))})))))),l.a.createElement("h5",null,"Courses History"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("table",{className:"table table-sm table-striped table-bordered table-hover"},l.a.createElement("thead",null,l.a.createElement("th",null,"Started"),l.a.createElement("th",null,"Duration"),l.a.createElement("th",null,"Room"),l.a.createElement("th",null,"Fee"),l.a.createElement("th",null,"Wage")),l.a.createElement("tbody",null,this.state.data.history.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.started),l.a.createElement("td",null,e.duration),l.a.createElement("td",null,e.roomName),l.a.createElement("td",null,e.fee),l.a.createElement("td",null,e.wage))}))))))):l.a.createElement("p",null,"Wait...")}}]),a}(l.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={details:{},fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/student/info/2").then((function(t){e.setState({data:t.data,fetched:!0})}))}},{key:"render",value:function(){return this.state.fetched?l.a.createElement("section",{className:"studentSection"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("table",{className:"table  table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,this.state.data.fullName),l.a.createElement("td",null,"Address"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone"),l.a.createElement("td",null),l.a.createElement("td",null,"Email"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"#Groups"),l.a.createElement("td",null,this.state.data.groups.length),l.a.createElement("td",null,"Last payed"),l.a.createElement("td",null,this.state.data.lastPayed)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Payed"),l.a.createElement("td",null,this.state.data.totalPayed),l.a.createElement("td",null,"Remaining Debt"),l.a.createElement("td",null,this.state.data.remainDebt)))))),"Groups",l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("table",{className:"table table-bordered table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Group"),l.a.createElement("th",null,"Joined"),l.a.createElement("th",null,"Dropped"),l.a.createElement("th",null,"Payed"),l.a.createElement("th",null,"Debts"))),l.a.createElement("tbody",null,this.state.data.groups.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.groupId),l.a.createElement("td",null,e.courseName),l.a.createElement("td",null,e.joined),l.a.createElement("td",null,e.dropped),l.a.createElement("td",null,e.totalPayed),l.a.createElement("td",null,e.totalDebt))})))))),"Payments and Debts",l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("table",{className:"table table-bordered table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Group"),l.a.createElement("th",null,"Payed"),l.a.createElement("th",null,"period"))),l.a.createElement("tbody",null,this.state.data.payments.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.entityId),l.a.createElement("td",null,e.courseName),l.a.createElement("td",null,e.amount),l.a.createElement("td",null,e.monthTitle," ",e.year))}))))),l.a.createElement("div",{className:"col-5"},l.a.createElement("table",{className:"table table-bordered table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Group"),l.a.createElement("th",null,"Debts"),l.a.createElement("th",null,"period"))),l.a.createElement("tbody",null,this.state.data.debts.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.entityId),l.a.createElement("td",null,e.courseName),l.a.createElement("td",null,e.amount),l.a.createElement("td",null,e.monthTitle," ",e.year))}))))))):l.a.createElement("p",null,"Wait...")}}]),a}(l.a.Component),I=(a(62),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"timetableSection"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row flex-nowrap"},this.props.days.map((function(e){return l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"course-div header"},l.a.createElement("p",null,e)))}))),this.props.timetabling.map((function(e){return l.a.createElement("div",{className:"row flex-nowrap"},e.map((function(e){return l.a.createElement("div",{className:"col-3 card-course"},l.a.createElement("div",{className:"card card-block courseBlock"},l.a.createElement("p",null,e)))})))}))))}}]),a}(l.a.Component)),R=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{},fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://dickenserp-api.herokuapp.com/api/timetable").then((function(t){e.setState({data:t.data,fetched:!0})}))}},{key:"render",value:function(){return this.state.fetched?l.a.createElement("section",{id:"timetableSection"},l.a.createElement(I,{days:this.state.data.days,timetabling:this.state.data.timetabling})):l.a.createElement("p",null,"Wait...")}}]),a}(l.a.Component),x=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pages:0,totalRecords:0,data:[],fetched:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),h.a.get("https://dickenserp-api.herokuapp.com/api/courses").then((function(t){var a=t.data.map((function(e){return{id:e.id,title:e.title,type:e.courseTypeObj.title,fee:e.latestFee,wage:e.latestWage,numGroups:e.numGroups,numStudents:e.numStudents,numTeachers:e.numTeachers,sumPayments:e.sumPayments,sumHours:e.sumHours}}));e.setState({data:a,totalRecords:t.data.length,fetched:!0})}))}},{key:"render",value:function(){console.log(this.state.data);return l.a.createElement("section",{id:"coursesList"},this.state.fetched&&l.a.createElement(u,{columns:[{id:0,title:"id"},{id:1,title:"Title"},{id:2,title:"Type"},{id:3,title:"Fee"},{id:4,title:"Wage"},{id:5,title:"#Groups"},{id:6,title:"#Students"},{id:7,title:"#Teachers"},{id:8,title:"Sum payments"},{id:9,title:"#Hours"}],urlRef:"/course/info/",keyName:"id",data:this.state.data}))}}]),a}(l.a.Component);a(63).config(),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,null,l.a.createElement(S,{exact:!0,path:"/",component:function(){return l.a.createElement(R,null)}}),l.a.createElement(S,{exact:!0,path:"/courses",component:function(){return l.a.createElement(x,null)}}),l.a.createElement(S,{exact:!0,path:"/students",component:function(){return l.a.createElement(b,null)}}),l.a.createElement(S,{exact:!0,path:"/teachers",component:function(){return l.a.createElement(f,null)}}),l.a.createElement(S,{exact:!0,path:"/groups",component:function(){return l.a.createElement(v,null)}}),l.a.createElement(S,{exact:!0,path:"/analytics",component:function(){return l.a.createElement(w,null)}}),l.a.createElement(S,{exact:!0,path:"/group/info/:groupId",component:function(){return l.a.createElement(P,null)}}),l.a.createElement(S,{exact:!0,path:"/student/info/:studentId",component:function(){return l.a.createElement(T,null)}})),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c7cfa888.chunk.js.map