"use strict";(self.webpackChunktestApp=self.webpackChunktestApp||[]).push([[502],{3121:(M,m,o)=>{o.r(m),o.d(m,{AuthenticationModule:()=>A});var c=o(8498),v=o(177),F=o(9213),d=o(5596),u=o(9631),b=o(2765),g=o(8834),a=o(9417),j=o(4912),C=o(5509),t=o(4438),p=o(1339),h=o(2102);const S=()=>["/forgot-password"],y=[{path:"",children:[{path:"login",component:(()=>{class n{constructor(i,e){this.authService=i,this.router=e,this.email="",this.password=""}login(){this.authService.login(this.email,this.password).subscribe(i=>{console.log(i),console.log("Login successful"),this.router.navigate(["/dashboard"])},i=>{console.log(i)})}static#t=this.\u0275fac=function(e){return new(e||n)(t.rXU(p.u),t.rXU(c.Ix))};static#o=this.\u0275cmp=t.VBU({type:n,selectors:[["app-login"]],decls:24,vars:5,consts:[["loginForm","ngForm"],[1,"blank-layout-container","justify-content-center","align-items-center","bg-light-primary"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],["src","./assets/images/logos/logo-upeu.svg","alt","logo",1,"align-middle","m-2","small-logo"],[1,"or-border","m-t-30","fw-semibold"],["role","form",1,"m-t-30",3,"ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","placeholder","essalud@essalud.gob.pe","name","email",3,"ngModelChange","ngModel"],["matInput","","type","password","name","password",3,"ngModelChange","ngModel"],[1,"d-flex","align-items-center","m-b-12"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["type","submit","color","primary","mat-flat-button","",1,"w-100",3,"disabled"]],template:function(e,s){if(1&e){const l=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"mat-card",4)(4,"mat-card-content",5)(5,"div",6),t.nrm(6,"img",7),t.k0s(),t.j41(7,"div",8),t.EFF(8,"Iniciar sesi\xf3n aqu\xed"),t.k0s(),t.j41(9,"form",9,0),t.bIt("ngSubmit",function(){return t.eBV(l),t.Njj(s.login())}),t.j41(11,"mat-label",10),t.EFF(12,"Correo"),t.k0s(),t.j41(13,"mat-form-field",11)(14,"input",12),t.mxI("ngModelChange",function(r){return t.eBV(l),t.DH7(s.email,r)||(s.email=r),t.Njj(r)}),t.k0s()(),t.j41(15,"mat-label",10),t.EFF(16,"Contrase\xf1a"),t.k0s(),t.j41(17,"mat-form-field",11)(18,"input",13),t.mxI("ngModelChange",function(r){return t.eBV(l),t.DH7(s.password,r)||(s.password=r),t.Njj(r)}),t.k0s()(),t.j41(19,"div",14)(20,"a",15),t.EFF(21,"Forgot Password ?"),t.k0s()(),t.j41(22,"button",16),t.EFF(23,"Iniciar Sesi\xf3n"),t.k0s()()()()()()()}if(2&e){const l=t.sdS(10);t.R7$(14),t.R50("ngModel",s.email),t.R7$(4),t.R50("ngModel",s.password),t.R7$(2),t.Y8G("routerLink",t.lJ4(4,S)),t.R7$(2),t.Y8G("disabled",l.invalid)}},dependencies:[c.Wk,d.RN,d.m2,u.fg,h.rl,h.nJ,g.$z,a.qT,a.me,a.BC,a.cb,a.vS,a.cV],encapsulation:2})}return n})(),canActivate:[(()=>{class n{constructor(i,e){this.authService=i,this.router=e}canActivate(){return!this.authService.isAuthenticated()||(this.router.navigate(["/dashboard"]),!1)}static#t=this.\u0275fac=function(e){return new(e||n)(t.KVO(p.u),t.KVO(c.Ix))};static#o=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()]}]}];let A=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[v.MD,c.iI.forChild(y),F.m_,d.Hu,u.fS,b.g7,g.Hl,a.YN,a.X1,j.X4.pick(C)]})}return n})()}}]);