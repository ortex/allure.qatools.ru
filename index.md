---
layout: index
---
## Test results, clear to everyone
It's pretty cool to have selenium test results clear to everyone on the team. There are lots of frameworks in every language that aim to simplify test writing. But only few can provide sharp presentation of test execution output. Yandex team is working on Allure (https://github.com/allure-framework/allure-core/wiki) - an open-source framework designed to create crystal clear reports. 

## How we do it?
Because of module structure it integrates easily with almost any testing tool. Allure bases on standart xUnit results output, adding some additional data. It made by allure-adaptors, implemented for popular test frameworks - [junit/testng](https://github.com/allure-framework/allure-core), [karma](https://github.com/allure-framework/karma-allure-reporter), [phpunit](https://github.com/allure-framework/allure-phpunit), [codeception](https://github.com/allure-framework/allure-codeception), [pytest](https://github.com/allure-framework/allure-python), [scalatest](https://github.com/allure-framework/allure-scalatest), [rspec](https://github.com/allure-framework/allure-rspec). 

On the second step, created xml-file transforms into dynamic html-report. It can be done in a few ways as well - using [cli-interface](https://github.com/allure-framework/allure-cli-zip), [maven-plugin](https://github.com/allure-framework/allure-maven-plugin) or [jenkins](https://github.com/allure-framework/allure-jenkins-plugin)/[teamcity](https://github.com/allure-framework/allure-teamcity-plugin) plugin. In this generated report you can view results from different perspectives - successful/failed/broken/skipped tests, test time execution in context of whole suite, features, user stories and so on.