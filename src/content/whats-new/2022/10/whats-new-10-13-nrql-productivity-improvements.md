---
title: 'Query with new NRQL improvements such as NRQL Variables, AnchorParse, and Regex Multi-Capture to better explore and understand your data
’
releaseDate: '2022-10-14'
getStartedLink: ''
---
# NRQL Productivity Improvements makes querying faster, so you can sooner understand your data for better decisionmaking.

Making sense of complex data like Log messages just got easier!  With NRQL Variables and the new aparse() and if() functions, you can obtain useful information from your data more efficiently and gain insights faster for better decision-making.

With NRQL Variables, you can assign values to variables and use them multiple times in your query.  The if() function lets you select one of two results based on a condition that's either true or false.  In addition, we've enhanced our existing regex capture() function to allow multiple capture groups, for simpler queries with better performance!


![In this example, we’ll extract an item ID, and unit price from a Log message, and additionally show which pricing tier the item falls into](./images/NRQL-Productivity-1 "In this example, we’ll extract an item ID, and unit price from a Log message, and additionally show which pricing tier the item falls into")



![The aparse() function is a simpler, faster alternative to capture() for use when you don't require the full power of regular expressions. With aparse(), use "anchor" text and the '*' wildcard to capture the fields you need:](./images/NRQL-Productivity-2 "The aparse() function is a simpler, faster alternative to capture() for use when you don't require the full power of regular expressions. With aparse(), use "anchor" text and the '*' wildcard to capture the fields you need:")

 

You can also see how these NRQL improvements work in this Nerdbyte:

*link

# Next Steps

1. Review the [documentation]() for NRQL Variables, aparse() and if() and start writing your own queries!
2. Read our [blog]() post for more tips and examples.
3. Share your feedback, post your own queries, and see even more examples in the [Explorer's Hub discussion]().
