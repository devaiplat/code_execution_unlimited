import{m as M,F as U,_ as w,b as L,bt as ue,u as q,r as ge,aF as fe,bu as ve,o as A,bv as me,f as be,g as _e,j as xe,l as ye,c as we,d as ke,c6 as Q,c7 as $e,bx as Ie,y as C,z as F,G as H,I as R,bA as te,K as O,M as Y,bF as Se,Q as oe,R as S,E as N,C as ie,J as Te,bD as G,bM as Pe,X as z,Z as ne,a8 as y,$ as a,Y as b,a2 as k,a3 as D,a4 as p,a5 as h,co as P,a6 as E,aQ as Ce,av as se,a7 as T,cp as m,a0 as ze,cq as De,cr as Re,cs as Ee,ct as Me,cu as X,cv as Le,cw as Ae,cx as Be,cy as je,a1 as Oe,au as Ne}from"./App-Bk8TEhFC.js";import{c as re,b as j,a as K}from"./index-D2DBufRw.js";import{r as Ue,M as Fe}from"./mgt-file-list-DWez7YwT.js";import{r as He}from"./mgt-spinner-CVbNZbev.js";import{f as We}from"./index-Bg0vk6XW.js";import"./repeat-DCnvCPfQ.js";import"./mgt-file-v_UwI1Pg.js";class ${static get microsoftTeamsLib(){return this._microsoftTeamsLib||window.microsoftTeams}static set microsoftTeamsLib(e){this._microsoftTeamsLib=e}static get isAvailable(){return this.microsoftTeamsLib?window.parent===window.self&&window.nativeInterface?!0:window.name==="embedded-page-container"||window.name==="extension-tab-frame":!1}static executeDeepLink(e,t){const o=this.microsoftTeamsLib;o.initialize(),o.executeDeepLink(e,t)}}const Ve=(r,e)=>M`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class qe extends U{}const Qe=(r,e)=>M`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class ae extends U{}w([L({mode:"boolean"})],ae.prototype,"disabled",void 0);const Ye=(r,e)=>M`
    <template class="${t=>t.orientation}">
        ${ue(r,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${q("tabs")}></slot>

            ${ge(t=>t.showActiveIndicator,M`
                    <div
                        ${fe("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ve(r,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${q("tabpanels")}></slot>
        </div>
    </template>
`,J={vertical:"vertical",horizontal:"horizontal"};class x extends U{constructor(){super(...arguments),this.orientation=J.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",o=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((i,n)=>{if(i.slot==="tab"){const s=this.activeTabIndex===n&&this.isFocusableElement(i);this.activeindicator&&this.isFocusableElement(i)&&(this.showActiveIndicator=!0);const l=this.tabIds[n],d=this.tabpanelIds[n];i.setAttribute("id",l),i.setAttribute("aria-selected",s?"true":"false"),i.setAttribute("aria-controls",d),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",s?"0":"-1"),s&&(this.activetab=i,this.activeid=l)}i.style[e]="",i.style[t]="",i.style[o]=`${n+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const o=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",o),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case _e:e.preventDefault(),this.adjustBackward(e);break;case be:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case ye:e.preventDefault(),this.adjustBackward(e);break;case xe:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case ke:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case we:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)+1:1,o===t.length&&(o=0);o<t.length&&t.length>1;)if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}else{if(this.activetab&&o===t.indexOf(this.activetab))break;o+1>=t.length?o=0:o+=1}},this.adjustBackward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)-1:0,o=o<0?t.length-1:o;o>=0&&t.length>1;)if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}else o-1<0?o=t.length-1:o-=1},this.moveToTabByIndex=(e,t)=>{const o=e[t];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(o=>o.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Q()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Q()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===J.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const s=n-i;this.activeIndicatorRef.style.transform=`${t}(${s}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(s=>this.isFocusableElement(s)),o=t.indexOf(this.activetab),i=$e(0,t.length-1,o+e),n=this.tabs.indexOf(t[i]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}w([L],x.prototype,"orientation",void 0);w([L],x.prototype,"activeid",void 0);w([A],x.prototype,"tabs",void 0);w([A],x.prototype,"tabpanels",void 0);w([L({mode:"boolean"})],x.prototype,"activeindicator",void 0);w([A],x.prototype,"activeIndicatorRef",void 0);w([A],x.prototype,"showActiveIndicator",void 0);me(x,Ie);const Ge=(r,e)=>C`
      ${F("grid")} :host {
        box-sizing: border-box;
        ${H}
        color: ${R};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${te} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${O} * 1px);
        justify-self: center;
        background: ${Y};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${Se} * 1px);
        border-radius: calc(${O} * 1px);
        align-self: center;
        background: ${Y};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(oe(C`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${S.Highlight};
        }
      `)),Xe=(r,e)=>C`
      ${F("inline-flex")} :host {
        box-sizing: border-box;
        ${H}
        height: calc((${te} + (${N} * 2)) * 1px);
        padding: 0 calc((6 + (${N} * 2 * ${ie})) * 1px);
        color: ${R};
        border-radius: calc(${O} * 1px);
        border: calc(${Te} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${R};
      }

      :host(:${G}) {
        ${Pe}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${R};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(oe(C`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${S.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${S.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${S.Highlight};
            fill: currentcolor;
          }
          :host(:${G}) {
            background: transparent;
            outline-color: ${S.ButtonText};
          }
        `)),Ke=ae.compose({baseName:"tab",template:Qe,styles:Xe}),Je=(r,e)=>C`
  ${F("block")} :host {
    box-sizing: border-box;
    ${H}
    padding: 0 calc((6 + (${N} * 2 * ${ie})) * 1px);
  }
`,Ze=qe.compose({baseName:"tab-panel",template:Ve,styles:Je}),et=x.compose({baseName:"tabs",template:Ye,styles:Ge}),tt=[z`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{box-shadow:var(--person-card-box-shadow,var(--elevation-shadow-card-rest));width:var(--mgt-flyout-set-width,375px);overflow:hidden;user-select:none;border-radius:8px;background-color:var(--person-card-background-color,var(--neutral-layer-floating));--file-list-background-color:transparent;--file-list-box-shadow:none;--file-item-background-color:transparent}:host .small{max-height:100vh;overflow:hidden auto}:host .nav{height:0;position:relative;z-index:100}:host .nav__back{padding-top:18px;padding-inline-start:12px;height:32px;width:32px}:host .nav__back svg{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .nav__back:hover{cursor:pointer}:host .nav__back:hover svg{fill:var(--person-card-nav-back-arrow-hover-color,var(--neutral-foreground-rest))}:host .close-card-container{position:relative;z-index:100}:host .close-card-container .close-button{position:absolute;right:10px;margin-top:9px;z-index:1;border:1px solid transparent}:host .close-card-container .close-button svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .close-card-container .close-button:hover svg path{fill:var(--person-card-close-button-hover-color,var(--neutral-foreground-rest))}:host .person-details-container{display:flex;flex-direction:column;padding-inline-start:22px;padding-block:36px;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .person-details-container .person-image{--person-avatar-top-spacing:var(--person-card-avatar-top-spacing, 15px);--person-details-left-spacing:var(--person-card-details-left-spacing, 15px);--person-details-bottom-spacing:var(--person-card-details-bottom-spacing, 0);--person-background-color:var(--person-card-background-color, var(--neutral-layer-floating));--person-line1-font-size:var(--person-card-line1-font-size, 20px);--person-line1-font-weight:var(--person-card-line1-font-weight, 600);--person-line1-text-line-height:var(--person-card-line1-line-height, 28px);--person-line1-text-color:var(--person-card-line1-text-color, var(--neutral-foreground-rest));--person-line2-font-size:var(--person-card-line2-font-size, 14px);--person-line2-font-weight:var(--person-card-line2-font-weight, 400);--person-line2-text-line-height:var(--person-card-line2-line-height, 20px);--person-line2-text-color:var(--person-card-line2-text-color, var(--neutral-foreground-hint));--person-line3-font-size:var(--person-card-line3-font-size, 14px);--person-line3-font-weight:var(--person-card-line3-font-weight, 400);--person-line3-text-line-height:var(--person-card-line3-line-height, 19px);--person-line3-text-color:var(--person-card-line3-text-color, var(--neutral-foreground-hint));--person-avatar-size:var(--person-card-avatar-size, 75px);--person-presence-wrapper-bottom:-15px}:host .person-details-container .base-icons{display:flex;align-items:center;margin-inline-start:var(--person-card-base-icons-left-spacing,calc(var(--person-card-avatar-size,75px) + var(--person-card-details-left-spacing,15px) - 8px));z-index:1}:host .person-details-container .base-icons .icon{display:flex;align-items:center;font-size:13px;white-space:nowrap}:host .person-details-container .base-icons .icon:not(:last-child){margin-inline-end:28px}:host .person-details-container .base-icons .icon svg .filled{display:none}:host .person-details-container .base-icons .icon svg .regular{display:block}:host .person-details-container .base-icons .icon svg path{fill:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .person-details-container .base-icons .icon:active svg .filled,:host .person-details-container .base-icons .icon:hover svg .filled{display:block}:host .person-details-container .base-icons .icon:active svg .regular,:host .person-details-container .base-icons .icon:hover svg .regular{display:none}:host .person-details-container .base-icons .icon:active svg path,:host .person-details-container .base-icons .icon:hover svg path{fill:var(--person-card-icon-hover-color,var(--accent-foreground-hover))}:host .expanded-details-container{display:flex;flex-direction:column;position:relative}:host .expanded-details-container .expanded-details-button{display:flex;justify-content:center;height:32px}:host .expanded-details-container .expanded-details-button svg path{stroke:var(--person-card-icon-color,var(--accent-foreground-rest))}:host .expanded-details-container .expanded-details-button:hover{cursor:pointer;background-color:var(--person-card-expanded-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section{padding:20px 0;display:flex;flex-direction:column;position:relative}:host .expanded-details-container .sections .section:not(:last-child)::after{position:absolute;content:"";width:90%;transform:translateX(-50%);border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest));left:50%;bottom:0}:host .expanded-details-container .sections .section__header{display:flex;flex-direction:row;padding:0 20px}:host .expanded-details-container .sections .section__title{flex-grow:1;color:var(--person-card-line1-text-color,var(--neutral-foreground-rest));font-size:14px;font-weight:600;line-height:19px}:host .expanded-details-container .sections .section__show-more{font-size:12px;font-weight:600;align-self:center;vertical-align:top;--base-height-multiplier:6}:host .expanded-details-container .sections .section__show-more:hover{background-color:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover))}:host .expanded-details-container .sections .section__content{margin-top:14px}:host .expanded-details-container .sections .section .additional-details{padding:0 20px}:host .expanded-details-container .divider{z-index:100;position:relative;width:375px;margin:0;border-style:none;border-bottom:1px solid var(--person-card-border-color,var(--neutral-stroke-rest))}:host .expanded-details-container .section-nav{height:35px}:host .expanded-details-container .section-nav fluent-tabs{grid-template-columns:minmax(1px,0.1fr)}:host .expanded-details-container .section-nav fluent-tabs.horizontal::part(activeIndicator){width:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel{max-height:360px;min-height:360px;overflow:hidden auto;padding:0;scrollbar-width:thin}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted{padding:20px 0;max-width:var(--mgt-flyout-set-width,375px);min-width:var(--mgt-flyout-set-width,360px);--file-list-box-shadow:none;--file-list-padding:0}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .inserted .title{font-size:14px;font-weight:600;color:var(--title-color-subtitle,var(--neutral-foreground-rest,#1a1a1a));margin:0 20px 20px;line-height:19px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel .overview-panel{max-width:var(--mgt-flyout-set-width,375px)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-button{height:1px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-track{border-radius:10px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab-panel::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-nav fluent-tabs fluent-tab{padding-bottom:1px!important;border:1px solid transparent!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab:focus-visible{border:1px solid #2b2b2b!important}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon{cursor:pointer;box-sizing:border-box;width:53px;height:36px;display:flex;align-items:center;justify-content:center}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon svg{fill:var(--person-card-fluent-background-color,transparent)}:host .expanded-details-container .section-nav fluent-tabs fluent-tab.section-nav__icon:hover{background:var(--person-card-fluent-background-color-hover,var(--neutral-fill-hover));border-radius:4px;z-index:0;position:relative}:host .expanded-details-container .section-host{min-height:360px;overflow:hidden auto}:host .expanded-details-container .section-host::-webkit-scrollbar{height:4em;width:4px;border-radius:11px}:host .expanded-details-container .section-host::-webkit-scrollbar-button{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-track{background:#fff;border-radius:10px}:host .expanded-details-container .section-host::-webkit-scrollbar-track-piece{background:#fff}:host .expanded-details-container .section-host::-webkit-scrollbar-thumb{background:grey;border-radius:10px;height:4px}:host .expanded-details-container .section-host.small{overflow-y:hidden}:host .loading{margin:40px 20px;display:flex;justify-content:center;height:360px}:host .message-section{border-bottom:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint));display:flex}:host .message-section fluent-text-field{margin:10px 10px 10px 16px;--neutral-fill-input-rest:$person-card-background-color;--neutral-fill-input-hover:$person-card-chat-input-hover-color;--neutral-fill-input-focus:$person-card-chat-input-focus-color;width:300px;margin-inline-start:16px;border-radius:4px;border:1px solid var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section .send-message-icon{max-width:15px;margin-top:10px}:host .message-section svg{height:17px;width:16px;fill:var(--person-card-chat-input-border-color,var(--neutral-foreground-hint))}:host .message-section svg:hover{filter:brightness(.5)}:host .message-section svg:disabled{filter:none}:host .person-root.large,:host .person-root.threelines{--person-avatar-size-3-lines:75px}:host fluent-button.close-button.lightweight::part(control),:host fluent-button.expanded-details-button::part(control),:host fluent-button.section__show-more.lightweight::part(control){background:var(--person-card-fluent-background-color,transparent)}:host fluent-button.icon::part(control),:host fluent-button.nav__back::part(control){border:none;padding:0;background:0 0}:host fluent-button.icon::part(control) :hover,:host fluent-button.nav__back::part(control) :hover{background:0 0}[dir=rtl] .base-icons{right:91px}[dir=rtl] .nav__back{width:20px!important;transform:scaleX(-1);filter:fliph;filter:"FlipH"}[dir=rtl] .close-card-container .close-button{right:auto;left:10px}[dir=rtl] .message-section svg{transform:scale(-1,1)}@media (forced-colors:active) and (prefers-color-scheme:dark){.root{border:1px solid #fff;border-radius:inherit}.root svg,.root svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root{border:1px solid #000;border-radius:inherit}.root svg,.root svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.expanded-details-container>svg,.expanded-details-container>svg>path,svg,svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`];var le=function(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},ce=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};class I extends ne{get isCompact(){return this._isCompact}constructor(){super(),this.personDetails=null,this.renderLoading=()=>y`
      <div class="loading">
        <mgt-spinner></mgt-spinner>
      </div>
    `,this._isCompact=!1}asCompactView(){return this._isCompact=!0,this}asFullView(){return this._isCompact=!1,this}clearState(){this._isCompact=!1,this.personDetails=null}render(){return this.isCompact?this.renderCompactView():this.renderFullView()}renderNoData(){return a`
      <div class="no-data">No data</div>
    `}navigateCard(e){var t;let o=this.parentNode;for(;o;){o=o.parentNode;const n=o;if(((t=n==null?void 0:n.host)===null||t===void 0?void 0:t.tagName)===`${re.prefix}-PERSON-CARD`.toUpperCase()){o=n.host;break}}o.navigate(e)}}le([b({attribute:"person-details",type:Object}),ce("design:type",Object)],I.prototype,"personDetails",void 0);le([k(),ce("design:type",Boolean)],I.prototype,"_isCompact",void 0);const ot=[z`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root .part{display:grid;grid-template-columns:auto 1fr auto}:host .root .part .part__icon{display:flex;min-width:20px;width:20px;height:20px;align-items:center;justify-content:center;margin-left:20px;margin-top:10px;line-height:20px}:host .root .part .part__icon svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint))}:host .root .part .part__details{margin:10px 14px;overflow:hidden}:host .root .part .part__details .part__title{font-size:12px;color:var(--contact-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .part .part__details .part__value{grid-column:2;color:var(--contact-value-color,var(--neutral-foreground-rest));font-size:14px;font-weight:400;line-height:19px}:host .root .part .part__details .part__value .part__link{color:var(--contact-link-color,var(--accent-foreground-rest));font-size:14px;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:inline-block}:host .root .part .part__details .part__value .part__link:hover{color:var(--contact-link-hover-color,var(--accent-foreground-hover))}:host .root .part .part__copy{width:32px;height:100%;background-color:var(--contact-background-color,transparent);visibility:hidden;display:flex;align-items:center;justify-content:flex-start}:host .root .part .part__copy svg{fill:var(--contact-copy-icon-color,var(--neutral-foreground-hint));cursor:pointer}:host .root .part:hover .part__copy{visibility:visible}:host .root.compact{padding:0}:host .root.compact .part{height:30px;align-items:center}:host .root.compact .part__details{margin:0}:host .root.compact .part__title{display:none}:host .root.compact .part__icon{margin-top:0;margin-right:6px;margin-bottom:2px}[dir=rtl] .part__link.phone{text-align:right;direction:ltr}[dir=rtl] .part__icon{margin:10px 20px 0 0!important}[dir=rtl].compact .part__icon{margin-left:6px!important;margin-top:0!important}@media (forced-colors:active) and (prefers-color-scheme:dark){.root svg{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){.root svg{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}.root svg path,.root svg rect{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],it={contactSectionTitle:"Contact",emailTitle:"Email",chatTitle:"Teams",businessPhoneTitle:"Business Phone",cellPhoneTitle:"Mobile Phone",departmentTitle:"Department",personTitle:"Title",officeLocationTitle:"Office Location",copyToClipboardButton:"Copy to clipboard"},nt=()=>{D("contact",de)};class de extends I{static get styles(){return ot}get strings(){return it}get hasData(){return this._contactParts?!!Object.values(this._contactParts).filter(t=>!!t.value).length:!1}constructor(e){var t;super(),this._contactParts={email:{icon:p(h.Email),onClick:()=>this.sendEmail(P(this._person)),showCompact:!0,title:this.strings.emailTitle},chat:{icon:p(h.Chat),onClick:()=>{var o;return this.sendChat((o=this._person)===null||o===void 0?void 0:o.userPrincipalName)},showCompact:!1,title:this.strings.chatTitle},businessPhone:{icon:p(h.Phone),onClick:()=>{var o,i;return this.sendCall(((i=(o=this._person)===null||o===void 0?void 0:o.businessPhones)===null||i===void 0?void 0:i.length)>0?this._person.businessPhones[0]:null)},showCompact:!0,title:this.strings.businessPhoneTitle},cellPhone:{icon:p(h.CellPhone),onClick:()=>{var o;return this.sendCall((o=this._person)===null||o===void 0?void 0:o.mobilePhone)},showCompact:!0,title:this.strings.cellPhoneTitle},department:{icon:p(h.Department),showCompact:!1,title:this.strings.departmentTitle},title:{icon:p(h.Person),showCompact:!1,title:this.strings.personTitle},officeLocation:{icon:p(h.OfficeLocation),showCompact:!0,title:this.strings.officeLocationTitle}},this.sendCall=o=>{this.sendLink("tel:",o)},this._person=e,this._contactParts.email.value=P(this._person),this._contactParts.chat.value=this._person.userPrincipalName,this._contactParts.cellPhone.value=this._person.mobilePhone,this._contactParts.department.value=this._person.department,this._contactParts.title.value=this._person.jobTitle,this._contactParts.officeLocation.value=this._person.officeLocation,!((t=this._person.businessPhones)===null||t===void 0)&&t.length&&(this._contactParts.businessPhone.value=this._person.businessPhones[0])}get displayName(){return this.strings.contactSectionTitle}get cardTitle(){return this.strings.contactSectionTitle}renderIcon(){return p(h.Contact)}clearState(){super.clearState();for(const e of Object.keys(this._contactParts))this._contactParts[e].value=null}renderCompactView(){if(!this.hasData)return null;const e=Object.values(this._contactParts).filter(i=>!!i.value);let t=Object.values(e).filter(i=>!!i.value&&i.showCompact);t!=null&&t.length||(t=Object.values(e).slice(0,2));const o=a`
      ${t.map(i=>this.renderContactPart(i))}
    `;return a`
      <div class="root compact" dir=${this.direction}>
        ${o}
      </div>
    `}renderFullView(){let e;if(this.hasData){const t=Object.values(this._contactParts).filter(o=>!!o.value);e=a`
        ${t.map(o=>this.renderContactPart(o))}
      `}return a`
      <div class="root" dir=${this.direction}>
        ${e}
      </div>
    `}renderContactPart(e){let t=!1;(e.title==="Mobile Phone"||e.title==="Business Phone")&&(t=!0);const o={part__link:!0,phone:t},i=e.onClick?a`
          <span class=${E(o)} @click=${n=>e.onClick(n)}>${e.value}</span>
        `:a`
          ${e.value}
        `;return a`
      <div class="part" role="button" @click=${n=>this.handlePartClick(n,e.value)} tabindex="0">
        <div class="part__icon" aria-label=${e.title} title=${e.title}>${e.icon}</div>
        <div class="part__details">
          <div class="part__title">${e.title}</div>
          <div class="part__value" title=${e.title}>${i}</div>
        </div>
        <div
          class="part__copy"
          aria-label=${this.strings.copyToClipboardButton}
          title=${this.strings.copyToClipboardButton}
        >
          ${p(h.Copy)}
        </div>
      </div>
    `}handlePartClick(e,t){t&&navigator.clipboard.writeText(t)}sendLink(e,t){t?window.open(`${e}${t}`,"_blank","noreferrer"):console.error(`🦒: Target resource for ${e} link was not provided: resource: ${t}`)}sendChat(e){if(!e){console.error("🦒: Can't send chat when upn is not provided");return}const t=`https://teams.microsoft.com/l/chat/0/0?users=${e}`,o=()=>window.open(t,"_blank","noreferrer");$.isAvailable?$.executeDeepLink(t,i=>{i||o()}):o()}sendEmail(e){this.sendLink("mailto:",e)}}const st=[z`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root .message{padding:8px 20px;display:flex;align-items:center;justify-content:space-between}:host .root .message:hover{background-color:var(--message-hover-color,var(--neutral-fill-hover));cursor:pointer}:host .root .message:last-child{margin-bottom:unset}:host .root .message .message__detail{min-width:0;line-height:normal}:host .root .message .message__detail .message__subject{color:var(--message-subject-color,var(--neutral-foreground-color));font-size:var(--message-subject-font-size, 14px);font-weight:var(--message-subject-font-weight,600);line-height:var(--message-subject-line-height, 20px)}:host .root .message .message__detail .message__from{font-size:var(--message-from-font-size, 12px);color:var(--message-from-color,var(--neutral-foreground-color));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail .message__message{font-size:var(--message-from-font-size, 12px);color:var(--message-color,var(--neutral-foreground-hint));line-height:var(--message-from-line-height, 16px);font-weight:var(--message-from-font-weight,400)}:host .root .message .message__detail>div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .root .message .message__date{margin-top:8px;font-size:12px;color:var(--message-date-color,var(--neutral-foreground-hint));margin-left:10px;white-space:nowrap}
`],rt={emailsSectionTitle:"Emails"};var at=function(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},lt=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const ct=()=>D("messages",W);class W extends I{static get styles(){return st}get strings(){return rt}constructor(e){super(),this._messages=e}get displayName(){return this.strings.emailsSectionTitle}get cardTitle(){return this.strings.emailsSectionTitle}clearState(){super.clearState(),this._messages=[]}renderIcon(){return p(h.Messages)}renderCompactView(){var e;let t;if(!(!((e=this._messages)===null||e===void 0)&&e.length))t=this.renderNoData();else{const o=this._messages?this._messages.slice(0,3).map(i=>this.renderMessage(i)):[];t=a`
         ${o}
       `}return a`
       <div class="root compact">
         ${t}
       </div>
     `}renderFullView(){var e;let t;return!((e=this._messages)===null||e===void 0)&&e.length?t=a`
         ${this._messages.slice(0,5).map(o=>this.renderMessage(o))}
       `:t=this.renderNoData(),a`
       <div class="root">
         ${t}
       </div>
     `}renderMessage(e){return a`
       <div class="message" @click=${()=>this.handleMessageClick(e)}>
         <div class="message__detail">
           <div class="message__subject">${e.subject}</div>
           <div class="message__from">${e.from.emailAddress.name}</div>
           <div class="message__message">${e.bodyPreview}</div>
         </div>
         <div class="message__date">${Ce(new Date(e.receivedDateTime))}</div>
       </div>
     `}handleMessageClick(e){window.open(e.webLink,"_blank","noreferrer")}}at([k(),lt("design:type",Array)],W.prototype,"_messages",void 0);const dt=[z`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none}:host .root.compact{padding:0}:host .root.compact .coworker .coworker__person-image{height:40px;width:40px;border-radius:40px;--person-avatar-size:40px;margin-right:12px}:host .root.compact .coworker .coworker__name{font-size:14px}:host .root.compact .coworker .coworker__title{font-size:12px}:host .root .subtitle{color:var(--organization-sub-title-color,var(--neutral-foreground-hint));font-size:14px;margin:0 20px 8px}:host .root .divider{display:flex;background:var(--organization-coworker-border-color,var(--neutral-stroke-rest));height:1px;margin:26px 20px 18px}:host .root .org-member{height:74px;box-sizing:border-box;border-radius:2px;padding:12px;display:flex;align-items:center;margin-inline:20px}:host .root .org-member.org-member--target{background-color:var(--organization-active-org-member-target-background-color,var(--neutral-fill-active));border:1px solid var(--organization-active-org-member-border-color,var(--accent-foreground-rest))}:host .root .org-member:not(.org-member--target){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest))}:host .root .org-member:not(.org-member--target):hover{cursor:pointer;background-color:var(--organization-hover-color,var(--neutral-fill-hover))}:host .root .org-member .org-member__person{flex-grow:1}:host .root .org-member .org-member__person .org-member__person-image{--person-avatar-size:var(--organization-member-person-avatar-size, 40px)}:host .root .org-member .org-member__details{flex-grow:1}:host .root .org-member .org-member__details .org-member__name{font-size:16px;color:var(--organization-title-color,var(--neutral-foreground-rest));font-weight:600}:host .root .org-member .org-member__details .org-member__department,:host .root .org-member .org-member__details .org-member__title{font-weight:14px;color:var(--organization-sub-title-color,var(--neutral-foreground-hint))}:host .root .org-member__separator:not(:last-child){border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));box-sizing:border-box;width:0;margin:0 50%;height:14px}:host .root .coworker{display:flex;align-items:center;padding:10px 20px}:host .root .coworker:hover{cursor:pointer;background-color:var(--organization-coworker-hover-color,var(--neutral-fill-hover))}:host .root .coworker .coworker__person{height:46px;border-radius:46px;margin-right:8px}:host .root .coworker .coworker__person .coworker__person-image{--person-avatar-size:var(--organization-coworker-person-avatar-size, 40px)}:host .root .direct-report__compact{padding:12px 20px}:host .root .direct-report__compact .direct-report{margin-right:4px;padding:4px 0;cursor:pointer}:host .root .direct-report-list{border:1px solid var(--organization-coworker-border-color,var(--neutral-stroke-rest));margin-inline:20px}:host .root .direct-report-list .org-member--direct-report{border:none;cursor:pointer;margin-inline:0}:host .root .direct-report-list .org-member--direct-report .direct-report__person-image{--person-avatar-size:var(--organization-direct-report-person-avatar-size, 38px)}[dir=rtl] .org-member .org-member__more{transform:scaleX(-1);filter:fliph;filter:"FlipH"}@media (forced-colors:active) and (prefers-color-scheme:dark){:host svg,:host svg>path{fill:rgb(255,255,255)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}@media (forced-colors:active) and (prefers-color-scheme:light){:host svg,:host svg>path{fill:rgb(0,0,0)!important;fill-rule:nonzero!important;clip-rule:nonzero!important}}
`],pt={reportsToSectionTitle:"Reports to",directReportsSectionTitle:"Direct reports",organizationSectionTitle:"Organization",youWorkWithSubSectionTitle:"You work with",userWorksWithSubSectionTitle:"works with"};var pe=function(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},he=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const ht=()=>{se(),D("organization",B)};class B extends I{static get styles(){return dt}get strings(){return pt}constructor(e,t){super(),this._state=e,this._me=t}clearState(){super.clearState(),this._state=void 0,this._me=void 0}get displayName(){const{person:e,directReports:t}=this._state;return!e.manager&&(t!=null&&t.length)?`${this.strings.directReportsSectionTitle} (${t.length})`:this.strings.reportsToSectionTitle}get cardTitle(){return this.strings.organizationSectionTitle}renderIcon(){return p(h.Organization)}renderCompactView(){var e;let t;if(!(!((e=this._state)===null||e===void 0)&&e.person))return null;const{person:o,directReports:i}=this._state;if(o)o.manager?t=this.renderCoworker(o.manager):i!=null&&i.length&&(t=this.renderCompactDirectReports());else return null;return a`
        <div class="root compact">
          ${t}
        </div>
      `}renderFullView(){var e;let t;if(!(!((e=this._state)===null||e===void 0)&&e.person))return null;const{person:o,directReports:i,people:n}=this._state;if(!o&&!i&&!n)return null;{const s=this.renderManagers(),l=this.renderCurrentUser(),d=this.renderDirectReports(),c=this.renderCoworkers();t=a`
          ${s} ${l} ${d} ${c}
        `}return a`
       <div class="root" dir=${this.direction}>
         ${t}
       </div>
     `}renderManager(e){return y`
      <div
        class="org-member"
        @keydown=${t=>{(t.code==="Enter"||t.code===" ")&&this.navigateCard(e)}}
        @click=${()=>this.navigateCard(e)}
      >
        <div class="org-member__person">
          <mgt-person
            class="org-member__person-image"
            .personDetails=${e}
            .fetchImage=${!0}
            view="twolines"
            .showPresence=${!0}
          ></mgt-person>
        </div>
        <div tabindex="0" class="org-member__more">
          ${p(h.ExpandRight)}
        </div>
      </div>
      <div class="org-member__separator"></div>
     `}renderManagers(){const{person:e}=this._state;if(!(e!=null&&e.manager))return null;const t=[];let o=e;for(;o.manager;)t.push(o.manager),o=o.manager;return t.length?t.reverse().map(i=>this.renderManager(i)):null}renderDirectReports(){const{directReports:e}=this._state;return e!=null&&e.length?a`
      <div class="org-member__separator"></div>
      <div class="direct-report-list">
        ${e.map(t=>y`
            <div
              class="org-member org-member--direct-report"
              @keydown=${o=>{(o.code==="Enter"||o.code===" ")&&this.navigateCard(t)}}
              @click=${()=>this.navigateCard(t)}
            >
              <div class="org-member__person">
                <mgt-person
                  class="org-member__person-image"
                  .personDetails=${t}
                  .fetchImage=${!0}
                  .showPresence=${!0}
                  view="twolines"
                ></mgt-person>
              </div>
              <div tabindex="0" class="org-member__more">
                ${p(h.ExpandRight)}
              </div>
            </div>
          `)}
      </div>
     `:null}renderCompactDirectReports(){const{directReports:e}=this._state;return a`
      <div class="direct-report__compact">
        ${e.slice(0,6).map(t=>y`
            <div
              class="direct-report"
              @keydown=${o=>{(o.code==="Enter"||o.code===" ")&&this.navigateCard(t)}}
              @click=${()=>this.navigateCard(t)}
            >
              <mgt-person
                class="direct-report__person-image"
                .personDetails=${t}
                .fetchImage=${!0}
                .showPresence=${!0}
                view="twolines"
              ></mgt-person>
            </div>
          `)}
      </div>
    `}renderCurrentUser(){const{person:e}=this._state;return y`
       <div class="org-member org-member--target">
         <div class="org-member__person">
           <mgt-person
              class="org-member__person-image"
             .personDetails=${e}
             .fetchImage=${!0}
             .showPresence=${!0}
             view="twolines"
           ></mgt-person>
         </div>
       </div>
     `}renderCoworker(e){return y`
      <div
        class="coworker"
        @keydown=${t=>{(t.code==="Enter"||t.code===" ")&&this.navigateCard(e)}}
        @click=${()=>this.navigateCard(e)}
      >
        <div class="coworker__person">
          <mgt-person
            class="coworker__person-image"
            .personDetails=${e}
            .fetchImage=${!0}
            .showPresence=${!0}
            view="twolines"
          ></mgt-person>
        </div>
      </div>
    `}renderCoworkers(){const{people:e}=this._state;if(!(e!=null&&e.length))return null;const t=this._me.id===this._state.person.id?this.strings.youWorkWithSubSectionTitle:`${this._state.person.givenName} ${this.strings.userWorksWithSubSectionTitle}`;return a`
       <div class="divider"></div>
       <div class="subtitle" tabindex="0">${t}</div>
       <div>
         ${e.slice(0,6).map(o=>this.renderCoworker(o))}
       </div>
     `}}pe([k(),he("design:type",Object)],B.prototype,"_state",void 0);pe([k(),he("design:type",Object)],B.prototype,"_me",void 0);const ut=[z`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host .loading,:host .no-data{margin:0 20px;display:flex;justify-content:center}:host .no-data{font-style:normal;font-weight:600;font-size:14px;color:var(--font-color,#323130);line-height:19px}:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{position:relative;user-select:none;background-color:var(--profile-background-color,--neutral-layer-1)}:host .root{padding:20px 0}:host .root.compact{padding:0}:host .root .title{font-size:14px;font-weight:600;color:var(--profile-title-color,var(--neutral-foreground-rest));margin:0 20px 12px}:host .root section{margin-bottom:24px;padding:0 20px}:host .root section:last-child{margin:0}:host .root section .section__title{font-size:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root section .section__content{display:flex;flex-direction:column;margin-top:10px}:host .root .token-list{display:flex;flex-flow:row wrap;margin-top:-10px}:host .root .token-list .token-list__item{text-overflow:ellipsis;white-space:nowrap;display:inline-block;overflow:hidden;font-size:14px;align-items:center;background:var(--profile-token-item-background-color,var(--neutral-fill-secondary-rest));border-radius:2px;max-height:28px;padding:4px 8px;margin-right:10px;margin-top:10px;color:var(--profile-token-item-color,var(--neutral-foreground-rest))}:host .root .token-list .token-list__item:last-child{margin-right:initial}:host .root .token-list .token-list__item.overflow{display:none}:host .root .token-list .token-list__item.token-list__item--show-overflow{cursor:pointer;user-select:unset;background:0 0;color:var(--profile-token-overflow-color,var(--accent-foreground-rest))}:host .root .data-list__item{margin-bottom:20px}:host .root .data-list__item:last-child{margin-bottom:initial}:host .root .data-list__item .data-list__item__header{display:flex;justify-content:space-between;align-items:center}:host .root .data-list__item .data-list__item__content{font-size:12px;line-height:16px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));margin-top:4px}:host .root .data-list__item .data-list__item__title{font-size:14px;line-height:16px;color:var(--profile-title-color,var(--neutral-foreground-rest))}:host .root .data-list__item .data-list__item__date-range{color:var(--profile-section-title-color,var(--neutral-foreground-hint));font-size:10px;line-height:12px}:host .root .language__proficiency{opacity:.77}:host .root .work-position .work-position__company{color:#023b8f}:host .root .work-position .work-position__location{font-size:10px;color:var(--profile-section-title-color,var(--neutral-foreground-hint));line-height:16px}:host .root .educational-activity .educational-activity__degree{font-size:12px;line-height:14px;color:var(--profile-section-title-color,var(--neutral-foreground-hint))}:host .root .birthday{display:flex;align-items:center;margin-top:-6px}:host .root .birthday .birthday__icon{margin-right:8px}:host .root .birthday .birthday__date{font-size:12px;color:var(--profile-title-color,var(--neutral-foreground-rest))}[dir=rtl] .token-list__item{margin-right:0!important}
`],gt={SkillsAndExperienceSectionTitle:"Skills & Experience",AboutCompactSectionTitle:"About",SkillsSubSectionTitle:"Skills",LanguagesSubSectionTitle:"Languages",WorkExperienceSubSectionTitle:"Work Experience",EducationSubSectionTitle:"Education",professionalInterestsSubSectionTitle:"Professional Interests",personalInterestsSubSectionTitle:"Personal Interests",birthdaySubSectionTitle:"Birthday",currentYearSubtitle:"Current",socialMediaSubSectionTitle:"Social Media"};var ft=function(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},Z=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const vt=()=>D("profile",V);class V extends I{static get styles(){return ut}get strings(){return gt}get displayName(){return this.strings.SkillsAndExperienceSectionTitle}get cardTitle(){return this.strings.AboutCompactSectionTitle}get hasData(){var e,t;if(!this.profile)return!1;const{languages:o,skills:i,positions:n,educationalActivities:s}=this.profile;return[this._birthdayAnniversary,(e=this._personalInterests)===null||e===void 0?void 0:e.length,(t=this._professionalInterests)===null||t===void 0?void 0:t.length,o==null?void 0:o.length,i==null?void 0:i.length,n==null?void 0:n.length,s==null?void 0:s.length].filter(l=>!!l).length>0}get profile(){return this._profile}set profile(e){e!==this._profile&&(this._profile=e,this._birthdayAnniversary=e!=null&&e.anniversaries?e.anniversaries.find(this.isBirthdayAnniversary):null,this._personalInterests=e!=null&&e.interests?e.interests.filter(this.isPersonalInterest):null,this._professionalInterests=e!=null&&e.interests?e.interests.filter(this.isProfessionalInterest):null)}constructor(e){super(),this.isPersonalInterest=t=>{var o;return(o=t.categories)===null||o===void 0?void 0:o.includes("personal")},this.isProfessionalInterest=t=>{var o;return(o=t.categories)===null||o===void 0?void 0:o.includes("professional")},this.isBirthdayAnniversary=t=>t.type==="birthday",this.profile=e}renderIcon(){return p(h.Profile)}clearState(){super.clearState(),this.profile=null}renderCompactView(){return a`
       <div class="root compact" dir=${this.direction}>
         ${this.renderSubSections().slice(0,2)}
       </div>
     `}renderFullView(){return this.initPostRenderOperations(),a`
       <div class="root" dir=${this.direction}>
         ${this.renderSubSections()}
       </div>
     `}renderSubSections(){return[this.renderSkills(),this.renderBirthday(),this.renderLanguages(),this.renderWorkExperience(),this.renderEducation(),this.renderProfessionalInterests(),this.renderPersonalInterests()].filter(t=>!!t)}renderLanguages(){var e;const{languages:t}=this._profile;if(!(t!=null&&t.length))return null;const o=[];for(const n of t){let s=null;!((e=n.proficiency)===null||e===void 0)&&e.length&&(s=a`
           <span class="language__proficiency" tabindex="0">
             &nbsp;(${n.proficiency})
           </span>
         `),o.push(a`
         <div class="token-list__item language">
           <span class="language__title" tabindex="0">${n.displayName}</span>
           ${s}
         </div>
       `)}const i=o.length?this.strings.LanguagesSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${i}</div>
         <div class="section__content">
           <div class="token-list">
             ${o}
           </div>
         </div>
       </section>
     `}renderSkills(){const{skills:e}=this._profile;if(!(e!=null&&e.length))return null;const t=[];for(const i of e)t.push(a`
         <div class="token-list__item skill" tabindex="0">
           ${i.displayName}
         </div>
       `);const o=t.length?this.strings.SkillsSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${o}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderWorkExperience(){var e,t,o,i,n;const{positions:s}=this._profile;if(!(s!=null&&s.length))return null;const l=[];for(const c of this._profile.positions)(c.detail.description||c.detail.jobTitle!=="")&&l.push(a`
           <div class="data-list__item work-position">
             <div class="data-list__item__header">
               <div class="data-list__item__title" tabindex="0">${(e=c.detail)===null||e===void 0?void 0:e.jobTitle}</div>
               <div class="data-list__item__date-range" tabindex="0">
                 ${this.getDisplayDateRange(c.detail)}
               </div>
             </div>
             <div class="data-list__item__content">
               <div class="work-position__company" tabindex="0">
                 ${(o=(t=c==null?void 0:c.detail)===null||t===void 0?void 0:t.company)===null||o===void 0?void 0:o.displayName}
               </div>
               <div class="work-position__location" tabindex="0">
                 ${this.displayLocation((n=(i=c==null?void 0:c.detail)===null||i===void 0?void 0:i.company)===null||n===void 0?void 0:n.address)}
               </div>
             </div>
           </div>
         `);const d=l.length?this.strings.WorkExperienceSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${d}</div>
         <div class="section__content">
           <div class="data-list">
             ${l}
           </div>
         </div>
       </section>
     `}renderEducation(){const{educationalActivities:e}=this._profile;if(!(e!=null&&e.length))return null;const t=[];for(const i of e)t.push(a`
         <div class="data-list__item educational-activity">
           <div class="data-list__item__header">
             <div class="data-list__item__title" tabindex="0">${i.institution.displayName}</div>
             <div class="data-list__item__date-range" tabindex="0">
               ${this.getDisplayDateRange(i)}
             </div>
           </div>
           ${i.program.displayName?a`<div class="data-list__item__content">
                  <div class="educational-activity__degree" tabindex="0">
                  ${i.program.displayName}
                </div>`:T}
         </div>
       `);const o=t.length?this.strings.EducationSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${o}</div>
         <div class="section__content">
           <div class="data-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderProfessionalInterests(){var e;if(!(!((e=this._professionalInterests)===null||e===void 0)&&e.length))return null;const t=[];for(const i of this._professionalInterests)t.push(a`
         <div class="token-list__item interest interest--professional" tabindex="0">
           ${i.displayName}
         </div>
       `);const o=t.length?this.strings.professionalInterestsSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${o}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderPersonalInterests(){var e;if(!(!((e=this._personalInterests)===null||e===void 0)&&e.length))return null;const t=[];for(const i of this._personalInterests)t.push(a`
         <div class="token-list__item interest interest--personal" tabindex="0">
           ${i.displayName}
         </div>
       `);const o=t.length?this.strings.personalInterestsSubSectionTitle:"";return a`
       <section>
         <div class="section__title" tabindex="0">${o}</div>
         <div class="section__content">
           <div class="token-list">
             ${t}
           </div>
         </div>
       </section>
     `}renderBirthday(){var e;return!((e=this._birthdayAnniversary)===null||e===void 0)&&e.date?a`
       <section>
         <div class="section__title" tabindex="0">Birthday</div>
         <div class="section__content">
           <div class="birthday">
             <div class="birthday__icon">
               ${p(h.Birthday)}
             </div>
             <div class="birthday__date" tabindex="0">
               ${this.getDisplayDate(new Date(this._birthdayAnniversary.date))}
             </div>
           </div>
         </div>
       </section>
     `:null}getDisplayDate(e){return e.toLocaleString("default",{day:"numeric",month:"long"})}getDisplayDateRange(e){if(!e.startMonthYear)return T;const t=new Date(e.startMonthYear).getFullYear();if(t===0||t===1)return T;const o=e.endMonthYear?new Date(e.endMonthYear).getFullYear():this.strings.currentYearSubtitle;return`${t} — ${o}`}displayLocation(e){return e!=null&&e.city?e.state?`${e.city}, ${e.state}`:e.city:T}initPostRenderOperations(){setTimeout(()=>{try{this.shadowRoot.querySelectorAll("section").forEach(t=>{this.handleTokenOverflow(t)})}catch{}},0)}handleTokenOverflow(e){const t=e.querySelectorAll(".token-list");if(t!=null&&t.length)for(const o of Array.from(t)){const i=o.querySelectorAll(".token-list__item");if(!(i!=null&&i.length))continue;let n=null,s=i[0].getBoundingClientRect();const l=o.getBoundingClientRect(),d=s.height*2+l.top;for(let c=0;c<i.length-1;c++)if(s=i[c].getBoundingClientRect(),s.top>d){n=Array.from(i).slice(c,i.length);break}if(n){n.forEach(_=>_.classList.add("overflow"));const c=document.createElement("div");c.classList.add("token-list__item"),c.classList.add("token-list__item--show-overflow"),c.tabIndex=0,c.innerText=`+ ${n.length} more`;const f=()=>{c.remove(),n.forEach(_=>_.classList.remove("overflow"))};c.addEventListener("click",()=>{f()}),c.addEventListener("keydown",_=>{_.code==="Enter"&&f()}),o.appendChild(c)}}}}ft([b({attribute:!1}),Z("design:type",Object),Z("design:paramtypes",[Object])],V.prototype,"profile",null);const mt=()=>{const r=[];return m.sections.files&&r.push("Sites.Read.All"),m.sections.mailMessages&&(r.push("Mail.Read"),r.push("Mail.ReadBasic")),m.sections.organization&&(r.push("User.Read.All"),m.sections.organization.showWorksWith&&r.push("People.Read.All")),m.sections.profile&&r.push("User.Read.All"),m.useContactApis&&r.push("Contacts.Read"),r.indexOf("User.Read.All")<0&&(r.push("User.ReadBasic.All"),r.push("User.Read")),r.indexOf("People.Read.All")<0&&r.push("People.Read"),m.isSendMessageVisible&&r.push("Chat.ReadWrite"),[...new Set(r)]},bt={showMoreSectionButton:"Show more",endOfCard:"End of the card",quickMessage:"Send a quick message",expandDetailsLabel:"Expand details",sendMessageLabel:"Send message",emailButtonLabel:"Email",callButtonLabel:"Call",chatButtonLabel:"Chat",closeCardLabel:"Close card",videoButtonLabel:"Video",goBackLabel:"Go Back"};var v=function(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},u=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},ee=function(r,e,t,o){function i(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function l(f){try{c(o.next(f))}catch(_){s(_)}}function d(f){try{c(o.throw(f))}catch(_){s(_)}}function c(f){f.done?n(f.value):i(f.value).then(l,d)}c((o=o.apply(r,e||[])).next())})};const St=()=>{ze(Ne,et,Ke,Ze,Oe,We),D("person-card",g),He(),nt(),ht(),ct(),Ue(),vt(),customElements.get(De("person"))||se()};class g extends ne{static get styles(){return tt}get strings(){return bt}static get requiredScopes(){return mt()}get personDetails(){return this._personDetails}set personDetails(e){this._personDetails!==e&&(this._personDetails=e,this.personImage=this.getImage())}get personQuery(){return this._personQuery}set personQuery(e){this._personQuery!==e&&(this._personQuery=e,this.personDetails=null,this._cardState=null)}get userId(){return this._userId}set userId(e){e!==this._userId&&(this._userId=e,this.personDetails=null,this._cardState=null)}get internalPersonDetails(){var e;return((e=this._cardState)===null||e===void 0?void 0:e.person)||this.personDetails}constructor(){super(),this.isSendingMessage=!1,this.goBack=()=>{var e;if(!(!((e=this._history)===null||e===void 0)&&e.length))return;const t=this._history.pop();this._currentSection=null;const o=this.renderRoot.querySelector("fluent-tab");o&&o.click(),this._cardState=t.state,this._personDetails=t.state.person,this.personImage=t.personImage,this.loadSections()},this.renderContent=()=>{var e;if(!this.internalPersonDetails)return this.renderNoData();const t=this.internalPersonDetails,o=this.getImage();if(this.hasTemplate("default"))return this.renderTemplate("default",{person:this.internalPersonDetails,personImage:o});let i;i=this.strings.closeCardLabel;const n=this.isExpanded?a`
           <div class="close-card-container">
             <fluent-button 
              appearance="lightweight" 
              class="close-button" 
              aria-label=${i}
              @click=${this.closeCard} >
               ${p(h.Close)}
             </fluent-button>
           </div>
         `:null;i=this.strings.goBackLabel;const s=!((e=this._history)===null||e===void 0)&&e.length?a`
            <div class="nav">
              <fluent-button 
                appearance="lightweight"
                class="nav__back" 
                aria-label=${i} 
                @keydown=${this.handleGoBack}
                @click=${this.goBack}>${p(h.Back)}
               </fluent-button>
            </div>
          `:null;let l=this.renderTemplate("person-details",{person:this.internalPersonDetails,personImage:o});if(!l){const f=this.renderPerson(),_=this.renderContactIcons(t);l=a`
         ${f} ${_}
       `}const d=this.isExpanded?this.renderExpandedDetails():this.renderExpandedDetailsButton();this._windowHeight=window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight,this._windowHeight<250&&(this._smallView=!0);const c=this.lockTabNavigation?a`<div @keydown=${this.handleEndOfCard} aria-label=${this.strings.endOfCard} tabindex="0" id="end-of-container"></div>`:a``;return a`
      <div class="root" dir=${this.direction}>
        <div class=${E({small:this._smallView})}>
          ${s}
          ${n}
          <div class="person-details-container">${l}</div>
          <div class="expanded-details-container">${d}</div>
          ${c}
        </div>
      </div>
     `},this.handleEndOfCard=e=>{if(e&&e.code==="Tab"){const t=this.renderRoot.querySelector("#end-of-container");if(t){t.blur();const o=this.renderRoot.querySelector("mgt-person");o&&o.focus()}}},this.closeCard=()=>{this.updateCurrentSection(null),this.isExpanded=!1},this.sendQuickMessage=()=>ee(this,void 0,void 0,function*(){const e=this._chatInput.trim();if(!(e!=null&&e.length))return;const t=this.personDetails,o=this._me.userPrincipalName;this.isSendingMessage=!0;const i=yield Re(this._graph,t.userPrincipalName,o),n={body:{content:e}};yield Ee(this._graph,i.id,n),this.isSendingMessage=!1,this.clearInputData()}),this.emailUser=()=>{const e=this.internalPersonDetails;if(e){const t=P(e);t&&window.open("mailto:"+t,"_blank","noreferrer")}},this.callUser=()=>{var e,t;const o=this.internalPersonDetails,i=this.internalPersonDetails;if(!((e=o==null?void 0:o.businessPhones)===null||e===void 0)&&e.length){const n=o.businessPhones[0];n&&window.open("tel:"+n,"_blank","noreferrer")}else if(!((t=i==null?void 0:i.phones)===null||t===void 0)&&t.length){const s=this.getPersonBusinessPhones(i)[0];s&&window.open("tel:"+s,"_blank","noreferrer")}},this.chatUser=(e=null)=>{const t=this.personDetails;if(t!=null&&t.userPrincipalName){let i=`https://teams.microsoft.com/l/chat/0/0?users=${t.userPrincipalName}`;e!=null&&e.length&&(i+=`&message=${e}`);const n=()=>window.open(i,"_blank","noreferrer");$.isAvailable?$.executeDeepLink(i,s=>{s||n()}):n()}},this.videoCallUser=()=>{const e=this.personDetails;if(e!=null&&e.userPrincipalName||e!=null&&e.mail){const o=`https://teams.microsoft.com/l/call/0/0?users=${e.userPrincipalName||e.mail}&withVideo=true`,i=()=>window.open(o,"_blank");$.isAvailable?$.executeDeepLink(o,n=>{n||i()}):i()}},this.showExpandedDetails=()=>{const e=this.renderRoot.querySelector(".root");e!=null&&e.animate&&e.animate([{height:"auto",transformOrigin:"top left"},{height:"auto",transformOrigin:"top left"}],{duration:1e3,easing:"ease-in-out",fill:"both"}),this.isExpanded=!0,this.fireCustomEvent("expanded",null,!0)},this.sendQuickMessageOnEnter=e=>{e.code==="Enter"&&this.sendQuickMessage()},this.handleGoBack=e=>{e.code==="Enter"&&this.goBack()},this._chatInput="",this._currentSection=null,this._history=[],this.sections=[],this._graph=null}navigate(e){this._history.push({personDetails:this.personDetails,personImage:this.getImage(),state:this._cardState}),this.personDetails=e,this._cardState=null,this.personImage=null,this._currentSection=null,this.sections=[],this._chatInput=""}clearHistory(){var e;if(this._currentSection=null,!(!((e=this._history)===null||e===void 0)&&e.length))return;const t=this._history[0];this._history=[],this._cardState=t.state,this._personDetails=t.personDetails,this.personImage=t.personImage,this.loadSections()}args(){return[this.providerState,this.personDetails,this.personQuery,this.personImage,this.userId]}renderNoData(){return this.renderTemplate("no-data",null)||a``}renderPerson(){return y`
      <mgt-person
        class="person-image"
        .personDetails=${this.internalPersonDetails}
        .personImage=${this.getImage()}
        .personPresence=${this.personPresence}
        .showPresence=${this.showPresence}
        view="threelines"
      ></mgt-person>
    `}renderPersonSubtitle(e){if(e=e||this.internalPersonDetails,!(!Me(e)||!e.department))return a`
       <div class="department">${e.department}</div>
     `}renderContactIcons(e){e=e||this.internalPersonDetails;const t=e;let o,i;P(e)&&(o=`${this.strings.emailButtonLabel} ${e.displayName}`,i=a`
        <fluent-button class="icon"
          aria-label=${o}
          @click=${this.emailUser}>
          ${p(h.SmallEmail)}
        </fluent-button>
      `);let n;(t!=null&&t.userPrincipalName||t!=null&&t.mail)&&(o=`${this.strings.chatButtonLabel} ${e.displayName}`,n=a`
        <fluent-button class="icon"
          aria-label=${o}
          @click=${this.chatUser}>
          ${p(h.SmallChat)}
        </fluent-button>
       `);let s;(t!=null&&t.userPrincipalName||t!=null&&t.mail)&&(o=`${this.strings.videoButtonLabel} ${e.displayName}`,s=a`
        <fluent-button class="icon"
          aria-label=${o}
          @click=${this.videoCallUser}>
          ${p(h.Video)}
        </fluent-button>
      `);let l;return this.hasPhone&&(o=`${this.strings.callButtonLabel} ${t.displayName}`,l=a`
         <fluent-button class="icon"
          aria-label=${o}
          @click=${this.callUser}>
          ${p(h.Call)}
        </fluent-button>
       `),a`
       <div class="base-icons">
         ${i} ${n} ${s} ${l}
       </div>
     `}renderExpandedDetailsButton(){return a`
      <fluent-button
        aria-label=${this.strings.expandDetailsLabel}
        class="expanded-details-button"
        @click=${this.showExpandedDetails}
      >
        ${p(h.ExpandDown)}
      </fluent-button>
     `}renderExpandedDetails(){if(!this._cardState&&this._isStateLoading)return y`
         <div class="loading">
           <mgt-spinner></mgt-spinner>
         </div>
       `;j.globalProvider.state===K.SignedOut&&this.loadSections();const t=this.renderSectionNavigation();return a`
      <div class="section-nav">
        ${t}
      </div>
      <hr class="divider"/>
      <div
        class="section-host ${this._smallView?"small":""} ${this._smallView?"small":""}"
        @wheel=${o=>this.handleSectionScroll(o)}
        tabindex=0
      ></div>
    `}renderSectionNavigation(){if(!this.sections||this.sections.length<2&&!this.hasTemplate("additional-details"))return;const e=this._currentSection?this.sections.indexOf(this._currentSection):-1,t=this.sections.map((n,s)=>{const l=n.tagName.toLowerCase(),d=E({active:s===e,"section-nav__icon":!0});return a`
        <fluent-tab
          id="${l}-Tab"
          class=${d}
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(n)}"
          @click=${()=>this.updateCurrentSection(n)}
        >
          ${n.renderIcon()}
        </fluent-tab>
      `}),o=this.sections.map(n=>a`
        <fluent-tab-panel slot="tabpanel">
          <div class="inserted">
            <div class="title">${n.cardTitle}</div>
            ${this._currentSection?n.asFullView():null}
          </div>
        </fluent-tab-panel>
      `),i=E({active:e===-1,"section-nav__icon":!0,overviewTab:!0});return a`
      <fluent-tabs
        orientation="horizontal"
        activeindicator
        @wheel=${n=>this.handleSectionScroll(n)}
      >
        <fluent-tab
          class="${i}"
          slot="tab"
          @keyup="${()=>this.updateCurrentSection(null)}"
          @click=${()=>this.updateCurrentSection(null)}
        >
          <div>${p(h.Overview)}</div>
        </fluent-tab>
        ${t}
        <fluent-tab-panel slot="tabpanel" >
          <div class="overview-panel">${this._currentSection?null:this.renderOverviewSection()}</div>
        </fluent-tab-panel>
        ${o}
      </fluent-tabs>
    `}renderOverviewSection(){const e=this.sections.map(o=>a`
        <div class="section">
          <div class="section__header">
            <div class="section__title" tabindex=0>${o.displayName}</div>
              <fluent-button
                appearance="lightweight"
                class="section__show-more"
                @click=${()=>this.updateCurrentSection(o)}
              >
                ${this.strings.showMoreSectionButton}
              </fluent-button>
          </div>
          <div class="section__content">${o.asCompactView()}</div>
        </div>
      `),t=this.renderTemplate("additional-details",{person:this.internalPersonDetails,personImage:this.getImage(),state:this._cardState});return t&&e.splice(1,0,a`
           <div class="section">
             <div class="additional-details">${t}</div>
           </div>
         `),a`
       <div class="sections">
          ${this.renderMessagingSection()}
          ${e}
       </div>
     `}renderCurrentSection(){var e;if(!(!(!((e=this.sections)===null||e===void 0)&&e.length)&&!this.hasTemplate("additional-details")))return this.sections.length===1&&!this.hasTemplate("additional-details")?a`
         ${this.sections[0].asFullView()}
       `:this._currentSection?a`
       ${this._currentSection.asFullView()}
     `:this.renderOverviewSection()}renderMessagingSection(){const e=this.personDetails,t=this._me.userPrincipalName,o=this._chatInput;if((e==null?void 0:e.userPrincipalName)!==t)return m.isSendMessageVisible?a`
      <div class="message-section">
        <fluent-text-field
          autocomplete="off"
          appearance="outline"
          placeholder="${this.strings.quickMessage}"
          .value=${o}
          @input=${i=>{this._chatInput=i.target.value,this.requestUpdate()}}
          @keydown="${i=>this.sendQuickMessageOnEnter(i)}">
        </fluent-text-field>
        <fluent-button class="send-message-icon"
          aria-label=${this.strings.sendMessageLabel}
          @click=${this.sendQuickMessage}
          ?disabled=${this.isSendingMessage}>
          ${this.isSendingMessage?p(h.Confirmation):p(h.Send)}
        </fluent-button>
      </div>
      `:T}loadState(){var e,t,o;return ee(this,void 0,void 0,function*(){if(this._cardState)return;if(!this.personDetails&&this.inheritDetails){let d=this.parentElement;for(;d&&d.tagName!==`${re.prefix}-PERSON`.toUpperCase();)d=d.parentElement;const c=d.personDetails||d.personDetailsInternal;d&&c&&(this.personDetails=c,this.personImage=d.personImage)}const i=j.globalProvider;if(!i||i.state!==K.SignedIn)return;const n=i.graph.forComponent(this);if(this._graph=n,this._isStateLoading=!0,this._me||(this._me=yield j.me()),this.personDetails){const d=this.personDetails,c=d.userPrincipalName||d.id;if(c&&!P(d)){const f=yield X(n,c);this.personDetails=f,this.personImage=this.getImage()}}else if(this.userId||this.personQuery==="me"){const d=yield X(n,this.userId);this.personDetails=d,this.personImage=this.getImage()}else if(this.personQuery){const d=yield Le(n,this.personQuery,1);d!=null&&d.length&&(this.personDetails=d[0],yield Ae(n,this.personDetails,m.useContactApis).then(c=>{c&&(this.personDetails.personImage=c,this.personImage=c)}))}const s={activity:"Offline",availability:"Offline",id:null};if(!this.personPresence&&this.showPresence)try{!((e=this.personDetails)===null||e===void 0)&&e.id?this.personPresence=yield Be(n,this.personDetails.id):this.personPresence=s}catch{this.personPresence=s}const l=((t=this.personDetails)===null||t===void 0?void 0:t.id)||((o=this.personDetails)===null||o===void 0?void 0:o.userPrincipalName);l&&(this._cardState=yield je(n,this.personDetails,this._me===l)),this.loadSections(),this._isStateLoading=!1})}get hasPhone(){var e,t;const o=this.internalPersonDetails,i=this.internalPersonDetails;return!!(!((e=o==null?void 0:o.businessPhones)===null||e===void 0)&&e.length)||!!(!((t=i==null?void 0:i.phones)===null||t===void 0)&&t.length)}loadSections(){if(this.sections=[],!this.internalPersonDetails)return;const e=new de(this.internalPersonDetails);if(e.hasData&&this.sections.push(e),!this._cardState)return;const{person:t,directReports:o,messages:i,files:n,profile:s}=this._cardState;if(m.sections.organization&&(t!=null&&t.manager||o!=null&&o.length)&&this.sections.push(new B(this._cardState,this._me)),m.sections.mailMessages&&(i!=null&&i.length)&&this.sections.push(new W(i)),m.sections.files&&(n!=null&&n.length)&&this.sections.push(new Fe(n)),m.sections.profile&&s){const l=new V(s);l.hasData&&this.sections.push(l)}}getImage(){if(this.personImage)return this.personImage;const e=this.internalPersonDetails;return e!=null&&e.personImage?e.personImage:null}clearInputData(){this._chatInput="",this.requestUpdate()}getPersonBusinessPhones(e){const t=e.phones,o=[];for(const i of t)i.type==="business"&&o.push(i.number);return o}updateCurrentSection(e){if(e){const o=e.tagName.toLowerCase();this.renderRoot.querySelector(`#${o}-Tab`).click()}const t=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const o of t)o.scrollTop=0;this._currentSection=e,this.requestUpdate()}handleSectionScroll(e){const t=this.renderRoot.querySelectorAll("fluent-tab-panel");for(const o of t)o&&!(e.deltaY<0&&o.scrollTop===0)&&!(e.deltaY>0&&o.clientHeight+o.scrollTop>=o.scrollHeight-1)&&e.stopPropagation()}}v([b({attribute:"person-details",type:Object}),u("design:type",Object),u("design:paramtypes",[Object])],g.prototype,"personDetails",null);v([b({attribute:"person-query"}),u("design:type",String),u("design:paramtypes",[String])],g.prototype,"personQuery",null);v([b({attribute:"lock-tab-navigation",type:Boolean}),u("design:type",Boolean)],g.prototype,"lockTabNavigation",void 0);v([b({attribute:"user-id"}),u("design:type",String),u("design:paramtypes",[String])],g.prototype,"userId",null);v([b({attribute:"person-image",type:String}),u("design:type",String)],g.prototype,"personImage",void 0);v([b({attribute:"fetch-image",type:Boolean}),u("design:type",Boolean)],g.prototype,"fetchImage",void 0);v([b({attribute:"is-expanded",type:Boolean}),u("design:type",Boolean)],g.prototype,"isExpanded",void 0);v([b({attribute:"inherit-details",type:Boolean}),u("design:type",Boolean)],g.prototype,"inheritDetails",void 0);v([b({attribute:"show-presence",type:Boolean}),u("design:type",Boolean)],g.prototype,"showPresence",void 0);v([b({attribute:"person-presence",type:Object}),u("design:type",Object)],g.prototype,"personPresence",void 0);v([k(),u("design:type",Object)],g.prototype,"isSendingMessage",void 0);v([k(),u("design:type",Object)],g.prototype,"_cardState",void 0);v([k(),u("design:type",Boolean)],g.prototype,"_isStateLoading",void 0);v([k(),u("design:type",Object)],g.prototype,"_currentSection",void 0);export{g as MgtPersonCard,St as registerMgtPersonCardComponent};
