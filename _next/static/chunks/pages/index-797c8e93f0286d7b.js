(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6616)}])},9747:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return o}});var r=a(5893);a(7294);var t=a(9755),l=a.n(t),i=a(1664),n=a.n(i),c={src:"/portfolio//_next/static/media/userq1.e2f57454.jpeg",height:1277,width:1277,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIAb/8QAHhAAAgIABwAAAAAAAAAAAAAAAwQCEgABBQYTITH/2gAIAQEAAT8Ad0lMW01WRGJIl+WXlbZ9Tx//xAAWEQADAAAAAAAAAAAAAAAAAAAAAiH/2gAIAQIBAT8ASn//xAAXEQADAQAAAAAAAAAAAAAAAAAAARED/9oACAEDAQE/ANVIf//Z",blurWidth:8,blurHeight:8};let d=()=>(0,r.jsx)("div",{id:"about",className:"w-full md:h-screen p-2 flex items-center py-16",children:(0,r.jsxs)("div",{className:"max-w-[1240px] m-auto md:grid grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{className:"col-span-2",children:[(0,r.jsx)("p",{className:"uppercase text-xl tracking-widest text-[#1cff81]",children:"Sobre"}),(0,r.jsx)("h2",{className:"py-4",children:"Andr\xe9 Fernandes"}),(0,r.jsx)("p",{className:"py-2 text-gray-300",children:"Atualmente, meu foco \xe9 na cria\xe7\xe3o de sites responsivos, tanto est\xe1ticos quanto utilizando APIs. Tenho interesse em aprender novas tecnologias e aplic\xe1-las em meus projetos. Para criar sites, utilizo as linguagens HTML, CSS, Javascript, ReactJS e NextJS, al\xe9m de estudar constantemente novas funcionalidades e solu\xe7\xf5es conforme necess\xe1rio. Acredito que no desenvolvimento de projetos, \xe9 importante usar as melhores ferramentas dispon\xedveis."}),(0,r.jsx)("p",{className:"py-2 text-gray-300",children:"Sou formado em T\xe9cnico de Inform\xe1tica pelo IFF e atualmente estou me formando em Marketing pela UCAM. Sou uma pessoa curiosa que se interessa em entender o funcionamento das coisas e busca formas de simplificar e acelerar processos rotineiros. Possuo habilidades em racioc\xednio l\xf3gico e aprendo rapidamente coisas novas."}),(0,r.jsx)(n(),{href:"/#projects",children:(0,r.jsx)("p",{className:"py-2 text-[#a593f3] underline cursor-pointer",children:"Veja alguns dos meus \xfaltimos projetos."})})]}),(0,r.jsx)("div",{className:"w-full h-auto m-auto shadow-xl bg-[#1cff81] shadow-gray-900 rounded-full flex items-center justify-center p-2",children:(0,r.jsx)(l(),{src:c,className:"rounded-full",layout:"intrinsic",objectFit:"cover",objectPosition:"top",alt:"/"})})]})});var o=d},3291:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return v}});var r=a(5893),t=a(5675),l=a.n(t),i=a(1664),n=a.n(i);a(7294);let c={_origin:"https://api.emailjs.com"},d=(e,s="https://api.emailjs.com")=>{c._userID=e,c._origin=s},o=(e,s,a)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class A{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let x=(e,s,a={})=>new Promise((r,t)=>{let l=new XMLHttpRequest;l.addEventListener("load",({target:e})=>{let s=new A(e);200===s.status||"OK"===s.text?r(s):t(s)}),l.addEventListener("error",({target:e})=>{t(new A(e))}),l.open("POST",c._origin+e,!0),Object.keys(a).forEach(e=>{l.setRequestHeader(e,a[e])}),l.send(s)}),m=(e,s,a,r)=>{let t=r||c._userID;return o(t,e,s),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:t,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"})},h=e=>{let s;if(!(s="string"==typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},u=(e,s,a,r)=>{let t=r||c._userID,l=h(a);o(t,e,s);let i=new FormData(l);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",s),i.append("user_id",t),x("/api/v1.0/email/send-form",i)};var p={init:d,send:m,sendForm:u},f=a(9583),j=a(3854),g={src:"/portfolio//_next/static/media/contact.52766e8a.jpg",height:2400,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJRM/wD/xAAbEAACAwADAAAAAAAAAAAAAAABAwIEEQASQf/aAAgBAQABPwB4p2qCrJQJ6SJLYNj2HvP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDITH/2gAIAQIBAT8AzKX0vJ//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIy/9oACAEDAQE/AIyj/9k=",blurWidth:8,blurHeight:6};let w=()=>{let e=e=>{e.preventDefault(),p.sendForm("gmail","template_ptwinsd",e.target,"RcD_dB2-94xJ045Fq").then(e=>{console.log(e.text),alert("Mensagem enviada!")},e=>{console.log(e.text)}),e.target.reset()};return(0,r.jsx)("div",{id:"contact",className:"w-full lg:h-screen",children:(0,r.jsxs)("div",{className:"max-w-[1240px] m-auto px-2 py-16 w-full ",children:[(0,r.jsx)("p",{className:"text-xl tracking-widest uppercase text-[#1cff81]",children:"Contato"}),(0,r.jsx)("h2",{className:"py-4",children:"Entre em contato"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-5 gap-8",children:[(0,r.jsx)("div",{className:"col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4",children:(0,r.jsxs)("div",{className:"lg:p-4 h-full ",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l(),{className:"rounded-xl hover:scale-105 ease-in duration-300",src:g,alt:"/"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"py-2",children:"Andr\xe9 Fernandes"}),(0,r.jsx)("p",{children:"Front-End Developer"}),(0,r.jsx)("p",{className:"py-4",children:"Dispon\xedvel para trabalhos. Entre em contato para mais informa\xe7\xf5es."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"uppercase pt-8 text-[#1cff81]",children:"Meus links"}),(0,r.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/andrefersouza",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(f.BUd,{})})}),(0,r.jsx)("a",{href:"https://github.com/dredeco",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(f.hJX,{})})}),(0,r.jsx)("a",{href:"https://facebook.com/andrefersouza",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(f.tBk,{})})}),(0,r.jsx)("a",{href:"https://instagram.com/dredeco.dev",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(f.Zf_,{})})})]})]})]})}),(0,r.jsx)("div",{className:"col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4",children:(0,r.jsx)("div",{className:"p-4",children:(0,r.jsxs)("form",{onSubmit:e,children:[(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 w-full py-2",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"uppercase text-sm py-2",children:"Nome"}),(0,r.jsx)("input",{className:"border-2 rounded-lg p-3 flex border-gray-900",type:"text",name:"user_name"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"uppercase text-sm py-2",children:"Telefone"}),(0,r.jsx)("input",{className:"border-2 rounded-lg p-3 flex border-gray-900",type:"text",name:"user_phone"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col py-2",children:[(0,r.jsx)("label",{className:"uppercase text-sm py-2",children:"Email"}),(0,r.jsx)("input",{className:"border-2 rounded-lg p-3 flex border-gray-900",type:"email",name:"user_email"})]}),(0,r.jsxs)("div",{className:"flex flex-col py-2",children:[(0,r.jsx)("label",{className:"uppercase text-sm py-2",children:"Assunto"}),(0,r.jsx)("input",{className:"border-2 rounded-lg p-3 flex border-gray-900",type:"text",name:"subject"})]}),(0,r.jsxs)("div",{className:"flex flex-col py-2",children:[(0,r.jsx)("label",{className:"uppercase text-sm py-2",children:"Mensagem"}),(0,r.jsx)("textarea",{className:"border-2 rounded-lg p-3 border-gray-900",rows:"10",name:"message"})]}),(0,r.jsx)("button",{className:"w-full p-4 text-gray-100 mt-4",children:"Enviar"})]})})})]}),(0,r.jsx)("div",{className:"flex justify-center py-12",children:(0,r.jsx)(n(),{href:"#",children:(0,r.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(j.Ba7,{className:"text-[#1cff81]",size:30})})})})]})})};var v=w},211:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var r=a(5893),t=a(9755),l=a.n(t);a(1664),a(7294);var i=a(9583),n={src:"/portfolio//_next/static/media/teclado.0fc030b0.jpg",height:900,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAhwQf/8QAGBABAAMBAAAAAAAAAAAAAAAAAQACEwP/2gAIAQEAAT8A2scMqgE//8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQIBAT8AG//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwDBv//Z",blurWidth:8,blurHeight:5};let c=()=>(0,r.jsx)("div",{id:"home",className:"w-full h-[90vh] text-center",children:(0,r.jsxs)("div",{className:"max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center",children:[(0,r.jsx)(l(),{src:n,width:"1280",height:"920",layout:"fill",objectFit:"cover",className:"absolute w-full h-[90vh] top-0 left-0 flex -z-10 opacity-10"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"uppercase text-sm tracking-widest mt-36 text-gray-300",children:"VAMOS CONSTRUIR ALGO JUNTOS"}),(0,r.jsxs)("h1",{className:"pt-4 text-white text-2xl sm:text-4xl",children:["Ol\xe1! Meu nome \xe9",(0,r.jsx)("span",{className:"text-[#1cff81]",children:" Andr\xe9"})]}),(0,r.jsx)("h1",{className:"py-2 text-white text-2xl sm:text-4xl",children:"e sou um Desenvolvedor Web."}),(0,r.jsx)("p",{className:"py-4 text-gray-300 sm:max-w-[70%] m-auto",children:"Meu foco \xe9 na cria\xe7\xe3o de Landing Pages e Sites Institucionais, sempre buscando explorar novos caminhos."}),(0,r.jsxs)("div",{className:"flex items-center justify-between max-w-[330px] m-auto py-4",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/andrefersouza/",target:"_blank",rel:"noreferrer",className:"z-50",children:(0,r.jsx)("div",{className:"rounded-full bg-[#404040] shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(i.BUd,{})})}),(0,r.jsx)("a",{href:"https://github.com/dredeco",target:"_blank",rel:"noreferrer",className:"z-50",children:(0,r.jsx)("div",{className:"rounded-full bg-[#404040] shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(i.hJX,{})})}),(0,r.jsx)("a",{href:"https://facebook.com/andrefersouza",target:"_blank",rel:"noreferrer",className:"z-50",children:(0,r.jsx)("div",{className:"rounded-full bg-[#404040] shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(i.tBk,{})})}),(0,r.jsx)("a",{href:"https://instagram.com/dredeco.dev",target:"_blank",rel:"noreferrer",className:"z-50",children:(0,r.jsx)("div",{className:"rounded-full bg-[#404040] shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300",children:(0,r.jsx)(i.Zf_,{})})})]})]})]})});var d=c},9058:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var r=a(5893);a(5675);var t=a(1664),l=a.n(t),i=a(7294),n=a(3977),c=a(9828);let d=(0,n.ZF)({apiKey:"AIzaSyBC_IEMuETAVxaBcdvH5FYT7zvla2ozdKo",authDomain:"portfolio-e973c.firebaseapp.com",projectId:"portfolio-e973c",storageBucket:"portfolio-e973c.appspot.com",messagingSenderId:"1968385677",appId:"1:1968385677:web:ebc335b320776898733cc4",measurementId:"G-3QN11R9T1B"}),o=(0,c.ad)(d),A=(0,c.hJ)(o,"Projetos");async function x(){let e=await (0,c.PL)(A);return e}async function m(){let e=await x(),s=e.docs.map(e=>({...e.data()}));return s}let h=()=>{let[e,s]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=async()=>{let e=await m();s(e)};e()},[]),(0,r.jsx)("div",{id:"projects",className:"w-full",children:(0,r.jsxs)("div",{className:"max-w-[1240px] mx-auto px-2 py-16",children:[(0,r.jsx)("p",{className:"text-xl tracking-widest uppercase text-[#1cff81]",children:"Projetos"}),(0,r.jsx)("h2",{className:"py-4",children:"O que eu j\xe1 fiz"}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:e.map(e=>(0,r.jsxs)("div",{className:"relative flex items-center min-h-[200px] max-h-[300px] justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]",children:[(0,r.jsx)("img",{className:"rounded-xl group-hover:opacity-10 w-full h-full object-fill",src:"".concat(e.img),alt:"/"}),(0,r.jsxs)("div",{className:"hidden w-full p-5 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:[(0,r.jsx)("h3",{className:"text-2xl text-white tracking-wider text-center",children:e.name}),(0,r.jsx)("p",{className:"pb-4 pt-2 text-white text-center",children:e.description}),(0,r.jsx)(l(),{href:e.link,children:(0,r.jsx)("p",{className:"text-center py-3 mx-10 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer",children:"Visitar"})})]})]},e.name))})]})})};var u=h},4578:function(e,s,a){"use strict";a.r(s);var r=a(5893);a(7294);var t=a(7735);let l=()=>(0,r.jsx)("div",{id:"skills",className:"w-full lg:h-screen p-2 flex py-16",children:(0,r.jsxs)("div",{className:"max-w-[1240px] mx-auto w-full flex flex-col justify-center h-full",children:[(0,r.jsx)("p",{className:"text-xl tracking-widest uppercase text-[#1cff81]",children:"Habilidades"}),(0,r.jsx)("h2",{className:"py-4",children:"Tenho conhecimento em"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.PSn,{color:"#e34f26",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"HTML"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.H5g,{color:"#2965f1",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"CSS"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.vl3,{color:"#FFD600",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"JavaScript"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.pNp,{color:"#80DEEA",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"React"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.YnA,{color:"#00ACC1",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"Tailwind"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.xEg,{color:"#FFC400",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"Firebase"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.pZu,{color:"#fff",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"Github"})]})})}),(0,r.jsx)("div",{className:"p-6 shadow-xl shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300",children:(0,r.jsx)("div",{className:"grid-cols-2 gap-4 justify-center w-full items-center flex text-center",children:(0,r.jsxs)("div",{className:"sm:flex justify-center sm:justify-evenly sm:w-full items-center",children:[(0,r.jsx)(t.Xou,{color:"#000",size:64}),(0,r.jsx)("h3",{className:"pt-3 sm:pt-0",children:"Next"})]})})})]})]})});s.default=l},6616:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return A}});var r=a(5893),t=a(9008),l=a.n(t),i=a(9747),n=a(3291),c=a(211),d=a(9058),o=a(4578);function A(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Dre.dev - Portf\xf3lio"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"scroll-smooth",children:[(0,r.jsx)(c.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(n.default,{})]})]})}},9008:function(e,s,a){e.exports=a(2636)}},function(e){e.O(0,[415,16,556,755,637,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);