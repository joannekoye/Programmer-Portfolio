(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{"0kTQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,r=n("k49u"),l=n("3XMw"),o=n.n(l).a.c7c099da,c=((a={})[r.a.TargetUserNotFound]={toast:{text:o}},a.showToast=!0,a)},"9D32":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=o(n("7DT3")),r=o(n("ERkP")),l=o(n("OkZJ"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"})))};c.metadata={height:24,width:24};var i=c;t.default=i},LzTg:function(e,t,n){"use strict";n.r(t);n("cI1W");var a=n("PJYZ"),r=n.n(a),l=n("VbXa"),o=n.n(l),c=n("lSNA"),i=n.n(c),s=n("ERkP"),u=n("dcwb"),d=n("wrlS"),m=n("3XMw"),p=n.n(m),g=n("9D32"),f=n.n(g),h=n("o570"),E=n.n(h),v=n("UZ11"),w=n.n(v),b=n("6m7o"),_=n.n(b),y=n("k/Am"),C=n.n(y),x=n("EbY/"),I=n.n(x),A=n("nGvh"),S=n.n(A),k=n("3c1N"),M=n.n(k),N=n("1eTX"),O=n("7CKV"),T=n.n(O),z=n("Irs7"),L=n("/yvb"),P=n("zfvc"),B=n("t62R"),U=n("rHpw"),D=p.a.c6432564,R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i()(r()(t),"_handlePress",(function(e){t.props.analytics.scribe({component:"new_tweet_button",action:"click"})})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.composeOptions,n=e.withLabel,a=e.withIcon,r=e.testID;return s.createElement(L.a,{accessibilityLabel:D,icon:a?s.createElement(T.a,null):void 0,link:{pathname:"/compose/tweet",state:t},onPress:this._handlePress,size:"normalLarge",style:V.button,testID:r,type:"primary"},n?s.createElement(P.b,{animateMount:!0,duration:"long",show:!0,type:"fade"},s.createElement(B.b,null,D)):null)},t}(s.Component),V=U.a.create((function(e){return{button:{boxShadow:"0px 8px 28px rgba(0, 0, 0, 0.08)"}}})),H=Object(z.a)(R),j=n("N5qz"),F=(n("yIC7"),n("rxPX")),G=n("0KEI"),X=n("auX9"),J=n("G6rE"),Z=Object(F.a)().propsFromState({loggedInUser:J.e.selectLoggedInUser,multiAccountUsers:X.j,hasMultiAccountBadges:X.g}).propsFromActions({createLocalApiErrorHandler:Object(G.b)("SIDENAV_FOOTER_ACCOUNT_SWITCH"),switchAccount:X.k}).adjustStateProps((function(e){var t=e.loggedInUser,n=e.multiAccountUsers,a=e.hasMultiAccountBadges;return{hasMultiAccountBadges:!!t&&a,loggedInUser:t,multiAccountUsers:n}})),K=n("SKmd"),W=n.n(K),Y=(n("KYm4"),n("5/+E")),Q=n.n(Y),q=n("3xO4"),$=n.n(q),ee=n("oSwX"),te=n("jV+4"),ne=n("Znyr"),ae=n("cm6r"),re=n("CKsB"),le=p.a.h54dfaeb,oe=p.a.d133d3e5,ce=p.a.a5fa74ba,ie=p.a.e3dc301c,se=p.a.cfcab6fb,ue=p.a.e5d0a947,de=Object.freeze({ICON:"icon",BADGE:"badge"}),me=function(){return s.createElement($.a,{style:ge.divider})},pe=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i()(r()(t),"_renderUserAttribution",(function(e,t,n){var a=e.screenName,r=e.name,l=e.isProtected,o=e.isVerified,c=e.profileImageUrl;return s.createElement($.a,{style:ge.accountCell},s.createElement(ee.default,{screenName:a,size:"xLarge",style:ge.userAvatar,uri:c}),s.createElement($.a,{style:ge.userNameContainer},s.createElement(te.a,{isProtected:l,isVerified:o,name:r,screenName:a,withStackedLayout:!0})),t===de.ICON?s.createElement(Q.a,{style:ge.iconCheckMark}):t===de.BADGE&&n?s.createElement(ne.a,{count:n,standalone:!0,truncatedCountFormatter:oe,unreadCountLabel:le}):null)})),i()(r()(t),"_renderOtherAccounts",(function(){var e=t.props.multiAccountUsers;if(e.length)return s.createElement(s.Fragment,null,s.createElement(me,null),e.map((function(e){var n={profileImageUrl:e.avatar_image_url,name:e.name,isProtected:e.is_protected,screenName:e.screen_name,isVerified:e.is_verified};return s.createElement(ae.a,{accessibilityLabel:ce({screenName:e.screen_name}),accessibilityRole:"button",key:e.user_id,onPress:t._handleMultiAccountSwitch(e.user_id)},t._renderUserAttribution(n,de.BADGE,e.badgeCount),s.createElement(me,null))})))})),i()(r()(t),"_handleMultiAccountSwitch",(function(e){return function(){return t.props.multiAccountSwitch(e)}})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.loggedInUser,n=e.multiAccountUsers,a=e.onClose,r=!!n.length,l={name:t.name,screenName:t.screen_name,profileImageUrl:t.profile_image_url_https,isProtected:t.protected,isVerified:t.verified};return s.createElement($.a,{style:ge.menuContainer},this._renderUserAttribution(l,de.ICON),r?this._renderOtherAccounts():s.createElement(me,null),n.length<=3?s.createElement(s.Fragment,null,s.createElement(re.a,{actionText:se,link:"/account/add",onClick:a}),s.createElement(me,null)):null,s.createElement(re.a,{actionText:r?ue:ie({screenName:t.screen_name}),link:r?"/account/switch":"/logout",onClick:a}))},t}(s.Component),ge=U.a.create((function(e){return{accountCell:{alignItems:"center",flexDirection:"row",paddingHorizontal:e.spaces.small,paddingVertical:e.spaces.xSmall},userAvatar:{marginRight:e.spaces.xSmall},iconCheckMark:{color:e.colors.primary,flexShrink:0},divider:{backgroundColor:e.colors.borderColor,height:e.borderWidths.small},menuContainer:{paddingVertical:e.spaces.xSmall},userNameContainer:{flexGrow:1,flexShrink:1,marginRight:e.spaces.xSmall}}})),fe=n("0kTQ"),he=n("OiMc"),Ee=n("XP29"),ve=p.a.h54dfaeb,we=p.a.d133d3e5,be=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i()(r()(t),"_renderMenuSheet",(function(e){var n=t.props,a=n.loggedInUser,r=n.multiAccountUsers;return a?s.createElement(pe,{loggedInUser:a,multiAccountSwitch:t._multiAccountSwitch,multiAccountUsers:r,onClose:e}):null})),i()(r()(t),"_renderBadge",(function(){var e=t.props,n=e.isExpanded;return e.hasMultiAccountBadges?s.createElement(ne.a,{pip:!0,style:n&&_e.pip,truncatedCountFormatter:we,unreadCountLabel:ve}):null})),i()(r()(t),"_multiAccountSwitch",(function(e){var n=t.props,a=n.createLocalApiErrorHandler;(0,n.switchAccount)({user_id:e}).catch(a(fe.a))})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.isExpanded,n=e.loggedInUser;if(!n)return null;var a=n.name,r=n.screen_name,l=n.profile_image_url_https,o=n.protected,c=n.verified;return s.createElement(he.a,{enableEnterKeyToggle:!0,renderContent:this._renderMenuSheet,withArrow:!0,withFixedPosition:!0},s.createElement(ae.a,{accessibilityRole:"button",style:_e.footerContainer},s.createElement($.a,null,s.createElement(Ee.a,{screenName:r,size:"xLarge",uri:l}),t?null:this._renderBadge()),t?s.createElement(s.Fragment,null,s.createElement(te.a,{isProtected:o,isVerified:c,name:a,screenName:r,style:_e.userName,withStackedLayout:!0}),s.createElement($.a,{style:_e.iconContainer},s.createElement(W.a,{style:_e.chevronDown}),t?this._renderBadge():null)):null))},t}(s.Component),_e=U.a.create((function(e){return{footerContainer:{alignItems:"center",borderRadius:e.borderRadii.infinite,display:"flex",flexDirection:"row",padding:e.spaces.xSmall},chevronDown:{color:e.colors.text},iconContainer:{alignItems:"flex-end",flexGrow:1},userName:{flexGrow:1,marginLeft:e.spaces.xSmall,marginRight:e.spaces.large},pip:{position:"absolute",right:"calc(-1 * "+e.spaces.xxSmall+")",top:"calc(-1 * "+e.spaces.xxSmall+")"}}})),ye=Z(be),Ce="SideNav_NewTweet_Button",xe=n("cHvH");n.d(t,"default",(function(){return Ae}));var Ie=p.a.f92bc7c1,Ae=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i()(r()(t),"_newMultiAccountEnabled",d.a.isTrue("responsive_web_new_multi_account_ux_enabled")),t}o()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props,n=t.isCollapsedSmall,a=t.isLoggedIn,r=t.widthStyle,l=[Se.root,r,n?Se.rootPaddingSmall:Se.rootPaddingNormal];return s.createElement(xe.a,null,(function(t){var n=t.windowHeight;return s.createElement($.a,{style:l},a?e._renderLoggedIn(n):e._renderLoggedOut())}))},n._renderLoggedIn=function(e){var t=this.props,n=t.composeOptions,a=t.isExpanded,r=t.isTwoColumn,l=t.location,o=t.onTabRefresh;return s.createElement(s.Fragment,null,s.createElement($.a,{style:[Se.topSection,!a&&Se.alignItemsCenter]},s.createElement($.a,{style:Se.topControl},s.createElement(N.a,{onClick:o,pullLeft:!1,size:"large"})),s.createElement($.a,{style:[Se.appTabBar,!a&&Se.alignItemsCenter]},s.createElement(u.a,{bookmarksActiveIcon:f.a,bookmarksIcon:E.a,layout:"vertical",listsActiveIcon:w.a,listsIcon:_.a,location:l,moreMenuItemsIcon:C.a,onTabRefresh:o,profileActiveIcon:I.a,profileIcon:S.a,wideMode:r,withExtendedItems:!0,withLabel:a})),s.createElement($.a,{style:[Se.tweetButton,!a&&Se.alignItemsCenter,j.a.isTallHeight(e)&&Se.withTallHeight]},s.createElement(H,{composeOptions:n,testID:Ce,withIcon:!a,withLabel:a}))),this._newMultiAccountEnabled?s.createElement($.a,{style:[Se.footerContainer,!a&&Se.alignItemsCenter]},s.createElement(ye,{isExpanded:a})):null)},n._renderLoggedOut=function(){var e=this.props,t=e.isExpanded,n=e.onTabRefresh;return s.createElement($.a,{style:[Se.loggedOut,!t&&Se.alignItemsCenter]},s.createElement($.a,{style:Se.topControl},s.createElement(N.a,{onClick:n,pullLeft:!1,size:"large"})),s.createElement(L.a,{accessibilityLabel:Ie,icon:s.createElement(M.a,null),link:"/settings",style:Se.settingsButton,type:"neutral"}))},t}(s.Component),Se=U.a.create((function(e){return{root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.medium},rootPaddingSmall:{paddingHorizontal:e.spaces.xSmall},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.micro,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.xxSmall,marginTop:e.spaces.micro,width:"100%"},tweetButton:{marginVertical:e.spaces.xxSmall,width:"90%"},withTallHeight:{marginVertical:e.spaces.small},alignItemsCenter:{alignItems:"center"},loggedOut:{alignItems:"flex-end",height:"100%",justifyContent:"space-between"},settingsButton:{marginBottom:e.spaces.medium,marginHorizontal:e.spaces.xxSmall},footerContainer:{marginBottom:e.spaces.xSmall,marginTop:e.spaces.medium}}}))},"k/Am":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=o(n("7DT3")),r=o(n("ERkP")),l=o(n("OkZJ"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"}),r.default.createElement("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"})))};c.metadata={height:24,width:24};var i=c;t.default=i},nGvh:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=o(n("7DT3")),r=o(n("ERkP")),l=o(n("OkZJ"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"})))};c.metadata={height:24,width:24};var i=c;t.default=i},o570:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=o(n("7DT3")),r=o(n("ERkP")),l=o(n("OkZJ"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"})))};c.metadata={height:24,width:24};var i=c;t.default=i}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.SideNav.62a16f24.js.map