---
layout: post
title: "Web Scrapping with Python and Selenium"
date: "2022-03-31 00:16:51 -0300"
---

# Intro
In today's job market, searching for a job can be a time-consuming and tedious task. However, with the help of web scraping and automation, this process can be made much easier and efficient. In this article, we will be using the Python programming language, along with the Selenium and Beautiful Soup libraries, to scrape job listings from Indeed.com.

**What is Selenium?**

Selenium is a popular open-source framework for automating web browsers. It allows us to interact with a web page, simulate mouse clicks, and type into text fields, just as a human user would do. This makes it an ideal tool for web scraping, as we can navigate to a website, wait for elements to load, and extract information from the HTML source code.

**What is Beautiful Soup?**

Beautiful Soup is a Python library used for web scraping and parsing HTML and XML documents. It allows us to search for specific HTML elements, extract their attributes and text, and store them in a structured format, such as a list or a dictionary.

**The Code:**

In this code, a web scraper is implemented using the Python libraries click, openpyxl, pandas, selenium, and bs4. The code creates a command line interface using the click library that allows the user to choose a web driver, input a search query and location, and then scrapes job information from the website indeed.com. The data scraped is printed in the console and saved to an Excel workbook. The scraped data includes job title, company, and location. The code also uses the WebDriverWait method from the selenium library to wait for page elements to load before interacting with them. The page source is parsed using the BeautifulSoup library and job information is extracted using a combination of find_all and find methods.

**Conclusion:**

In this article, we have seen how to use Python and Selenium to scrape job listings from Indeed.com. With a few lines of code, we can automate the process of searching for jobs and extract relevant information, saving us time and effort. This technique can be applied to other websites as well, making web scraping a powerful tool for data collection and analysis.


Here you can check out my project on github [code](https://github.com/PKHarsimran/Indeed_JobTitle_Scrapper)
