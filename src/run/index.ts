import { Rule, SchematicContext, Tree, apply, mergeWith, template, url, move, SchematicsException } from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
import * as fs from 'fs';
import { Schema } from "./schema";

export function run(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = _tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("*** Please use in Angular CLI project!!! ***");
    }
        
    var sourceParametrizedFiles;
    const templateRoot = process.cwd() + '/templates';
    const templateSource = templateRoot + '/' + _options.templateName;
    const isTemplateRoot = fs.existsSync(templateRoot);
    const sourceFiles = url(isTemplateRoot ? templateSource : './files');

    if (isTemplateRoot) {
      if (!fs.existsSync(templateSource)) {
        throw new SchematicsException("*** This template is not registered!!!\n*** (" + templateSource + ")");
      }

      sourceParametrizedFiles = apply(sourceFiles, [
        template({ ..._options, ...strings }),
        move(_options.targetPath)
      ]);
    } else {
      sourceParametrizedFiles = apply(sourceFiles, [
        move('/templates')
      ]);

      console.log('');
      console.log('#######################################################################');
      console.log('# Empty template set!');
      console.log('# Installing the demo template. (' +  templateRoot + '/demo)');
      console.log('# Refer to the demo template to create a template to use.');
      console.log('# Demo template command : $ ng g ng-custom-templates:run demo');      
      console.log('#######################################################################');
      console.log('');
    }

    return mergeWith(sourceParametrizedFiles);
  };
}
