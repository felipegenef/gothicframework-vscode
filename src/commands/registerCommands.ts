import * as vscode from 'vscode';
import { applyRecommendedSettings } from '../config/applySettings';
import { removeGeneratedFileExclusions } from '../config/removeGeneratedFileExclusions';

export function registerCommands(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('gothicframework.applyRecommendedSettings', async () => {
            await applyRecommendedSettings();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('gothicframework.showGeneratedFiles', async () => {
            await removeGeneratedFileExclusions();
        })
    );
}
