import * as vscode from 'vscode';
import { applyRecommendedSettings } from '../config/applySettings';

export async function promptForSettings(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('gothicframework');
    const neverAskAgain = config.get<boolean>('neverAskAgain', false);
    const hasPrompted = context.workspaceState.get<boolean>('gothicframework.hasPrompted', false);

    if (neverAskAgain || hasPrompted) {
        return;
    }

    const selection = await vscode.window.showInformationMessage(
        'Apply recommended Gothic Framework templ settings?',
        'Yes',
        'No',
        'Never Ask Again'
    );

    if (selection === 'Yes') {
        await applyRecommendedSettings();
        await context.workspaceState.update('gothicframework.hasPrompted', true);
    } else if (selection === 'No') {
        await context.workspaceState.update('gothicframework.hasPrompted', true);
    } else if (selection === 'Never Ask Again') {
        await config.update('neverAskAgain', true, vscode.ConfigurationTarget.Global);
    }
}
