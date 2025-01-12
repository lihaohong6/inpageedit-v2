export function code_mirror_cm6() {
  /**
   * @name code-mirror 语法高亮编辑器
   * @author Bhsd <https://github.com/bhsd-harry>
   * @author 机智的小鱼君 <https://github.com/Dragon-Fish>
   */
  const CODE_MIRROR_STYLES = `/* Disable editTools */
.in-page-edit.ipe-editor .editTools {
  display: none;
}

/* Minor fix */
.in-page-edit .CodeMirror,
.in-page-edit .cm-editor {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro',
    monospace;
  min-height: 400px;
  font-size: 14px;
  border: 1px solid #c8ccd1;
}

/* Dialog */
.in-page-edit .CodeMirror-dialog {
  position: absolute;
  left: 0;
  right: 0;
  background: inherit;
  z-index: 15;
  padding: 0.1em 0.8em;
  overflow: hidden;
  color: inherit;
}
.in-page-edit .CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}
.in-page-edit .CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}
.in-page-edit .CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}
.in-page-edit .CodeMirror-dialog button {
  font-size: 70%;
}

/* Fix WikiEditor popup */
.wikiEditor-ui-toolbar {
  z-index: 10;
}`
  mw.hook('InPageEdit').add(() =>
    (async () => {
      // Constants
      const CM_CDN = 'https://cdn.jsdelivr.net/npm/@bhsd/codemirror-mediawiki'

      const stylesheet = document.createElement('style')
      stylesheet.innerHTML = CODE_MIRROR_STYLES
      document.head.appendChild(stylesheet)

      await Promise.all([
        mw.loader.using('mediawiki.Title'),
        window.CodeMirror6 || import(`${CM_CDN}/dist/mw.min.js`),
      ])

      /**
       * 检查页面语言类型
       * @param page Page title
       */
      function getPageMode(page) {
        const { namespace, title } = page
        const ext = page.getExtension()?.toLowerCase()
        const isSubject = namespace % 2 === 0
        if (ext === 'css' && isSubject) {
          return 'css'
        } else if (ext === 'js' && isSubject) {
          return 'javascript'
        } else if (ext === 'json' && isSubject) {
          return 'json'
        } else if (namespace === 828 && !title.endsWith('/doc')) {
          return 'lua'
        } else if (namespace === 274 && !title.endsWith('/doc')) {
          return 'html'
        }
        return 'mediawiki'
      }

      /**
       * 渲染编辑器
       * @param {JQuery<HTMLTextAreaElement>} target 目标编辑框
       * @param page Page title
       */
      async function renderEditor(target, page) {
        if (target.length) {
          // 防止抑郁
          const clearDiv = '<div style="clear: both"></div>'
          target.before(clearDiv)
          target.after(clearDiv)

          const mode = getPageMode(page)

          const wikiEditor = InPageEdit.preference
            .get('plugins')
            .some((i) => /wiki-editor/.test(i))

          if (wikiEditor) {
            await new Promise((resolve) => {
              target.on('wikiEditor-toolbar-doneInitialSections', resolve)
            })
          }

          const cm = await CodeMirror6.fromTextArea(
            target[0],
            mode,
            page.namespace
          )
          if (mode === 'mediawiki') {
            const config = mw.config.get('extCodeMirrorConfig')
            if (config?.urlProtocols.includes('\\:')) {
              config.urlProtocols = config.urlProtocols.replace(/\\:/g, ':')
              cm.setLanguage('mediawiki', config)
            }
          }
        }
      }

      /**
       * 为 quickEdit 钩子添加函数
       */
      mw.hook('InPageEdit.quickEdit').add(({ $editArea, $modalTitle }) =>
        (async () => {
          const page = new mw.Title($modalTitle.find('.editPage').text())
          const cm = await renderEditor($editArea, page)
          mw.hook('InPageEdit.quickEdit.codemirror6').fire({ $editArea, cm })
        })()
      )
    })()
  )
}
