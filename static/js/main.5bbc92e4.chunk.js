(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),i=(n(34),n(35),n(18)),l=n(3),o=n(9),d=n(8),j=function(){return function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e}(function(){for(var e=[],t=["Hearts","Diamonds","Clubs","Spades"],n=0;n<t.length;){for(var a=1;a<14;a++){var c={value:0,type:"",name:""};c.value=a,c.type=t[n],c.name=1===a?"Ace":11===a?"Jack":12===a?"Queen":13===a?"King":a,e.push(c)}n++}return e}())},u=n(16),b=n.n(u),p="deck/dealDeck",O="deck/playCard",h="deck/dealCard",f="deck/opponentPlay",v=function(){return{type:p}},x={deck:[],player:[],opponent:[],activeCard:{}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:for(var n=[],a=[],c=j(),r=0;r<8;r++)n.push(c[r]);for(var s=8;s<16;s++)a.push(c[s]);c.splice(0,16);var i=c[0];return c.shift(),Object(d.a)(Object(d.a)({},e),{},{deck:c,activeCard:i,player:n,opponent:a});case O:var l=t.payload,o=Object.values(e.player),u=o.filter((function(e){if(!b.a.isEqual(e,l))return e}));return Object(d.a)(Object(d.a)({},e),{},{player:u,activeCard:l});case h:var v=e.deck[0],m=e.deck;m.shift();var y=e.player;return y.push(v),Object(d.a)(Object(d.a)({},e),{},{deck:m,player:y});case f:var k,g,C=e.opponent,N=e.activeCard,w=[];if(8!==N.value)g=C.filter((function(e){if(e.type===N.type||e.value===N.value)return e}));else if(8===N.value){var _=t.payload;g=C.filter((function(e){if(e.type===_)return e}))}if(0===g.length){var S=e.deck[0],E=e.deck;E.shift();var Y=e.opponent;return Y.push(S),Object(d.a)(Object(d.a)({},e),{},{deck:E,opponent:Y})}return k=g[0],w=C.filter((function(e){if(!b.a.isEqual(e,k))return e})),Object(d.a)(Object(d.a)({},e),{},{activeCard:k,opponent:w});default:return e}},y=n(11),k=n.p+"static/media/croppedcrazyeights.86cdf0ee.mp4",g=(n.p,n(21),n(40),n(1));var C=function(){return Object(g.jsx)("div",{className:"navbar",children:Object(g.jsx)(i.b,{to:"/",className:"navbar--home",children:"Crazy Eights"})})};var N,w,_,S,E,Y=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"main_wrapper",children:Object(g.jsx)("span",{children:"Crazy Eights"})}),Object(g.jsxs)("div",{className:"main_cotainer--rules",children:[Object(g.jsx)("h1",{children:"Rules of Crazy Eights"}),Object(g.jsx)("h2",{children:"Object of the game"}),Object(g.jsx)("span",{children:"The goal is to be the first player to get rid of all the cards in your hand"}),Object(g.jsxs)("ol",{type:"1",children:[Object(g.jsx)("li",{children:"You can play any card of the same suit or rank"}),Object(g.jsx)("li",{children:"Select a card and press play to make a move"}),Object(g.jsx)("li",{children:"Click draw card if you don't have a card to play"}),Object(g.jsx)("li",{children:"If you choose an 8, you can set the next suit of the opponent"})]})]}),Object(g.jsxs)("video",{autoPlay:!0,muted:!0,loop:!0,children:[Object(g.jsx)("source",{src:k,type:"video/mp4"}),"Your browser does not support the video tag."]})]})},D=n(14),T=n(15),A=Object(T.c)(N||(N=Object(D.a)(["\n\t0%   { transform: translateY(0); }\n\t30%  { transform: translateY(-20px); }\n\t50%  { transform: translateY(20px); }\n\t100% { transform: translateY(0); }\n"]))),H=(Object(T.c)(w||(w=Object(D.a)(["\n\tto {\n\t\tbackground-position: 200% center;\n\t}\n"]))),Object(T.a)(_||(_=Object(D.a)(["\n\theight: 200px;\n\tbackground: #e4e4e4;\n\tanimation: "," 1s linear infinite;\n\tmargin: 0;\n\tcursor: pointer;\n\t-webkit-box-shadow: 14px 15px 15px -2px rgba(0, 0, 0, 0.66);\n\tbox-shadow: 14px 15px 15px -2px rgba(0, 0, 0, 0.66);\n"])),A)),z=Object(T.a)(S||(S=Object(D.a)(["\n\ttext-align: center;\n\tbackground: linear-gradient(\n\t\tto right,\n\t\t#fff 20%,\n\t\t#fb00ff 40%,\n\t\t#00ffdc 60%,\n\t\t#fff 80%\n\t);\n\tbackground-size: 200% auto;\n\tcolor: #000;\n\tbackground-clip: text;\n\ttext-fill-color: transparent;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n\tanimation: shine 1.5s linear infinite;\n"])));var R=function(e){var t=e.card,n=e.selectCard,a=e.selected,c=e.gameSession,r=e.player,s=e.activeCard,i=e.setType;if(!t)return null;var l=T.b.div(E||(E=Object(D.a)(["\n\t\theight: 200px;\n\t\tpadding-top: 10px;\n\t\tbackground-color: ",";\n\t\twidth: 148px;\n\t\tmargin: 10px 10px;\n\t\ttransform: ",";\n\t\t&:after {\n\t\t\tcontent: ",";\n\t\t\tfont-size: 14.5em;\n\t\t\tline-height: 0.7;\n\t\t\t","\n\t\t}\n\t\t&:hover {\n\t\t\t","\n\t\t}\n\t\t&:active {\n\t\t\tbackground-color: pink;\n\t\t}\n\t"])),a?"black":"white",a?"translateY(-20px)":"",function(e){var t=["","","'"];if(e){switch(e.type){case"Spades":t[0]="A";break;case"Hearts":t[0]="B";break;case"Diamonds":t[0]="C";break;case"Clubs":t[0]="D"}switch(!0){case e.value>0&&e.value<10:t[1]=e.value;break;case 10===e.value:t[1]="A";break;case 11===e.value:t[1]="B";break;case 12===e.value:t[1]="D";break;case 13===e.value:t[1]="E"}return"'\\1F0"+t.join("")}}(t),a?z:"color: ".concat("Diamonds"===t.type||"Hearts"===t.type?"red":"black"),a||s?"":H);return c&&r?Object(g.jsxs)("div",{style:{width:"100px"},onClick:function(){return n(t)},children:[8===t.value&&a?Object(g.jsxs)("div",{className:"card_typepicker",children:[Object(g.jsx)("span",{onClick:function(){return i("Spades")},children:"\u2660"}),Object(g.jsx)("span",{onClick:function(){return i("Diamonds")},children:"\u2666"}),Object(g.jsx)("span",{onClick:function(){return i("Hearts")},children:"\u2665"}),Object(g.jsx)("span",{onClick:function(){return i("Clubs")},children:"\u2663"})]}):"",Object(g.jsx)(l,{})]}):!c||r||s?c&&s?Object(g.jsx)("div",{style:{width:"100px"},children:Object(g.jsx)(l,{})}):Object(g.jsx)(g.Fragment,{}):Object(g.jsx)("div",{style:{width:"100px"},children:Object(g.jsx)("div",{className:"card"})})};var M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.game.player})),n=Object(o.c)((function(e){return e.game.opponent})),c=Object(o.c)((function(e){return e.game.deck})),r=Object(o.c)((function(e){return e.game.activeCard})),s=Object(a.useState)(!1),i=Object(y.a)(s,2),l=i[0],d=i[1],j=Object(a.useState)({}),u=Object(y.a)(j,2),p=u[0],x=u[1],m=Object(a.useState)(0),k=Object(y.a)(m,2),C=k[0],N=k[1],w=Object(a.useState)(""),_=Object(y.a)(w,2),S=_[0],E=_[1],Y=Object(a.useState)(!1),D=Object(y.a)(Y,2),T=(D[0],D[1]),A=Object(a.useState)(""),H=Object(y.a)(A,2),z=H[0],M=H[1],I=Object(a.useState)(!1),P=Object(y.a)(I,2),q=P[0],B=P[1],J=Object(a.useRef)({name:"",value:0,type:""}),U=function(e){J.current=e,x(e),console.log("currentCard",J.current)},F=function(t){!function(e,t){return e.type===t.type||e.value===t.value}(t,r)?(B(!0),setTimeout((function(){return B(!1)}),3e3)):(e({type:O,payload:t}),setTimeout((function(){e(function(e){return{type:f,payload:e}}(8===t.value&&0===S.length?t.type:S)),N((function(e){return e+1}))}),1e3),J.current="",E(""))};return Object(a.useEffect)((function(){console.log("player",t),l&&(0===t.length&&(T(!0),M("CONGRATS YOU WON THE GAME")),0===c.length&&(T(!0),M("SORRY THE DECK IS")),0===n.length&&(T(!0),M("YOU LOSE")))}),[C]),Object(a.useEffect)((function(){d(!0),e(v())}),[]),Object(g.jsxs)("div",{className:"board_wrapper",children:[Object(g.jsx)("div",{className:"deck_wrapper",children:Object(g.jsx)("div",{className:"deck_content_wrapper",children:n.map((function(e,t){return Object(g.jsx)(R,{card:e,selectCard:U,selected:!1,gameSession:l,player:!1,activeCard:!1},t)}))})}),Object(g.jsx)("div",{className:"board_activecard",children:Object(g.jsxs)("div",{className:"deck_middle_wrapper",children:[Object(g.jsxs)("div",{className:"board_btnwrapper",children:[Object(g.jsx)("button",{className:"board_btn",onClick:function(){e({type:h}),N((function(e){return e+1}))},children:"Draw Card"}),Object(g.jsx)("button",{className:"board_btn",onClick:function(){return F(J.current)},children:"Play Card"}),Object(g.jsx)("div",{id:"restart_btn",children:Object(g.jsx)("button",{className:"board_btn",onClick:function(){N(0),M(""),T(!1),e(v())},children:"Restart"})}),q?Object(g.jsx)("div",{className:"board_heading",children:Object(g.jsx)("span",{children:"NOT A VALID MOVE"})}):"",Object(g.jsx)("div",{className:"board_message",children:z}),S?Object(g.jsxs)("div",{className:"board_message--type",children:["YOU CHOSE TYPE: ",S," "]}):""]}),Object(g.jsx)("div",{id:"deck_displayed",className:c.length||!l?"":"hidden"}),Object(g.jsx)(R,{card:r,gameSession:l,player:!1,activeCard:!0}),Object(g.jsx)("p",{className:"ace"})]})}),Object(g.jsx)("div",{className:"deck_wrapper",children:Object(g.jsx)("div",{className:"deck_content_wrapper",children:t.map((function(e,t){return Object(g.jsx)(R,{card:e,selectCard:U,selected:b.a.isEqual(e,p),gameSession:l,player:!0,activeCard:!1,setType:E},t)}))})})]})};n(44);var I,P=function(){return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",exact:!0,children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(M,{})})}),Object(g.jsx)(l.a,{path:"/tutorial",children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(Y,{})})})]})]})},q=n(47),B=n(29),J=Object(q.b)({game:m});I=Object(q.a)(B.a);var U=function(e){return Object(q.c)(J,e,I)}();s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{store:U,children:Object(g.jsx)(P,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5bbc92e4.chunk.js.map