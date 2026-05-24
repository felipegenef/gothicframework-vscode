# Gothic Framework

The official VS Code extension for Gothic Framework and templ development.

This extension provides a superior developer experience (DX) for the Gothic Framework ecosystem while preserving all existing templ language support and features.

## Features

- **Automatic templ Project Detection**: Detects templ projects and offers recommended settings.
- **Recommended Workspace Settings**:
  - Automatically configures the `templ` formatter.
  - Adds Tailwind CSS support for `templ` files.
  - Hides generated `*_templ.go` files from the explorer and search for a cleaner workspace.
- **Gothic Framework Snippets**: Specialized snippets for Page, Component, and API routes.
- **Syntax Highlighting**: Full syntax highlighting for the `templ` language.
- **LSP Integration**: Deep integration with the `templ` language server.

## Commands

- `Gothic Framework: Apply Recommended Settings`: Manually apply the recommended workspace configuration.
- `Gothic Framework: Show Generated _templ.go Files`: Restores visibility of generated files in the explorer.
- `Templ: Restart Language Server`: Restarts the underlying `templ` LSP.

## Snippets

### templ Snippets
- `gpr`: Generate a Gothic Framework page route.
- `gcr`: Generate a Gothic Framework component route.

### go Snippets
- `gar`: Generate a Gothic Framework API route.

## Installation

Install the extension from the VS Code Marketplace or Open VSX Registry.

## Requirements

Requires `templ` and `gopls` on the system path to function correctly.

## Issues

Please raise any issues in the [Gothic Framework VS Code Extension repository](https://github.com/felipegenef/gothicframework-vscode).

---

Based on [templ-vscode](https://github.com/a-h/templ-vscode).
