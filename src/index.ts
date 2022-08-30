import * as vscode from "vscode";
import js from "../src/generated/javascript.json";
import jsx from "../src/generated/javascriptreact.json";
import ts from "../src/generated/typescript.json";
import tst from "../src/generated/typescriptreact.json";
import { generateSnippets } from "./gen";

export async function activate(context: vscode.ExtensionContext) {
  console.log("Activating extension");

  const xd = new Promise((resolve) => {
    resolve(generateSnippets());
  });

  await xd;

  console.log("Extension activated");
}

// this method is called when your extension is deactivated
export function deactivate() {}
