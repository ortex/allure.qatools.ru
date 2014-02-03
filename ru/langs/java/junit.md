---
layout: page
title: Интеграция Allure с JUnit
---
[allure-junit-pom-example]: https://github.com/allure-framework/allure/blob/master/docs/allure-junit-pom-example.md
[steps-and-attachments]: https://github.com/allure-framework/allure/blob/master/docs/steps-and-attachments.md

## Allure JUnit integration module

Чтобы подключить **Allure** к **JUnit**, нужно просто добавить следующий блок в свой **pom.xml**:

``` xml
<!--Версия Allure, необходима для allure-maven-plugin -->
<properties>
    <allure.version>1.2.2</allure.version>
</properties>

<!--Зависимость от Allure JUnit plugin -->
<dependencies>
    <dependency>
        <groupId>ru.yandex.qatools.allure</groupId>
        <artifactId>allure-junit-adaptor</artifactId>
        <version>${allure.version}</version>
    </dependency>
</dependencies>

<!--Allure JUnit plugin -->
<build>
    <plugins>
        <plugin>
            <groupId>ru.yandex.qatools.allure</groupId>
            <artifactId>allure-junit-plugin</artifactId>
            <version>${allure.version}</version>
            <executions>
                <execution>
                    <phase>test-compile</phase>
                    <goals>
                        <goal>allure</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>

<!--Allure Maven Plugin-->
<reporting>
    <excludeDefaults>true</excludeDefaults>
    <plugins>
        <plugin>
            <groupId>ru.yandex.qatools.allure</groupId>
            <artifactId>allure-maven-plugin</artifactId>
            <version>${allure.version}</version>
        </plugin>
    </plugins>
</reporting>
```

### Steps and attachments

Вы можете добавлять шаги(steps) и вложения(attachments), добавив аннотацию
**@ru.yandex.qatools.allure.annotations.Step** к соответствующим методам:

```java
@Step
public void openPageByAddress(String pageAddress) {
     ...
 }
```
Если вам нужно сохранить вложение до окончания теста, то вы можете создать attach-метод. Он должет быть проаннотирован
**@ru.yandex.qatools.allure.annotations.Attach** и возвращать  **java.lang.String** или **java.io.File**.


Возвращаемое значение будет скопировано и добавлено в ваш отчет как вложение.

```java
@Attach
public String saveLog(Logger logger) {
    ...
}
```

Смотрите [здесь][steps-and-attachments] подробнее о шагах и вложениях.