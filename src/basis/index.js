"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { parseName } from "@schematics/angular/utility/parse-name";
// import { buildDefaultPath } from "@schematics/angular/utility/project";
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const fs = require("fs");
function basis(_options) {
    return (_tree, _context) => {
        const workspaceConfigBuffer = _tree.read("angular.json");
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException("*** Angular CLI 프로젝트가 아니군!!! ***");
        }
        const templatePath = process.cwd() + '/templates';
        if (!fs.existsSync(templatePath)) {
            throw new schematics_1.SchematicsException("*** '" + templatePath + "' 폴더에 템플릿을 만들고 실행해 주시지! ***");
        }
        // const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
        // const projectName = _options.project || workspaceConfig.defaultProject;
        // const project = workspaceConfig.projects[projectName];
        // const defaultProjectPath = buildDefaultPath(project);
        // const parsedPath = parseName(defaultProjectPath, _options.name);
        // const { name } = parsedPath;
        // const sourcePath = '/Users/shock/Downloads/YB/some-app/temp';//(_options.withComponent.toLowerCase()==="y") ? "./files-with-component" : "./files";
        const sourceFiles = schematics_1.url(templatePath);
        const sourceParametrizedFiles = schematics_1.apply(sourceFiles, [
            schematics_1.template(Object.assign({}, _options, core_1.strings)),
            schematics_1.move(_options.targetPath) //    2. 리플레이스된 모든 파일을 지정된 위치로 이동 시킨다.
        ]);
        return schematics_1.mergeWith(sourceParametrizedFiles);
    };
}
exports.basis = basis;
//# sourceMappingURL=index.js.map