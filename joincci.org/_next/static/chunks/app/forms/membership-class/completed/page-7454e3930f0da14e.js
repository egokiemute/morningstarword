(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9039],{5754:function(e,l,t){Promise.resolve().then(t.bind(t,4730))},4730:function(e,l,t){"use strict";t.r(l);var a=t(7437),s=t(7753),r=t(2265),i=t(9343),o=t(4769),n=t(2829),m=t(7589),d=t(5789),u=t(5257),c=t(5433),x=t(8856),p=t(9099),h=t(8935),f=t(4016);let v={firstName:"",lastName:"",email:"",completion_date:"",campus:""};l.default=()=>{var e,l,t,N,b;let{campuses:j}=(0,x.Z)(),[g,_]=r.useState(null),C=r.useRef(null),[F,S]=r.useState(!1),{register:w,handleSubmit:y,formState:{errors:q},reset:k}=(0,i.cI)({mode:"onBlur",defaultValues:v,resolver:(0,s.X)(f.$G)}),E=async e=>{let l={formType:h.h.MC_Completed,recaptcha:g,firstName:e.firstName,lastName:e.lastName,email:e.email,completion_date:e.completion_date,campus:e.campus};await (0,p.H)({payload:l,setLoading:S,onSuccess:()=>{k(),C.current&&C.current.reset()}})};return(0,a.jsx)(m.Z,{title:(0,a.jsxs)("h1",{className:"text-center font-anton text-2xl uppercase text-white md:text-[46px] md:leading-[55px]",children:["Membership ",(0,a.jsx)("span",{className:"text-textRed",children:"Class"})]}),subTitle:(0,a.jsx)("p",{className:"w-full max-w-lg text-center text-base text-[#FFFFFFB2] md:text-lg lg:text-xl",children:"Membership Certification Form"}),children:(0,a.jsx)("div",{className:"form-container mx-auto p-2",children:(0,a.jsxs)("form",{onSubmit:y(E),className:"w-full",children:[(0,a.jsx)(n.ph,{title:"Please provide your details"}),(0,a.jsxs)(n.Hd,{children:[(0,a.jsxs)(n.Ue,{children:[(0,a.jsx)(c.o,{label:"First Name",...w("firstName"),error:null==q?void 0:null===(e=q.firstName)||void 0===e?void 0:e.message,required:!0}),(0,a.jsx)(c.o,{label:"Last Name",...w("lastName"),error:null==q?void 0:null===(l=q.lastName)||void 0===l?void 0:l.message,required:!0})]}),(0,a.jsx)(c.o,{label:"Email",...w("email"),error:null==q?void 0:null===(t=q.email)||void 0===t?void 0:t.message,required:!0}),(0,a.jsx)(c.o,{type:"date",label:"What day did you complete membership school?",...w("completion_date"),error:null==q?void 0:null===(N=q.completion_date)||void 0===N?void 0:N.message,required:!0}),(0,a.jsx)(u.Z,{label:"What CCI branch do you attend? ",placeholder:"Select a branch",options:j,...w("campus"),error:null==q?void 0:null===(b=q.campus)||void 0===b?void 0:b.message,required:!0}),(0,a.jsx)(d.Z,{onChange:_,ref:C}),(0,a.jsx)(o.g,{loading:F,disabled:null===g,children:F?"Submitting...":"Submit"})]})]})})})}}},function(e){e.O(0,[6164,8472,8280,2280,6554,3394,2971,7023,1744],function(){return e(e.s=5754)}),_N_E=e.O()}]);