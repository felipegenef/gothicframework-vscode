import * as vscode from 'vscode';
import * as path from 'path';

export async function isTemplProject(): Promise<boolean> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        return false;
    }

    // Small delay to let workspace initialize
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check for *.templ files
    const templFiles = await vscode.workspace.findFiles('**/*.templ', '**/node_modules/**', 5);
    if (templFiles.length > 0) {
        return true;
    }

    // Check go.mod for templ dependency
    for (const folder of workspaceFolders) {
        const goModPath = path.join(folder.uri.fsPath, 'go.mod');
        try {
            const goModUri = vscode.Uri.file(goModPath);
            const goModContent = await vscode.workspace.fs.readFile(goModUri);
            if (goModContent.toString().includes('github.com/a-h/templ')) {
                return true;
            }
        } catch (err) {
            // go.mod might not exist, skip
        }
    }

    return false;
}
