!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),u=function(){function e(){var t=this;r(this,e),window.addEventListener("keypress",function(e){return t._handleInputChar(e.key)}),this.practise=0,this.inputBuffer="",this.stack=new a("stack"),this.score=new h("progress","timer","end-screen"),this.score.setQuestionCount(20),this.currentLevel=new o(this.score.questionCount),this._displayQuestions()}return s(e,[{key:"_handleInputChar",value:function(e){this.inputBuffer+=e,1==this.score.timerStopped&&(this.score.endTime&&location.reload(),this.score.startTimer()),this.inputBuffer.length>this.getCurrentAnswer().length&&(this.inputBuffer=this.inputBuffer.substring(1)),this._answeredCorrectly()&&this.clearCurrentQuiz()}},{key:"_answeredCorrectly",value:function(){return this.inputBuffer==this.getCurrentAnswer()}},{key:"_displayQuestions",value:function(){this.stack.inject(this.currentLevel.data)}},{key:"clearCurrentQuiz",value:function(){this.inputBuffer="",this.currentLevel.data.shift(),this.stack.shift(),this.score.incrementProgress(),0==this.currentLevel.data.length&&this.score.endTimer()}},{key:"getCurrentQuestion",value:function(){return Object.keys(this.currentLevel.data[0])[0]}},{key:"getCurrentAnswer",value:function(){return Object.values(d.currentLevel.data[0])[0]}}]),e}(),a=function(){function e(t){r(this,e),this.stack=document.getElementById(t),this.training=!0}return s(e,[{key:"_getHTML",value:function(){return this.stack.innerHTML}},{key:"_setHTML",value:function(e){this.stack.innerHTML=e}},{key:"shift",value:function(){this.stack.childNodes[0].className+="slide",setTimeout(function(){this.stack.removeChild(this.stack.childNodes[0])},300)}},{key:"inject",value:function(e){for(var t="",i=0;i<e.length;i++)t+="<div ",1==this.training&&(t+='romaji="'+Object.values(e[i])+'"'),t+=">"+Object.keys(e[i])+"</div>";this._setHTML(t)}}]),e}(),o=function(){function e(t){r(this,e),this.weight=[.75,.2,.049,.001],this.kana=y,this.list=Object.getOwnPropertyNames(this.kana),this.data=this.generateLevel(t)}return s(e,[{key:"generateLevel",value:function(e){var t=[],i=this.kana;for(var r in i)for(var s in i[r]){for(var u=Object.keys(i[r][s])[0],a=Object.values(i[r][s])[0],o="",h=0;h<u.length;h++){var y=u[h].charCodeAt(0);y+=96;var d=String.fromCharCode(y);o+=d}this.kana[r].push(n({},o,a))}for(var f=0;f<e;f++){var l=c.getItem(this.list,this.weight),v=~~(Math.random()*this.kana[l].length);t.push(this.kana[l][v])}return t}}]),e}(),h=function(){function e(t,i,n){r(this,e),this.score=document.getElementById(t),this.timer=document.getElementById(i),this.endScreen=document.getElementById(n),this.questionCount=100,this._init()}return s(e,[{key:"_init",value:function(){this.startTime=0,this.endTime=0,this.timerStopped=!0,this.progress=0,this.endScreen.className=""}},{key:"incrementProgress",value:function(){this.progress++,this.injectProgress()}},{key:"setQuestionCount",value:function(e){this.questionCount=e,this.injectProgress()}},{key:"startTimer",value:function(){0==this.startTime&&(this.timerStopped=!1,this.startTime=new Date,requestAnimationFrame(this.updateTimer.bind(this)))}},{key:"updateTimer",value:function(){this.timerStopped||(requestAnimationFrame(this.updateTimer.bind(this)),this.injectTime())}},{key:"endTimer",value:function(){this.endTime=new Date,this.timerStopped=!0;var e=this.getSecondsElapsed(this.startTime,this.endTime);this.injectTimerEnd(e)}},{key:"getSecondsElapsed",value:function(e,t){return(t-e)/1e3}},{key:"getProgress",value:function(){return this.progress+"/"+this.questionCount}},{key:"getGrade",value:function(){return this.time/this.answered}},{key:"reset",value:function(){this._init()}},{key:"injectTime",value:function(){var e=this.getSecondsElapsed(this.startTime,new Date);this.timer.innerHTML=e.toFixed(1)}},{key:"injectProgress",value:function(){this.score.innerHTML=this.getProgress()}},{key:"injectTimerEnd",value:function(e){this.endScreen.className+="active",this.endScreen.childNodes[3].innerHTML=e.toFixed(1)}}]),e}(),c=function(){function e(){r(this,e)}return s(e,null,[{key:"getBetween",value:function(e,t){return Math.random()*(t-e)+e}},{key:"getItem",value:function(e,t){for(var i=t.reduce(function(e,t,i,n){return e+t}),n=this.getBetween(0,i),r=0,s=0;s<e.length;s++)if(r+=t[s],r=+r.toFixed(2),n<=r)return e[s]}}]),e}(),y={kana:[{"あ":"a"},{"い":"i"},{"う":"u"},{"え":"e"},{"お":"o"},{"か":"ka"},{"き":"ki"},{"く":"ku"},{"け":"ke"},{"こ":"ko"},{"さ":"sa"},{"す":"su"},{"せ":"se"},{"そ":"so"},{"し":"shi"},{"た":"ta"},{"ち":"chi"},{"つ":"tsu"},{"て":"te"},{"と":"to"},{"な":"na"},{"に":"ni"},{"ぬ":"nu"},{"ね":"ne"},{"の":"no"},{"は":"ha"},{"ひ":"hi"},{"ふ":"fu"},{"へ":"he"},{"ほ":"ho"},{"ま":"ma"},{"み":"mi"},{"む":"mu"},{"め":"me"},{"も":"mo"},{"や":"ya"},{"ゆ":"yu"},{"よ":"yo"},{"ら":"ra"},{"り":"ri"},{"る":"ru"},{"れ":"re"},{"ろ":"ro"},{"わ":"wa"},{"を":"wo"},{"ん":"n"}],diacritics:[{"ゔ":"vu"},{"が":"ga"},{"ぎ":"gi"},{"ぐ":"gu"},{"げ":"ge"},{"ご":"go"},{"ざ":"za"},{"ず":"zu"},{"ぜ":"ze"},{"ぞ":"zo"},{"じ":"ji"},{"だ":"da"},{"ぢ":"di"},{"づ":"du"},{"で":"de"},{"ど":"do"},{"ば":"ba"},{"び":"bi"},{"ぶ":"bu"},{"べ":"be"},{"ぼ":"bo"},{"ぱ":"pa"},{"ぴ":"pi"},{"ぷ":"pu"},{"ぺ":"pe"},{"ぽ":"po"}],digraphs:[{"ゔぁ":"va"},{"ゔぃ":"vi"},{"ゔぇ":"ve"},{"ゔぉ":"vo"},{"きゃ":"kya"},{"きぃ":"kyi"},{"きゅ":"kyu"},{"ぎゃ":"gya"},{"ぎぃ":"gyi"},{"ぎゅ":"gyu"},{"ぎぇ":"gye"},{"ぎょ":"gyo"},{"しゃ":"sha"},{"しゅ":"shu"},{"しょ":"sho"},{"じゃ":"ja"},{"じゅ":"ju"},{"じょ":"jo"},{"ちゃ":"cha"},{"ちゅ":"chu"},{"ちょ":"cho"},{"にゃ":"nya"},{"にゅ":"nyu"},{"にょ":"nyo"},{"ひゃ":"hya"},{"ひゅ":"hyu"},{"ひょ":"hyo"},{"びゃ":"bya"},{"びゅ":"byu"},{"びょ":"byo"},{"ぴゃ":"pya"},{"ぴゅ":"pyu"},{"ぴょ":"pyo"},{"ふぁ":"fa"},{"ふぃ":"fi"},{"ふぇ":"fe"},{"ふぉ":"fo"},{"みゃ":"mya"},{"みゅ":"myu"},{"みょ":"myo"},{"りゃ":"rya"},{"りゅ":"ryu"},{"りょ":"ryo"},{"きぇ":"kye"},{"きょ":"kyo"},{"じぃ":"jyi"},{"じぇ":"jye"},{"ちぃ":"cyi"},{"ちぇ":"che"},{"ひぃ":"hyi"},{"ひぇ":"hye"},{"びぃ":"byi"},{"びぇ":"bye"},{"ぴぃ":"pyi"},{"ぴぇ":"pye"},{"みぇ":"mye"},{"みぃ":"myi"},{"りぃ":"ryi"},{"りぇ":"rye"},{"にぃ":"nyi"},{"にぇ":"nye"},{"しぃ":"syi"},{"しぇ":"she"},{"いぇ":"ye"},{"うぁ":"wha"},{"うぉ":"who"},{"うぃ":"wi"},{"うぇ":"we"},{"ゔゃ":"vya"},{"ゔゅ":"vyu"},{"ゔょ":"vyo"},{"すぁ":"swa"},{"すぃ":"swi"},{"すぅ":"swu"},{"すぇ":"swe"},{"すぉ":"swo"},{"くゃ":"qya"},{"くゅ":"qyu"},{"くょ":"qyo"},{"くぁ":"qwa"},{"くぃ":"qwi"},{"くぅ":"qwu"},{"くぇ":"qwe"},{"くぉ":"qwo"},{"ぐぁ":"gwa"},{"ぐぃ":"gwi"},{"ぐぅ":"gwu"},{"ぐぇ":"gwe"},{"ぐぉ":"gwo"},{"つぁ":"tsa"},{"つぃ":"tsi"},{"つぇ":"tse"},{"つぉ":"tso"},{"てゃ":"tha"},{"てぃ":"thi"},{"てゅ":"thu"},{"てぇ":"the"},{"てょ":"tho"},{"とぁ":"twa"},{"とぃ":"twi"},{"とぅ":"twu"},{"とぇ":"twe"},{"とぉ":"two"},{"ぢゃ":"dya"},{"ぢぃ":"dyi"},{"ぢゅ":"dyu"},{"ぢぇ":"dye"},{"ぢょ":"dyo"},{"でゃ":"dha"},{"でぃ":"dhi"},{"でゅ":"dhu"},{"でぇ":"dhe"},{"でょ":"dho"},{"どぁ":"dwa"},{"どぃ":"dwi"},{"どぅ":"dwu"},{"どぇ":"dwe"},{"どぉ":"dwo"},{"ふぅ":"fwu"},{"ふゃ":"fya"},{"ふゅ":"fyu"},{"ふょ":"fyo"}],obsolete:[{"ゐ":"wi"},{"ゑ":"we"}]},d=new u}]);