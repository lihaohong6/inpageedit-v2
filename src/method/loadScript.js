import {ssiModal} from "../libs/scripts.js";
import {
  code_mirror_cm6, code_mirror_script,
  color_preview,
  edit_any_page,
  fix_double_entrance, monaco_script,
  quick_thank, toolbox,
  wiki_editor
} from "../libs/plugins.js";

const scriptMap = {
  'ssi-modal': ssiModal,
  'toolbox.js': toolbox,
  'edit-any-page.js': edit_any_page,
  'wiki-editor.js': wiki_editor,
  'code-mirror/script.js': code_mirror_script,
  'code-mirror/cm6.js': code_mirror_cm6,
  'monaco/script.js': monaco_script,
  'color-preview.js': color_preview,
  'quick-thank.js': quick_thank,
  'fix-double-entrance.js': fix_double_entrance,
  // 'april-fool-2023/autoload.js': april_fool_2023_autoload,
}

export function loadScript(src, noCache) {
  if (scriptMap[src]) {
    return Promise.resolve(scriptMap[src]());
  }
  return Promise.reject(new Error("Cannot load script " + src));
}
