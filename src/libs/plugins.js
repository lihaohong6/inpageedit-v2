export function toolbox() {  /**
   * @module toolbox 工具盒模块
   */
  mw.hook('InPageEdit').add(({ _analytics, _msg, InPageEdit }) => {
    var config = mw.config.get()
    // 检测是否为文章页
    if ($('#ipe-edit-toolbox').length > 0) {
      console.warn('[InPageEdit] Toolbox 已经加载过了')
      return
    }

    if (!config.wgIsArticle) {
      console.warn('[InPageEdit] 不是文章页面')
      $('<div>', { id: 'ipe-edit-toolbox' })
        .append(
          $('<div>', {
            id: 'ipe-toolbox-placeholder',
            style:
              'width:0.75rem;height:0.75rem;border-radius:50%;background:#3f51b5;line-height:1;pointer-events:none;',
          }).append(
            $('<i>', {
              class: 'fa fa-check',
              style:
                'font-size:0.5em;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)',
            })
          )
        )
        .appendTo('body')
      return
    }

    /** IPE工具盒 **/
    var $toolbox = $('<div>', { id: 'ipe-edit-toolbox' }).append(
      $('<ul>', { class: 'btn-group group1' }).append(
        $('<li>', { class: 'btn-tip-group' }).append(
          $('<div>', { class: 'btn-tip', text: _msg('quick-edit') }),
          $('<button>', {
            id: 'edit-btn',
            class: 'ipe-toolbox-btn',
            html: '<i class="fa fa-pencil fa-pencil-alt"></i>',
          }).click(function () {
            InPageEdit.quickEdit({
              page: config.wgPageName,
              revision: config.wgRevisionId,
            })
          })
        ),
        $('<li>', { class: 'btn-tip-group' }).append(
          $('<div>', { class: 'btn-tip', text: _msg('redirect-from') }),
          $('<button>', {
            id: 'redirectfrom-btn',
            class: 'ipe-toolbox-btn',
            html: '<i class="fa fa-sign-in fa-sign-in-alt"></i>',
          }).click(function () {
            InPageEdit.quickRedirect('from')
          })
        ),
        $('<li>', { class: 'btn-tip-group' }).append(
          $('<div>', { class: 'btn-tip', text: _msg('redirect-to') }),
          $('<button>', {
            id: 'redirectto-btn',
            class: 'ipe-toolbox-btn',
            html: '<i class="fa fa-sign-out fa-sign-out-alt"></i>',
          }).click(function () {
            InPageEdit.quickRedirect('to')
          })
        )
      ),
      $('<ul>', { class: 'btn-group group2' }).append(
        $('<div>', { style: 'display: flex;' }).append(
          $('<li>', { class: 'btn-tip-group' }).append(
            $('<div>', { class: 'btn-tip', text: _msg('quick-delete') }),
            $('<button>', {
              id: 'deletepage-btn',
              class: 'ipe-toolbox-btn',
              html: '<i class="fa fa-trash"></i>',
            }).click(function () {
              InPageEdit.quickDelete()
            })
          ),
          $('<li>', { class: 'btn-tip-group' }).append(
            $('<div>', { class: 'btn-tip', text: _msg('quick-rename') }),
            $('<button>', {
              id: 'renamepage-btn',
              class: 'ipe-toolbox-btn',
              html: '<i class="fa fa-italic"></i>',
            }).click(function () {
              InPageEdit.quickRename()
            })
          ),
          $('<li>', { class: 'btn-tip-group' }).append(
            $('<div>', { class: 'btn-tip', text: _msg('ipe-preference') }),
            $('<button>', {
              id: 'preference-btn',
              class: 'ipe-toolbox-btn',
              html: '<i class="fa fa-gear"></i>',
            }).click(function () {
              InPageEdit.preference.modal()
            })
          )
        )
      ),
      $('<button>', {
        class: 'ipe-toolbox-btn',
        id: 'toolbox-toggle',
        html: '<i class="fa fa-plus"></i>',
      })
    )

    $toolbox.appendTo('body')

    $toolbox.find('.btn-group button').click(function () {
      _analytics('tool_box')
    })

    // 设置开关等
    var toolBoxInner = $toolbox.find('#toolbox-toggle, .btn-group')
    $toolbox.find('#toolbox-toggle').click(function () {
      if ($(this).hasClass('opened') && !$(this).hasClass('click')) {
        InPageEdit.preference.set({ lockToolBox: true })
        toolBoxInner.addClass('click')
      } else if ($(this).hasClass('click')) {
        InPageEdit.preference.set({ lockToolBox: false })
        toolBoxInner.removeClass('click')
      } else {
        InPageEdit.preference.set({ lockToolBox: true })
        toolBoxInner.addClass('click opened')
      }
    })
    // 如果锁定过工具盒，就自动展开
    if (InPageEdit.preference.get('lockToolBox') === true) {
      toolBoxInner.addClass('click opened')
    }
    // 鼠标覆盖与离开
    $toolbox.mouseover(function () {
      toolBoxInner.addClass('hover opened')
    })
    $toolbox.mouseout(function () {
      toolBoxInner.removeClass('hover')
      if (!$toolbox.find('#toolbox-toggle').hasClass('click')) {
        toolBoxInner.removeClass('opened')
      }
    })
    // 触发钩子，传递上下文
    mw.hook('InPageEdit.toolbox').fire({
      $toolbox,
    })
  })

  // April Fools' Day
  ;(() => {
    const from = new Date('2024-04-01T00:00:00+08:00').getTime()
    const to = new Date('2024-04-02T00:00:00+08:00').getTime()
    const now = Date.now()
    if (now >= from && now < to) {
      mw.loader.load(
        'https://plugins.ipe.wiki/plugins/april-fool-2024/style.css',
        'text/css'
      )
    }
  })()
}
export function edit_any_page() {  /**
   * @name IPE-edit-any-page
   * @author 机智的小鱼君
   * InPageEdit自定义plugin
   * 在toolbox添加一个可以编辑任何指定页面的按钮
   *
   * 这是一个开发 IPE plugin 很好的实例
   */
  mw.hook('InPageEdit').add(({ _msg }) => {
    // Language pack
    const ipe = window.InPageEdit || {}
    ipe.i18n = ipe.i18n || {}
    const langPack = {
      en: {
        anypage_btn: 'Edit any page',
        anypage_title: 'Quick edit any page',
        anypage_label: 'Please enter the page name',
      },
      'zh-hans': {
        anypage_btn: '编辑任意页面',
        anypage_title: '快速编辑任意页面',
        anypage_label: '请指定页面名',
      },
    }
    $.each(langPack, (lang, str) => {
      ipe.i18n[lang] = ipe.i18n[lang] || {}
      ipe.i18n[lang] = {
        ...ipe.i18n[lang],
        ...str,
      }
    })

    // toolbox hook
    mw.hook('InPageEdit.toolbox').add(({ $toolbox }) => {
      $toolbox.find('.btn-group.group1').append(
        $('<li>', { class: 'btn-tip-group' }).append(
          $('<div>', { class: 'btn-tip', text: _msg('anypage_btn') }),
          $('<button>', { class: 'ipe-toolbox-btn fa fa-edit' }).click(
            function () {
              ssi_modal.show({
                className: 'in-page-edit',
                sizeClass: 'dialog',
                center: true,
                outSideClose: false,
                title: _msg('anypage_title'),
                content: $('<div>').append(
                  $('<label>').append(
                    $('<b>', { text: _msg('anypage_label') }),
                    $('<br>'),
                    $('<input>', {
                      id: 'which-page',
                      style: 'width: 96%',
                      value: mw.config.get('wgPageName'),
                    }).click(function () {
                      $(this).css('box-shadow', '')
                    })
                  )
                ),
                buttons: [
                  {
                    label: _msg('ok'),
                    className: 'btn btn-primary IPE-anypage-ok',
                    keyPress: 'Enter',
                    keyPressBody: true,
                    method: function (a, modal) {
                      var page = $('#which-page').val()
                      if (page === '' || page === undefined) {
                        $('#which-page').css('box-shadow', '0 0 4px red')
                        return false
                      }
                      modal.close()
                      InPageEdit.quickEdit({
                        page: page,
                        reload: false,
                      })
                    },
                  },
                  {
                    label: _msg('cancel'),
                    className: 'btn btn-secondary IPE-anypage-cancel',
                    keyPressBody: true,
                    method: function (a, modal) {
                      modal.close()
                    },
                  },
                ],
              })
            }
          )
        )
      )
    })
  })
}
export function wiki_editor() {  /**
   * @name IPE-WikiEditor
   * @author Dragon-Fish
   * @desc Make InPageEdit use native wikiEditor instead of custom-editTools
   */
  mw.hook('InPageEdit.quickEdit').add(({ $editArea, $editTools }) =>
    // @TODO 老版本 MediaWiki 传入异步函数会出问题，所以只能传入一个自调用函数
    (async () => {
      if (mw.loader.getState('ext.wikiEditor') !== 'loaded' || !$.fn.wikiEditor) {
        await mw.loader.using('ext.wikiEditor')
      }

      const escapeRegExp = (str) =>
        str.replace(/([\\{}()|.?*+\-^$\[\]])/g, '\\$1')

      // Hide original toolbar
      $editTools?.hide()

      // Set toolbars
      $editArea.wikiEditor('addModule', {
        toolbar: {
          // Main section
          main: {
            type: 'toolbar',
            groups: {
              format: {
                tools: {
                  bold: {
                    labelMsg: 'wikieditor-toolbar-tool-bold',
                    type: 'button',
                    oouiIcon: 'bold',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: "'''",
                        periMsg: 'wikieditor-toolbar-tool-bold-example',
                        post: "'''",
                      },
                    },
                  },
                  italic: {
                    section: 'main',
                    group: 'format',
                    id: 'italic',
                    labelMsg: 'wikieditor-toolbar-tool-italic',
                    type: 'button',
                    oouiIcon: 'italic',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: "''",
                        periMsg: 'wikieditor-toolbar-tool-italic-example',
                        post: "''",
                      },
                    },
                  },
                  link: {
                    section: 'main',
                    group: 'format',
                    id: 'link',
                    labelMsg: 'wikieditor-toolbar-tool-link',
                    type: 'button',
                    oouiIcon: 'link',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '[[',
                        periMsg:
                          'wikieditor-toolbar-help-content-ilink-description',
                        post: ']]',
                      },
                    },
                  },
                  file: {
                    labelMsg: 'wikieditor-toolbar-tool-file',
                    type: 'button',
                    oouiIcon: 'image',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '[[File:',
                        periMsg: 'wikieditor-toolbar-tool-file-example',
                        post: '|thumb]]',
                      },
                    },
                  },
                  reference: {
                    labelMsg: 'wikieditor-toolbar-tool-reference',
                    filters: ['body.ns-subject'],
                    type: 'button',
                    oouiIcon: 'book',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<ref>',
                        periMsg: 'wikieditor-toolbar-tool-reference-text',
                        post: '</ref>',
                      },
                    },
                  },
                },
              },
            },
          },
          // Format section
          advanced: {
            labelMsg: 'wikieditor-toolbar-section-advanced',
            type: 'toolbar',
            groups: {
              heading: {
                tools: {
                  heading: {
                    labelMsg: 'wikieditor-toolbar-tool-heading',
                    type: 'select',
                    list: {
                      'heading-2': {
                        labelMsg: 'wikieditor-toolbar-tool-heading-2',
                        action: {
                          type: 'encapsulate',
                          options: {
                            pre: '== ',
                            periMsg: 'wikieditor-toolbar-tool-heading-example',
                            post: ' ==',
                            regex: /^(\s*)(={1,6})(.*?)\2(\s*)$/,
                            regexReplace: '$1==$3==$4',
                            ownline: true,
                          },
                        },
                      },
                      'heading-3': {
                        labelMsg: 'wikieditor-toolbar-tool-heading-3',
                        action: {
                          type: 'encapsulate',
                          options: {
                            pre: '=== ',
                            periMsg: 'wikieditor-toolbar-tool-heading-example',
                            post: ' ===',
                            regex: /^(\s*)(={1,6})(.*?)\2(\s*)$/,
                            regexReplace: '$1===$3===$4',
                            ownline: true,
                          },
                        },
                      },
                      'heading-4': {
                        labelMsg: 'wikieditor-toolbar-tool-heading-4',
                        action: {
                          type: 'encapsulate',
                          options: {
                            pre: '==== ',
                            periMsg: 'wikieditor-toolbar-tool-heading-example',
                            post: ' ====',
                            regex: /^(\s*)(={1,6})(.*?)\2(\s*)$/,
                            regexReplace: '$1====$3====$4',
                            ownline: true,
                          },
                        },
                      },
                      'heading-5': {
                        labelMsg: 'wikieditor-toolbar-tool-heading-5',
                        action: {
                          type: 'encapsulate',
                          options: {
                            pre: '===== ',
                            periMsg: 'wikieditor-toolbar-tool-heading-example',
                            post: ' =====',
                            regex: /^(\s*)(={1,6})(.*?)\2(\s*)$/,
                            regexReplace: '$1=====$3=====$4',
                            ownline: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
              format: {
                labelMsg: 'wikieditor-toolbar-group-format',
                tools: {
                  ulist: {
                    labelMsg: 'wikieditor-toolbar-tool-ulist',
                    type: 'button',
                    oouiIcon: 'listBullet',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '* ',
                        periMsg: 'wikieditor-toolbar-tool-ulist-example',
                        post: '',
                        ownline: true,
                        splitlines: true,
                      },
                    },
                  },
                  olist: {
                    labelMsg: 'wikieditor-toolbar-tool-olist',
                    type: 'button',
                    oouiIcon: 'listNumbered',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '# ',
                        periMsg: 'wikieditor-toolbar-tool-olist-example',
                        post: '',
                        ownline: true,
                        splitlines: true,
                      },
                    },
                  },
                  nowiki: {
                    labelMsg: 'wikieditor-toolbar-tool-nowiki',
                    type: 'button',
                    oouiIcon: 'noWikiText',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<nowiki>',
                        periMsg: 'wikieditor-toolbar-tool-nowiki-example',
                        post: '</nowiki>',
                      },
                    },
                  },
                  newline: {
                    labelMsg: 'wikieditor-toolbar-tool-newline',
                    type: 'button',
                    oouiIcon: 'newline',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<br>\n',
                      },
                    },
                  },
                },
              },
              size: {
                tools: {
                  superscript: {
                    labelMsg: 'wikieditor-toolbar-tool-superscript',
                    type: 'button',
                    oouiIcon: 'superscript',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<sup>',
                        periMsg: 'wikieditor-toolbar-tool-superscript-example',
                        post: '</sup>',
                      },
                    },
                  },
                  subscript: {
                    labelMsg: 'wikieditor-toolbar-tool-subscript',
                    type: 'button',
                    oouiIcon: 'subscript',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<sub>',
                        periMsg: 'wikieditor-toolbar-tool-subscript-example',
                        post: '</sub>',
                      },
                    },
                  },
                },
              },
              insert: {
                labelMsg: 'wikieditor-toolbar-group-insert',
                tools: {
                  gallery: {
                    labelMsg: 'wikieditor-toolbar-tool-gallery',
                    type: 'button',
                    oouiIcon: 'imageGallery',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '<gallery>\n',
                        periMsg: [
                          'wikieditor-toolbar-tool-gallery-example',
                          'File:',
                        ],
                        post: '\n</gallery>',
                        ownline: true,
                      },
                    },
                  },
                  redirect: {
                    labelMsg: 'wikieditor-toolbar-tool-redirect',
                    type: 'button',
                    oouiIcon: 'articleRedirect',
                    action: {
                      type: 'encapsulate',
                      options: {
                        pre: '#REDIRECT [[',
                        periMsg: 'wikieditor-toolbar-tool-redirect-example',
                        post: ']]',
                        ownline: true,
                      },
                    },
                  },
                },
              },
            },
          },
          // Help
          help: {
            labelMsg: 'wikieditor-toolbar-section-help',
            type: 'booklet',
            deferLoad: true,
            pages: {
              format: {
                labelMsg: 'wikieditor-toolbar-help-page-format',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-italic-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-italic-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-italic-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg: 'wikieditor-toolbar-help-content-bold-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-bold-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-bold-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-bolditalic-description',
                    },
                    syntax: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-bolditalic-syntax',
                    },
                    result: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-bolditalic-result',
                    },
                  },
                ],
              },
              link: {
                labelMsg: 'wikieditor-toolbar-help-page-link',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-ilink-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-ilink-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-ilink-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-xlink-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-xlink-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-xlink-result',
                    },
                  },
                ],
              },
              heading: {
                labelMsg: 'wikieditor-toolbar-help-page-heading',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-heading2-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading2-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading2-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-heading3-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading3-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading3-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-heading4-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading4-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading4-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-heading5-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading5-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-heading5-result',
                    },
                  },
                ],
              },
              list: {
                labelMsg: 'wikieditor-toolbar-help-page-list',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-ulist-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-ulist-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-ulist-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-olist-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-olist-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-olist-result',
                    },
                  },
                ],
              },
              file: {
                labelMsg: 'wikieditor-toolbar-help-page-file',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg: 'wikieditor-toolbar-help-content-file-description',
                    },
                    syntax: {
                      htmlMsg: [
                        'wikieditor-toolbar-help-content-file-syntax',
                        'File',
                        'thump',
                        mw
                          .message('wikieditor-toolbar-help-content-file-caption')
                          .text(),
                      ],
                    },
                    result: {
                      html:
                        '<div class="thumbinner" style="width: 102px;">' +
                        '<a class="image">' +
                        '<img alt="" src="' +
                        $.wikiEditor.imgPath +
                        'toolbar/example-image.png" width="100" height="50" class="thumbimage"/>' +
                        '</a>' +
                        '<div class="thumbcaption"><div class="magnify">' +
                        '<a title="' +
                        mw.message('thumbnail-more').escaped() +
                        '" class="internal"></a>' +
                        '</div>' +
                        mw
                          .message('wikieditor-toolbar-help-content-file-caption')
                          .escaped() +
                        '</div>' +
                        '</div>',
                    },
                  },
                ],
              },
              reference: {
                labelMsg: 'wikieditor-toolbar-help-page-reference',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-reference-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-reference-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-reference-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-named-reference-description',
                    },
                    syntax: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-named-reference-syntax',
                    },
                    result: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-named-reference-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-rereference-description',
                    },
                    syntax: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-rereference-syntax',
                    },
                    result: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-rereference-result',
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-showreferences-description',
                    },
                    syntax: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-showreferences-syntax',
                    },
                    result: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-showreferences-result',
                    },
                  },
                ],
              },
              discussion: {
                labelMsg: 'wikieditor-toolbar-help-page-discussion',
                layout: 'table',
                headings: [
                  { textMsg: 'wikieditor-toolbar-help-heading-description' },
                  { textMsg: 'wikieditor-toolbar-help-heading-syntax' },
                  { textMsg: 'wikieditor-toolbar-help-heading-result' },
                ],
                rows: [
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-signaturetimestamp-description',
                    },
                    syntax: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-signaturetimestamp-syntax',
                    },
                    result: {
                      htmlMsg: [
                        'wikieditor-toolbar-help-content-signaturetimestamp-result',
                        mw.config.get('wgFormattedNamespaces')[2],
                        mw.config.get('wgFormattedNamespaces')[3],
                      ],
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-signature-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-signature-syntax',
                    },
                    result: {
                      htmlMsg: [
                        'wikieditor-toolbar-help-content-signature-result',
                        mw.config.get('wgFormattedNamespaces')[2],
                        mw.config.get('wgFormattedNamespaces')[3],
                      ],
                    },
                  },
                  {
                    description: {
                      htmlMsg:
                        'wikieditor-toolbar-help-content-indent-description',
                    },
                    syntax: {
                      htmlMsg: 'wikieditor-toolbar-help-content-indent-syntax',
                    },
                    result: {
                      htmlMsg: 'wikieditor-toolbar-help-content-indent-result',
                    },
                  },
                ],
              },
            },
          },
        },
        dialogs: {
          titleMsg: 'wikieditor-toolbar-tool-replace-title',
          id: 'wikieditor-toolbar-replace-dialog',
          // htmlTemplate: 'dialogReplace.html',
          init: function () {
            $(this).html(`<div id="wikieditor-toolbar-replace-message">
            <div id="wikieditor-toolbar-replace-nomatch" rel="wikieditor-toolbar-tool-replace-nomatch"></div>
            <div id="wikieditor-toolbar-replace-success"></div>
            <div id="wikieditor-toolbar-replace-emptysearch" rel="wikieditor-toolbar-tool-replace-emptysearch"></div>
            <div id="wikieditor-toolbar-replace-invalidregex"></div>
          </div>
          <fieldset>
            <div class="wikieditor-toolbar-field-wrapper">
              <label for="wikieditor-toolbar-replace-search" rel="wikieditor-toolbar-tool-replace-search"></label>
              <input type="text" id="wikieditor-toolbar-replace-search"/>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <label for="wikieditor-toolbar-replace-replace" rel="wikieditor-toolbar-tool-replace-replace"></label>
              <input type="text" id="wikieditor-toolbar-replace-replace"/>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-case"/>
              <label for="wikieditor-toolbar-replace-case" rel="wikieditor-toolbar-tool-replace-case"></label>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-word"/>
              <label for="wikieditor-toolbar-replace-word" rel="wikieditor-toolbar-tool-replace-word"></label>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-regex"/>
              <label for="wikieditor-toolbar-replace-regex" rel="wikieditor-toolbar-tool-replace-regex"></label>
            </div>
          </fieldset>`)

            $(this)
              .find('[rel]')
              .each(function () {
                // eslint-disable-next-line mediawiki/msg-doc
                $(this).text(mw.msg($(this).attr('rel')))
              })

            // TODO: Find a cleaner way to share this function
            $(this).data('replaceCallback', function (mode) {
              var offset,
                textRemainder,
                regex,
                searchStr,
                replaceStr,
                flags,
                matchCase,
                matchWord,
                isRegex,
                $textarea,
                text,
                match,
                actualReplacement,
                start,
                end

              $(
                '#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex'
              ).hide()

              // Search string cannot be empty
              searchStr = $('#wikieditor-toolbar-replace-search').val()
              if (searchStr === '') {
                $('#wikieditor-toolbar-replace-emptysearch').show()
                return
              }

              // Replace string can be empty
              replaceStr = $('#wikieditor-toolbar-replace-replace').val()

              // Prepare the regular expression flags
              flags = 'm'
              matchCase = $('#wikieditor-toolbar-replace-case').is(':checked')
              if (!matchCase) {
                flags += 'i'
              }
              isRegex = $('#wikieditor-toolbar-replace-regex').is(':checked')
              if (!isRegex) {
                searchStr = escapeRegExp(searchStr)
              }
              matchWord = $('#wikieditor-toolbar-replace-word').is(':checked')
              if (matchWord) {
                searchStr = '\\b(?:' + searchStr + ')\\b'
              }
              if (mode === 'replaceAll') {
                flags += 'g'
              }

              try {
                regex = new RegExp(searchStr, flags)
              } catch (e) {
                $('#wikieditor-toolbar-replace-invalidregex')
                  .text(
                    mw.msg(
                      'wikieditor-toolbar-tool-replace-invalidregex',
                      e.message
                    )
                  )
                  .show()
                return
              }

              $textarea = $(this).data('context').$textarea
              text = $textarea.textSelection('getContents')
              match = false
              if (mode !== 'replaceAll') {
                if (mode === 'replace') {
                  offset = $(this).data('matchIndex')
                } else {
                  offset = $(this).data('offset')
                }
                textRemainder = text.substr(offset)
                match = textRemainder.match(regex)
              }
              if (!match) {
                // Search hit BOTTOM, continuing at TOP
                // TODO: Add a "Wrap around" option.
                offset = 0
                textRemainder = text
                match = textRemainder.match(regex)
              }

              if (!match) {
                $('#wikieditor-toolbar-replace-nomatch').show()
              } else if (mode === 'replaceAll') {
                $textarea.textSelection(
                  'setContents',
                  text.replace(regex, replaceStr)
                )
                $('#wikieditor-toolbar-replace-success')
                  .text(
                    mw.msg(
                      'wikieditor-toolbar-tool-replace-success',
                      mw.language.convertNumber(match.length)
                    )
                  )
                  .show()
                $(this).data('offset', 0)
              } else {
                if (mode === 'replace') {
                  if (isRegex) {
                    // If backreferences (like $1) are used, the actual actual replacement string will be different
                    actualReplacement = match[0].replace(regex, replaceStr)
                  } else {
                    actualReplacement = replaceStr
                  }

                  if (match) {
                    // Do the replacement
                    $textarea.textSelection('encapsulateSelection', {
                      peri: actualReplacement,
                      replace: true,
                      selectionStart: offset + match.index,
                      selectionEnd: offset + match.index + match[0].length,
                      selectPeri: true,
                    })
                    // Reload the text after replacement
                    text = $textarea.textSelection('getContents')
                  }

                  // Find the next instance
                  offset = offset + match.index + actualReplacement.length
                  textRemainder = text.substr(offset)
                  match = textRemainder.match(regex)

                  if (match) {
                    start = offset + match.index
                    end = start + match[0].length
                  } else {
                    // If no new string was found, try searching from the beginning.
                    // TODO: Add a "Wrap around" option.
                    textRemainder = text
                    match = textRemainder.match(regex)
                    if (match) {
                      start = match.index
                      end = start + match[0].length
                    } else {
                      // Give up
                      start = 0
                      end = 0
                    }
                  }
                } else {
                  start = offset + match.index
                  end = start + match[0].length
                }

                $(this).data('matchIndex', start)

                $textarea.textSelection('setSelection', {
                  start: start,
                  end: end,
                })
                $textarea.textSelection('scrollToCaretPosition')
                $(this).data('offset', end)
                $textarea[0].focus()
              }
            })
          },
        },
      })

      // Add dialog triggers
      $editArea.wikiEditor('addToToolbar', {
        section: 'advanced',
        groups: {
          search: {
            tools: {
              replace: {
                labelMsg: 'wikieditor-toolbar-tool-replace',
                type: 'button',
                oouiIcon: 'articleSearch',
                action: {
                  type: 'dialog',
                  module: 'search-and-replace',
                },
              },
            },
          },
        },
      })

      // Add dialog actions
      $editArea.wikiEditor('addModule', {
        dialogs: {
          'search-and-replace': {
            titleMsg: 'wikieditor-toolbar-tool-replace-title',
            id: 'wikieditor-toolbar-replace-dialog',
            htmlTemplate: 'dialogReplace.html',
            init: function () {
              $(this)
                .find('[rel]')
                .each(function () {
                  // eslint-disable-next-line mediawiki/msg-doc
                  $(this).text(mw.msg($(this).attr('rel')))
                })

              // TODO: Find a cleaner way to share this function
              $(this).data('replaceCallback', function (mode) {
                var offset,
                  textRemainder,
                  regex,
                  searchStr,
                  replaceStr,
                  flags,
                  matchCase,
                  matchWord,
                  isRegex,
                  $textarea,
                  text,
                  match,
                  actualReplacement,
                  start,
                  end

                $(
                  '#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex'
                ).hide()

                // Search string cannot be empty
                searchStr = $('#wikieditor-toolbar-replace-search').val()
                if (searchStr === '') {
                  $('#wikieditor-toolbar-replace-emptysearch').show()
                  return
                }

                // Replace string can be empty
                replaceStr = $('#wikieditor-toolbar-replace-replace').val()

                // Prepare the regular expression flags
                flags = 'm'
                matchCase = $('#wikieditor-toolbar-replace-case').is(':checked')
                if (!matchCase) {
                  flags += 'i'
                }
                isRegex = $('#wikieditor-toolbar-replace-regex').is(':checked')
                if (!isRegex) {
                  searchStr = escapeRegExp(searchStr)
                }
                matchWord = $('#wikieditor-toolbar-replace-word').is(':checked')
                if (matchWord) {
                  searchStr = '\\b(?:' + searchStr + ')\\b'
                }
                if (mode === 'replaceAll') {
                  flags += 'g'
                }

                try {
                  regex = new RegExp(searchStr, flags)
                } catch (e) {
                  $('#wikieditor-toolbar-replace-invalidregex')
                    .text(
                      mw.msg(
                        'wikieditor-toolbar-tool-replace-invalidregex',
                        e.message
                      )
                    )
                    .show()
                  return
                }

                $textarea = $(this).data('context').$textarea
                text = $textarea.textSelection('getContents')
                match = false
                if (mode !== 'replaceAll') {
                  if (mode === 'replace') {
                    offset = $(this).data('matchIndex')
                  } else {
                    offset = $(this).data('offset')
                  }
                  textRemainder = text.substr(offset)
                  match = textRemainder.match(regex)
                }
                if (!match) {
                  // Search hit BOTTOM, continuing at TOP
                  // TODO: Add a "Wrap around" option.
                  offset = 0
                  textRemainder = text
                  match = textRemainder.match(regex)
                }

                if (!match) {
                  $('#wikieditor-toolbar-replace-nomatch').show()
                } else if (mode === 'replaceAll') {
                  $textarea.textSelection(
                    'setContents',
                    text.replace(regex, replaceStr)
                  )
                  $('#wikieditor-toolbar-replace-success')
                    .text(
                      mw.msg(
                        'wikieditor-toolbar-tool-replace-success',
                        mw.language.convertNumber(match.length)
                      )
                    )
                    .show()
                  $(this).data('offset', 0)
                } else {
                  if (mode === 'replace') {
                    if (isRegex) {
                      // If backreferences (like $1) are used, the actual actual replacement string will be different
                      actualReplacement = match[0].replace(regex, replaceStr)
                    } else {
                      actualReplacement = replaceStr
                    }

                    if (match) {
                      // Do the replacement
                      $textarea.textSelection('encapsulateSelection', {
                        peri: actualReplacement,
                        replace: true,
                        selectionStart: offset + match.index,
                        selectionEnd: offset + match.index + match[0].length,
                        selectPeri: true,
                      })
                      // Reload the text after replacement
                      text = $textarea.textSelection('getContents')
                    }

                    // Find the next instance
                    offset = offset + match.index + actualReplacement.length
                    textRemainder = text.substr(offset)
                    match = textRemainder.match(regex)

                    if (match) {
                      start = offset + match.index
                      end = start + match[0].length
                    } else {
                      // If no new string was found, try searching from the beginning.
                      // TODO: Add a "Wrap around" option.
                      textRemainder = text
                      match = textRemainder.match(regex)
                      if (match) {
                        start = match.index
                        end = start + match[0].length
                      } else {
                        // Give up
                        start = 0
                        end = 0
                      }
                    }
                  } else {
                    start = offset + match.index
                    end = start + match[0].length
                  }

                  $(this).data('matchIndex', start)

                  $textarea.textSelection('setSelection', {
                    start: start,
                    end: end,
                  })
                  $textarea.textSelection('scrollToCaretPosition')
                  $(this).data('offset', end)
                  $textarea[0].focus()
                }
              })
            },
            dialog: {
              width: 500,
              dialogClass: 'wikiEditor-toolbar-dialog',
              modal: false,
              buttons: {
                'wikieditor-toolbar-tool-replace-button-findnext': function (e) {
                  $(this).closest('.ui-dialog').data('dialogaction', e.target)
                  $(this).data('replaceCallback').call(this, 'find')
                },
                'wikieditor-toolbar-tool-replace-button-replace': function (e) {
                  $(this).closest('.ui-dialog').data('dialogaction', e.target)
                  $(this).data('replaceCallback').call(this, 'replace')
                },
                'wikieditor-toolbar-tool-replace-button-replaceall': function (
                  e
                ) {
                  $(this).closest('.ui-dialog').data('dialogaction', e.target)
                  $(this).data('replaceCallback').call(this, 'replaceAll')
                },
                'wikieditor-toolbar-tool-replace-close': function () {
                  $(this).dialog('close')
                },
              },
              open: function () {
                var $dialog,
                  context,
                  $textbox,
                  that = this
                $(this).data('offset', 0)
                $(this).data('matchIndex', 0)

                $('#wikieditor-toolbar-replace-search').trigger('focus')
                $(
                  '#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex'
                ).hide()
                if (!$(this).data('onetimeonlystuff')) {
                  $(this).data('onetimeonlystuff', true)
                  // Execute the action associated with the first button
                  // when the user presses Enter
                  $(this)
                    .closest('.ui-dialog')
                    .on('keypress', function (e) {
                      var $button
                      if ((e.keyCode || e.which) === 13) {
                        $button =
                          $(this).data('dialogaction') ||
                          $(this).find('button').first()
                        $button.trigger('click')
                        e.preventDefault()
                      }
                    })
                  // Make tabbing to a button and pressing
                  // Enter do what people expect
                  $(this)
                    .closest('.ui-dialog')
                    .find('button')
                    .on('focus', function () {
                      $(this).closest('.ui-dialog').data('dialogaction', this)
                    })
                }
                $dialog = $(this).closest('.ui-dialog')
                that = this
                context = $(this).data('context')
                $textbox = context.$textarea

                $textbox.on('keypress.srdialog', function (e) {
                  var $button
                  if (e.which === 13) {
                    // Enter
                    $button =
                      $dialog.data('dialogaction') ||
                      $dialog.find('button').first()
                    $button.trigger('click')
                    e.preventDefault()
                  } else if (e.which === 27) {
                    // Escape
                    $(that).dialog('close')
                  }
                })
              },
              close: function () {
                var context = $(this).data('context'),
                  $textbox = context.$textarea
                $textbox.off('keypress.srdialog')
                $(this).closest('.ui-dialog').data('dialogaction', false)
              },
            },
          },
        },
      })
    })()
  )

  // @TODO 一个兼容问题，必须保证 wikiEditor 在 CodeMirror 之前加载
  mw.hook('InPageEdit').add(({ InPageEdit }) => {
    if (
      InPageEdit.preference.get('plugins').some((i) => /code-mirror/i.test(i))
    ) {
      mw.loader.using('ext.wikiEditor')
    }
  })
}
export function code_mirror_script() {  /**
   * @name code-mirror 语法高亮编辑器
   * @author 机智的小鱼君 <https://github.com/Dragon-Fish>
   * @author Bhsd <https://github.com/bhsd-harry>
   */
  mw.hook('InPageEdit').add(({ InPageEdit }) =>
    (async () => {
      // Constants
      const CM_CDN = 'https://fastly.jsdelivr.net/npm/codemirror@5.65.1'
      const WMGH_CDN =
        'https://fastly.jsdelivr.net/gh/wikimedia/mediawiki-extensions-CodeMirror@REL1_37'
      const PLUGIN_CDN = (InPageEdit.endpoints || InPageEdit.api).pluginCDN
      const USING_LOCAL = mw.loader.getState('ext.CodeMirror') !== null
      const THEME =
        InPageEdit.preference.get('codeMirrorTheme') || 'solarized light'
      const conf = mw.config.get()

      // Local settings cache
      const ALL_SETTINGS_CACHE = JSON.parse(
        localStorage.getItem('InPageEditMwConfig') || '{}'
      )
      const SITE_ID = `${conf.wgServerName}${conf.wgScriptPath}`
      const SITE_SETTINGS = ALL_SETTINGS_CACHE[SITE_ID]

      const MODE_LIST = USING_LOCAL
        ? {
            css: ['ext.CodeMirror.lib.mode.css'],
            javascript: ['ext.CodeMirror.lib.mode.javascript'],
            lua: `${CM_CDN}/mode/lua/lua.min.js`,
            mediawiki: ['ext.CodeMirror.mode.mediawiki', 'ext.CodeMirror.data'],
            widget: [
              'ext.CodeMirror.lib.mode.htmlmixed',
              'ext.CodeMirror.mode.mediawiki',
              'ext.CodeMirror.data',
            ],
          }
        : {
            css: `${CM_CDN}/mode/css/css.min.js`,
            javascript: `${CM_CDN}/mode/javascript/javascript.min.js`,
            lua: `${CM_CDN}/mode/lua/lua.min.js`,
            mediawiki: `${WMGH_CDN}/resources/mode/mediawiki/mediawiki.min.js`,
            htmlmixed: `${CM_CDN}/mode/htmlmixed/htmlmixed.min.js`,
            xml: `${CM_CDN}/mode/xml/xml.min.js`,
            widget: [],
          }

      if (!USING_LOCAL) {
        mw.loader.load(`${CM_CDN}/lib/codemirror.min.css`, 'text/css')
      }
      mw.loader.load(`${PLUGIN_CDN}/plugins/code-mirror/style.css`, 'text/css')
      if (!InPageEdit.preference.get('codeMirrorThemeNoCSS')) {
        mw.loader.load(`${CM_CDN}/theme/${THEME.split(' ')[0]}.min.css`, 'text/css')
      }

      function getScript(url) {
        return typeof url === 'string'
          ? $.ajax({
              url,
              dataType: 'script',
              crossDomain: true,
              cache: true,
            })
          : mw.loader.using(url.flat())
      }

      // Load Code Mirror
      USING_LOCAL
        ? await mw.loader.using('ext.CodeMirror.lib')
        : await getScript(`${CM_CDN}/lib/codemirror.min.js`)
      // Load addons
      const ADDON_LIST = [
        'selection/active-line.min.js',
        'dialog/dialog.js',
        'search/searchcursor.js',
        'search/search.js',
      ]
      await Promise.all(ADDON_LIST.map((i) => getScript(`${CM_CDN}/addon/${i}`)))

      /** @type {Record<string, boolean>} */
      const LOADED_MODE = {}
      /**
       * 加载渲染器
       * @param {String} type
       */
      async function initMode(type) {
        // 已经加载过的渲染器
        if (LOADED_MODE[type] === true) {
          return true
        }
        // 加载渲染器
        if (MODE_LIST[type] === undefined) return false
        if (type === 'widget') {
          if (USING_LOCAL) {
            await getScript(MODE_LIST[type])
            LOADED_MODE.css = true
            LOADED_MODE.javascript = true
            LOADED_MODE.mediawiki = true
          } else {
            await Promise.all(
              ['css', 'javascript', 'mediawiki', 'htmlmixed', 'xml'].map(initMode)
            )
          }
          CodeMirror.defineMIME('widget', {
            name: 'htmlmixed',
            tags: {
              noinclude: [[null, null, 'mediawiki']],
            },
          })
        } else {
          if (type === 'mediawiki' && !USING_LOCAL) {
            mw.loader.load(
              `${WMGH_CDN}/resources/mode/mediawiki/mediawiki.min.css`,
              'text/css'
            )
          }
          await getScript(MODE_LIST[type])
        }
        LOADED_MODE[type] = true
        return true
      }

      /**
       * 加载codemirror的mediawiki模块需要的设置数据
       */
      const getMwConfig = async (type) => {
        if (!['mediawiki', 'widget'].includes(type)) {
          return
        }
        /** @type {{ tagModes: { pre: string, nowiki:string }, tags: Record<string, boolean>, doubleUnderscore: Record<string, boolean>[], functionSynonyms: Record<string, boolean>[], urlProtocols: string }} */
        let config = mw.config.get('extCodeMirrorConfig')
        if (config) {
          return config
        }
        if (SITE_SETTINGS?.time > Date.now() - 86400 * 1000 * 3) {
          config = SITE_SETTINGS.config
          mw.config.set('extCodeMirrorConfig', config)
          return config
        }
        config = {}

        const {
          query: { magicwords, extensiontags, functionhooks, variables },
        } = await new mw.Api().get({
          action: 'query',
          meta: 'siteinfo',
          siprop: 'magicwords|extensiontags|functionhooks|variables',
          format: 'json',
          formatversion: 2,
        })
        const getAliases = (words) => words.flatMap(({ aliases }) => aliases),
          getConfig = (aliases) =>
            Object.fromEntries(
              aliases.map((alias) => [alias.replace(/:$/, ''), true])
            )
        config.tagModes = {
          pre: 'mw-tag-pre',
          nowiki: 'mw-tag-nowiki',
        }
        config.tags = Object.fromEntries(
          extensiontags.map((tag) => [tag.slice(1, -1), true])
        )
        const realMagicwords = new Set([...functionhooks, ...variables]),
          allMagicwords = magicwords.filter(
            ({ name, aliases }) =>
              aliases.some((alias) => /^__.+__$/.test(alias)) ||
              realMagicwords.has(name)
          ),
          sensitive = getAliases(
            allMagicwords.filter((word) => word['case-sensitive'])
          ),
          insensitive = [
            ...getAliases(
              allMagicwords.filter((word) => !word['case-sensitive'])
            ).map((alias) => alias.toLowerCase()),
            'msg',
            'raw',
            'msgnw',
            'subst',
            'safesubst',
          ]
        config.doubleUnderscore = [
          getConfig(insensitive.filter((alias) => /^__.+__$/.test(alias))),
          getConfig(sensitive.filter((alias) => /^__.+__$/.test(alias))),
        ]
        config.functionSynonyms = [
          getConfig(insensitive.filter((alias) => !/^__.+__|^#$/.test(alias))),
          getConfig(sensitive.filter((alias) => !/^__.+__|^#$/.test(alias))),
        ]
        config.urlProtocols = conf.wgUrlProtocols
        mw.config.set('extCodeMirrorConfig', config)
        ALL_SETTINGS_CACHE[SITE_ID] = {
          config,
          time: Date.now(),
        }
        localStorage.setItem(
          'InPageEditMwConfig',
          JSON.stringify(ALL_SETTINGS_CACHE)
        )
        return config
      }

      /**
       * 检查页面语言类型
       * @param {string} page Page name
       */
      function getPageMode(page) {
        const escapeRegExp = mw.util.escapeRegExp || mw.RegExp.escape
        const NS_MODULE = conf.wgFormattedNamespaces[828] || 'Module'
        const NS_WIDGET = conf.wgFormattedNamespaces[214] || 'Widget'
        const NS_ANYSUBJECT = new RegExp(
          `^(?:${Object.entries(conf.wgFormattedNamespaces)
            .filter(([ns]) => ns % 2 === 0)
            .map(([, text]) => escapeRegExp(text))
            .join('|')}):`
        )
        if (page.endsWith('.css') && NS_ANYSUBJECT.test(page)) {
          return 'css'
        } else if (
          (page.endsWith('.js') || page.endsWith('.json')) &&
          NS_ANYSUBJECT.test(page)
        ) {
          return 'javascript'
        } else if (page.startsWith(`${NS_MODULE}:`) && !page.endsWith('/doc')) {
          return 'lua'
        } else if (page.startsWith(`${NS_WIDGET}:`) && !page.endsWith('/doc')) {
          return 'widget'
        } else {
          return 'mediawiki'
        }
      }

      /**
       * 渲染编辑器
       * @param {JQuery<HTMLTextAreaElement>} target 目标编辑框
       * @param {string} page 页面名
       */
      async function renderEditor(target, page) {
        // 防止抑郁
        const clearDiv = '<div style="clear: both"></div>'
        target.before(clearDiv)
        target.after(clearDiv)

        let mode = getPageMode(page)
        const [mwConfig] = await Promise.all([getMwConfig(mode), initMode(mode)])

        if (target.length) {
          const cm = CodeMirror.fromTextArea(target[0], {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            extraKeys: { 'Alt-F': 'findPersistent' },
            theme: THEME,
            mode,
            mwConfig,
          })
          cm.refresh()
          cm.on('change', function (_, { origin }) {
            if (origin == 'setValue') {
              return
            }
            target.trigger('input')
            target.trigger('change')
          })
          $.valHooks.textarea = {
            get: function (elem) {
              if (elem === target[0]) return cm.getValue()
              else return elem.value
            },
            set: function (elem, value) {
              if (elem === target[0]) cm.setValue(value)
              else elem.value = value
            },
          }
          /**
           * jQuery.textSelection overrides for CodeMirror.
           * See jQuery.textSelection.js for method documentation
           */
          if (mw.loader.getState('jquery.textSelection') !== 'ready') {
            return cm
          }
          const cmTextSelection = {
            getContents() {
              return cm.getValue()
            },
            setContents(content) {
              cm.setValue(content)
              return this
            },
            getSelection() {
              return cm.getSelection()
            },
            setSelection(options) {
              cm.setSelection(
                cm.posFromIndex(options.start),
                cm.posFromIndex(options.end)
              )
              cm.focus()
              return this
            },
            replaceSelection(value) {
              cm.replaceSelection(value)
              return this
            },
            getCaretPosition(options) {
              const caretPos = cm.indexFromPos(cm.getCursor(true)),
                endPos = cm.indexFromPos(cm.getCursor(false))
              if (options.startAndEnd) {
                return [caretPos, endPos]
              }
              return caretPos
            },
            scrollToCaretPosition() {
              cm.scrollIntoView(null)
              return this
            },
          }
          target.textSelection('register', cmTextSelection)
          return cm
        }
      }

      /**
       * 为 quickEdit 钩子添加函数
       */
      mw.hook('InPageEdit.quickEdit').add(({ $editArea, $modalTitle }) =>
        (async () => {
          const page = $modalTitle.find('.editPage').text()
          const cm = await renderEditor($editArea, page)
          mw.hook('InPageEdit.quickEdit.codemirror').fire({ $editArea, cm })
        })()
      )
    })()
  )
}

export function monaco_script() {  /**
   * MediaWiki Gadget MonacoEditor
   * @author Dragon-Fish <dragon-fish@qq.com>
   * @author Bhsd <https://github.com/bhsd-harry>
   * @license MIT
   */
  mw.hook('InPageEdit.quickEdit').add(
    /**
     * hook payload
     * @param {{ $editArea: JQuery<HTMLTextAreaElement>; $modalContent: JQuery<HTMLElement>; $modalTitle: JQuery<HTMLElement> }} param0
     */
    ({ $editArea, $modalContent, $modalTitle }) => {
      ;(async () => {
        await mw.loader.using(['mediawiki.Title', 'mediawiki.util'])

        const textarea = $editArea.get(0)
        const language = getLangFromContentModel(
          $modalTitle.find('.editPage').text()
        )
        if (!textarea) {
          return console.warn('Missing textarea.', textarea, language)
        }

        const initialValue = textarea.value
        const MONACO_EXTRA_LIBS = [
          ...[window.MONACO_EXTRA_LIBS || []],
          [
            'https://cdn.jsdelivr.net/npm/@wikimedia/types-wikimedia@0.4.2/MediaWiki.d.ts',
            'MediaWiki.d.ts',
          ],
          [
            'https://cdn.jsdelivr.net/npm/@types/jquery@3.5.29/JQuery.d.ts',
            'jquery/JQuery.d.ts',
          ],
          [
            'https://cdn.jsdelivr.net/npm/@types/jquery@3.5.29/JQueryStatic.d.ts',
            'jquery/JQueryStatic.d.ts',
          ],
          ['declare const $: JQueryStatic', 'jquery/JQueryGlobal.d.ts'],
        ]

        await loadScript(
          'https://cdn.jsdelivr.net/npm/monaco-wiki/dist/all.min.js'
        )
        const monaco = await window.monaco
        mw.hook('InPageEdit.monaco').fire(monaco)

        const container = document.createElement('div')
        container.classList.add('inpageedit-monaco')
        container.style.width = '100%'
        container.style.height = '70vh'
        $modalContent.after(container)
        $modalContent.hide()

        const model = monaco.editor.createModel(initialValue, language)
        const opt = {
          model,
          automaticLayout: true,
          theme: 'vs-dark',
          tabSize: 2,
          glyphMargin: true,
        }
        if (language === 'wikitext') {
          opt.wordWrap = 'on'
          opt.wordBreak = 'keepAll'
          opt.unicodeHighlight = {
            ambiguousCharacters: false,
          }
        }
        const editor = monaco.editor.create(container, opt)

        // Initialize content from textarea
        let contentInitialized = !!initialValue
        const attachContentChangeListener = () => {
          model.onDidChangeContent(() => {
            textarea.value = model.getValue()
            textarea.dispatchEvent(new Event('input'))
            textarea.dispatchEvent(new Event('change'))
          })
        }
        if (!contentInitialized) {
          editor.updateOptions({ readOnly: true })
          const waitUntil = Date.now() + 10 * 1000
          const timer = setInterval(() => {
            if (Date.now() > waitUntil || textarea.value.trim()) {
              clearInterval(timer)
              editor.updateOptions({ readOnly: false })
              model.setValue(textarea.value)
              attachContentChangeListener()
              contentInitialized = true
            }
          }, 50)
        } else {
          attachContentChangeListener()
        }

        mw.hook('InPageEdit.monaco.editor').fire({
          container,
          editor,
          model,
          addExtraLib,
          addExternalExtraLib,
        })

        if (language === 'javascript') {
          addBatchExtraLibs(monaco, model, MONACO_EXTRA_LIBS)
        }

        async function loadScript(src) {
          return 'monaco' in window || $.ajax(src, { dataType: 'script', cache: true });
        }

        function getLangFromContentModel(given = '') {
          const title = new mw.Title(given)
          const nsNumber = title.getNamespaceId()
          const pageName = title.getMainText()
          const ext = title.getExtension()
          // const contentModel = mw.config.get('wgPageContentModel', '').toLowerCase()
          if (ext === 'js') {
            return 'javascript'
          } else if (ext === 'css') {
            return 'css'
          }
          // NS_MODULE
          else if (nsNumber === 828 && !pageName.endsWith('/doc')) {
            return 'lua'
          }
          // NS_WIDGET
          else if (nsNumber === 274) {
            return 'html'
          } else if (ext === 'json') {
            return 'json'
          }
          return 'wikitext'
        }

        /**
         * @param monaco
         * @param model
         * @param {string} libSource
         * @param {string?} fileName
         */
        function addExtraLib(monaco, model, libSource, fileName = '') {
          const URI_NS = 'ts:mw'
          fileName = fileName || `${crypto.randomUUID()}.d.ts`
          monaco.languages.typescript.javascriptDefaults.addExtraLib(
            libSource,
            `${URI_NS}/${fileName}`
          )
          model.updateOptions({
            uri: monaco.Uri.parse(`${URI_NS}/main.js`),
          })
        }
        /**
         * @param monaco
         * @param model
         * @param {string} libUrl
         * @param {string?} fileName
         */
        async function addExternalExtraLib(monaco, model, libUrl, fileName) {
          const libSource = await fetch(libUrl).then((i) => i.text())
          fileName = fileName || libSource.split('/').pop()?.split('?')[0]
          return addExtraLib(monaco, model, libSource, fileName)
        }
        /**
         * internal helper function
         * @param {(string | [string, string])[]} libs
         */
        async function addBatchExtraLibs(monaco, model, libs = []) {
          return Promise.all(
            libs.map((lib) => {
              if (typeof lib === 'string') {
                lib = [lib]
              }
              if (!Array.isArray(lib)) return Promise.resolve(null)
              if (typeof lib?.[0] !== 'string') return Promise.resolve(null)
              const helper = lib[0]?.startsWith('http')
                ? addExternalExtraLib
                : addExtraLib
              return helper(monaco, model, lib[0], lib[1])
            })
          )
        }
      })()
    }
  )
}
export function color_preview() {  /**
   * @name color-preview 快速预览颜色
   * @author 机智的小鱼君
   */
  !(function () {
    /**
     * @param {String} el Element selector
     */
    function loadColorPreview(el) {
      var $preview = $('<p>', { id: 'preview-color-sample' }),
        $color = $('<input>', { type: 'color', id: 'color-input' }),
        $text = $('<input>', { type: 'text', id: 'color-text-input', maxlength: '6' })
      var el = $(el) || $('#editform')
      el.prepend(
        $('<div>', { id: 'preview-color' }).append(
          $('<strong>', { text: '预览颜色' }),
          $('<div>', { id: 'color-area' }).append(
            $('<div>', { id: 'hex-input' }).append(
              $('<span>', { text: '#' }),
              $text
                .keyup(function () {
                  updatePreview('#' + $(this).val())
                })
                .val('ffffff'),
              $('<div>', { id: 'bottom-line' }),
              $('<div>', { id: 'color-input-container' }).append(
                $color
                  .change(function () {
                    updatePreview($(this).val())
                  })
                  .val('#ffffff')
              )
            )
          ),
          $preview
        )
      )
      function updatePreview(color) {
        $text.val(function () {
          return $text.val().replace('#', '')
        })
        $preview.html(function () {
          return $('<div>', { style: 'display: flex; text-align: center' }).append(
            $('<div>', { style: 'width: 25%; background-color: transparent' }).append($('<span>', { text: color }).css('color', color)),
            $('<div>', { style: 'width: 25%; background-color: #fff' }).append($('<span>', { text: color }).css('color', color)),
            $('<div>', { style: 'width: 25%; background-color: #000' }).append($('<span>', { text: color }).css('color', color)),
            $('<div>', { style: 'width: 25%; background-color: ' + color }).append(
              $('<span>', { text: '#ffffff' }).css('color', '#ffffff'),
              '&emsp;',
              $('<span>', { text: '#000000' }).css('color', '#000000')
            )
          )
        })
        $color.val(color)
        $text.val(color.replace(/#/g, ''))
      }
    }

    if (typeof mw !== 'undefined') {
      // Action Edit
      if (mw.config.get('wgAction') === 'edit') {
        loadColorPreview('#editform')
      }
      // IPE
      mw.hook('InPageEdit.quickEdit').add(({ $modalContent }) => {
        loadColorPreview($modalContent)
      })
    } else {
      loadColorPreview($('#app'))
    }

    // Style
    $('head').append(
      $('<style>', { 'data-ipe': 'style', 'data-plugin': 'color-preview.js' }).text(
        '#preview-color{font-size:18px;line-height:1.4;}#preview-color #color-area #hex-input{display:inline-block;position:relative}#preview-color #color-area #hex-input span{font-weight:bold;color:#bbbbbb;user-select:none}#preview-color #color-area #hex-input #bottom-line{background-color:#bbbbbb;position:absolute;height:2px;width:100%;bottom:0;left:0}#preview-color #color-area #hex-input #bottom-line::before{content:"";position:absolute;height:2px;width:100%;transform:scaleX(0);background-color:#008a00;transition:all ease .6s}#preview-color #color-area #hex-input #color-text-input{border:0 !important;background-color:transparent;box-shadow:none;padding:2px;width:120px}#preview-color #color-area #hex-input #color-text-input:focus+#bottom-line::before{transform:scaleX(1)}#preview-color #color-input-container{position:relative;display:inline-block;cursor:pointer;border:0;border-radius:50%;overflow:hidden;height:1rem;width:1rem;box-shadow:0 0 4px gray;}#preview-color #color-area #hex-input #color-input{padding:0;margin:0;width:1rem;height:1rem;border:0;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(5);}#preview-color #preview-color-sample{width:100%}'
      )
    )
  })()
}
export function quick_thank() {  /**
   * @name IPE-quick-thank
   * @author Leranjun
   * @author 机智的小鱼君
   * @desc 在toolbox添加快速感谢功能
   *
   * @trivia I did not steal this code from Dragon-Fish.
   *         Not one byte. -- Leranjun
   */
  mw.hook('InPageEdit').add(({ _msg }) => {
    const conf = mw.config.get()

    // Language pack
    const ipe = window.InPageEdit || {}
    ipe.i18n = ipe.i18n || {}
    const langPack = {
      en: {
        thank_btn: 'Quick Thank',
        thank_title: 'Quick thank',
        thank_label: 'Please enter a revision ID',
        thank_success: 'Thanked',
        thank_error: 'Error while thanking: $1',
        thank_query_btn: 'Query',
        thank_progress: 'Requesting...',
        thank_all: 'Thank all!',
      },
      'zh-hans': {
        thank_btn: '快速感谢',
        thank_title: '快速感谢',
        thank_label: '请指定修订版本ID',
        thank_success: '已感谢',
        thank_error: '无法感谢：$1',
        thank_query_btn: '查询',
        thank_progress: '处理中...',
        thank_all: '我特么谢谢宁！',
      },
    }
    $.each(langPack, (lang, str) => {
      ipe.i18n[lang] = ipe.i18n[lang] || {}
      ipe.i18n[lang] = {
        ...ipe.i18n[lang],
        ...str,
      }
    })

    // 处理是否感谢过
    function getThanked() {
      let saves = localStorage.getItem('InPageEditThank') || ''
      saves = saves.split('|')
      return saves
    }
    function saveThanked(rev) {
      rev = String(rev)
      let saves = getThanked()
      if (!saves.includes(rev)) saves.push(rev)
      localStorage.setItem('InPageEditThank', saves.join('|'))
    }
    function canThank({ revid, user }) {
      revid = String(revid)
      let saves = getThanked()
      if (saves.includes(revid) || user === conf.wgUserName) {
        return false
      } else {
        return true
      }
    }

    // 发送感谢
    async function sendThank(rev) {
      const data = await new mw.Api().postWithToken('csrf', {
        action: 'thank',
        format: 'json',
        rev,
        source: 'diff',
      })
      return data
    }

    // 获取页面最近 10 次编辑
    async function getPageRevisions(page) {
      const { query } = await new mw.Api().get({
        action: 'query',
        format: 'json',
        prop: 'revisions',
        titles: page,
        rvprop: 'user|comment|timestamp|ids',
        rvlimit: '10',
      })
      const pageId = Object.keys(query.pages)
      return query?.pages?.[pageId]?.revisions || []
    }

    // 模态框
    function quickThank() {
      const $modalContent = $('<div>')
      const $listArea = $('<div>', { class: 'rev-list' })
      const $progress = () => {
        return $(
          '<div class="ipe-progress" style="width: 100%"><div class="ipe-progress-bar"></div></div>'
        )
      }
      const $pageInput = $('<input>').css({ flex: 1 })
      const $queryBtn = $('<button>', {
        class: 'btn btn-primary',
        text: _msg('thank_query_btn'),
      }).click(function () {
        const page = $pageInput.val()
        if (!page) return
        makeList(page)
      })
      const $inputArea = $('<label>')
        .append($pageInput, $queryBtn)
        .css({ display: 'flex' })

      $modalContent.append($inputArea, $listArea)

      async function makeList(page) {
        $listArea.html('').append($progress)
        const list = await getPageRevisions(page)
        const $list = $('<ul>')

        $.each(list, (index, { revid, parentid, timestamp, user, comment }) => {
          // 按钮
          const $thankBtn = $('<a>', {
            href: 'javascript:;',
            text: canThank({ revid, user })
              ? _msg('thank_btn')
              : _msg('thank_success'),
            class: 'thank-btn',
          }).on('click', async function () {
            const $this = $(this)
            if ($this.attr('disabled')) return
            $this.attr('disabled', '')
            try {
              const { result } = await sendThank(revid)
              console.log(result)
              if (result?.success === 1) {
                $this.text(_msg('thank_success'))
                saveThanked(revid)
                return
              }
              throw 'unknown error'
            } catch (err) {
              $this.removeAttr('disabled', '')
              ssi_modal.notify('error', {
                className: 'in-page-edit',
                title: _msg('error'),
                content: _msg('thank_error', err),
              })
            }
          })
          if (!canThank({ revid, user })) $thankBtn.attr('disabled', '')

          const $diffBtn = $('<a>', {
            href: 'javascript:;',
            text: _msg('quick-diff'),
          }).on('click', async function () {
            InPageEdit.quickDiff({
              fromrev: parentid,
              torev: revid,
            })
          })

          $list.append(
            $('<li>').append(
              $('<strong>', { text: revid, title: timestamp }),
              ' ',
              $('<a>', {
                text: user,
                class: 'mw-user',
                href: mw.util.getUrl(`User:${user}`),
              }),
              ' ',
              $('<span>', { text: comment ? `(${comment})` : '' }),
              ' [',
              $diffBtn,
              ' | ',
              $thankBtn,
              ']'
            )
          )
        })

        $thankAll = $('<div>', { class: 'thank-all' })
          .css({ 'text-align': 'center' })
          .append(
            $('<button>', {
              class: 'btn btn-danger thank-all-btn',
              text: _msg('thank_all'),
            }).click(function () {
              $(this).attr('disabled', '')
              $list.find('.thank-btn').each((index, item) => {
                $(item).click()
              })
            })
          )

        $listArea.html('').append($list, $thankAll)
      }

      const modal = ssi_modal.show({
        className: 'in-page-edit ipe-thank',
        sizeClass: 'small',
        center: true,
        outSideClose: false,
        title: _msg('thank_title'),
        content: $modalContent,
      })

      $pageInput.val(conf.wgPageName)
      $queryBtn.click()

      return modal
    }

    // Toolbox 插入按钮
    mw.hook('InPageEdit.toolbox').add(({ $toolbox }) => {
      $toolbox
        .find('.btn-group.group1')
        .append(
          $('<li>', { class: 'btn-tip-group' }).append(
            $('<div>', { class: 'btn-tip', text: _msg('thank_btn') }),
            $('<button>', { class: 'ipe-toolbox-btn fa fa-smile-o' }).click(
              quickThank
            )
          )
        )
    })

    mw.util.addCSS(`
    .ipe-thank .thank-btn[disabled] {
      color: gray;
      text-decoration: line-through;
      cursor: not-allowed;
    }
    `)
    ipe.quickThank = quickThank
  })
}
export function fix_double_entrance() {  /**
   * @name fix-double-entrance
   * @desc Fix https://github.com/inpageedit/inpageedit-v2/issues/146
   */
  mw.hook('InPageEdit').add(() => {
    $('.mw-editsection').each((_, item) => {
      $(item)
        .find('.in-page-edit-article-link-group')
        .each((index, item) => {
          if (index > 0) $(item).hide()
        })
    })
  })
}
export function april_fool_2023_autoload() {  mw.hook('InPageEdit').add(() => {
    mw.loader.load('https://ipe-plugins.js.org/plugins/april-fool-2023/main.js')
    mw.loader.load(
      'https://ipe-plugins.js.org/plugins/april-fool-2023/style.css',
      'text/css'
    )
  })
}