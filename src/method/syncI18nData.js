import { resolvePath } from './_dir'
import { mwConfig } from '../utils/mw'
import {I18N_DATA} from "../libs/i18n.js";

// 设置
const cacheTime = 2 * 60 * 60 * 1000
const cacheUrl = resolvePath(
  import.meta.env.MODE === 'development'
    ? '/i18n/languages.json'
    : '/dist/i18n/languages.json'
)
const funcName = 'InPageEdit'
const localCacheName = 'i18n-cache-' + funcName + '-content'
const localCacheTime = 'i18n-cache-' + funcName + '-timestamp'

/**
 * @method i18n Get i18n data
 * @param {Boolean} noCache true - forced no cache
 */
export async function syncI18nData(noCache) {
  const now = new Date().getTime()
  // 如果语言为 qqx，不返回任何东西
  if (mwConfig.wgUserLanguage === 'qqx') {
    console.warn('[InPageEdit] User language is qqx')
    return true
  }
  // 缓存存在且缓存未过期
  if (
    localStorage.getItem(localCacheName) &&
    now - localStorage.getItem(localCacheTime) < cacheTime &&
    !noCache
  ) {
    var json = {}
    try {
      json = JSON.parse(localStorage.getItem(localCacheName))
    } catch (e) {
      console.warn('[InPageEdit] i18n 数据不合法')
      await getOriginalData()
      return true
    }
    if (json.en) {
      return true
    } else {
      console.warn('[InPageEdit] i18n 数据可能已损坏')
      await getOriginalData()
      return true
    }
  } else {
    await getOriginalData()
    return true
  }
}

/**
 * @function saveToCache
 */
function saveToCache(data) {
  const now = new Date().getTime()
  data = JSON.stringify(data)
  localStorage.setItem(localCacheName, data)
  localStorage.setItem(localCacheTime, now)
}

/**
 * @function getOriginalData
 */
async function getOriginalData() {
  const data = JSON.parse(I18N_DATA);
  saveToCache(data);
  return data
}
