[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm: 6.12.0](https://img.shields.io/badge/npm-6.12.0-blue.svg)](https://www.npmjs.com/~shockutility)
[![GitHub release](https://img.shields.io/github/release/ShockUtility/ngCustomTemplates.svg)](https://github.com/ShockUtility/ngCustomTemplates)
[![English](https://github.com/ShockUtility/ngCustomTemplates/blob/master/res/en.png?raw=true)](https://github.com/ShockUtility/ngCustomTemplates)
[![Korea](https://github.com/ShockUtility/ngCustomTemplates/blob/master/res/kr.png?raw=true)](https://github.com/ShockUtility/ngCustomTemplates/blob/master/README_kr.md)


# ngCustomTemplates

A development environment utility that makes it easy to use custom templates in Angular JS.

<br><br>

# Install

```bash
$ npm i ng-custom-templates
```

<br><br>

# Use

```bash
$ ng g ng-custom-templates:run [My Templates Name]
```

※ My Templates Name : You should create and use a template for each folder in the 'templates' folder.

<br>

# Folder structure

[Before generating]
```bash
root
  |- e2e
  |- node_modules
  |- src                 <-- AngularJS source folder.
       |- app
  |- templates           <-- The folder you need to create!
       |- demo           <-- The templates to be used can be registered and used for each folder.
```

[Generating]
```bash
$ ng g ng-custom-templates:run demo

? Class Name (ex> CountryCode) :  CountryCode
? Page Title (ex> Country List) :  Country List
? Install Path :  /src/app
CREATE src/app/routes/country-code/country-code-routing.module.ts (218 bytes)
CREATE src/app/routes/country-code/country-code.module.ts (432 bytes)
CREATE src/app/routes/country-code/services/country-code.service.ts (161 bytes)
```

[After generating]
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

# Conversion rules

## Propertis of ngCustomTemplates

* className : The property to convert to the user specified class name.
* pageTitle : The property to convert to the user specified page name.

<br>

## Usage - Folder & File

※ Rules of Use : <b>&#95;&#95;</b>&#91;PROPERTY_NAME&#93;<b>@</b>&#91;FUNCTION_NAME&#93;<b>&#95;&#95;</b><br>
※ Apply to : Folder & File<br>


[Before generating]
```bash
__className@dasherize                         <- folder
    |- __className@dasherize.component.css    <- files
    |- __className@dasherize.component.html
    |- __className@dasherize.component.js
```
[After generating]
```bash
country-code                                  <- folder
    |- country-code.component.css             <- files
    |- country-code.component.html
    |- country-code.component.js
```

<br>

## Usage - Text in file

※ Rules of Use : <b><%=</b> &#91;FUNCTION_NAME&#93;<b>(</b>&#91;PROPERTY_NAME&#93;<b>) %></b><br>
※ Apply to : Text in file<br>

[Before generating]
```javascript
export class <%= classify(className) %>Component {
  const <%= camelize(className) %>;
}
```
[After generating]
 ```javascript
export class CountryCodeComponent {
  const countryCode;
}
```

※ You can use the same syntax in all files such as html and css.

<br>

## Functions

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

# References

[Total Guide To Custom Angular Schematics](https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4)

[Schematics: Building blocks](https://dev.to/thisdotmedia/schematics-building-blocks-2mg3)


