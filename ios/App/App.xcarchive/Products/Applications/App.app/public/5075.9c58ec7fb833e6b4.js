"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(I,m,a)=>{a.r(m),a.d(m,{HomePageModule:()=>x});var p=a(177),r=a(4488),g=a(4341),h=a(70),u=a(467),e=a(4438),f=a(9434),C=a(7840),P=a(4517),y=a(5797),F=a(5761);function E(o,l){if(1&o&&(e.j41(0,"ion-card")(1,"ion-card-header"),e.EFF(2," Courier Details "),e.k0s(),e.j41(3,"ion-card-content")(4,"ion-list")(5,"ion-item")(6,"ion-label"),e.EFF(7,"Tracking ID:"),e.k0s(),e.j41(8,"ion-text"),e.EFF(9),e.k0s()(),e.j41(10,"ion-item")(11,"ion-label"),e.EFF(12,"Status:"),e.k0s(),e.j41(13,"ion-text"),e.EFF(14),e.k0s()(),e.j41(15,"ion-item")(16,"ion-label"),e.EFF(17,"Recipient Name:"),e.k0s(),e.j41(18,"ion-text"),e.EFF(19),e.k0s()(),e.j41(20,"ion-item")(21,"ion-label"),e.EFF(22,"Address:"),e.k0s(),e.j41(23,"ion-text"),e.EFF(24),e.k0s()(),e.j41(25,"ion-item")(26,"ion-label"),e.EFF(27,"Phone:"),e.k0s(),e.j41(28,"ion-text"),e.EFF(29),e.k0s()(),e.j41(30,"ion-item")(31,"ion-label"),e.EFF(32,"Email:"),e.k0s(),e.j41(33,"ion-text"),e.EFF(34),e.k0s()()()()()),2&o){const c=e.XpG();e.R7$(9),e.JRh(c.courierDetails.trackingId),e.R7$(5),e.JRh(c.courierDetails.status),e.R7$(5),e.JRh(c.courierDetails.recipient.name),e.R7$(5),e.JRh(c.courierDetails.recipient.address),e.R7$(5),e.JRh(c.courierDetails.recipient.phone),e.R7$(5),e.JRh(c.courierDetails.recipient.email)}}const M=[{path:"",component:(()=>{var o;class l{constructor(n,t,i,s,k,b,d){this.camera=n,this.barcodeScanner=t,this.navCtrl=i,this.geolocation=s,this.callNumber=k,this.alertController=b,this.modalController=d,this.capturedImage="",this.complaintDetails=""}showTrackingInstructions(){var n=this;return(0,u.A)(function*(){yield(yield n.alertController.create({header:"How to track a courier?",message:"Enter your 6 digit tracking number (Ex: 123456) or use the barcode scanner to scan the code which is received by you by email at the time of the order confirmation.",buttons:["OK"]})).present()})()}trackCourier(){"123456"===this.trackingId?this.courierDetails={trackingId:"123456",status:"Delivered",recipient:{name:"Yashwanth Varma ",address:"Central Park, Dublin",phone:"+353 888888888",email:"yash@test.com"}}:(this.courierDetails={error:"Tracking ID does not exist."},this.showErrorMessage("Tracking ID does not exist."))}showErrorMessage(n){var t=this;return(0,u.A)(function*(){yield(yield t.alertController.create({header:"Error",message:n,buttons:["OK"]})).present()})()}placeOrder(){this.navCtrl.navigateForward("/place-order")}scanBarcode(){var n=this;return(0,u.A)(function*(){try{const t=yield n.barcodeScanner.scan();console.log("Barcode data",t),yield(yield n.alertController.create({header:"Scan Successful",message:`Scanned data: ${t.text}`,buttons:["OK"]})).present()}catch(t){console.error("Error while scanning barcode",t),yield(yield n.alertController.create({header:"Scan Error",message:"An error occurred while scanning the barcode. Please try again.",buttons:["OK"]})).present()}})()}getCurrentPosition(){var n=this;return(0,u.A)(function*(){try{const t=yield n.geolocation.getCurrentPosition();console.log("Current position:",t)}catch(t){console.error("Error getting current position:",t)}})()}viewMap(){var n=this;return(0,u.A)(function*(){try{const t=yield n.geolocation.getCurrentPosition(),d=`https://www.google.com/maps/dir/${t.coords.latitude},${t.coords.longitude}/53.312006,-6.261426`;window.open(d,"_system")}catch(t){console.error("Error getting current position:",t)}})()}takePicture(){this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then(t=>{this.capturedImage="data:image/jpeg;base64,"+t},t=>{console.log("Error taking picture:",t)})}submitComplaint(){console.log("Complaint Details:",this.complaintDetails),console.log("Captured Image:",this.capturedImage),this.complaintDetails="",this.capturedImage=""}contactSupport(){this.courierDetails=null,this.callNumber.callNumber("18001010101",!0).then(n=>console.log("Launched dialer!",n)).catch(n=>console.log("Error launching dialer",n))}raiseComplaint(){var n=this;return(0,u.A)(function*(){yield(yield n.alertController.create({header:"Raise Complaint",inputs:[{name:"complaint",type:"text",placeholder:"Enter your complaint",value:n.complaintDetails}],buttons:[{text:"Take Picture",handler:()=>{n.takePicture()}},{text:"Submit",handler:()=>{n.submitComplaint()}},{text:"Cancel",role:"cancel"}]})).present()})()}}return(o=l).\u0275fac=function(n){return new(n||o)(e.rXU(f.i7),e.rXU(C.v),e.rXU(P.q9),e.rXU(y.L),e.rXU(F.i),e.rXU(r.hG),e.rXU(r.W3))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-home"]],decls:34,vars:2,consts:[[1,"custom-toolbar"],[1,"logo-title"],["src","assets/logo.jpeg","alt","Logo",1,"logo"],[1,"ion-padding",2,"background-image","url('assets/background5.jpeg')","background-size","cover","background-position","center"],["position","floating"],["type","text",3,"ngModelChange","ngModel"],["slot","end",3,"click"],["name","search"],["name","Barcode"],[1,"center-align"],[1,"hypertext-link",3,"click"],[4,"ngIf"],[1,"feature-container"],["expand","block",3,"click"],["name","cart"],["name","map"],["name","call"],["name","alert"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e.nrm(3,"img",2),e.k0s()()(),e.j41(4,"ion-content",3)(5,"ion-item")(6,"ion-label",4),e.EFF(7,"Enter Tracking ID"),e.k0s(),e.j41(8,"ion-input",5),e.mxI("ngModelChange",function(s){return e.DH7(t.trackingId,s)||(t.trackingId=s),s}),e.k0s(),e.j41(9,"ion-button",6),e.bIt("click",function(){return t.trackCourier()}),e.nrm(10,"ion-icon",7),e.k0s(),e.j41(11,"ion-button",6),e.bIt("click",function(){return t.scanBarcode()}),e.nrm(12,"ion-icon",8),e.k0s()(),e.j41(13,"div",9)(14,"a",10),e.bIt("click",function(){return t.showTrackingInstructions()}),e.EFF(15,"How to track a courier?"),e.k0s()(),e.DNE(16,E,35,6,"ion-card",11),e.nrm(17,"br")(18,"br")(19,"br")(20,"br"),e.j41(21,"div",12)(22,"ion-button",13),e.bIt("click",function(){return t.placeOrder()}),e.nrm(23,"ion-icon",14),e.EFF(24," Order a Courier "),e.k0s(),e.j41(25,"ion-button",13),e.bIt("click",function(){return t.viewMap()}),e.nrm(26,"ion-icon",15),e.EFF(27," Courier hub Locator "),e.k0s(),e.j41(28,"ion-button",13),e.bIt("click",function(){return t.contactSupport()}),e.nrm(29,"ion-icon",16),e.EFF(30," Contact Support "),e.k0s(),e.j41(31,"ion-button",13),e.bIt("click",function(){return t.raiseComplaint()}),e.nrm(32,"ion-icon",17),e.EFF(33," Raise Complaint "),e.k0s()()()),2&n&&(e.R7$(8),e.R50("ngModel",t.trackingId),e.R7$(8),e.Y8G("ngIf",t.courierDetails))},dependencies:[p.bT,g.BC,g.vS,r.Jm,r.b_,r.I9,r.ME,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.nf,r.IO,r.BC,r.ai,r.Gw],styles:[".custom-toolbar[_ngcontent-%COMP%]{--background: #0450a0;height:110px}.logo-title[_ngcontent-%COMP%]{display:flex;align-items:center}.logo[_ngcontent-%COMP%]{width:100px;height:80px;margin-right:10px}.title[_ngcontent-%COMP%]{color:#fff;font-size:10px;font-weight:700}.center-align[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:20px}ion-toolbar[_ngcontent-%COMP%]{--background: #000000;--color: #FFDB58}ion-title[_ngcontent-%COMP%]{color:#fff}ion-content[_ngcontent-%COMP%]{--ion-background-color: transparent}.feature-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}ion-button[_ngcontent-%COMP%]{--background: #FFDB58;--color: #000000;--border-radius: 10px;--padding-end: 10px;--padding-start: 10px}ion-button[_ngcontent-%COMP%]:hover{--background: #FFD700}ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-bottom:8px}.center-align[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:10%}.hypertext-link[_ngcontent-%COMP%]{color:#fff;text-decoration:underline;cursor:pointer}.hypertext-link[_ngcontent-%COMP%]:hover{color:#d3d3d3}"]}),l})()}];let v=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[h.iI.forChild(M),h.iI]}),l})(),x=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[p.MD,g.YN,r.bv,v]}),l})()}}]);