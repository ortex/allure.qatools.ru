---
layout: page
title: Allure Karma integration
---

# karma-allure-reporter

Репортер о тестах, запускаемых через Karma в Allure XML формате. Этот отчет дает больше информации.

## Установка

Добавьте karma-allure-reporter в зависимости своего проекта

```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-allure-reporter": "~1.0.0"
  }
}
```

Можно сделать это консольной командой:

```bash
npm install karma-allure-reporter --save-dev
```

## Настройка

Добавьте allure в секцию `reporters` своего karma.conf.js.
Allure-reporter имеет одну настройку `reportDir` &mdash; это расположение полученных Allure XML. По умолчанию, файлы
сохранятся прямо в основную директорию проекта.

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'allure'],

    // the default configuration
    allureReport: {
      reportDir: '',
    }
  });
};
```

Также вы можете добавить Allure через аргументы запуска karma в консоли:
```bash
karma start --reporters allure,dots
```

## API

Allure дает вам несколько дополнительных функций для сбора большей информации о тестах. Все функции доступны через
глобальный объект `allure`.

* `description(description)` добавить описание текущему выполняемому тесту
* `severity(severity)` присвоить важность (severity) текущему тесту. Это может быть одно из перечисленных значений,
например `allure.severity.BLOCKER`. Все важности по мере их уменьшения:
    * BLOCKER
    * CRITICAL
    * NORMAL
    * MINOR
    * TRIVIAL

* `createStep(name, stepFunction)` создает шаг (step). Заставляет функцию фиксировать в отчете каждый
свой вызов. Функции могут вызываться внутри друг друга и в остчете будет дерево этих вызовов.Это самая полезная
функция Allure, потому что позволяет составить подробный отчет с результатом выполнения каждого шага теста.

В [документации][docs] основного проекта рассказано больше об этих функциях и их использовании.

## Пример

Есть [пример проекта][example project], в котором можно увидеть все вышеописанное в действии.

----

Больше информации об Allure можно узнать на странице [Allure-core][allure core]

Про Karma можно узнать больше на их [странице проекта][Karma homepage]


[Karma homepage]: http://karma-runner.github.com
[allure core]: https://github.com/allure-framework/allure
[example project]: https://github.com/allure-framework/allure-karma-example
[docs]: https://github.com/allure-framework/allure/blob/master/docs/dictionary.md