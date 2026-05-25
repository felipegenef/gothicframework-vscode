# Changelog

All notable changes to the **Gothic Framework** extension will be documented in this file.

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
