import * as vscode from 'vscode';

export async function removeGeneratedFileExclusions() {
    const config = vscode.workspace.getConfiguration();

    // Remove from files.exclude
    const filesExclude = config.get<Record<string, boolean>>('files.exclude') || {};
    if (filesExclude['**/*_templ.go']) {
        const newFilesExclude = { ...filesExclude };
        delete newFilesExclude['**/*_templ.go'];
        await config.update('files.exclude', newFilesExclude, vscode.ConfigurationTarget.Workspace);
    }

    // Remove from search.exclude
    const searchExclude = config.get<Record<string, boolean>>('search.exclude') || {};
    if (searchExclude['**/*_templ.go']) {
        const newSearchExclude = { ...searchExclude };
        delete newSearchExclude['**/*_templ.go'];
        await config.update('search.exclude', newSearchExclude, vscode.ConfigurationTarget.Workspace);
    }

    vscode.window.showInformationMessage('Gothic Framework: Generated _templ.go files are now visible.');
}
