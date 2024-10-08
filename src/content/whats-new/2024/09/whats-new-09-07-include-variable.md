---
title: 'Filter dashboards faster with template variable toggle'
summary: 'Template variables can now be included or excluded from your dashboard widgets'
releaseDate: '2024-09-10'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/dashboard-template-variables/#include-variable'
---


[Template variables](https://docs.newrelic.com/whats-new/2022/11/whats-new-11-30-dashboard-template-variables/) allow you to dynamically filter charts and widgets in your custom dashboards, making dashboards more adaptable for various use cases.
Now, you have more flexibility when configuring variables with the **Include variable** toggle. It allows you to exclude variables that have been added to one or more widgets in a dashboard. You do not need to modify any queries.

<iframe width="560" height="315" src="https://fast.wistia.net/embed/iframe/vr5sy04mpf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## How it works

Previously, when you used variables in widgets, your queries were limited to the values defined for that variable, which could be limiting in certain scenarios, such as missing values. This could result in incomplete data being shown in charts, even if you used the **Select all** values. Alternatively, a variable may have a very large number of values. Choosing to disable the variable by default will provide significant performance improvements.

Now, when you choose to exclude a variable, it's removed from the query and the condition is replaced with a neutral boolean value (either true or false). This ensures that your query remains valid and returns results for your dashboard. By excluding the variable, you can retrieve all values from the database.


## How to configure variable exclusion

1. In your dashboard, click the edit <Icon name="fe-edit-2"/> button.
2. Then select **+ Add variable** or click on a variable, and select **Edit**.
3. Now, you'll be able to see a toggle option to **Include variable**.


![Configure variable options](/images/include_variable1.webp "Configure variable options")
Users viewing a dashboard can include the variable again through the variable dropdown menu. This will allow the user to select specific values for that variable to filter their dashboard.

![Include variable toggle](/images/include_variable2.webp "Include variable toggle")