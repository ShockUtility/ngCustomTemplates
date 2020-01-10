// import { parseName } from "@schematics/angular/utility/parse-name";
// import { buildDefaultPath } from "@schematics/angular/utility/project";
import { Rule, SchematicContext, Tree, apply, mergeWith, template, url, move, SchematicsException } from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
import * as fs from 'fs';
import { Schema } from "./schema";

export function run(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = _tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("*** Angular CLI 프로젝트가 아니군!!! ***");
    }

    const templatePath = process.cwd() + '/templates/' + _options.templateName;
    if (!fs.existsSync(templatePath)) {
      throw new SchematicsException("*** '"+templatePath+"' 폴더에 템플릿을 만들고 실행해 주시지! ***");
    }

    const sourceFiles = url(templatePath);
    const sourceParametrizedFiles = apply(sourceFiles, [   // 각각의 템플릿 파일에 적용할 액션 등록
      template({ ..._options, ...strings }),               //    1. 파일 이름 및 내부 텍스트를 리플레이스 시킨다.
      move(_options.targetPath)                            //    2. 리플레이스된 모든 파일을 지정된 위치로 이동 시킨다.
    ]);

    return mergeWith(sourceParametrizedFiles);
  };
}
