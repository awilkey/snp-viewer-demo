(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),i=a.n(s),o=(a(98),a(99),a(100),a(101),a(4)),r=a(5),c=a(7),u=a(6),p=a(8),m=a(14),d=a(92),f={position:"absolute",zIndex:"2"},h={position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedDataset:null,selectedGenotype:null,displayColorPicker:!1,color:"#19741A"},a.datasetChange=function(e){a.setState({selectedDataset:e,selectedGenotype:null}),a.props.setDataset(e);var t={dataset:e,genotype:null,color:a.state.color||null};a.props.appendDataset(a.props.idx,t)},a.gtChange=function(e){a.setState({selectedGenotype:e});var t={dataset:a.state.selectedDataset,genotype:e,color:a.state.color||null};a.props.appendDataset(a.props.idx,t)},a.colorClick=function(){a.setState({displayColorPicker:!0})},a.colorClose=function(){a.setState({displayColorPicker:!1}),a.props.appendDataset(a.props.idx,a.formatDatasetValue())},a.colorSet=function(e){a.setState({color:e.hex})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"formatDatasetValue",value:function(){return{dataset:this.state.selectedDataset||null,genotype:this.state.selectedGenotype||null,color:this.state.color||null}}},{key:"componentDidMount",value:function(){this.props.selected&&this.setState({selectedDataset:this.props.selected})}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedDataset,n=t.selectedGenotype,s=this.props.idx,i=null!==this.props.genotypes?this.props.genotypes:[];return l.a.createElement("div",null,l.a.createElement("div",{className:"row genotype-select"},l.a.createElement("div",{className:"one column "},l.a.createElement("span",null," Color "),l.a.createElement("div",{className:"fake-button git-option",onClick:this.colorClick,style:{background:this.state.color,zIndex:1}}),this.state.displayColorPicker?l.a.createElement("div",null,l.a.createElement("div",{style:h,onClick:this.colorClose}),l.a.createElement("div",{style:f},l.a.createElement(d.SketchPicker,{color:this.state.color,onChange:this.colorSet}))):null),l.a.createElement("div",{className:"five columns"},l.a.createElement("span",null," Dataset "),l.a.createElement(m.a,{defaultValue:this.props.selected||null,label:"Dataset",className:"basic-single git-option",classNamePrefix:"select",value:a,isClearable:!0,isDisabled:this.props.selected,onChange:this.datasetChange,options:this.props.datasets})),l.a.createElement("div",{className:"four columns"},l.a.createElement("span",null," Genotype "),l.a.createElement(m.a,{className:"basic-single git-option",classNamePrefix:"select",value:n,isClearable:!0,isDisabled:0===i.length,onChange:this.gtChange,options:i})),void 0!==this.props.removeOption?l.a.createElement("div",{className:"one column"},l.a.createElement("span",null,"Remove"),l.a.createElement("div",{className:"fake-button git-option",onClick:function(){return e.props.removeOption(s)}}," X ")):null))}}]),t}(l.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",{className:"genotype-field"},l.a.createElement("legend",null," Reference Genotype"),l.a.createElement(v,{datasets:this.props.datasets,setDataset:this.props.setDataset,appendDataset:this.props.appendDataset,genotypes:this.props.genotypes,idx:0}))}}]),t}(l.a.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={options:[],count:1},a.removeOption=function(e){var t=a.state.options.filter(function(t){return t.key!=="".concat(e)});a.props.appendDataset(e,null),a.setState({options:t})},a.addOption=function(){var e=a.state.options.concat([l.a.createElement(v,{key:a.state.count,idx:a.state.count,selected:a.props.selected,genotypes:a.props.genotypes,A:!0,appendDataset:a.props.appendDataset,removeOption:a.removeOption})]);a.setState({options:e,count:a.state.count+1})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.selected!==e.selected&&this.setState({count:1,options:[]})}},{key:"render",value:function(){return l.a.createElement("fieldset",{className:"genotype-field"},l.a.createElement("legend",null," Comparison Genotypes "),this.state.options,l.a.createElement("div",{className:"fake-button",onClick:this.addOption},"Add Comparison"))}}]),t}(l.a.Component),y=[{value:"none",label:"None"},{value:"hist",label:"Histogram"},{value:"heat",label:"Heat"},{value:"haplo",label:"Haplotype"}],w=[{value:"diff",label:"Different"},{value:"same",label:"Same"},{value:"total",label:"Total"}],C=[{value:"low",label:"Min-Max"},{value:"high",label:"Max-Min"}],E=[{value:"black",label:"Black"},{value:"white",label:"White"}],_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={displayAs:y[0],compare:w[0],filters:[],heat:C[0],heatColor:E[0],viewConfig:{},maxValue:0,minValue:0},a.setConfiguration=function(e){var t=a.state,n=t.compare,l=t.filters,s=t.maxValue,i=t.minValue,o="Right"===a.props.side;switch(a.props.genotypes.forEach(function(e){null!==e&&0}),e){case"heat":return{feature:n.value,glyph:"measure",display:"heat",draw_as:"range",invert_value:0,min:0,max:0,width:5,offset:o?0:-0,bin_size:5e5,bin_min:i,bin_max:s,by_class:1,class_filter:l.map(function(e){return e.value}),class_offset:2,draw_label:0,max_distance:5,border:1,border_width:0};case"hist":return{feature:n.value,glyph:"measure",display:"histogram",count_classes:1,enable_pileup:0,generate_bins:0,offset:o?0:-0,width:3,bin_min:i,bin_max:s,bin_size:5e5,by_class:1,class_offset:0,class_filter:l.map(function(e){return e.value}),draw_label:0,max_distance:75,border:1,border_width:0};case"haplo":return{feature:n.value,glyph:"measure",display:"histogram",count_classes:1,class_offset:0,class_space:1,enable_pileup:0,generate_bins:0,offset:o?0:-0,width:3,bin_min:s-1>0?s-1:0,bin_max:s>0?s:1,bin_size:5e5,by_class:1,class_filter:l.map(function(e){return e.value}),draw_label:0,max_distance:5,border:1,border_width:0};case"none":default:return{feature:"none"}}},a.optionsUpdate=function(e){a.props.optionsUpdate(a.props.side.toLowerCase(),e)},a.displayChange=function(e){var t=a.setConfiguration(e.value);if("haplo"===e.value){var n=a.state.maxValue>0?a.state.maxValue:1,l=n-1;a.setState({displayAs:e,maxValue:n,minValue:l,viewConfig:t})}else a.setState({displayAs:e,viewConfig:t});a.optionsUpdate(t)},a.compareChange=function(e){var t=a.state.viewConfig;t.feature=e.value,a.setState({compare:e,viewConfig:t}),a.optionsUpdate(t)},a.filterChange=function(e){var t=a.state.viewConfig;t.class_filter=e.map(function(e){if(null!==e)return e.value}),a.setState({filters:e,viewConfig:t}),a.optionsUpdate(t)},a.heatColorChange=function(e){var t=a.state.viewConfig;a.setState({heatColor:e}),a.optionsUpdate(t)},a.heatChange=function(e){var t=a.state.viewConfig;t.invert_value="low"===e.value?0:1,a.setState({heat:e,viewConfig:t}),a.optionsUpdate(t)},a.maxChange=function(e){var t=parseInt(e.target.value)||0,n=a.state.viewConfig;if("haplo"===a.state.displayAs.value){var l=t>0?t:1,s=l-1;n.bin_max=l,n.bin_min=s,a.setState({maxValue:t,minValue:s,viewConfig:n})}else n.bin_max=t,a.setState({maxValue:t,viewConfig:n});a.optionsUpdate(n)},a.minChange=function(e){var t=parseInt(e.target.value)||0,n=a.state.viewConfig;n.bin_min=t,a.setState({minValue:t,viewConfig:n}),a.optionsUpdate(n)},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e,t){var a=this,n=this.state,s=n.displayAs,i=n.compare,o=n.filters,r=n.heatColor,c=n.heat,u=n.maxValue,p=n.minValue,d=this.props,f=d.side,h=d.genotypes,v=[];h.forEach(function(e,t){("total"===i.value||t>0)&&null!==e&&(v=v.concat(e.genotype))});var g="none"!==s.value?l.a.createElement("div",{className:"four columns"},l.a.createElement("span",null,"Filter Genotypes"),l.a.createElement(m.a,{defaultValue:null,className:"basic-multi-select git-option",isMulti:!0,isClearable:!0,name:"filterGT",classNamePrefix:"select",value:o,onChange:this.filterChange,options:v})):null;return l.a.createElement("fieldset",{className:"genotype-field"},l.a.createElement("legend",null," ","".concat(f," Options")," "),l.a.createElement("div",{className:"row genotype-select"},l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"Display Type"),l.a.createElement(m.a,{defaultValue:y[0],className:"basic-single git-option",classNamePrefix:"select",value:s,label:"Display As:",onChange:this.displayChange,options:y})),"none"!=s.value?l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"Comparison"),l.a.createElement(m.a,{defaultValue:w[0],className:"basic-single git-option",classNamePrefix:"select",value:i,label:"Comparison ".concat(f),onChange:this.compareChange,options:w})):null,g,"none"===s.value?null:l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"heat"===s.value||"hist"===s.value?"Max Value":"Threshold"),l.a.createElement("input",{type:"text",value:u,className:"u-full-width git-option",id:"max-".concat(f),placeholder:"0",onInput:function(e){return a.maxChange(e)}})),"none"!==s.value&&"haplo"!==s.value?l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"Min Value"),l.a.createElement("input",{type:"text",value:p,className:"u-full-width git-option",id:"min-".concat(f),placeholder:"0",onInput:function(e){return a.minChange(e)}})):null),"heat"===s.value?l.a.createElement("div",{className:"row genotype-select"},l.a.createElement("div",{className:"two columns"},l.a.createElement("div",{className:"u-full-width"}," ",l.a.createElement("br",null)," ")),l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"Heat Base Color"),l.a.createElement(m.a,{defaultValue:E[0],className:"basic-single git-option",classNamePrefix:"select",value:r,onChange:this.heatColorChange,options:E})),l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null,"Heat Direction"),l.a.createElement(m.a,{defaultValue:C[0],className:"basic-single git-option",classNamePrefix:"select",value:c,onChange:this.heatChange,options:C}))):null)}}]),t}(l.a.Component),D=[{value:"L",label:"Left"},{value:"R",label:"Right"},{value:"1",label:"Both"},{value:"0",label:"None"}],x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={rulerDisplay:D[0],binSize:5e5,rulerInterval:5e6,title:""},a.optionsUpdate=function(e){a.props.optionsUpdate("general",e)},a.rulerChange=function(e){var t=a.state;t.rulerDisplay=e,a.setState({rulerDisplay:e}),a.optionsUpdate(t)},a.titleChange=function(e){var t=e.target.value,n=a.state;n.title=t,a.setState({title:t}),a.optionsUpdate(n)},a.binChange=function(e){var t=parseInt(e.target.value)||1,n=a.state;n.binSize=t,a.setState({binSize:t}),a.optionsUpdate(n)},a.intervalChange=function(e){var t=parseInt(e.target.value)||1,n=a.state;n.rulerInterval=t,a.setState({rulerInterval:t}),a.optionsUpdate(n)},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e,t){var a=this,n=this.state,s=n.rulerDisplay,i=n.binSize,o=n.rulerInterval,r=n.title;return l.a.createElement("fieldset",{className:"genotype-field"},l.a.createElement("legend",null," General Options "),l.a.createElement("div",{className:"row genotype-select"},l.a.createElement("div",{className:"six columns"},l.a.createElement("span",null," Title "),l.a.createElement("input",{type:"text",value:r,className:"u-full-width git-option",id:"title-gen",placeholder:"",onInput:function(e){return a.titleChange(e)}})),l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null," Bin Size "),l.a.createElement("input",{type:"text",value:i,className:"u-full-width git-option",id:"binsize-gen",placeholder:"500000",onInput:function(e){return a.binChange(e)}})),l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null," Ruler Display "),l.a.createElement(m.a,{defaultValue:D[0],className:"basic-single git-option",classNamePrefix:"select",value:s,label:"Comparison",onChange:this.rulerChange,options:D})),"0"!==s.value?l.a.createElement("div",{className:"two columns"},l.a.createElement("span",null," Ruler Interval "),l.a.createElement("input",{type:"text",value:o,className:"u-full-width git-option",id:"rulertic-gen",placeholder:"5000000",onInput:function(e){return a.intervalChange(e)}})):null))}}]),t}(l.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={binSize:5e5},a.optionsUpdate=function(e,t){var n=a.props.options,l=a.state.binSize;switch(e){case"left":n.left=t,n.left.bin_size=l;break;case"right":n.right=t,n.right.bin_size=l;break;case"general":l=t.binSize,n.general.title=t.title,n.general.tick_interval=t.rulerInterval,n.general.display_ruler=t.rulerDisplay.value,n.left.bin_size=l,n.right.bin_size=l,a.setState({binSize:l})}a.props.setOptions(n)},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e,t){var a=this,n=this.props.genotypes;return l.a.createElement("fieldset",{className:"genotype-field"},l.a.createElement("legend",null,"Options "),l.a.createElement(x,{optionsUpdate:function(e,t){return a.optionsUpdate(e,t)}}),l.a.createElement(_,{side:"Left",genotypes:n,optionsUpdate:function(e,t){return a.optionsUpdate(e,t)}}),l.a.createElement(_,{side:"Right",genotypes:n,optionsUpdate:function(e,t){return a.optionsUpdate(e,t)}}))}}]),t}(l.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={datasets:[],genotypes:{},referenceDataset:null,selected:[],options:{left:{feature:"none",offset:-0,draw_label:0},right:{feature:"none",offset:0,draw_label:0},general:{title:"",display_ruler:"L",tick_interval:5e6}},priorRequest:{request:"",interval:5e4,response:{}}},a.loadDatasets=function(){fetch("/api/experiment").then(function(e){return e.json()}).then(function(e){a.setState({datasets:e})})},a.appendDataset=function(e,t){var n=a.state.selected.slice();n[e]=t,a.setState({selected:n})},a.setDataset=function(e){var t=e.value;a.state.genotypes[t]?a.setState({referenceDataset:e,selected:[]}):fetch("/api/experiment/".concat(t)).then(function(e){return e.json()}).then(function(n){var l=JSON.parse(JSON.stringify(a.state.genotypes));l[t]=n,a.setState({referenceDataset:e,genotypes:l,selected:[]})})},a.setOptions=function(e){a.setState(e)},a.onSubmit=function(){var e=a.state,t=e.selected,n=e.options,l=e.priorRequest,s="",i={},o=0;t.forEach(function(e,t){if(null!==e&&e.hasOwnProperty("dataset")&&e.hasOwnProperty("genotype")&&null!=e.dataset&&null!=e.genotype)o++,s=0===t?s+"Ref=":s+"&Variant=",s+=encodeURIComponent("".concat(e.dataset.value,":").concat(e.genotype.value)),i[e.genotype.value]=e.color;else if(0===t)throw new Error("Reference must be selected.")}),i[void 0]="black",console.log("request is",s);var r=window.cvit.model;r._viewConfig.classes=i;var c=n.left.hasOwnProperty("binSize")?n.left.binSize:n.right.binSize;l.request!==s||c!==l.interval?(r._viewData.same={},r._viewData.diff={},r._viewData.total={},r.appendData("api/generateGff",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s}).then(function(){r._viewLayout.chrOrder=r._setChrOrder(r._viewData),a.setView(n,r,o),a.setState({priorRequest:{response:r._viewData,request:s,interval:c}})}).catch(function(e){console.log("cvit js error: ",e)})):(console.log(n,r,o),a.setView(n,r,o))},a.setView=function(e,t,a){var n=0,l=t._viewData;Object.keys(l.total).forEach(function(e){var t=l.total[e];t.hasOwnProperty("maxScore")&&t.maxScore.value>n&&(n=t.maxScore.value)}),0===e.left.bin_max&&(e.left.bin_max="heat"===e.left.display?n:n*a),0===e.right.bin_max&&(e.right.bin_max="heat"===e.right.display?n:n*a),t._viewConfig.left.class_filter=[],t._viewConfig.right.class_filter=[],t._viewConfig=t._combineObjects(t._viewConfig,e),t._redraw=!0,t.setDirty(!0),t._inform()},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadDatasets()}},{key:"render",value:function(){var e=this.state,t=e.selected,a=e.options,n=null!==this.state.referenceDataset&&void 0!==this.state.genotypes[this.state.referenceDataset.value]?this.state.genotypes[this.state.referenceDataset.value]:[];return l.a.createElement("div",null,l.a.createElement("h3",null,"Genotype Investigation Tool"),l.a.createElement("div",{className:"u-full-width fake-button"}," Configure View "),l.a.createElement("form",null,l.a.createElement(g,{datasets:this.state.datasets,setDataset:this.setDataset,appendDataset:this.appendDataset,genotypes:n}),this.state.referenceDataset?l.a.createElement(b,{selected:this.state.referenceDataset,genotypes:n,appendDataset:this.appendDataset}):null,l.a.createElement(N,{setOptions:this.setOptions,genotypes:t,options:a})),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"three columns button-primary",onClick:this.onSubmit}," Display "),l.a.createElement("div",{className:"three columns"},l.a.createElement("br",null)),l.a.createElement("button",{className:"three columns"}," Download "),l.a.createElement("button",{className:"three columns"}," Help ")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(O,null),document.getElementById("selector-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(268)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.7011bb6b.chunk.js.map