exports.id=278,exports.ids=[278],exports.modules={9278:(e,n,t)=>{"use strict";t.r(n),t.d(n,{AppInsightsCore:()=>W,BaseCore:()=>Z,BaseTelemetryPlugin:()=>k.i,CoreUtils:()=>U.Tr,DiagnosticLogger:()=>p.AQ,ESPromise:()=>K,ESPromiseScheduler:()=>X,EventHelper:()=>ie.zB,EventLatency:()=>s,EventPersistence:()=>d,EventPropertyType:()=>f,EventsDiscardedReason:()=>te.h,FullVersionString:()=>U.vs,InternalAppInsightsCore:()=>B,InternalBaseCore:()=>x,LoggingSeverity:()=>u,MinChannelPriorty:()=>ne,NotificationManager:()=>R,PerfEvent:()=>h.zn,PerfManager:()=>h.Jk,ProcessTelemetryContext:()=>P.Vi,TraceLevel:()=>v,Undefined:()=>ae.jA,Utils:()=>U.cQ,ValueKind:()=>c,ValueSanitizer:()=>ee,Version:()=>U.Gf,_ExtendedInternalMessageId:()=>g,_InternalLogMessage:()=>p.lQ,_InternalMessageId:()=>l,__getRegisteredEvents:()=>re.um,_logInternalMessage:()=>p.L4,_throwInternal:()=>p.kP,_warnToConsole:()=>p.jV,addEventHandler:()=>re.Ib,addEventListeners:()=>re.yw,addPageHideEventListener:()=>re.TJ,addPageShowEventListener:()=>re.nD,addPageUnloadEventListener:()=>re.c9,areCookiesSupported:()=>E.p7,arrForEach:()=>a.tO,arrIndexOf:()=>a.UA,arrMap:()=>a.Mr,arrReduce:()=>a.Xz,attachEvent:()=>re.pZ,cookieAvailable:()=>E.p7,createCookieMgr:()=>E.Nz,createEnumStyle:()=>o.By,createGuid:()=>U.cm,createProcessTelemetryContext:()=>P.CD,createTraceParent:()=>ue.SU,createUniqueNamespace:()=>b.J,createUnloadHandlerContainer:()=>w.Y,dateNow:()=>a.m6,deleteCookie:()=>U.kT,detachEvent:()=>re.pD,disableCookies:()=>U.oF,disallowsSameSiteNone:()=>E.UY,doPerf:()=>h.Lm,dumpObj:()=>y.eU,eventOff:()=>re.QY,eventOn:()=>re.XO,extend:()=>U.l7,findW3cTraceParent:()=>ue.lq,formatTraceParent:()=>ue.aR,generateW3CId:()=>ie.DO,getCommonSchemaMetaData:()=>U.Vv,getConsole:()=>y.dr,getCookie:()=>U.ej,getCookieValue:()=>U.Do,getCrypto:()=>y.MX,getDocument:()=>y.Me,getExceptionName:()=>a.jj,getFieldValueType:()=>U.Sy,getGlobal:()=>C.Rd,getGlobalInst:()=>y.a8,getHistory:()=>y.s1,getIEVersion:()=>y.sA,getISOString:()=>a.Y6,getJSON:()=>y.xA,getLocation:()=>y.k$,getMsCrypto:()=>y.gz,getNavigator:()=>y.jW,getPerformance:()=>y.r,getSetValue:()=>a.qK,getTenantId:()=>U.jM,getTime:()=>U.hK,getWindow:()=>y.Jj,hasDocument:()=>y.Nv,hasHistory:()=>y.fE,hasJSON:()=>y.nS,hasNavigator:()=>y.d6,hasOwnProperty:()=>a.nr,hasWindow:()=>y.Ym,isArray:()=>a.kJ,isArrayValid:()=>U.JT,isBeaconsSupported:()=>y.MF,isBoolean:()=>a.jn,isChromium:()=>U.mJ,isDate:()=>a.J_,isDocumentObjectAvailable:()=>U.x9,isError:()=>a.VZ,isFetchSupported:()=>y.JO,isFunction:()=>a.mf,isIE:()=>y.w1,isLatency:()=>U.r7,isNotTruthy:()=>a.F,isNullOrUndefined:()=>a.le,isNumber:()=>a.hj,isObject:()=>a.Kn,isReactNative:()=>y.b$,isSampledFlag:()=>ue.Pn,isString:()=>a.HD,isTruthy:()=>a.fQ,isTypeof:()=>a.Ym,isUint8ArrayAvailable:()=>U.IZ,isUndefined:()=>a.o8,isValidSpanId:()=>ue.Lc,isValidTraceId:()=>ue.jN,isValidTraceParent:()=>ue.J6,isValueAssigned:()=>U.Sn,isValueKind:()=>U.oS,isWindowObjectAvailable:()=>U.dH,isXhrSupported:()=>y.Z3,mergeEvtNamespace:()=>re.jU,newGuid:()=>ie.GW,newId:()=>oe.pZ,normalizeJsName:()=>a.Gf,objCreate:()=>C.pu,objDefineAccessors:()=>a.l_,objForEachKey:()=>a.rW,objFreeze:()=>a.FL,objKeys:()=>a.FY,objSeal:()=>a.Xi,openXhr:()=>U.ot,optimizeObject:()=>a.Ax,parseTraceParent:()=>ue.j_,perfNow:()=>ie.Jj,proxyAssign:()=>a.cf,proxyFunctionAs:()=>a.Oi,proxyFunctions:()=>a.Vb,random32:()=>oe._l,randomValue:()=>oe.az,removeEventHandler:()=>re.C1,removeEventListeners:()=>re.nJ,removePageHideEventListener:()=>re.C9,removePageShowEventListener:()=>re.Yl,removePageUnloadEventListener:()=>re.JA,safeGetCookieMgr:()=>E.JP,safeGetLogger:()=>p.vH,sanitizeProperty:()=>U.yj,setCookie:()=>U.d8,setEnableEnvMocks:()=>y.dI,setProcessTelemetryTimings:()=>U.if,setValue:()=>a.sO,strContains:()=>a._Q,strEndsWith:()=>a.Id,strFunction:()=>ae.cb,strObject:()=>ae.fK,strPrototype:()=>ae.hB,strStartsWith:()=>a.xe,strTrim:()=>a.nd,strUndefined:()=>ae.jA,throwError:()=>a._y,toISOString:()=>a.Y6,useXDomainRequest:()=>y.cp});var i,r=t(9577),o=t(2256),a=t(9523),u=(0,o.By)({CRITICAL:1,WARNING:2}),l=(0,o.By)(((i={}).BrowserDoesNotSupportLocalStorage=0,i.BrowserCannotReadLocalStorage=1,i.BrowserCannotReadSessionStorage=2,i.BrowserCannotWriteLocalStorage=3,i.BrowserCannotWriteSessionStorage=4,i.BrowserFailedRemovalFromLocalStorage=5,i.BrowserFailedRemovalFromSessionStorage=6,i.CannotSendEmptyTelemetry=7,i.ClientPerformanceMathError=8,i.ErrorParsingAISessionCookie=9,i.ErrorPVCalc=10,i.ExceptionWhileLoggingError=11,i.FailedAddingTelemetryToBuffer=12,i.FailedMonitorAjaxAbort=13,i.FailedMonitorAjaxDur=14,i.FailedMonitorAjaxOpen=15,i.FailedMonitorAjaxRSC=16,i.FailedMonitorAjaxSend=17,i.FailedMonitorAjaxGetCorrelationHeader=18,i.FailedToAddHandlerForOnBeforeUnload=19,i.FailedToSendQueuedTelemetry=20,i.FailedToReportDataLoss=21,i.FlushFailed=22,i.MessageLimitPerPVExceeded=23,i.MissingRequiredFieldSpecification=24,i.NavigationTimingNotSupported=25,i.OnError=26,i.SessionRenewalDateIsZero=27,i.SenderNotInitialized=28,i.StartTrackEventFailed=29,i.StopTrackEventFailed=30,i.StartTrackFailed=31,i.StopTrackFailed=32,i.TelemetrySampledAndNotSent=33,i.TrackEventFailed=34,i.TrackExceptionFailed=35,i.TrackMetricFailed=36,i.TrackPVFailed=37,i.TrackPVFailedCalc=38,i.TrackTraceFailed=39,i.TransmissionFailed=40,i.FailedToSetStorageBuffer=41,i.FailedToRestoreStorageBuffer=42,i.InvalidBackendResponse=43,i.FailedToFixDepricatedValues=44,i.InvalidDurationValue=45,i.TelemetryEnvelopeInvalid=46,i.CreateEnvelopeError=47,i.CannotSerializeObject=48,i.CannotSerializeObjectNonSerializable=49,i.CircularReferenceDetected=50,i.ClearAuthContextFailed=51,i.ExceptionTruncated=52,i.IllegalCharsInName=53,i.ItemNotInArray=54,i.MaxAjaxPerPVExceeded=55,i.MessageTruncated=56,i.NameTooLong=57,i.SampleRateOutOfRange=58,i.SetAuthContextFailed=59,i.SetAuthContextFailedAccountName=60,i.StringValueTooLong=61,i.StartCalledMoreThanOnce=62,i.StopCalledWithoutStart=63,i.TelemetryInitializerFailed=64,i.TrackArgumentsNotSpecified=65,i.UrlTooLong=66,i.SessionStorageBufferFull=67,i.CannotAccessCookie=68,i.IdTooLong=69,i.InvalidEvent=70,i.FailedMonitorAjaxSetRequestHeader=71,i.SendBrowserInfoOnUserInit=72,i.PluginException=73,i.NotificationException=74,i.SnippetScriptLoadFailure=99,i.InvalidInstrumentationKey=100,i.CannotParseAiBlobValue=101,i.InvalidContentBlob=102,i.TrackPageActionEventFailed=103,i.FailedAddingCustomDefinedRequestContext=104,i.InMemoryStorageBufferFull=105,i.InstrumentationKeyDeprecation=106,i)),c=(0,o.By)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),s=(0,o.By)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}),f=(0,o.By)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),d=(0,o.By)({Normal:1,Critical:2}),v=(0,o.By)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),g=(0,a.FL)((0,r.uc)((0,r.uc)({},l),(0,o.By)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520}))),m=t(1106),p=t(154),h=t(403),y=t(1746),S=t(2480),C=t(2863),T=t(6969),P=t(962),I=t(8398),F=500;function A(e,n,t){n&&(0,a.kJ)(n)&&n[S.R5]>0&&(n=n.sort((function(e,n){return e[T.yi]-n[T.yi]})),(0,a.tO)(n,(function(e){e[T.yi]<F&&(0,a._y)("Channel has invalid priority - "+e[S.pZ])})),e[S.MW]({queue:(0,a.FL)(n),chain:(0,P.jV)(n,t[S.TC],t)}))}var E=t(8165),b=t(5480),L=t(6450),k=t(3626),_=function(e){function n(){var t,i,r=e.call(this)||this;function o(){t=0,i=[]}return r.identifier="TelemetryInitializerPlugin",r.priority=199,o(),(0,m.Z)(n,r,(function(e,n){e.addTelemetryInitializer=function(e){var n={id:t++,fn:e};return i[S.MW](n),{remove:function(){(0,a.tO)(i,(function(e,t){if(e.id===n.id)return i[S.cb](t,1),-1}))}}},e[T.hL]=function(n,t){for(var r=!1,o=i[S.R5],u=0;u<o;++u){var l=i[u];if(l)try{if(!1===l.fn[S.ZV](null,[n])){r=!0;break}}catch(e){(0,p.kP)(t[S.mc](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,a.jj)(e),{exception:(0,y.eU)(e)},!0)}}r||e[S.uL](n,t)},e[S.F3]=function(){o()}})),r}return(0,r.ne)(n,e),n.__ieDyn=1,n}(k.i),w=t(3961),O="Plugins must provide initialize method",D="SDK is still unloading...",M={loggingLevelConsole:1};function V(e,n){return new h.Jk(n)}function N(e,n){var t=!1;return(0,a.tO)(n,(function(n){if(n===e)return t=!0,-1})),t}var x=function(){function e(){var n,t,i,o,u,l,c,s,f,d,v,g,y,k,x,j,R,B,z,U,W=0;(0,m.Z)(e,this,(function(e){function m(){t=!1,n=(0,a.mm)(!0,{},M),e[S.TC]=n,e[S.eZ]=new p.AQ(n),e[S.iC]=[],x=new _,i=[],o=null,u=null,l=null,c=null,s=null,d=null,f=[],v=null,g=null,y=null,k=!1,j=null,R=(0,b.J)("AIBaseCore",!0),B=(0,w.Y)(),U=null}function Z(){return(0,P.CD)(K(),n,e)}function H(t){var i=function(e,n,t){var i,r=[],o={};return(0,a.tO)(t,(function(n){((0,a.le)(n)||(0,a.le)(n[S.VL]))&&(0,a._y)(O);var t=n[T.yi],i=n[S.pZ];n&&t&&((0,a.le)(o[t])?o[t]=i:(0,p.jV)(e,"Two extensions have same priority #"+t+" - "+o[t]+", "+i)),(!t||t<500)&&r[S.MW](n)})),(i={all:t})[T.oV]=r,i}(e[S.eZ],0,f);d=i[T.oV],s=null;var r=i.all;if(y=(0,a.FL)(function(e,n,t){var i=[];if(e&&(0,a.tO)(e,(function(e){return A(i,e,t)})),n){var r=[];(0,a.tO)(n,(function(e){e[T.yi]>F&&r[S.MW](e)})),A(i,r,t)}return i}(g,r,e)),v){var o=(0,a.UA)(r,v);-1!==o&&r[S.cb](o,1),-1!==(o=(0,a.UA)(d,v))&&d[S.cb](o,1),v._setQueue(y)}else v=function(e,n){function t(){return(0,P.CD)(null,n[S.TC],n,null)}function i(e,n,t,i){var r=e?e[S.R5]+1:1;function o(){0==--r&&(i&&i(),i=null)}r>0&&(0,a.tO)(e,(function(e){if(e&&e.queue[S.R5]>0){var i=e.chain,a=n[S.zV](i);a[S.Fc](o),t(a)}else r--})),o()}var r=!1;return{identifier:"ChannelControllerPlugin",priority:F,initialize:function(n,t,i,o){r=!0,(0,a.tO)(e,(function(e){e&&e.queue[S.R5]>0&&(0,I.bP)((0,P.CD)(e.chain,n,t),i)}))},isInitialized:function(){return r},processTelemetry:function(n,r){i(e,r||t(),(function(e){e[S.uL](n)}),(function(){r[S.uL](n)}))},update:function(n,t){var r=t||{reason:0};return i(e,n,(function(e){e[S.uL](r)}),(function(){n[S.uL](r)})),!0},pause:function(){i(e,t(),(function(e){e.iterate((function(e){e.pause&&e.pause()}))}),null)},resume:function(){i(e,t(),(function(e){e.iterate((function(e){e.resume&&e.resume()}))}),null)},teardown:function(n,t){var o=t||{reason:0,isAsync:!1};return i(e,n,(function(e){e[S.uL](o)}),(function(){n[S.uL](o),r=!1})),!0},getChannel:function(n){var t=null;return e&&e[S.R5]>0&&(0,a.tO)(e,(function(e){if(e&&e.queue[S.R5]>0&&((0,a.tO)(e.queue,(function(e){if(e[S.pZ]===n)return t=e,-1})),t))return-1})),t},flush:function(n,r,o,a){var u=1,l=!1,c=null;function s(){u--,l&&0===u&&(c&&(clearTimeout(c),c=null),r&&r(l),r=null)}return a=a||5e3,i(e,t(),(function(e){e.iterate((function(e){if(e[S.kL]){u++;var t=!1;e[S.kL](n,(function(){t=!0,s()}),o)||t||(n&&null==c?c=setTimeout((function(){c=null,s()}),a):s())}}))}),(function(){l=!0,s()})),!0},_setQueue:function(n){e=n}}}(y,e);r[S.MW](v),d[S.MW](v),e[S.iC]=(0,I.AA)(r),v[S.VL](n,e,r),(0,I.bP)(Z(),r),e[S.iC]=(0,a.FL)((0,I.AA)(d||[])).slice(),t&&function(n){var t=(0,P.xy)(K(),e);e._updateHook&&!0===e._updateHook(t,n)||t[S.uL](n)}(t)}function q(n){var t,i=null,r=null;return(0,a.tO)(e[S.iC],(function(e){if(e[S.pZ]===n&&e!==v&&e!==x)return r=e,-1})),!r&&v&&(r=v.getChannel(n)),r&&((t={plugin:r})[S.$h]=function(e){(0,I.OY)(r)[T.mE]=!e},t.isEnabled=function(){var e=(0,I.OY)(r);return!e[S.fi]&&!e[T.mE]},t.remove=function(e,n){var t;void 0===e&&(e=!0);var i=[r],o=((t={reason:1})[S.d]=e,t);J(i,o,(function(e){e&&H({reason:32,removed:i}),n&&n(e)}))},i=t),i}function K(){if(!s){var t=(d||[]).slice();-1===(0,a.UA)(t,x)&&t[S.MW](x),s=(0,P.jV)((0,I.AA)(t),n,e)}return s}function J(t,i,r){if(t&&t[S.R5]>0){var o=(0,P.jV)(t,n,e),u=(0,P.Bt)(o,e);u[S.Fc]((function(){var e=!1,n=[];(0,a.tO)(f,(function(i,r){N(i,t)?e=!0:n[S.MW](i)})),f=n;var i=[];g&&((0,a.tO)(g,(function(n,r){var o=[];(0,a.tO)(n,(function(n){N(n,t)?e=!0:o[S.MW](n)})),i[S.MW](o)})),g=i),r&&r(e)})),u[S.uL](i)}else r(!1)}function G(){var t=e[S.eZ]?e[S.eZ].queue:[];t&&((0,a.tO)(t,(function(t){var i,r=((i={})[S.I]=j||"InternalMessageId: "+t[S.Gc],i.iKey=(0,a.v4)(n[S.p$]),i.time=(0,a.Y6)(new Date),i.baseType=p.lQ.dataType,i.baseData={message:t[S.gU]},i);e.track(r)})),t[S.R5]=0)}function Q(e,n,t,i){return v?v[S.kL](e,n,t||6,i):(n&&n(!1),!0)}function Y(n){var t=e[S.eZ];t?(0,p.kP)(t,2,73,n):(0,a._y)(n)}m(),e[S.yl]=function(){return t},e[S.VL]=function(i,u,c,s){var d,v;k&&(0,a._y)(D),e[S.yl]()&&(0,a._y)("Core should not be initialized more than once"),n=i||{},e[S.TC]=n,(0,a.le)(i[S.p$])&&(0,a._y)("Please provide instrumentation key"),o=s,e._notificationManager=s,!0===(v=(0,a.v4)(n.disableDbgExt))&&z&&(o[S.n7](z),z=null),o&&!z&&!0!==v&&(z=(0,L.p)(n),o[S.g](z)),!(d=(0,a.v4)(n.enablePerfMgr))&&l&&(l=null),d&&(0,a.qK)(n,T.DN,V),(0,a.qK)(n,T.Zh,{}).NotificationManager=o,c&&(e[S.eZ]=c);var m=(0,a.qK)(n,T.js,[]);(f=[])[S.MW].apply(f,(0,r.$h)((0,r.$h)([],u,!1),m,!1)),g=(0,a.qK)(n,T.Z,[]),H(null),y&&0!==y[S.R5]||(0,a._y)("No "+T.Z+" available"),t=!0,e.releaseQueue()},e.getTransmissionControls=function(){var e=[];return y&&(0,a.tO)(y,(function(n){e[S.MW](n.queue)})),(0,a.FL)(e)},e.track=function(t){t.iKey=t.iKey||n[S.p$],t[S.Z_]=t[S.Z_]||(0,a.Y6)(new Date),t.ver=t.ver||"4.0",!k&&e[S.yl]()?Z()[S.uL](t):i[S.MW](t)},e[S.SD]=Z,e[S.tb]=function(){return o||(o=function(){var e;return(0,C.pu)(((e={})[S.g]=function(e){},e[S.n7]=function(e){},e[T.uC]=function(e){},e[T.$F]=function(e,n){},e[T.f_]=function(e,n){},e))}(),e._notificationManager=o),o},e[S.g]=function(e){o&&o[S.g](e)},e[S.n7]=function(e){o&&o[S.n7](e)},e.getCookieMgr=function(){return c||(c=(0,E.Nz)(n,e[S.eZ])),c},e.setCookieMgr=function(e){c=e},e[T.kl]=function(){if(!u&&!l&&(0,a.v4)(n.enablePerfMgr)){var t=(0,a.v4)(n[T.DN]);(0,a.mf)(t)&&(l=t(e,e[S.tb]()))}return u||l||(0,h.j5)()},e.setPerfMgr=function(e){u=e},e.eventCnt=function(){return i[S.R5]},e.releaseQueue=function(){if(t&&i[S.R5]>0){var e=i;i=[],(0,a.tO)(e,(function(e){Z()[S.uL](e)}))}},e.pollInternalLogs=function(e){j=e||null;var t=(0,a.v4)(n.diagnosticLogInterval);return t&&t>0||(t=1e4),W&&clearInterval(W),W=setInterval((function(){G()}),t)},e[S.LS]=function(){W&&(clearInterval(W),W=0,G())},(0,a.Vb)(e,(function(){return x}),["addTelemetryInitializer"]),e.unload=function(n,i,r){var o;void 0===n&&(n=!0),t||(0,a._y)("SDK is not initialized"),k&&(0,a._y)(D);var u=((o={reason:50})[S.d]=n,o.flushComplete=!1,o),l=(0,P.Bt)(K(),e);function c(n){u.flushComplete=n,k=!0,B.run(l,u),e[S.LS](),l[S.uL](u)}l[S.Fc]((function(){m(),i&&i(u)}),e),Q(n,c,6,r)||c(!1)},e[S.TO]=q,e.addPlugin=function(e,n,t,i){if(!e)return i&&i(!1),void Y(O);var r=q(e[S.pZ]);if(r&&!n)return i&&i(!1),void Y("Plugin ["+e[S.pZ]+"] is already loaded!");var o={reason:16};function a(n){f[S.MW](e),o.added=[e],H(o),i&&i(!0)}if(r){var u=[r.plugin];J(u,{reason:2,isAsync:!!t},(function(e){e?(o.removed=u,o.reason|=32,a()):i&&i(!1)}))}else a()},e.evtNamespace=function(){return R},e[S.kL]=Q,e.getTraceCtx=function(e){return U||(U=(0,I.Yn)()),U},e.setTraceCtx=function(e){U=e||null},(0,a.Oi)(e,"addUnloadCb",(function(){return B}),"add")}))}return e.__ieDyn=1,e}();function j(e,n,t,i){(0,a.tO)(e,(function(e){if(e&&e[n])if(t)setTimeout((function(){return i(e)}),0);else try{i(e)}catch(e){}}))}var R=function(){function e(n){this.listeners=[];var t=!!(n||{}).perfEvtsSendAll;(0,m.Z)(e,this,(function(e){e[S.g]=function(n){e.listeners[S.MW](n)},e[S.n7]=function(n){for(var t=(0,a.UA)(e[S.dE],n);t>-1;)e.listeners[S.cb](t,1),t=(0,a.UA)(e[S.dE],n)},e[T.uC]=function(n){j(e[S.dE],T.uC,!0,(function(e){e[T.uC](n)}))},e[T.$F]=function(n,t){j(e[S.dE],T.$F,!0,(function(e){e[T.$F](n,t)}))},e[T.f_]=function(n,t){j(e[S.dE],T.f_,t,(function(e){e[T.f_](n,t)}))},e[T.C$]=function(n){n&&(!t&&n[S.PL]()||j(e[S.dE],T.C$,!1,(function(e){n[S.d]?setTimeout((function(){return e[T.C$](n)}),0):e[T.C$](n)})))}}))}return e.__ieDyn=1,e}(),B=function(e){function n(){var t=e.call(this)||this;return(0,m.Z)(n,t,(function(e,n){function t(n){var t=e[S.tb]();t&&t[T.$F]([n],2)}e[S.VL]=function(e,t,i,r){n[S.VL](e,t,i||new p.AQ(e),r||new R(e))},e.track=function(i){(0,h.Lm)(e[T.kl](),(function(){return"AppInsightsCore:track"}),(function(){null===i&&(t(i),(0,a._y)("Invalid telemetry item")),function(e){(0,a.le)(e[S.I])&&(t(e),(0,a._y)("telemetry name required"))}(i),n.track(i)}),(function(){return{item:i}}),!i.sync)}})),t}return(0,r.ne)(n,e),n.__ieDyn=1,n}(x),z=t(6619),U=t(8823);const W=function(e){function n(){var t=e.call(this)||this;return t.pluginVersionStringArr=[],(0,m.Z)(n,t,(function(e,n){e.logger&&e.logger.queue||(e.logger=new p.AQ({loggingLevelConsole:1})),e.initialize=function(t,i,r,o){(0,h.Lm)(e,(function(){return"AppInsightsCore.initialize"}),(function(){var u=e.pluginVersionStringArr;if(t){t.endpointUrl||(t.endpointUrl=z.YT);var l=t.propertyStorageOverride;!l||l.getProperty&&l.setProperty||(0,a._y)("Invalid property storage override passed."),t.channels&&(0,a.tO)(t.channels,(function(e){e&&(0,a.tO)(e,(function(e){if(e.identifier&&e.version){var n=e.identifier+"="+e.version;u.push(n)}}))}))}e.getWParam=function(){return"undefined"!=typeof document||t.enableWParam?0:-1},i&&(0,a.tO)(i,(function(e){if(e&&e.identifier&&e.version){var n=e.identifier+"="+e.version;u.push(n)}})),e.pluginVersionString=u.join(";"),e.pluginVersionStringArr=u;try{n.initialize(t,i,r,o),e.pollInternalLogs("InternalLog")}catch(n){var c=e.logger,s=(0,y.eU)(n);-1!==s.indexOf("channels")&&(s+="\n - Channels must be provided through config.channels only!"),(0,p.kP)(c,1,514,"SDK Initialization Failed - no telemetry will be sent: "+s)}}),(function(){return{config:t,extensions:i,logger:r,notificationManager:o}}))},e.track=function(t){(0,h.Lm)(e,(function(){return"AppInsightsCore.track"}),(function(){var i=t;if(i){i.timings=i.timings||{},i.timings.trackStart=(0,U.hK)(),(0,U.r7)(i.latency)||(i.latency=1);var r=i.ext=i.ext||{};r.sdk=r.sdk||{},r.sdk.ver=U.vs;var o=i.baseData=i.baseData||{};o[z.o6]=o[z.o6]||{};var a=o[z.o6];a[z.p8]=a[z.p8]||e.pluginVersionString||z.qS}n.track(i)}),(function(){return{item:t}}),!t.sync)}})),t}return(0,r.ne)(n,e),n.__ieDyn=1,n}(B),Z=function(e){function n(){var t=e.call(this)||this;return(0,m.Z)(n,t,(function(e,n){e.initialize=function(t,i,r,o){t&&!t.endpointUrl&&(t.endpointUrl=z.YT),e.getWParam=function(){return U.x9||t.enableWParam?0:-1};try{n.initialize(t,i,r,o)}catch(n){(0,p.kP)(e.logger,1,514,"Initialization Failed: "+(0,y.eU)(n)+"\n - Note: Channels must be provided through config.channels only")}},e.track=function(e){var t=e;if(t){var i=t.ext=t.ext||{};i.sdk=i.sdk||{},i.sdk.ver=U.vs}n.track(t)}})),t}return(0,r.ne)(n,e),n.__ieDyn=1,n}(x);var H=a.mf;function q(e,n,t){return function(i){e[n]=i,t()}}const K=function(){function e(n){var t=0,i=null,r=[];function o(){if(r.length>0){var e=r.slice();r=[],setTimeout((function(){for(var n=0,t=e.length;n<t;++n)try{e[n]()}catch(e){}}),0)}}function a(e){0===t&&(i=e,t=1,o())}function u(e){0===t&&(i=e,t=2,o())}(0,m.Z)(e,this,(function(n){n.then=function(n,a){return new e((function(u,l){!function(n,a,u,l){r.push((function(){var r;try{(r=1===t?H(n)?n(i):i:H(a)?a(i):i)instanceof e?r.then(u,l):2!==t||H(a)?u(r):l(r)}catch(e){return void l(e)}})),0!==t&&o()}(n,a,u,l)}))},n.catch=function(e){return n.then(null,e)}})),function(){if(!H(n))throw new TypeError("ESPromise: resolvedFunc argument is not a Function");try{n(a,u)}catch(e){u(e)}}()}return e.resolve=function(n){return n instanceof e?n:n&&H(n.then)?new e((function(e,t){try{n.then(e,t)}catch(e){t(e)}})):new e((function(e){e(n)}))},e.reject=function(n){return new e((function(e,t){t(n)}))},e.all=function(n){if(n&&n.length)return new e((function(e,t){try{for(var i=[],r=0,o=0;o<n.length;o++){var a=n[o];a&&H(a.then)?(r++,a.then(q(i,o,(function(){0==--r&&e(i)})),t)):i[o]=a}0===r&&setTimeout((function(){e(i)}),0)}catch(e){t(e)}}))},e.race=function(n){return new e((function(e,t){if(n&&n.length)try{for(var i=function(i){var r=n[i];r&&H(r.then)?r.then(e,t):setTimeout((function(){e(r)}),0)},r=0;r<n.length;r++)i(r)}catch(e){t(e)}}))},e}();var J=0,G=[],Q=[],Y=[];function $(){return(new Date).getTime()}const X=function(){function e(n,t){var i=0,r=(n||"<unnamed>")+"."+J;function o(e){var n=(0,C.Rd)();n&&n.QUnit&&console&&console.log("ESPromiseScheduler["+r+"] "+e)}function a(e){(0,p.jV)(t,"ESPromiseScheduler["+r+"] "+e)}J++,(0,m.Z)(e,this,(function(e){var n=null,t=0;function u(e,n){for(var t=0;t<e.length;t++)if(e[t].id===n)return e.splice(t,1)[0];return null}e.scheduleEvent=function(e,l,c){var s=r+"."+t;t++,l&&(s+="-("+l+")");var f=s+"{"+i+"}";i++;var d,v,g,m={evt:null,tm:$(),id:f,isRunning:!1,isAborted:!1};return m.evt=n?(d=m,v=n,g=new K((function(e,n){var t=$()-v.tm,i=v.id;o("["+s+"] is waiting for ["+i+":"+t+" ms] to complete before starting -- ["+Q.length+"] waiting and ["+G.length+"] running"),d.abort=function(e){d.abort=null,u(Q,s),d.isAborted=!0,n(new Error(e))},v.evt.then((function(t){u(Q,s),T(d).then(e,n)}),(function(t){u(Q,s),T(d).then(e,n)}))})),Q.push(d),g):T(m),(n=m).evt._schId=f,m.evt;function p(e){for(var n=$(),t=n-6e5,i=e.length,r=0;r<i;){var o=e[r];if(o&&o.tm<t){var u=null;o.abort?(u="Aborting ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",o.abort(u)):u="Removing ["+o.id+"] due to Excessive runtime ("+(n-o.tm)+" ms)",a(u),e.splice(r,1),i--}else r++}}function h(e,t){var i=!1,r=u(G,e);if(r||(r=u(Y,e),i=!0),r){r.to&&(clearTimeout(r.to),r.to=null);var l=$()-r.tm;t?i?a("Timed out event ["+e+"] finally complete -- "+l+" ms"):o("Promise ["+e+"] Complete -- "+l+" ms"):(Y.push(r),a("Event ["+e+"] Timed out and removed -- "+l+" ms"))}else o("Failed to remove ["+e+"] from running queue");n&&n.id===e&&(n=null),p(G),p(Q),p(Y)}function y(e,n){return function(t){return h(e,!0),n&&n(t),t}}function S(e,n,t,i){n.then((function(n){return n instanceof K?(o("Event ["+e+"] returned a promise -- waiting"),S(e,n,t,i),n):y(e,t)(n)}),y(e,i))}function C(e,n){var t=e.id;return new K((function(i,r){o("Event ["+t+"] Starting -- waited for "+(e.wTm||"--")+" ms"),e.isRunning=!0,e.abort=function(n){e.abort=null,e.isAborted=!0,h(t,!1),r(new Error(n))};var a=n(t);a instanceof K?(c&&(e.to=setTimeout((function(){h(t,!1),r(new Error("Timed out after ["+c+"] ms"))}),c)),S(t,a,(function(n){o("Event ["+t+"] Resolving after "+($()-e.tm)+" ms"),i(n)}),r)):(o("Promise ["+t+"] Auto completed as the start action did not return a promise"),i())}))}function T(n){var t=$();return n.wTm=t-n.tm,n.tm=t,n.isAborted?K.reject(new Error("["+s+"] was aborted")):(G.push(n),C(n,e))}}}))}return e.incomplete=function(){return G},e.waitingToStart=function(){return Q},e}();var ee=function(){function e(e){var n=this,t={},i=[],r=[];function o(e,n){var o,u=t[e];if(u&&(o=u[n]),!o&&null!==o){if((0,a.HD)(e)&&(0,a.HD)(n))if(r.length>0){for(var l=0;l<r.length;l++)if(r[l].handleField(e,n)){o={canHandle:!0,fieldHandler:r[l]};break}}else 0===i.length&&(o={canHandle:!0});if(!o&&null!==o)for(o=null,l=0;l<i.length;l++)if(i[l].handleField(e,n)){o={canHandle:!0,handler:i[l],fieldHandler:null};break}u||(u=t[e]={}),u[n]=o}return o}function u(e,n,t,i,r,o){if(e.handler)return e.handler.property(n,t,r,o);if(!(0,a.le)(r.kind)){if(4096==(4096&i)||!(0,U.oS)(r.kind))return null;r.value=r.value.toString()}return c(e.fieldHandler,n,t,i,r)}function l(e,n,t){return(0,U.Sn)(t)?{value:t}:null}function c(e,t,i,r,o){if(o&&e){var u=e.getSanitizer(t,i,r,o.kind,o.propertyType);if(u)if(4===r){var s={},f=o.value;(0,a.rW)(f,(function(n,r){var o=t+"."+i;if((0,U.Sn)(r)){var a=l(0,0,r);(a=c(e,o,n,(0,U.Sy)(r),a))&&(s[n]=a.value)}})),o.value=s}else{var d={path:t,name:i,type:r,prop:o,sanitizer:n};o=u.call(n,d)}}return o}e&&r.push(e),n.addSanitizer=function(e){e&&(i.push(e),t={})},n.addFieldSanitizer=function(e){e&&(r.push(e),t={})},n.handleField=function(e,n){var t=o(e,n);return!!t&&t.canHandle},n.value=function(e,n,t,i){var r=o(e,n);if(r&&r.canHandle){if(!r||!r.canHandle)return null;if(r.handler)return r.handler.value(e,n,t,i);if(!(0,a.HD)(n)||(0,a.le)(t)||t===z.qS)return null;var c=null,s=(0,U.Sy)(t);if(8192==(8192&s)){var f=-8193&s;if(c=t,!(0,U.Sn)(c.value)||1!==f&&2!==f&&3!==f&&4096!=(4096&f))return null}else 1===s||2===s||3===s||4096==(4096&s)?c=l(0,0,t):4===s&&(c=l(0,0,i?JSON.stringify(t):t));if(c)return u(r,e,n,s,c,i)}return null},n.property=function(e,n,t,i){var r=o(e,n);if(!r||!r.canHandle)return null;if(!(0,a.HD)(n)||(0,a.le)(t)||!(0,U.Sn)(t.value))return null;var l=(0,U.Sy)(t.value);return 0===l?null:u(r,e,n,l,t,i)}}return e.getFieldType=U.Sy,e}(),ne=100,te=t(9464),ie=t(7712),re=t(3821),oe=t(3786),ae=t(1819),ue=t(6146)}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d045a5eda657f4d7b676dedbfa7aab8207f8a075/extensions/html-language-features/client/dist/node/278.htmlClientMain.js.map