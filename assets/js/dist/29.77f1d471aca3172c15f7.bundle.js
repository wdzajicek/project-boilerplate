"use strict";(self.webpackChunkjavascript_notes=self.webpackChunkjavascript_notes||[]).push([[29],{29:function(t,e,s){s.r(e);var i=s(147),n=s(930),l=s(902),r=s(278);const a=".bs.collapse",o=`show${a}`,h=`shown${a}`,g=`hide${a}`,c=`hidden${a}`,_=`click${a}.data-api`,d="show",f="collapse",p="collapsing",u=`:scope .${f} .${f}`,m='[data-bs-toggle="collapse"]',C={parent:null,toggle:!0},A={parent:"(null|element)",toggle:"boolean"};class w extends r.Z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=l.Z.find(m);for(const t of s){const e=(0,i.K)(t),s=l.Z.find(e).filter((t=>t===this._element));null!==e&&s.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get DefaultType(){return A}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>w.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(n.Z.trigger(this._element,o).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(f),this._element.classList.add(p),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(f,d),this._element.style[e]="",n.Z.trigger(this._element,h)}),this._element,!0),this._element.style[e]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(n.Z.trigger(this._element,g).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,(0,i.nq)(this._element),this._element.classList.add(p),this._element.classList.remove(f,d);for(const t of this._triggerArray){const e=(0,i.dG)(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(f),n.Z.trigger(this._element,c)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(d)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=(0,i.sb)(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(m);for(const e of t){const t=(0,i.dG)(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=l.Z.find(u,this._config.parent);return l.Z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle("collapsed",!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const s=w.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===s[t])throw new TypeError(`No method named "${t}"`);s[t]()}}))}}n.Z.on(document,_,m,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=(0,i.K)(this),s=l.Z.find(e);for(const t of s)w.getOrCreateInstance(t,{toggle:!1}).toggle()})),(0,i.pF)(w),e.default=w}}]);