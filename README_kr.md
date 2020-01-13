[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm: 6.12.0](https://img.shields.io/badge/npm-6.12.0-blue.svg)](https://www.npmjs.com/~shockutility)
[![GitHub release](https://img.shields.io/github/release/ShockUtility/ngCustomTemplates.svg)](https://github.com/ShockUtility/ngCustomTemplates)
[![English](https://github.com/ShockUtility/ngCustomTemplates/blob/master/res/en.png?raw=true)](https://github.com/ShockUtility/ngCustomTemplates)
[![Korea](https://github.com/ShockUtility/ngCustomTemplates/blob/master/res/kr.png?raw=true)](https://github.com/ShockUtility/ngCustomTemplates/blob/master/README_kr.md)


# ngCustomTemplates

Angular JS에서 사용자 정의 템플릿을 쉽게 사용할 수 있는 개발 환경 유틸리티입니다.

<br><br>

# 설치

```bash
$ npm i -D ng-custom-templates
```

<br><br>

# 사용법

```bash
$ ng g ng-custom-templates:run [My Templates Name]
```

※ My Templates Name : 'templates' 폴더에 사용할 템플릿을 작성하고 사용해야합니다.

<br>

# 프로젝트 폴더 구조

[템플릿 생성 전]
```bash
root
  |- e2e
  |- node_modules
  |- src                 <-- AngularJS 소스 폴더.
       |- app
  |- templates           <-- 프로젝트 루트에 이 이름의 폴더가 있어야 합니다!
       |- demo           <-- 사용할 템플릿을 폴더별로 만들어 사용합니다.
```

[템플릿 생성 명령]
```bash
$ ng g ng-custom-templates:run demo

? Class Name (ex> CountryCode) :  CountryCode
? Page Title (ex> Country List) :  Country List
? Install Path :  /src/app
CREATE src/app/routes/country-code/country-code-routing.module.ts (218 bytes)
CREATE src/app/routes/country-code/country-code.module.ts (432 bytes)
CREATE src/app/routes/country-code/services/country-code.service.ts (161 bytes)
```

[템플릿 생성 후]
```bash
root
  |- e2e
  |- node_modules
  |- src
       |- app
            |- routes
                 |- country-code	<-- Generated folder
  |- templates
       |- demo
```

<br>

# 템플릿 만드는 규칙

## ngCustomTemplates 입력 파라미터

* className : 클래스 이름 입력값.
* pageTitle : 페이지 제목 입력값.

<br>

## 사용법 - 폴더 및 파일

※ 작성 규칙 : <b>&#95;&#95;</b>&#91;PROPERTY_NAME&#93;<b>@</b>&#91;FUNCTION_NAME&#93;<b>&#95;&#95;</b><br>
※ 적용 대상 : 폴더 및 파일<br>

[템플릿 생성 전]
```bash
__className@dasherize__                       <- 폴더
    |- __className@dasherize__.component.css  <- 파일
    |- __className@dasherize__.component.html
    |- __className@dasherize__.component.js
```
[템플릿 생성 후]
```bash
country-code                                  <- 폴더
    |- country-code.component.css             <- 파일
    |- country-code.component.html
    |- country-code.component.js
```

<br>

## 사용법 - 파일 내부 텍스트

※ 작성 규칙 : <b><%=</b> &#91;FUNCTION_NAME&#93;<b>(</b>&#91;PROPERTY_NAME&#93;<b>) %></b><br>
※ 적용 대상 : 파일 내부 모든 텍스트<br>

[템플릿 생성 전]
```javascript
export class <%= classify(className) %>Component {
  const <%= camelize(className) %>;
}
```
[템플릿 생성 후]
 ```javascript
export class CountryCodeComponent {
  const countryCode;
}
```

※ html 및 css와 같은 모든 파일에서 동일한 규칙으로 사용할 수 있습니다.

<br>

## 함수 목록

※ classify : Returns the UpperCamelCase form of a string.
```javascript
 classify('innerHTML');             // 'InnerHTML'
 classify('action_name');           // 'ActionName'
 classify('css-class-name');        // 'CssClassName'
 classify('my favorite items');     // 'MyFavoriteItems'
```

※ camelize : Returns the lowerCamelCase form of a string.
```javascript
 camelize('innerHTML');             // 'innerHTML'
 camelize('action_name');           // 'actionName'
 camelize('css-class-name');        // 'cssClassName'
 camelize('my favorite items');     // 'myFavoriteItems'
 camelize('My Favorite Items');     // 'myFavoriteItems'
```

※ decamelize : Converts a camelized string into all lower case separated by underscores.
```javascript
 decamelize('innerHTML');           // 'inner_html'
 decamelize('action_name');         // 'action_name'
 decamelize('css-class-name');      // 'css-class-name'
 decamelize('my favorite items');   // 'my favorite items'
```

※ dasherize : Replaces underscores, spaces, or camelCase with dashes.
```javascript
 dasherize('innerHTML');            // 'inner-html'
 dasherize('action_name');          // 'action-name'
 dasherize('css-class-name');       // 'css-class-name'
 dasherize('my favorite items');    // 'my-favorite-items'
```

※ underscore : More general than decamelize. Returns the lower\_case\_and\_underscored form of a string.
```javascript
 underscore('innerHTML');           // 'inner_html'
 underscore('action_name');         // 'action_name'
 underscore('css-class-name');      // 'css_class_name'
 underscore('my favorite items');   // 'my_favorite_items'
```

※ capitalize : Returns the Capitalized form of a string.
```javascript
 capitalize('innerHTML');           // 'InnerHTML'
 capitalize('action_name');         // 'Action_name'
 capitalize('css-class-name');      // 'Css-class-name'
 capitalize('my favorite items');   // 'My favorite items'
```

<br>

# 참고 자료

[Total Guide To Custom Angular Schematics](https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4)

[Schematics: Building blocks](https://dev.to/thisdotmedia/schematics-building-blocks-2mg3)


