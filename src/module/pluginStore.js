// import _dir from '../method/_dir';
// import { _msg } from './_msg';
import { pluginCDN } from './endpoints'
import { preference } from './preference'
import { loadScript } from '../method/loadScript'

/**
 * @module pluginStore 加载InPageEdit插件
 */
export class pluginStore {
  /**
   * @module pluginStore.get 获取官方插件
   */
  static get() {
    return Promise.resolve(
        JSON.parse(`{"toolbox.js":{"_force":true,"name":"InPageEdit Toolbox","author":"dragon-fish","description":"Adds a toolbox in the bottom-right corner of your screen. Lets you quickly access frequently used IPE functions."},"edit-any-page.js":{"name":"Edit any page","author":"dragon-fish","description":"Adds a button into IPE Toolbox that lets you edit any page anywhere","dependency":["toolbox.js"]},"wiki-editor.js":{"name":"WikiEditor","description":"Make InPageEdit use native WikiEditor (2010 editor) instead of IPE's custom editTools.","author":"dragon-fish"},"code-mirror/script.js":{"name":"CodeMirror 5","description":"Syntaxhighlight editor for InPageEdit. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. In conflict with CodeMirror 6.","author":"InPageEdit"},"code-mirror/cm6.js":{"name":"[BETA] CodeMirror 6","description":"Syntaxhighlight editor for InPageEdit. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. [!] In conflict with CodeMirror 5.","author":"InPageEdit"},"monaco/script.js":{"name":"Monaco Editor","description":"Provides the advanced editor VSCode is using. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. [!] In conflict with CodeMirror. ([https://github.com/inpageedit/plugins/blob/HEAD/src/plugins/monaco/README.md More info])","author":"InPageEdit"},"color-preview.js":{"name":"Color preview","author":"dragon-fish","description":"Adds a box above the edit textarea to quickly preview the hexadecimal color"},"quick-thank.js":{"name":"Quick thank","author":"Leranjun","description":"Adds a button into IPE Toolbox that lets you thank any page anywhere","dependency":["toolbox.js"]},"fix-double-entrance.js":{"name":"Fix double entrance","description":"Fix the bug that two Quick Edit link appear in section edit area when the Visual Editor is enabled"},"april-fool-2023/autoload.js":{"name":"My Little IPE","author":"dragon-fish","description":"IPE Chan - Your powerful MediaWiki AI assistant (Of course it's just a joke)"}}`)
    )
  }
  static saveCache(data) {
    var ipe = window.InPageEdit || {}
    ipe.cache = ipe.cache || {}
    ipe.cache.pluginList = data
    window.InPageEdit = ipe
  }
  static loadCache() {
    var ipe = window.InPageEdit || {}
    ipe.cache = ipe.cache || {}
    return ipe.cache.pluginList
  }
  /**
   * @module pluginStore.load 载入插件
   * @param {String} name
   */
  static load(name) {
    if (/^https?:\/\//.test(name)) {
      mw.loader.load(name, /\.css$/i.test(name) ? 'text/css' : undefined)
      console.info('[InPageEdit] 从远程加载非官方插件', name)
    } else {
      loadScript(name).then(
        () => console.info('[InPageEdit] 插件 ' + name + ' 加载成功'),
        (err) => console.warn('[InPageEdit] 插件 ' + name + ' 加载失败', err)
      )
      console.info('[InPageEdit] 从官方插件商店加载插件', name)
    }
  }
  /**
   * @module pluginStore.initUserPlugin 初始化用户插件
   */
  static initUserPlugin() {
    var userPlugins = preference.get('plugins')
    if (typeof userPlugins === 'object' && userPlugins.length > 0) {
      $.each(userPlugins, (key, val) => {
        pluginStore.load(val)
      })
    }
  }
}
