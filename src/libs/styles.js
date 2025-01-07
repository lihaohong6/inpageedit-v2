export const IPE_DEFAULT_CSS = `
/**
 * GNU Public License
 *
 * InPageEdit default skin
 * @author 机智的小鱼君
 */
/* 编辑器 */
.in-page-edit .mw-editsection,
.in-page-edit .hide-for-ipe {
  display: none;
}

.in-page-edit {
  color: #252525;
  font-size: 16px;
}

/* @FIX For WikiEditor dialogs */
.ssi-backdrop,
.ssi-modalOuter.in-page-edit {
  z-index: 800;
}

.in-page-edit .ssi-modalWindow {
  padding: 0;
  border-radius: 0;
  line-height: normal;
}

.in-page-edit .ssi-overflow {
  background-image: radial-gradient(
      farthest-side at 50% 0,
      rgba(26, 26, 26, 0.12),
      transparent
    ),
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(26, 26, 26, 0.12),
      transparent
    );
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 9px;
  position: relative;
  z-index: 1;
  padding-top: 0;
  padding-bottom: 0;
}

.in-page-edit .ssi-overflow:before,
.in-page-edit .ssi-overflow:after {
  content: '';
  display: block;
  background-color: #fff;
  height: 30px;
  position: relative;
  z-index: -1;
  margin: 0 0 -30px;
}

.in-page-edit .ssi-overflow:after {
  margin: 0 0 -29px;
}

.ssi-center .ssi-modalContent {
  max-height: 70vh;
  overflow-y: auto;
}

.in-page-edit .ssi-topIcons {
  text-align: center;
  box-sizing: content-box;
}

.in-page-edit .ssi-topIcons .ssi-closeIcon {
  background: 0 0;
  color: #d33;
  font-size: 20px;
  margin: 0;
  padding: 8px 12px;
}

.in-page-edit .ssi-topIcons .ssi-closeIcon:hover {
  color: #f22;
}

.in-page-edit .ssi-closeIcon:before {
  content: '✕';
  display: unset !important;
}

.in-page-edit:not(.notify) .ssi-modalTitle {
  font-style: normal;
  font-family: sans-serif;
  font-weight: bold;
  background: #ffffff;
  color: #252525;
  font-size: 1.1em;
  line-height: 1.8em;
  text-align: center;
}

.ipe-editor .editTools {
  background: #eaf3ff;
  border: 1px solid #c8ccd1;
  border-bottom: none;
  float: left;
  width: calc(100% - 1px);
}

.ipe-editor .editTools .btnGroup {
  float: left;
  padding-right: 6px;
  border-right: 1px solid #c8ccd1;
  margin: 3px;
}

.ipe-editor .editTools .btnGroup .fa-stack {
  width: 1em;
  height: 1em;
  line-height: 1;
}

.ipe-editor .editTools .btnGroup.special-tools {
  border-right: none;
  border-left: 1px solid #c8ccd1;
  padding-right: 3px;
  padding-left: 6px;
}

.ipe-editor .editTools .label {
  color: #888;
  padding-right: 6px;
  cursor: default;
}

.ipe-editor .editTools .btn {
  color: #47494d;
  font-size: 14px;
  background: none;
  box-shadow: none;
  margin: 0 2px;
  padding: 2px 6px;
}

.in-page-edit.ipe-editor .toolSelect {
  display: block;
  position: relative;
  margin: 0;
}

.in-page-edit.ipe-editor .toolSelect .label {
  color: #222222;
  background-color: #ffffff;
  background-image: linear-gradient(transparent, transparent),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzLjAwMiA2LjAwMWwtNSA1LjAwMS01LTUuMDAxeiIgZmlsbD0iIzc5Nzk3OSIvPjwvc3ZnPg==');
  background-repeat: no-repeat;
  background-position: calc(100% - 2px);
  padding: 2px 20px 2px 4px;
  border: 1px solid #c8ccd1;
  cursor: default;
}

.in-page-edit.ipe-editor .toolSelect .ul-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border: 1px solid #c8ccd1;
  position: absolute;
  z-index: 50;
  width: 100%;
  display: none;
}

.in-page-edit.ipe-editor .toolSelect .ul-list .editToolBtn {
  padding: 4px;
  cursor: pointer;
}

.in-page-edit.ipe-editor .toolSelect .ul-list .editToolBtn:hover {
  background-color: #eaf3ff;
}

.in-page-edit.ipe-editor .toolSelect:hover .ul-list {
  display: unset;
}

.ipe-editor .editArea {
  border: 1px solid #c8ccd1;
  border-top: none;
  border-radius: 0;
  max-width: 100%;
  min-width: 100%;
  min-height: 350px;
  margin: 0;
}

.notify .ssi-modalTitle {
  font-style: normal;
  font-family: inherit;
}

.in-page-edit .ssi-modalTitle .showEditNotice {
  font-size: small;
  display: block;
  line-height: 0;
}

.in-page-edit.ipe-editor .ssi-buttons {
  background-color: #eaecf0;
  color: #222;
  /* border: 1px solid #c8ccd1; */
  border-top: 0;
  padding: 1em 1em 0.5em 1em;
  margin-bottom: 0;
}

.in-page-edit .editSummary,
.in-page-edit .newSectionTitleInput {
  width: 98%;
  margin: 4px auto 8px 0.5em;
}

.in-page-edit .editOptionsLabel {
  margin: 0 auto 16px auto;
}

.in-page-edit h4 {
  margin: 2px 0 0 0;
}

.in-page-edit .btn {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #222;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 0.25em 0.8em;
  transition: all 0.1s;
}

.in-page-edit .btn:focus {
  box-shadow: inset 0 0 0 1px #36c;
}

.in-page-edit .btn.btn-primary {
  color: #fff;
  background-color: #36c;
  border-color: #36c;
}

.in-page-edit .btn.btn-primary:hover {
  background-color: #447ff5;
  border-color: #447ff5;
}

.in-page-edit .btn.btn-primary:active {
  background-color: #2a4b8d;
}

.in-page-edit .btn.btn-secondary {
  color: #252525;
  border-color: #c8ccd1;
  background-color: #f8f9fa;
}

.in-page-edit .btn.btn-secondary:hover {
  background-color: #ffffff;
  color: #454545;
}

.in-page-edit .btn.btn-secondary:active {
  border: 1px solid #36c;
}

.in-page-edit .btn.btn-danger {
  background: transparent;
  color: #d33;
  background-color: #f4f4f4;
}

.in-page-edit .btn.btn-danger:hover {
  color: #ff4242;
  background-color: #fafafa;
}

.in-page-edit .btn.btn-danger:active {
  color: #d00;
  border: 1px solid #36c;
}

.in-page-edit .btn:disabled {
  background-color: #c8ccd1 !important;
  color: #ffffff !important;
  cursor: not-allowed;
}

.in-page-edit .btn:disabled:hover {
  background-color: #c8ccd1 !important;
  color: #ffffff !important;
}

.in-page-edit .btn:disabled .ssi-countDown {
  color: #fff;
}

.in-page-edit input {
  padding: 0.25em 0.35em;
  border: 1px solid #ccc;
  border-radius: 2px;
  transition: all 0.2s;
  line-height: 1.5em;
}

.in-page-edit input:focus {
  border-color: #36c;
  box-shadow: inset 0 0 0 1px #36c;
}

.in-page-edit .dialog .ssi-modalContent {
  padding-top: 18px;
  font-size: large;
}

.in-page-edit .dialog .ssi-buttons .btn {
  margin: 0;
  padding: 0.5em;
  background: transparent;
  color: #252525;
  border: 1px solid #efefef;
  border-radius: 0;
  width: 50%;
}

.in-page-edit .dialog .ssi-buttons .btn:hover {
  background: #f8f8f8 !important;
}

.in-page-edit .btn.btn-single {
  width: 100% !important;
}

.in-page-edit .dialog .ssi-buttons .btn.btn-danger {
  color: #c33;
}

.in-page-edit .btn.btn-primary.btn-danger {
  background: #d33;
  border-color: #d33;
  color: #ffffff;
}

.in-page-edit .btn.btn-primary.btn-danger:hover {
  background: #f33;
}

.in-page-edit .btn.btn-primary.btn-danger:focus {
  background: #c22;
  border-color: #c22;
  box-shadow: inset 0 0 0 1px #fff;
}

.in-page-edit .dialog .ssi-buttons {
  padding: 0;
}

.in-page-edit .dialog .ssi-buttons .ssi-rightButtons {
  width: 100%;
}

.in-page-edit-article-link-group:before {
  content: '[';
}

.in-page-edit-article-link-group:after {
  content: ']';
}

.mw-editsection .in-page-edit-article-link-group:before {
  content: ' | ';
}

.mw-editsection .in-page-edit-article-link-group:after {
  content: '';
}

.mw-diff-undo .in-page-edit-article-link-group {
  display: none;
}

.in-page-edit .detailArea .detailBtnGroup {
  margin-left: 1.25em;
}

/** 快速差异 **/
.quick-diff .diff-hidden-history {
  color: #a8a8a8;
  text-decoration: line-through;
}

/** 个人设置 **/
.ipe-preference .preference-tabber .tab-list {
  display: flex;
  list-style: none;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
}

.ipe-preference .preference-tabber .tab-list li {
  flex: auto;
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
}

.ipe-preference .preference-tabber .tab-list li a {
  display: block;
  padding: 4px 8px;
  color: #08d;
  text-decoration: none;
}

.ipe-preference .preference-tabber .tab-list li:hover a {
  box-shadow: 0 -2px 0 rgba(0, 136, 221, 0.25) inset;
}

.ipe-preference .preference-tabber .tab-list li a.active {
  box-shadow: 0 -2px 0 #08d inset;
}

.ipe-preference .preference-tabber .tab-content {
  height: 60vh;
  overflow-y: auto;
}

.ipe-preference .preference-tabber .tab-content section {
  display: none;
}

.ipe-preference .preference-tabber .tab-content section.active {
  display: block;
}

.ipe-preference .preference-tabber .tab-content section label {
  display: block;
}

.ipe-preference #plugin-container ul {
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
}

.ipe-preference #plugin-container li:not(:last-of-type) {
  border-bottom: 1px solid #ccc;
}

.ipe-preference #plugin-container li {
  padding: 4px 30px 4px 8px;
}

.ipe-preference #plugin-container li:hover {
  background-color: #efefef;
}

.ipe-preference #plugin-container li label {
  padding: 0;
  cursor: pointer;
}

.ipe-preference #plugin-container li label input + span {
  position: absolute;
  right: 0;
}

.ipe-preference #plugin-container li .plugin-name {
  display: block;
  font-weight: bold;
}

.ipe-preference #plugin-container li .plugin-author {
  display: block;
  font-style: italic;
  font-size: 12px;
}

/* 
.ipe-preference #analysis-container ul {
  list-style: none;
  margin: 0;
}

.ipe-preference #analysis-container li > div {
  position: relative;
  color: #ffffff;
  text-shadow: 0 0 2px #222;
  background-color: #c23531;
  height: 100%;
}

.ipe-preference #analysis-container li > div > div:first-of-type {
  padding-left: 2px;
  font-weight: bold;
}

.ipe-preference #analysis-container li > div > div:last-of-type {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 2px;
}
 */

.ipe-preference .plugin-footer {
  font-size: 12px;
  font-style: italic;
  margin-top: 1rem;
}

/** 进度条 **/
.ipe-progress {
  height: 1em;
  border: 1px solid #c5c5c5;
  border-radius: 2px;
  background: white;
  overflow: hidden;
}

.ipe-progress .ipe-progress-bar {
  height: 100%;
  width: auto;
  background: #3360c3;
  animation: progress 2s linear infinite;
  opacity: 1;
}

.ipe-progress.done {
  background: #3360c3;
  transition: all 0.8s;
}

.ipe-progress.done .ipe-progress-bar {
  animation: none;
  width: 0%;
  margin: auto 0;
  opacity: 0;
  transition: all 0.8s;
}

@keyframes progress {
  from {
    margin-left: -40%;
    margin-right: 110%;
  }

  to {
    margin-left: 110%;
    margin-right: -40%;
  }
}

/* 通知框 */
.in-page-edit.notify {
  border-radius: 0;
  font-family: unset;
}

.in-page-edit.notify .ssi-modalTitle {
  background: none;
  color: unset;
}

/** 背景颜色 **/
.ssi-backdrop {
  background: rgba(255, 255, 255, 0.5);
}

/** 修改checkbox样式 **/
.in-page-edit label input[type='checkbox'] + span,
.in-page-edit label input[type='radio'] + span {
  user-select: none;
  line-height: 1.2em;
}

.in-page-edit label input[type='checkbox'] + span::before,
.in-page-edit label input[type='radio'] + span::before {
  /* 不换行空格可以保持选择框的高度 */
  content: '\\a0';
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-top: 0.15em;
  margin-right: 0.375em;
  border-radius: 2px;
  background-color: #f8f8f8;
  border: 1px solid #72777d;
  cursor: pointer;
  transition: all 0.12s;
}

.in-page-edit label input[type='radio'] + span::before {
  border-radius: 50%;
  box-sizing: border-box;
  vertical-align: text-bottom;
}

.in-page-edit label input[type='checkbox']:checked + span::before {
  content: '\\a0';
  background-color: #36c;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxnIGlkPSJjaGVja21hcmsiPjxwYXRoIGQ9Ik0xMy43NDkyKzMuNDkwOTVMNS44NjMxMisxMS42MzM3TDIuMjUwNzcrNy45NjA4MkwxLjQ4NzYrOC43NTc3OEw1Ljg2MzEyKzEzLjE5M0wxNC41MTI0KzQuMjg3OUwxMy43NDkyKzMuNDkwOTVaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvc3ZnPg==);
  background-repeat: no-repeat;
}

.in-page-edit label input[type='radio']:checked + span::before {
  border-color: #36c;
  border-width: 6px;
}

.in-page-edit label input[type='checkbox']:checked + span:hover::before {
  background-color: #447ff5;
}

.in-page-edit label input[type='radio']:checked + span:hover::before {
  border-color: #447ff5;
}

.in-page-edit label input[type='checkbox']:active + span::before,
.in-page-edit label input[type='checkbox']:focus + span::before {
  box-shadow: inset 0 0px 0px 1px rgb(255, 255, 255);
  border-color: #3366cc;
}

.in-page-edit label input[type='checkbox'],
.in-page-edit label input[type='radio'] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.in-page-edit .cm-panel label input[type='checkbox'],
.in-page-edit .cm-panel label input[type='radio'] {
  position: initial;
  clip: initial;
}

.in-page-edit label input[type='checkbox']:disabled + span::before {
  border-color: #d6d6d6;
}

.in-page-edit label input[type='radio']:disabled + span::before {
  background-color: #c8ccd1;
  border-color: #c8ccd1;
}

.in-page-edit label input[type='checkbox']:disabled:checked + span::before {
  background-color: #a0a0a0;
}

.in-page-edit label input[type='radio']:disabled:checked + span::before {
  background-color: #fff;
}

/** 右下角小工具箱 **/
#ipe-edit-toolbox {
  position: fixed;
  right: 32px;
  bottom: 32px;
  user-select: none;
  z-index: 199;
}

@media print {
  #ipe-edit-toolbox {
    display: none;
  }
}

#ipe-edit-toolbox .ipe-toolbox-btn {
  color: white;
  background: #bebebe;
  text-align: center;
  height: 35px;
  width: 35px;
  font-size: 20px;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 5px gray;
  text-shadow: 0 0 2px #4c4c4c;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

#ipe-edit-toolbox #toolbox-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 42px;
  height: 42px;
  background: #3f51b5;
  font-size: 24px;
  line-height: 1;
  margin: 0;
  transition: all 0.26s ease-in-out;
  transform: rotate(0deg);
}

#ipe-edit-toolbox #toolbox-toggle.opened {
  transform: rotate(45deg);
}

#ipe-edit-toolbox .btn-group.group1 .btn-tip-group {
  transform: translate3d(0, 100%, 0);
}

#ipe-edit-toolbox .btn-group.group2 .btn-tip-group {
  transform: translate3d(100%, 0, 0);
}

#ipe-edit-toolbox .btn-group .btn-tip-group {
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  opacity: 0;
}

#ipe-edit-toolbox .btn-group.opened .btn-tip-group {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

#ipe-edit-toolbox .btn-group.opened .btn-tip-group:nth-of-type(1),
#ipe-edit-toolbox .btn-group:not(.opened) .btn-tip-group:nth-of-type(3) {
  transition-delay: 0s;
}

#ipe-edit-toolbox .btn-group .btn-tip-group:nth-of-type(2) {
  transition-delay: 0.06s;
}

#ipe-edit-toolbox .btn-group:not(.opened) .btn-tip-group:nth-of-type(1),
#ipe-edit-toolbox .btn-group.opened .btn-tip-group:nth-of-type(3) {
  transition-delay: 0.108s;
}

/* 不显示时使其完全缩小到没有，以防被点到 */
#ipe-edit-toolbox .btn-group:not(.opened) {
  transform: scaleZ(0);
  transition-delay: 0.408s;
}

#ipe-edit-toolbox .btn-group.opened {
  transform: scaleZ(1);
}

#ipe-edit-toolbox .ipe-toolbox-btn#toolbox-toggle.click {
  box-shadow: 0 0 4px gray, 0 0 10px #444 inset;
}

#toolbox-toggle.click:before {
  content: '\\f023'; /*fa-lock*/
  font-family: 'FontAwesome';
  display: block;
  position: absolute;
  bottom: 50%;
  right: 0;
  font-size: 12px;
  transform: rotateZ(-45deg);
}

#ipe-edit-toolbox .ipe-toolbox-btn#edit-btn {
  background: #2196f3;
}

#ipe-edit-toolbox .ipe-toolbox-btn#redirectfrom-btn {
  background: #00bcd4;
}

#ipe-edit-toolbox .ipe-toolbox-btn#redirectto-btn {
  background: #009688;
}

#ipe-edit-toolbox .ipe-toolbox-btn#deletepage-btn {
  background: #e91e63;
}

#ipe-edit-toolbox .ipe-toolbox-btn#renamepage-btn {
  background: #ff5722;
}

#ipe-edit-toolbox .ipe-toolbox-btn#preference-btn {
  background: #ffc107;
}

#ipe-edit-toolbox .btn-group {
  position: absolute;
  float: right;
  list-style: none;
  margin: 0;
}

#ipe-edit-toolbox .btn-group.group1 {
  bottom: calc(35px + 6px);
  right: 2px;
}

#ipe-edit-toolbox .btn-group.group2 {
  bottom: 0;
  right: calc(35px + 6px);
}

#ipe-edit-toolbox .btn-group.group1 .btn-tip-group {
  margin-bottom: 6px;
}

#ipe-edit-toolbox .btn-group.group2 .btn-tip-group {
  margin-right: 6px;
}

#ipe-edit-toolbox .btn-group.opened {
  visibility: visible;
}

#ipe-edit-toolbox .btn-tip-group .btn-tip {
  position: absolute;
  text-align: center;
  font-size: 12px;
  width: 6em;
  right: -20px;
  top: -2.1em;
  background: white;
  padding: 0px 4px;
  box-shadow: 0 0 4px gray;
  pointer-events: none;
  display: none;
}

#ipe-edit-toolbox .btn-tip-group:hover .btn-tip {
  display: block;
}

#ipe-edit-toolbox .btn-tip-group .btn-tip:after {
  content: '';
  display: block;
  border: 5px solid transparent;
  border-right-color: #fff;
  border-bottom-color: #fff;
  position: absolute;
  bottom: -4px;
  left: calc(50% - 2.5px);
  transform: rotate(45deg);
}

/** 
 * Animate.css Lite
 * Only zoomIn & zoomOut
 **/
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}
`

