export function isFirefox(): boolean {
  return !!(
    typeof globalThis.browser !== 'undefined' &&
    globalThis.browser.runtime &&
    globalThis.browser.runtime.getBrowserInfo
  )
}

export function isSafari(): boolean {
  return typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

export function getBrowserNetRequestPermissions(): string[] {
  return isFirefox() ? ['webRequest', 'webRequestBlocking'] : ['declarativeNetRequestWithHostAccess']
}
