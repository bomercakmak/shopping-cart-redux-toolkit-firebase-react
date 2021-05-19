(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(t,e,c){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},,,,function(t,e,c){t.exports={item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-"}},function(t,e,c){t.exports={notification:"Notification_notification__3D5S5",error:"Notification_error__2ILHS",success:"Notification_success__3Ww1I"}},,,function(t,e,c){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}},,,function(t,e,c){t.exports={card:"Card_card__1m44e"}},function(t,e,c){t.exports={cart:"Cart_cart__3GqLz"}},function(t,e,c){t.exports={header:"MainHeader_header__k5Wsz"}},function(t,e,c){t.exports={products:"Products_products__1PCvW"}},,,,,,,,,,,function(t,e,c){},,,function(t,e,c){"use strict";c.r(e);var i=c(6),n=c.n(i),a=c(2),r=(c(28),c(1)),s=c(14),o=c.n(s),u=c(0),d=function(t){return Object(u.jsx)("section",{className:"".concat(o.a.card," ").concat(t.className?t.className:""),children:t.children})},l=c(15),j=c.n(l),p=c(3),b=c.n(p),f=c(4),h=Object(f.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var c=e.payload,i=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,t.changed=!0,i?(i.quantity++,i.totalPrice=i.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){var c=e.payload,i=t.items.find((function(t){return t.id===c}));t.totalQuantity--,t.changed=!0,1===i.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(i.quantity--,i.totalPrice=i.totalPrice-i.price)}}}),m=h.actions,x=h,O=function(t){var e=Object(a.b)(),c=t.item,i=c.title,n=c.quantity,r=c.total,s=c.price,o=c.id;return Object(u.jsxs)("li",{className:b.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{className:b.a.price,children:["$",r.toFixed(2)," ",Object(u.jsxs)("span",{className:b.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(u.jsxs)("div",{className:b.a.details,children:[Object(u.jsxs)("div",{className:b.a.quantity,children:["x ",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:b.a.actions,children:[Object(u.jsx)("button",{onClick:function(){e(m.removeItemFromCart(o))},children:"-"}),Object(u.jsx)("button",{onClick:function(){e(m.addItemToCart({id:o,title:i,price:s}))},children:"+"})]})]})]})},_=function(t){var e=Object(a.c)((function(t){return t.cart.items}));return Object(u.jsxs)(d,{className:j.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(O,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},y=c(11),g=c.n(y),v=Object(f.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),N=v.actions,C=v,w=function(t){var e=Object(a.b)(),c=Object(a.c)((function(t){return t.cart.totalQuantity}));return Object(u.jsxs)("button",{onClick:function(){e(N.toggle())},className:g.a.button,children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:g.a.badge,children:c})]})},I=c(16),P=c.n(I),S=function(t){return Object(u.jsxs)("header",{className:P.a.header,children:[Object(u.jsx)("h1",{children:"ReduxCart"}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(w,{})})})})]})},k=function(t){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{children:t.children})]})},q=c(7),Q=c.n(q),E=function(t){var e=Object(a.b)(),c=t.title,i=t.id,n=t.price,r=t.description;return Object(u.jsx)("li",{className:Q.a.item,children:Object(u.jsxs)(d,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:c}),Object(u.jsxs)("div",{className:Q.a.price,children:["$",n.toFixed(2)]})]}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("div",{className:Q.a.actions,children:Object(u.jsx)("button",{onClick:function(){e(m.addItemToCart({id:i,title:c,price:n}))},children:"Add to Cart"})})]})})},F=c(17),M=c.n(F),B=[{id:"p1",price:1190,title:"MacBook Pro",description:"Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life - the longest ever in a Mac, it's our most popular pro notebook on a whole new level."},{id:"p2",price:10,title:"Phone Case",description:"A cell phone case is the protective cover for a Smartphone and will prevent it from damages by different types of mishaps such as scratches, minor accidents and water spills."}],J=function(t){return Object(u.jsxs)("section",{className:M.a.products,children:[Object(u.jsx)("h2",{children:"Buy your favorite products"}),Object(u.jsx)("ul",{children:B.map((function(t){return Object(u.jsx)(E,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},V=c(8),T=c.n(V),W=function(t){var e="";"error"===t.status&&(e=T.a.error),"success"===t.status&&(e=T.a.success);var c="".concat(T.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:c,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},z=c(5),A=c.n(z),U=c(12),Y=!0;var $=function(){var t=Object(a.c)((function(t){return t.ui.cartIsVisible})),e=Object(a.c)((function(t){return t.cart})),c=Object(a.c)((function(t){return t.ui.notification})),i=Object(a.b)();return Object(r.useEffect)((function(){i((function(t){fetch("https://cart-redux-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json").then((function(t){return t.json()})).then((function(e){t(m.replaceCart({items:e.items||[],totalQuantity:e.totalQuantity}))})).catch((function(e){t(N.showNotification({status:"error",title:"Error...",message:"Fetching cart data failed!"}))}))}))}),[i]),Object(r.useEffect)((function(){Y?Y=!1:e.changed&&i(function(t){return function(){var e=Object(U.a)(A.a.mark((function e(c){var i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(N.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),i=function(){var e=Object(U.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cart-redux-react-default-rtdb.europe-west1.firebasedatabase.app/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,i();case 5:c(N.showNotification({status:"success",title:"Success...",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(N.showNotification({status:"error",title:"Error...",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}),[e,i]),Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(W,{status:c.status,title:c.title,message:c.message}),Object(u.jsxs)(k,{children:[t&&Object(u.jsx)(_,{}),Object(u.jsx)(J,{})]})]})},D=Object(f.a)({reducer:{ui:C.reducer,cart:x.reducer}});n.a.render(Object(u.jsx)(a.a,{store:D,children:Object(u.jsx)($,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.fd9a15f8.chunk.js.map