export const SSI_MODAL_CSS = `
.ssi-modal .icon,
.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon,
.ssi-topIcons .ssi-displayIcon,
.ssi-topIcons .ssi-closeIcon,
.ssi-modalNavigation .ssi-modalPrev span,
.ssi-modalNavigation .ssi-modalNext span,
.notify.ssi-success .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.success,
.notify.ssi-warning .ssi-modalTitle span.success,
.notify.ssi-error .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.info,
.notify.ssi-warning .ssi-modalTitle span.warning,
.notify.ssi-error .ssi-modalTitle span.error {
  background-image: url('images/sprite.png');
}

body.ssi-modalOpen {
  overflow: hidden;
}

.ssi-backdrop {
  position: fixed;
  overflow: hidden;
  z-index: 50; /* changed by gh:lihaohong6/User:PetraMagna */
  top: 0;
  left: 0;
  background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#B3000000', endColorstr='#B3000000');
  /* IE */
}

.ssi-modalOuter {
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWrapper {
  width: 100% !important;
  margin: 0;
  border-radius: 0;
  height: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow {
  overflow: auto;
  border-radius: 0;
  min-height: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-modalContent {
  padding-bottom: 0;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-buttons {
  position: fixed;
  width: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon {
  background-position: 0px -120px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon:hover {
  background-position: 0px -96px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-center {
  display: table;
}

.ssi-center .ssi-modalWrapper {
  display: table-cell;
  vertical-align: middle;
}

.ssi-center .ssi-modalWindow {
  margin-left: auto;
  margin-right: auto;
}

.ssi-modalWrapper {
  position: relative;
  margin: 30px auto 20px;
  z-index: 1501;
}

.ssi-modalWrapper.full {
  width: 100%;
}

.ssi-modalWrapper.auto,
.ssi-modalWrapper .ssi-modalWindow.auto {
  display: table;
  width: auto;
}

.ssi-modalWrapper.large,
.ssi-modalWrapper .ssi-modalWindow.large {
  width: 80%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 95%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 98%;
  }
  .ssi-modalWrapper.large .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.large .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.mediumToLarge,
.ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
  width: 70%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 80%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 90%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 95%;
  }
  .ssi-modalWrapper.mediumToLarge .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.medium,
.ssi-modalWrapper .ssi-modalWindow.medium {
  width: 62%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 72%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 82%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 95%;
  }
  .ssi-modalWrapper.medium .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.medium .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.smallToMedium,
.ssi-modalWrapper .ssi-modalWindow.smallToMedium {
  width: 50%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 90%;
  }
  .ssi-modalWrapper.smallToMedium .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.small,
.ssi-modalWrapper .ssi-modalWindow.small {
  width: 45%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 65%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 85%;
  }
  .ssi-modalWrapper.small .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.small .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.dialog,
.ssi-modalWrapper .ssi-modalWindow.dialog {
  width: 30%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 80%;
  }
  .ssi-modalWrapper.dialog .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.dialog .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWindow {
  width: 100%;
  background: #ffffff;
  border: 1px solid #c3c3c3;
  position: relative;
  border-radius: 8px;
  padding: 18px 6px 5px 6px;
}

.ssi-topIcons {
  padding-left: 5px;
  font-weight: 600;
  position: absolute;
  top: 0;
  line-height: 25px;
  right: 0;
  z-index: 1;
}

.ssi-topIcons a {
  float: left;
  color: #8c8c8c;
  font-size: 30px;
  text-decoration: none;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-color: inherit;
}

.ssi-topIcons a:hover {
  color: #265067;
}

.ssi-topIcons .ssi-displayIcon {
  background-position: 0px 0px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-displayIcon:hover {
  background-position: 0px -144px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-closeIcon {
  background-position: 0px -72px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-closeIcon:hover {
  background-position: 0px -24px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-modalTitle {
  padding: 0 0 5px 15px;
  font: italic 600 25px Georgia, serif;
  border-bottom: 1px solid #dddddd;
}

.ssi-modalTitle .ssi-displayTime {
  font-size: 18px;
}

.ssi-modalContent {
  min-height: 50px;
  margin-top: 0px;
  padding: 5px 15px 10px 15px;
  z-index: 1501;
  position: relative;
}

.ssi-modalContent:after {
  content: ' ';
  display: table;
  clear: both;
}

.ssi-modalContent::-webkit-scrollbar {
  -webkit-appearance: none;
}

.ssi-modalContent::-webkit-scrollbar:vertical {
  width: 15px;
}

.ssi-modalContent::-webkit-scrollbar:horizontal {
  height: 12px;
}

.ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #ffffff;
}

.ssi-modalContent::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}

.ssi-modalContent.ssi-overflow {
  overflow: auto;
}

.ssi-buttons {
  position: relative;
  bottom: 0;
  padding: 5px 5px 1px 5px;
  border-top: 1px solid #dddddd;
}

.ssi-buttons:after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

.ssi-buttons .ssi-leftButtons {
  float: left;
}

.ssi-buttons .ssi-rightButtons {
  float: right;
}

.ssi-buttons .ssi-modalBtn {
  margin: 2px;
}

.ssi-buttons .ssi-countDown {
  color: #d1d1d1;
  font-size: 12px;
  margin-left: 5px;
}

.ssi-modalPositioned {
  overflow: visible;
  height: 0;
}

.ssi-modalPositioned.right .ssi-modalWrapper {
  float: right;
}

.ssi-modalPositioned.right .ssi-modalWrapper .ssi-modalWindow {
  float: right;
}

.ssi-modalPositioned.left .ssi-modalWrapper {
  float: left;
}

.ssi-modalPositioned.left .ssi-modalWrapper:after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

.ssi-modalPositioned.left .ssi-modalWindow {
  float: left;
}

.ssi-modalPositioned.bottom {
  top: auto;
  height: auto;
  bottom: 0;
}

.ssi-modalPositioned.bottom .ssi-modalWrapper {
  height: auto;
}

.ssi-modalPositioned.top {
  top: 0;
}

.ssi-modalPositioned.center .ssi-modalWrapper {
  margin-left: auto !important;
  margin-right: auto !important;
}

.ssi-modalPositioned.center .ssi-modalWrapper .ssi-modalWindow {
  margin-left: auto !important;
  margin-right: auto !important;
}

.ssi-modalPositioned .ssi-modalWrapper {
  margin: 15px 3px;
  padding: 0;
  height: 0;
}

.ssi-modalPositioned .ssi-modalWrapper .ssi-modalWindow {
  margin: 10px 0;
  clear: both;
  z-index: 1500;
}

.ssi-modalPositioned.ssi-stack {
  pointer-events: none;
  z-index: 3000;
}

.ssi-modalPositioned.ssi-stack.center .ssi-modalWrapper .ssi-modalWindow {
  margin: 4px;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper {
  width: 100%;
  margin: 0;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow:first-child {
  margin-top: 10px;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow {
  pointer-events: auto;
  margin: 2px 7px;
  box-shadow: -1px 1px 28px -2px #a196a1;
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.ssi-smoothSlide {
  visibility: hidden;
  display: block !important;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.full {
  width: 99.9%;
  margin: 1px 1px;
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.full {
    width: 99.5%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.full
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
  width: 800px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 85%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 99.5%;
    margin: 1px 1px;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.large
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.mediumToLarge {
  width: 700px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 80%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
  width: 600px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 80%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 80%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.medium
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.smallToMedium {
  width: 500px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
  width: 400px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.small
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
  width: 300px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 45%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.dialog
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-hover {
  cursor: pointer;
}

.ssi-hover:hover {
  box-shadow: -1px 1px 17px 0px #757175;
}

.ssi-hidden {
  display: none;
}

.ssi-borderOut {
  border: none !important;
}

.anim {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes ssi-fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes ssi-fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.ssi-fadeIn {
  -webkit-animation-name: ssi-fadeIn;
  animation-name: ssi-fadeIn;
}

@-webkit-keyframes ssi-fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes ssi-fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.ssi-fadeOut {
  -webkit-animation-name: ssi-fadeOut;
  animation-name: ssi-fadeOut;
}

/*------------------------Start of imgBox plugin------------------------------*/
.ssi-backdrop.imgBox {
  background: rgba(0, 0, 0, 0.87);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#CC000000', endColorstr='#CC000000');
  /* IE */
}

.imgBox {
  overflow: auto;
}

.imgBox.ssi-center .ssi-modalWindow {
  width: 300px;
}

.imgBox .ssi-modalWrapper {
  margin-top: 55px;
  z-index: 11111;
  width: 300px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons {
  margin-right: -15px;
  margin-top: -12px;
  z-index: 11111;
}

.imgBox .ssi-modalWrapper .ssi-topIcons a {
  background-color: #5c5c5e;
  color: #fff;
  width: 24px;
  height: 24px;
  line-height: 0;
  border-radius: 30px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons a:hover {
  color: #e9e9e9;
}

.imgBox .ssi-modalWrapper .ssi-topIcons .ssi-closeIcon {
  background-position: 0px -48px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons .ssi-closeIcon:hover {
  background-position: 0px -48px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons.inTitle {
  margin-top: 25px;
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper .ssi-topIcons.inTitle {
    margin-top: 15px;
  }
  .imgBox .ssi-modalWrapper .ssi-topIcons.inTitle .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper.ssi-imgBorder .ssi-modalContent {
  --webkit-box-shadow: 0px 0px 31px -1px rgba(245, 245, 245, 0.3);
  box-shadow: 0px 0px 31px -1px rgba(245, 245, 245, 0.3);
  border: 1px solid white;
}

.imgBox .ssi-modalWrapper.ssi-overHeight,
.imgBox .ssi-modalWrapper.ssi-overHeight .ssi-modalWindow {
  -webkit-transition: height 0.6s, width 0.6s;
  transition: height 0.6s, width 0.6s;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow {
  border: none;
  border-radius: 2px;
  padding: 0;
  background: none;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle {
  padding-left: 0;
  text-align: center;
  font-weight: 300;
  color: white !important;
  border-bottom: none;
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle {
    font-size: 15px;
  }
  .imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-buttons {
  border: none;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent {
  position: relative;
  overflow: hidden;
  text-align: center;
  border-radius: 0;
  background: none;
  margin: 0 auto;
  padding: 0;
  height: 300px;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent h3,
.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent h4 {
  color: #5e5e5e;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent .ssi-modalImg {
  width: 100%;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent .ssi-imgButtons {
  position: absolute;
  left: 0;
  bottom: auto;
  width: 100%;
  z-index: 101000001;
  padding: 8px;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-leftButtons {
  float: left;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-rightButtons {
  float: right;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-imgBtn {
  margin: 2px;
  padding: 3px;
}

.ssi-modalNavigation {
  position: fixed;
  top: 50%;
  z-index: 1500;
  margin-top: -150px;
  left: 0;
  height: 300px;
  width: 100%;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  opacity: 0;
}

@media only screen and (max-width: 900px) {
  .ssi-modalNavigation {
    height: 200px;
    margin-top: -100px;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalNavigation {
    height: 100px;
    margin-top: -50px;
  }
  .ssi-modalNavigation .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalNavigation .ssi-modalPrev,
.ssi-modalNavigation .ssi-modalNext {
  top: 0;
  outline: 0;
  height: 100%;
  cursor: pointer;
}

.ssi-modalNavigation .ssi-modalPrev span,
.ssi-modalNavigation .ssi-modalNext span {
  position: relative;
  top: 40%;
}

.ssi-modalNavigation .ssi-modalPrev {
  width: 40%;
  left: 0;
  float: left;
}

.ssi-modalNavigation .ssi-modalPrev span {
  background-position: 0px -356px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalPrev:hover span {
  background-position: 0px -300px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalNext {
  width: 60%;
  float: right;
  right: 0;
}

.ssi-modalNavigation .ssi-modalNext span {
  float: right;
  background-position: 0px -468px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalNext:hover span {
  background-position: 0px -412px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.imgBox .ssi-modalWrapper.ssi-iframe {
  width: 50%;
  height: 55%;
}

@media only screen and (max-width: 900px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    padding: 10px;
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    padding: 0;
    width: 100%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
  height: 100%;
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
  margin-right: 8%;
  z-index: 2001;
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-imgButtons {
  width: 0%;
}

@media only screen and (max-width: 900px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    padding: 10px;
    width: 90%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
    margin-top: 0;
    margin-right: 9%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons.inTitle {
    margin-top: 35px;
  }
}

@media only screen and (max-width: 600px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    padding: 0;
    width: 100%;
    max-height: 400px;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-modalTitle {
    font-size: 18px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalNext
    span {
    background-position-x: 15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalNext:hover
    span {
    background-position-x: 15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalPrev
    span {
    background-position-x: -15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalPrev:hover
    span {
    background-position-x: -15px;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
    margin-top: -10px;
    margin-right: 5%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons.inTitle {
    margin-top: 15px;
  }
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalContent {
  width: 100%;
  height: 90% !important;
}

.imgBox .ssi-modalWrapper.ssi-iframe iframe {
  position: relative;
  z-index: 2000;
  width: 80%;
  height: 100%;
}

.ssi-center.imgBox .ssi-iframe {
  width: 100%;
  height: 100%;
}

.ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
  width: 60%;
  height: 55%;
}

@media only screen and (max-width: 900px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    padding: 10px;
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    width: 100%;
    max-height: 400px;
    padding: 0;
  }
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-center.imgBox .ssi-iframe .ssi-modalContent {
  width: 100%;
  height: 90%;
}

.ssi-center.imgBox .ssi-iframe iframe {
  position: relative;
  z-index: 2000;
  width: 80%;
  height: 100%;
}

.ssi-loader {
  position: relative;
  margin: auto auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: url('images/loader.gif') no-repeat;
}

.ssi-navFadeOut {
  opacity: 0 !important;
}

.ssi-navFadeIn {
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)' !important;
  filter: alpha(opacity=100) !important;
  opacity: 1 !important;
}

.ssi-navFade {
  -webkit-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

/*------------------------End of imgBox plugin------------------------------*/
/*------------------------Start of notify plugin------------------------------*/
.notify.ssi-modalWindow {
  padding-top: 12px;
}

.notify .ssi-icon {
  max-width: 30px;
  max-height: 30px;
  float: left;
  clear: left;
}

.notify .ssi-modalContent {
  max-height: 150px;
  overflow: auto;
  padding: 5px 15px;
  margin-top: 0;
  min-height: 30px;
}

.notify .ssi-modalContent::-webkit-scrollbar:vertical {
  width: 6px;
}

.notify .ssi-modalContent::-webkit-scrollbar:horizontal {
  height: 6px;
}

.notify .ssi-modalTitle {
  line-height: 32px;
  padding-bottom: 5px;
}

.notify .ssi-modalTitle:after {
  content: ' ';
  display: block;
  clear: both;
}

.notify.ssi-success,
.notify.ssi-info,
.notify.ssi-warning,
.notify.ssi-error {
  padding: 3px 5px;
  margin: 2px 0;
  font: 500 18px 'Times New Roman';
  color: #ffffff;
  background-color: #2ea53a;
}

.notify.ssi-success .ssi-modalTitle,
.notify.ssi-info .ssi-modalTitle,
.notify.ssi-warning .ssi-modalTitle,
.notify.ssi-error .ssi-modalTitle {
  text-transform: capitalize;
  padding-left: 5px;
}

.notify.ssi-success .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.success,
.notify.ssi-warning .ssi-modalTitle span.success,
.notify.ssi-error .ssi-modalTitle span.success {
  background-position: 0px -234px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-success .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-info .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-warning .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-error .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #3c7e28;
}

@media only screen and (max-width: 900px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    font-size: 15px;
  }
  .notify.ssi-success .ssi-modalTitle,
  .notify.ssi-info .ssi-modalTitle,
  .notify.ssi-warning .ssi-modalTitle,
  .notify.ssi-error .ssi-modalTitle {
    padding-bottom: 1px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    width: 45%;
  }
}

@media only screen and (max-width: 450px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    font-size: 12px;
  }
  .notify.ssi-success .ssi-modalTitle,
  .notify.ssi-info .ssi-modalTitle,
  .notify.ssi-warning .ssi-modalTitle,
  .notify.ssi-error .ssi-modalTitle {
    font-size: 18px;
  }
}

.notify.ssi-success:hover,
.notify.ssi-info:hover,
.notify.ssi-warning:hover,
.notify.ssi-error:hover {
  background-color: #2c9738;
}

.notify.ssi-info {
  background-color: #006cbc;
}

.notify.ssi-info .ssi-modalTitle span.info {
  background-position: 0px -201px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-info .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #5d6ad6;
}

.notify.ssi-info:hover {
  background-color: #00529d;
}

.notify.ssi-warning {
  background-color: #db9100;
}

.notify.ssi-warning .ssi-modalTitle span.warning {
  background-position: 0px -267px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-warning .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #b57300;
}

.notify.ssi-warning:hover {
  background-color: #c68200;
}

.notify.ssi-error {
  background-color: #bd3630;
}

.notify.ssi-error .ssi-modalTitle span.error {
  background-position: 0px -168px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-error .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #9d1d2a;
}

.notify.ssi-error:hover {
  background-color: #a73832;
}

/*------------------------End of notify plugin------------------------------*/
`
