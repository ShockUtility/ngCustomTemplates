# 개요

Angular JS 프로젝트를 위한 템플릿 제너레이터


# 사용법

### 컴파일 및 패키징

```bash
> npm run build
> npm pack
```

위와같이 소스 폴더에서 컴파일 하고 패키징 하면 "schematics-ngt-0.0.1.tgz" 과 같은 패키지 파일이 생성된다.

### 프로젝트에 설치

```bash
> npm i --no-save schematics-ngt-0.0.1.tgz
```

설치할 Angular 프로젝트 폴더에 "schematics-ngt-0.0.1.tgz" 패키지 파일을 복사 후 위와 같은 명령으로 설치한다.

### 테스트

템플릿 생성 테스트를 위해서 샘플 프로젝트를 하나 만들고 프로젝트 루트 폴더에 templates 폴더를 생성해준다.

```bash
> ng g @schematics/ngt:run [templates 폴더 안에 있는 템플릿 폴더명]
? 클래스명 입력 (ex> CountryCode) :  CountryCode
? 페이지 제목 (ex> 국가코드관리) :  국가코드관리
? 설치 경로 :  /src/app/routes
CREATE src/app/routes/country-code/country-code-routing.module.ts (457 bytes)
CREATE src/app/routes/country-code/country-code.module.ts (2238 bytes)
CREATE src/app/routes/country-code/actions/country-code-api.actions.ts (367 bytes)
CREATE src/app/routes/country-code/actions/country-code-list.actions.ts (1404 bytes)
CREATE src/app/routes/country-code/actions/index.ts (245 bytes)
CREATE src/app/routes/country-code/components/form-popup.component.html (22 bytes)
CREATE src/app/routes/country-code/components/form-popup.component.ts (1169 bytes)
CREATE src/app/routes/country-code/components/grid-control.component.html (222 bytes)
CREATE src/app/routes/country-code/components/grid-control.component.ts (1273 bytes)
CREATE src/app/routes/country-code/components/grid.component.html (1930 bytes)
CREATE src/app/routes/country-code/components/grid.component.ts (3778 bytes)
CREATE src/app/routes/country-code/components/index.ts (157 bytes)
CREATE src/app/routes/country-code/components/search-area.component.html (356 bytes)
CREATE src/app/routes/country-code/components/search-area.component.ts (1215 bytes)
CREATE src/app/routes/country-code/containers/country-code-list.component.html (912 bytes)
CREATE src/app/routes/country-code/containers/country-code-list.component.ts (5629 bytes)
CREATE src/app/routes/country-code/containers/index.ts (56 bytes)
CREATE src/app/routes/country-code/effects/country-code.effects.ts (931 bytes)
CREATE src/app/routes/country-code/effects/index.ts (49 bytes)
CREATE src/app/routes/country-code/models/index.ts (834 bytes)
CREATE src/app/routes/country-code/reducers/country-code-list.reducer.ts (3150 bytes)
CREATE src/app/routes/country-code/reducers/index.ts (2121 bytes)
CREATE src/app/routes/country-code/services/country-code.service.ts (1165 bytes)
CREATE src/app/routes/country-code/services/index.ts (49 bytes)
```


# 템플릿 파일 업데이트

프로젝트 폴더에 'templates' 폴더를 생성하고 사용할 템플렛들을 폴더별로 만들고


# 참고 자료
[Total Guide To Custom Angular Schematics](https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4)
[Schematics: Building blocks](https://dev.to/thisdotmedia/schematics-building-blocks-2mg3)


