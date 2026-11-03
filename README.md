# TUfast for Safari

A Safari port of [TUfast](https://github.com/TUfast-TUD/TUfast_TUD), the extension that logs you in to OPAL, Selma, Outlook and the other TU Dresden portals. Upstream only ships Chrome, Firefox and Opera builds.

Not an official TU Dresden or TUfast release. Feature work belongs upstream; this branch only carries what Safari needs.

## What's different from upstream

- Credentials are encrypted with a key that doesn't use `chrome.system.cpu`, because Safari doesn't have that API.
- The extension asks for access only to TU sites, OPAL, SLUB, the GitLabs and the search engines, never all websites. Otherwise Safari asks you on every page.
- "Open OPAL PDFs in the browser" is off. Safari crashes while loading the network rules it needs.
- Outlook pages report that they're open, so the mail check never has to read your tabs.
- No desktop notifications for new mail, and the keyboard-shortcut settings button does nothing (Safari has neither).

## Build

Needs Node and Xcode, macOS only.

```bash
npm ci
npm run useSafari && npm run build
xcodebuild -project safari/TUfast/TUfast.xcodeproj -scheme TUfast -configuration Release \
  -derivedDataPath .xcbuild DEVELOPMENT_TEAM=<your team id> -allowProvisioningUpdates build
cp -R .xcbuild/Build/Products/Release/TUfast.app /Applications/
```

Open the app once, then turn on TUfast in Safari → Settings → Extensions. Without a developer team, enable Develop → Allow Unsigned Extensions instead (Safari forgets that on every restart).

## License

MPL 2.0, like upstream. See [LICENSE](LICENSE).
