(self.webpackChunksmotrow_front=self.webpackChunksmotrow_front||[]).push([[602],{602:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ServicesModule:()=>M});var o=e(8583),i=e(1102),s=e(2340),c=e(8720),r=e(9767),a=e(9075),g=e(329);const l=function(t,n,e){return{prev:t,active:n,next:e}};function p(t,n){if(1&t&&(c.TgZ(0,"div",10),c._UZ(1,"app-o-image",11),c.qZA()),2&t){const t=n.$implicit,e=n.index,o=c.oxw();c.Q6J("ngClass",c.kEZ(2,l,e===o.prevIdx,e===o.activeIdx,e===o.nextIdx)),c.xp6(1),c.Q6J("dataPhoto",t)}}let d=(()=>{class t{constructor(){this.sliderPhotos=[],this.itemClassName="carousel__photo",this.slide=0,this.moving=!0,this.currentSlide=1,this.prevIdx=0,this.activeIdx=0,this.nextIdx=0}ngAfterViewInit(){this.totalItems=this.sliderPhotos.length,this.activeIdx=0,this.prevIdx=this.sliderPhotos.length,this.nextIdx=1,this.moving=!1}disableInteraction(){this.moving=!0,setTimeout(()=>{this.moving=!1},500)}moveCarouselTo(t){if(this.currentSlide=t,!this.moving){this.disableInteraction();let n=t-1,e=t+1;0===t?n=this.totalItems-1:t===this.totalItems-1&&(n=t-1,e=0),this.prevIdx=n,this.activeIdx=t,this.nextIdx=e}}moveNext(){this.moving||(this.slide===this.totalItems-1?this.slide=0:this.slide++,this.moveCarouselTo(this.slide))}movePrev(){this.moving||(0===this.slide?this.slide=this.totalItems-1:this.slide--,this.moveCarouselTo(this.slide))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-slider"]],inputs:{sliderPhotos:"sliderPhotos"},decls:15,vars:1,consts:[[1,"carousel-wrapper"],[1,"carousel"],["class","carousel__photo",3,"ngClass",4,"ngFor","ngForOf"],[1,"carousel-controls"],[1,"carousel__button--next",3,"click"],[1,"btn"],[1,"s-icon-slider-ar"],[1,"medium"],[1,"carousel__button--prev",3,"click"],[1,"sgradient"],[1,"carousel__photo",3,"ngClass"],[3,"dataPhoto"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,p,2,6,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.NdJ("click",function(){return n.moveNext()}),c.TgZ(5,"div",5),c._UZ(6,"i",6),c.qZA(),c.TgZ(7,"span",7),c._uU(8,"Prev."),c.qZA(),c.qZA(),c.TgZ(9,"div",8),c.NdJ("click",function(){return n.movePrev()}),c.TgZ(10,"span",7),c._uU(11,"Next"),c.qZA(),c.TgZ(12,"div",5),c._UZ(13,"i",6),c.qZA(),c.qZA(),c.qZA(),c._UZ(14,"div",9),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("ngForOf",n.sliderPhotos))},directives:[o.sg,o.mk,g.$],styles:["[_nghost-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]{overflow:hidden;position:relative}[_nghost-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   .sgradient[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;height:260px;background:#0000 linear-gradient(180deg,#0000,#000) 0 0 no-repeat padding-box;opacity:.3;z-index:1000}[_nghost-%COMP%]   .carousel-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]   .carousel[_ngcontent-%COMP%]{transform-style:preserve-3d}[_nghost-%COMP%]   .carousel__photo[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;width:100%;z-index:100;transition:opacity .5s,z-index .5s;height:520px}[_nghost-%COMP%]   .carousel__photo.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel__photo.initial[_ngcontent-%COMP%]{opacity:1;position:relative;z-index:900}[_nghost-%COMP%]   .carousel__photo.next[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel__photo.prev[_ngcontent-%COMP%]{z-index:800}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:23px;left:calc(50% - 68px);z-index:1001}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:84px;height:29px;background:#f8f8f833 0 0 no-repeat padding-box;border-radius:16px;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);display:flex;align-items:center;padding:3px;cursor:pointer}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .carousel__button--prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .carousel__button--prev[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .s-icon-slider-ar[_ngcontent-%COMP%]{font-size:10px;transform:rotate(180deg)}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .carousel__button--next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .carousel__button--next[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .s-icon-slider-ar[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:23px;width:23px;height:23px;background:#ededed 0 0 no-repeat padding-box;opacity:1;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);padding-left:6px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-bottom:1px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-right:10px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{padding-left:14px;margin-right:0;justify-content:flex-end}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   .btn[_ngcontent-%COMP%]{margin-left:15px;padding-right:6px}[_nghost-%COMP%]   .carousel-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})();function h(t,n){if(1&t&&(c.TgZ(0,"a",25),c.TgZ(1,"span",26),c._uU(2),c.qZA(),c._UZ(3,"i",27),c.qZA()),2&t){const t=n.$implicit;c.MGl("routerLink","/service/",t.attributes.slug,""),c.xp6(2),c.hij(" ",t.attributes.title," ")}}function _(t,n){if(1&t&&(c.TgZ(0,"div",28),c.TgZ(1,"span",29),c._UZ(2,"img",30),c.qZA(),c.TgZ(3,"div",31),c.TgZ(4,"span"),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"div",32),c.TgZ(7,"a",33),c.TgZ(8,"span"),c._uU(9),c.qZA(),c._UZ(10,"i",12),c.qZA(),c.qZA(),c.qZA()),2&t){const t=n.$implicit,e=c.oxw();c.xp6(2),c.MGl("alt","client logo ",t.attributes.nameUrl,""),c.Q6J("src",e.getImgUrl(t.attributes.logo.data.attributes.url),c.LSH),c.xp6(3),c.hij(" ",t.attributes.description," "),c.xp6(2),c.Q6J("href",t.attributes.url,c.LSH),c.xp6(2),c.Oqu(t.attributes.nameUrl)}}const P=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this.route=t,this.servicesService=n,this.metaTagService=e,this.titleService=o,this.data=null}ngOnInit(){var t,n,e,o,i,s;this.data=this.route.snapshot.data.data.data.attributes,this.dataPhoto=this.data.photo.data.attributes,this.servicesList=this.data.service_lists.data,this.sliderPhotos=this.data.slider.data.map(t=>t.attributes),this.titleService.setTitle(null===(t=this.data.SEO)||void 0===t?void 0:t.title),this.metaTagService.addTags([{name:"title",content:null===(n=this.data.SEO)||void 0===n?void 0:n.title},{name:"description",content:null===(e=this.data.SEO)||void 0===e?void 0:e.description},{name:"keywords",content:null===(o=this.data.SEO)||void 0===o?void 0:o.keywords},{name:"robots",content:null===(i=this.data.SEO)||void 0===i?void 0:i.robots},{name:"robots",content:null===(s=this.data.SEO)||void 0===s?void 0:s.robots},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"date",content:(new Date).toLocaleDateString(),scheme:"DD/MM/YYYY"},{charset:"UTF-8"}]),this.getClientsList()}getClientsList(){this.servicesService.getClients().subscribe(t=>{this.clientList=t.data})}getImgUrl(t){return s.N.apiUrl+t}log(t){console.log(t)}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(i.gz),c.Y36(r.r),c.Y36(a.h_),c.Y36(a.Dx))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-services-container"]],decls:46,vars:10,consts:[[1,"services-container"],[1,"photo-container"],[3,"dataPhoto"],[1,"title-page"],[1,"tiempos-l"],[1,"content"],[1,"what-we-do"],[1,"title"],[1,"blocks"],[1,"left"],[1,"name-block","tiempos"],[1,"button-container"],[1,"s-icon-link"],[1,"right"],[1,"text-block"],[1,"title-f","medium"],[1,"text"],[1,"services-list"],[1,"items"],["class","item",3,"routerLink",4,"ngFor","ngForOf"],[1,"slider-block"],[3,"sliderPhotos"],[1,"few-our-clients"],[1,"list-clients"],["class","item",4,"ngFor","ngForOf"],[1,"item",3,"routerLink"],[1,"name","medium"],[1,"s-icon-large-link"],[1,"item"],[1,"logo"],[3,"alt","src"],[1,"description"],[1,"link"],["target","_blank",3,"href"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._UZ(2,"app-o-image",2),c.TgZ(3,"h1",3),c.TgZ(4,"p",4),c._uU(5),c.qZA(),c.TgZ(6,"p"),c._uU(7),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",5),c.TgZ(9,"section",6),c.TgZ(10,"div",7),c.TgZ(11,"span"),c._uU(12,"What we do"),c.qZA(),c.qZA(),c.TgZ(13,"div",8),c.TgZ(14,"section",9),c.TgZ(15,"div",10),c.TgZ(16,"span"),c._uU(17),c.qZA(),c.qZA(),c.TgZ(18,"div",11),c.TgZ(19,"span"),c._uU(20," Become a client "),c.qZA(),c._UZ(21,"i",12),c.qZA(),c.qZA(),c.TgZ(22,"section",13),c.TgZ(23,"div",14),c.TgZ(24,"div",15),c.TgZ(25,"span"),c._uU(26),c.qZA(),c.qZA(),c.TgZ(27,"div",16),c.TgZ(28,"span"),c._uU(29),c.qZA(),c.TgZ(30,"span"),c._uU(31),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(32,"section",17),c.TgZ(33,"div",7),c.TgZ(34,"span"),c._uU(35,"SERVICES:"),c.qZA(),c.qZA(),c.TgZ(36,"div",18),c.YNc(37,h,4,2,"a",19),c.qZA(),c.qZA(),c.TgZ(38,"section",20),c._UZ(39,"app-slider",21),c.qZA(),c.TgZ(40,"section",22),c.TgZ(41,"div",7),c.TgZ(42,"span"),c._uU(43,"CLIENTS:"),c.qZA(),c.qZA(),c.TgZ(44,"div",23),c.YNc(45,_,11,5,"div",24),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(2),c.Q6J("dataPhoto",n.dataPhoto),c.xp6(3),c.Oqu(n.data.title),c.xp6(2),c.Oqu(n.data.subTitle),c.xp6(10),c.hij(" ",n.data.whatWeDo.title," "),c.xp6(9),c.hij(" ",n.data.whatWeDo.parag1," "),c.xp6(3),c.hij(" ",n.data.whatWeDo.parag2," "),c.xp6(2),c.hij(" ",n.data.whatWeDo.parag3," "),c.xp6(6),c.Q6J("ngForOf",n.servicesList),c.xp6(2),c.Q6J("sliderPhotos",n.sliderPhotos),c.xp6(6),c.Q6J("ngForOf",n.clientList))},directives:[g.$,o.sg,d,i.yS],styles:["[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]{height:300px;position:relative}[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%]{position:absolute;top:99px;left:67px;max-width:520px}[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:17px;line-height:24px}[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:13px;font-size:56px;line-height:inherit}@media screen and (max-width: 769px){[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]{height:323px}[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%]{top:80px;left:20px;width:77%}[_nghost-%COMP%]   .photo-container[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:15px;font-size:46px}}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{padding:70px 67px 0;margin-bottom:62px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]{padding-top:82px;padding-bottom:70px;border-bottom:1px solid #f0f0f0;margin-bottom:70px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px;margin-bottom:50px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-wrap:wrap;flex-direction:column;height:275px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid #000;margin-top:25px;transition:.3s ease;cursor:pointer;color:#000;margin-left:74px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{letter-spacing:-.42px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.3s ease;font-size:13px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(-n+5){margin-left:0}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{color:#00000080;border-color:#00000080}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#00000080}@media screen and (max-width: 769px){[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]{padding-top:60px;margin-bottom:0}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{height:auto}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .services-list[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-left:0}}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .slider-block[_ngcontent-%COMP%]{padding-bottom:80px}@media screen and (max-width: 769px){[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .slider-block[_ngcontent-%COMP%]{width:100vw;margin-left:-20px;padding-bottom:70px}}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .few-our-clients[_ngcontent-%COMP%]{padding:36px 28px 0}@media screen and (max-width: 769px){[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{padding:50px 20px 0;margin-bottom:10px}}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase;font-size:12px;letter-spacing:1.8px}"]}),t})(),resolve:{data:(()=>{class t{constructor(t){this.servicesService=t}resolve(t,n){return this.servicesService.getContentPage()}}return t.\u0275fac=function(n){return new(n||t)(c.LFG(r.r))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.Bz.forChild(P)],i.Bz]}),t})();var O=e(59);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,C,O.m]]}),t})()}}]);