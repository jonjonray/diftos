## Dif-Tos

### Overview

Application to track changes in Terms of Services and Licensing documents that will notify users when changes occur.

### Intended Technologies

- React/Redux
- Node.js
- Express
- MongoDB
- Heroku
- NodeMailer


### MVP Checklist

1. Design document comparison functionality
  - Simple react front end to display currently tracked documents and form for new submissions
  - Loosely based on Eugene W. Myers O(ND) algorithm which can be found [here](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.4.6927&rep=rep1&type=pdf)
  - Build scraper to parse document data
  - Recurring call to periodically check documents
  - Link to NodeMailer to notify users of changes
2. Implement User Authentication


### Questions
  1. In terms of parsing the data, would it better to start comparing differences for the entire site or only for content that comes after the words "Terms of Service"?
  2. For user authentication: hand rolled or OAuth?
  3. I'm debating whether Redux is even necessary for a front end as simple as this. What do you think?
