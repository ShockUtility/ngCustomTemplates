import { Rule, SchematicContext, Tree, apply, mergeWith, template, url, move } from '@angular-devkit/schematics';
import { normalize, strings } from "@angular-devkit/core";
import { Schema } from './schema';

export function hello(_options: Schema): Rule {

  return (_tree: Tree, _context: SchematicContext) => {

    const templatePath = process.cwd() + '/templates';

    const sourceFiles = url('/Users/shock/Downloads/YB/some-app/templates');                   // 템플릿 파일이 위치한 폴더
    const sourceParametrizedFiles = apply(sourceFiles, [  // 각각의 템플릿 파일에 적용할 액션 등록
      template({ ..._options, ...strings }),              //    1. 파일 이름 및 내부 텍스트를 리플레이스 시킨다.
      move(normalize('./src/app/routes'))                 //    2. 리플레이스된 모든 파일을 지정된 위치로 이동 시킨다.
    ]);

console.log(templatePath);
console.log('/Users/shock/Downloads/YB/some-app/templates');

    return mergeWith(sourceParametrizedFiles);
  };
}
