// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MinifyJson } from './core/commands/minify-json';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	
	console.log('Congratulations, your extension "juanse" is now active!');

	let disposable = vscode.commands.registerCommand('juanse.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from juanse!');
	});

	let disposable1 = vscode.commands.registerCommand('juanse.minifyJson', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			let text = editor.document.getText(editor.selection);
			let newText = new MinifyJson().minifyJson(text);

			editor.edit(editBuilder => {
				editBuilder.replace(editor.selection, newText);
			});
		}
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable1);
}

// this method is called when your extension is deactivated
export function deactivate() {}


