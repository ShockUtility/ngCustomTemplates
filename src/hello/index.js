"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function hello(_options) {
    return (_tree, _context) => {
        const templatePath = process.cwd() + '/templates';
        const sourceFiles = schematics_1.url('/Users/shock/Downloads/YB/some-app/templates'); // 템플릿 파일이 위치한 폴더
        const sourceParametrizedFiles = schematics_1.apply(sourceFiles, [
            schematics_1.template(Object.assign({}, _options, core_1.strings)),
            schematics_1.move(core_1.normalize('./src/app/routes')) //    2. 리플레이스된 모든 파일을 지정된 위치로 이동 시킨다.
        ]);
        console.log(templatePath);
        console.log('/Users/shock/Downloads/YB/some-app/templates');
        return schematics_1.mergeWith(sourceParametrizedFiles);
    };
}
exports.hello = hello;
//# sourceMappingURL=index.js.map