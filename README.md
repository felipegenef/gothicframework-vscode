# Gothic Framework VS Code extension has moved 🚚

> [!IMPORTANT]
> ## ⚠️ Active development moved to [github.com/gothicframework/vscode-plugin](https://github.com/gothicframework/vscode-plugin)
>
> This repository (`felipegenef/gothicframework-vscode`) is **no longer actively developed**. The extension is now maintained under the Gothic Framework organization, alongside the rest of the v3 toolchain. Please file issues and contributions there.

The official VS Code extension for **Gothic Framework** and **templ** development — a superior DX for the GOTTH stack (**Go**, **TailwindCSS**, **Templ**, **HTMX**) that preserves all existing templ language support.

---

## Where everything lives now (v3)

| | Repo | What it is |
|---|---|---|
| **VS Code extension** | [`gothicframework/vscode-plugin`](https://github.com/gothicframework/vscode-plugin) | This extension |
| **CLI** | [`gothicframework/cli`](https://github.com/gothicframework/cli) | The `gothic` command (scaffold, dev, build, deploy) |
| **Core** | [`gothicframework/core`](https://github.com/gothicframework/core) | Runtime library: file-based routing, caching/ISR, WASM runtime, assets |
| **Components** | [`gothicframework/components`](https://github.com/gothicframework/components) | Reusable Templ components (`RuntimeScripts`, `Styles`, `OptimizedImage`, …) |
| **Middlewares** | [`gothicframework/middlewares`](https://github.com/gothicframework/middlewares) | The single chi middleware that wires the whole runtime |

---

## Features

- **Automatic templ Project Detection**: Detects templ projects and offers recommended settings.
- **Recommended Workspace Settings**:
  - Automatically configures the `templ` formatter.
  - Adds Tailwind CSS support for `templ` files.
  - Hides generated files (`*_templ.go`, `*_gen.go`) from the explorer and search for a cleaner workspace.
- **Gothic Framework Snippets**: Specialized snippets for Page, Component, and API routes.
- **Syntax Highlighting**: Full syntax highlighting for the `templ` language.
- **LSP Integration**: Deep integration with the `templ` language server.

## Commands

- `Gothic Framework: Apply Recommended Settings` — Manually apply the recommended workspace configuration.
- `Gothic Framework: Show Generated Files` — Restore visibility of generated files in the explorer.
- `Templ: Restart Language Server` — Restart the underlying `templ` LSP.

## Snippets

**templ:** `gpr` → page route · `gcr` → component route
**go:** `gar` → API route

## Installation

Install from the **VS Code Marketplace** or the **Open VSX Registry** (search “Gothic Framework”). Then scaffold a project:

```bash
go install github.com/gothicframework/cli/v3/cmd/gothic@latest
gothic init github.com/you/my-app
