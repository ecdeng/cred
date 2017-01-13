# CRED
Introducing a new metric of reliability in news sources--both individual authors as well as publications and different sources of media. Cred is a web navigator tool to reveal the credibility of news content for consumers and content creators. 

The growing power of citizens, to choose what news they want and to act as producers as well as consumers, has elevated the importance of audience preference in defining quality. In the age of low barriers to entering into publishing, high degrees of consumer choice, and a huge amount of fake and untrustworthy news, what is reliable journalism?

With cred, we have designed a web navigator tool to reveal the reliability of news content for both news consumers and newsmakers: 

A web browser extension that attaches a trustworthy metric score to news articles and their sources. This metric reveals how much other readers trust the publication, how many other sources corroborate the information and the journey that the story has taken over time, and provides a feedback mechanism for readers to indicate whether or not they trust the article. 

How does an article’s cred, get determined? 
Combination of the author’s reputation, publisher’s reputation, and news topic itself (how breaking, etc.) 
General Metrics for any one article published online
We track changes in articles over time--either by accessing any single site’s API if they make it available or scraping the actual article themselves when they are updated
The quality of changes (or lack thereof) is based on the quality of the content being changed (are the numbers being corrected to their “correct” values) and the time it takes to make those accurate changes

Author:
Past articles--(article quality)*(traction/readership)*(reviews)*(background in topic)*(ranking if available)
Personal Skew

![ArticleAbstraction](https://github.com/ecdeng/truthy_news/blob/master/img/ArticleAbstraction.png)

Publisher:
Past articles--(article quality)*(traction/readership)*(reviews)*(domain specialization?)*(general rating)
Skew relative to topic

![ArticleAbstraction](https://github.com/ecdeng/truthy_news/blob/master/img/SystemsArchitecture.png)

![ArticleAbstraction](https://github.com/ecdeng/truthy_news/blob/master/img/content.png)


As a part of the IDEO CoLab Winter 2017 Fellowship--Sprint 3 "Cred". 