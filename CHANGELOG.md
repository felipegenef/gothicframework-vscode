# Changelog

All notable changes to the **Gothic Framework** extension will be documented in this file.

## [0.1.5] - 2026-05-27

### Added
- **Auto-install templ**: When the `templ` executable is not found, the extension now shows an actionable notification with "Install templ" and "Open Docs" buttons instead of a raw error. Clicking "Install templ" runs `go install github.com/a-h/templ/cmd/templ@v0.3.1020` automatically and starts the LSP on success.

### Changed
- **Import paths updated to v2**: All snippets (`gar`, `gpr`, `gcr`) now import from `github.com/felipegenef/gothicframework/v2/...` to match the Gothic Framework v2 module path.

## [0.1.4] - 2026-05-25

### Changed
- **`gtd` snippet updated**: `TopicConfig` now expands with all four fields — `Name`, `Compression`, `SubscriberFnName`, and `ComponentFnName`. The last two are tab-stop placeholders that default to the struct-derived names (`<TopicName>Topic` and `Add<TopicName>Topic`) so they can be left as-is or overridden without leaving the keyboard.

## [0.1.3] - 2026-05-24

### Added
- **New Snippet**: Added `gtd` (Gothic Topic Definition) snippet for Go files.

## [0.1.2] - 2026-05-24

### Added
- **Expanded Exclusions**: Added `**/topic_gen.go` to the recommended automatic file and search exclusions.

## [0.1.1] - 2026-05-24

### Fixed
- **Onboarding Reliability**: Fixed a race condition that prevented the onboarding prompt from appearing in some projects.
- **Snippet Syntax**: Corrected invalid Go syntax (`interface{}{}`) in Gothic Page and Component snippets.

## [0.1.0] - 2026-05-24

### Added
- **Initial Fork Release**: Transitioned from `templ-vscode` to `gothicframework-vscode`.
- **Automatic Project Detection**: Detects `templ` projects and prompts for recommended settings.
- **Recommended Settings**: 
    - Automated configuration for `templ` formatter.
    - Tailwind CSS support for `templ` files.
    - Automatic hiding of `*_templ.go` files for a cleaner workspace.
- **Gothic Snippets**: 
    - `gpr`: Gothic Page Route.
    - `gcr`: Gothic Component Route.
    - `gar`: Gothic API Route.
- **Rebranding**: Complete rebranding of extension metadata, icons, and documentation.
- **Commands**: 
    - `Gothic Framework: Apply Recommended Settings`.
    - `Gothic Framework: Show Generated _templ.go Files`.

---
*Based on the original [templ-vscode](https://github.com/a-h/templ-vscode) extension.*
