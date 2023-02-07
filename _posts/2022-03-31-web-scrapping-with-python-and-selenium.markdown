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

**What is Click and Why use Click?**

Click is a Python library used for building command line interfaces. It provides a simple way to define commands and arguments, making it easier to write scripts and automate tasks. It also supports various features such as option parsing, configuration, and output formatting.

**Pandas, I Love Pandas. But what is pandas?**

Pandas, the powerful data manipulation and analysis library in Python, has made it effortless to store and analyze job information with just a few lines of code. With Pandas, you can easily create a dataframe to store the relevant details such as job title, company, and location. This data is then written to an Excel workbook with the help of the to_excel method, making it simple to store and manage the scraped information. Whether you're a data analyst, researcher, or just someone looking to keep track of job listings, Pandas provides a convenient solution to your data storage and manipulation needs.

**The Code:**

In this code, a command line interface is created using the click library. The user can select the webdriver they want to use (Firefox, Chrome, Safari, or Edge), provide a search query and location to search for jobs on indeed.com. The selected webdriver is then initialized and used to navigate to indeed.com, where the search query and location are entered and the search is executed. The page source is then parsed into a BeautifulSoup object, and job listings are extracted from the page. Information about each job, including the title, company, and location, is printed and stored in a dataframe. Finally, this data is written to an Excel workbook, either by appending to an existing workbook or by creating a new workbook. The webdriver is then closed.

**Conclusion:**

In this article, we have seen how to use Python and Selenium to scrape job listings from Indeed.com. With a few lines of code, we can automate the process of searching for jobs and extract relevant information, saving us time and effort. This technique can be applied to other websites as well, making web scraping a powerful tool for data collection and analysis.


Here you can check out my project on github [code](https://github.com/PKHarsimran/Indeed_JobTitle_Scrapper)
