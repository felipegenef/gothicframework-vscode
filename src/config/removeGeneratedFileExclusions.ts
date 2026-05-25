import * as vscode from 'vscode';

export async function removeGeneratedFileExclusions() {
    const config = vscode.workspace.getConfiguration();

    // Remove from files.exclude
    const filesExclude = config.get<Record<string, boolean>>('files.exclude') || {};
    let filesExcludeChanged = false;
    const newFilesExclude = { ...filesExclude };
    
    if (newFilesExclude['**/*_templ.go']) {
        delete newFilesExclude['**/*_templ.go'];
        filesExcludeChanged = true;
    }
    if (newFilesExclude['**/topic_gen.go']) {
        delete newFilesExclude['**/topic_gen.go'];
        filesExcludeChanged = true;
    }
    
    if (filesExcludeChanged) {
        await config.update('files.exclude', newFilesExclude, vscode.ConfigurationTarget.Workspace);
    }

    // Remove from search.exclude
    const searchExclude = config.get<Record<string, boolean>>('search.exclude') || {};
    let searchExcludeChanged = false;
    const newSearchExclude = { ...searchExclude };

    if (newSearchExclude['**/*_templ.go']) {
        delete newSearchExclude['**/*_templ.go'];
        searchExcludeChanged = true;
    }
    if (newSearchExclude['**/topic_gen.go']) {
        delete newSearchExclude['**/topic_gen.go'];
        searchExcludeChanged = true;
    }

    if (searchExcludeChanged) {
        await config.update('search.exclude', newSearchExclude, vscode.ConfigurationTarget.Workspace);
    }

    vscode.window.showInformationMessage('Gothic Framework: Generated files are now visible.');
}
