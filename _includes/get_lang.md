{% assign lang = "en" %}
{% assign lang_prefix = "" %}

{% if page.url contains '/ru/' %}
    {% assign lang = "ru" %}
    {% assign lang_prefix = "ru/" %}
{% endif %}