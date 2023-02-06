---
layout: post
title: "Web Scrapping with Python and Selenium"
date: "2022-03-31 00:16:51 -0300"
---

# Summary
In today's job market, searching for a job can be a time-consuming and tedious task. However, with the help of web scraping and automation, this process can be made much easier and efficient. In this article, we will be using the Python programming language, along with the Selenium and Beautiful Soup libraries, to scrape job listings from Indeed.com.

**What is Selenium?**

Selenium is a popular open-source framework for automating web browsers. It allows us to interact with a web page, simulate mouse clicks, and type into text fields, just as a human user would do. This makes it an ideal tool for web scraping, as we can navigate to a website, wait for elements to load, and extract information from the HTML source code.

**What is Beautiful Soup?**

Beautiful Soup is a Python library used for web scraping and parsing HTML and XML documents. It allows us to search for specific HTML elements, extract their attributes and text, and store them in a structured format, such as a list or a dictionary.

**The Code:**

In this code, we start by importing the necessary libraries, including Selenium, Beautiful Soup, and the expected_conditions module from the selenium.webdriver.support library.

Next, we initialize a webdriver instance using the Firefox web browser. We then navigate to the Indeed website, wait for the search bar to appear, and enter a search query for "Photography assistance." We then locate and click the search button, and parse the HTML content of the page using Beautiful Soup.

Next, we use the Beautiful Soup find_all method to find all job listings on the page. For each job listing, we extract the job title, company name, and location and print them out.

Finally, we close the webdriver instance and the web browser.

**Conclusion:**

In this article, we have seen how to use Python and Selenium to scrape job listings from Indeed.com. With a few lines of code, we can automate the process of searching for jobs and extract relevant information, saving us time and effort. This technique can be applied to other websites as well, making web scraping a powerful tool for data collection and analysis.


Here you can check out my project on github https://github.com/PKHarsimran/Indeed_JobTitle_Scrapper
