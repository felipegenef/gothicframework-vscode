import * as vscode from 'vscode';

export async function applyRecommendedSettings() {
    const config = vscode.workspace.getConfiguration();

    // 1. [templ] default formatter
    const templSettings = config.get<any>('[templ]') || {};
    await config.update('[templ]', {
        ...templSettings,
        'editor.defaultFormatter': 'felipegenef.gothicframework-vscode'
    }, vscode.ConfigurationTarget.Workspace);

    // 2. tailwindCSS.includeLanguages
    const tailwindSettings = config.get<Record<string, string>>('tailwindCSS.includeLanguages') || {};
    await config.update('tailwindCSS.includeLanguages', {
        ...tailwindSettings,
        'templ': 'html'
    }, vscode.ConfigurationTarget.Workspace);

    // 3. files.exclude
    const filesExclude = config.get<Record<string, boolean>>('files.exclude') || {};
    await config.update('files.exclude', {
        ...filesExclude,
        '**/*_templ.go': true
    }, vscode.ConfigurationTarget.Workspace);

    // 4. search.exclude
    const searchExclude = config.get<Record<string, boolean>>('search.exclude') || {};
    await config.update('search.exclude', {
        ...searchExclude,
        '**/*_templ.go': true
    }, vscode.ConfigurationTarget.Workspace);

    vscode.window.showInformationMessage('Gothic Framework: Recommended settings applied successfully.');
}
