# Neighborly Dev

Neighborly Dev is a web application meant to assist job seekers in the tech sector
find locally available positions. <br />


![screen shot](https://cloud.githubusercontent.com/assets/16296640/14584906/6fd055de-042c-11e6-998f-9d786f95c318.png)


### Description

Once a user enters in the parameters (job title & zip code), the app will query the Dice job search API returning open positions in the area. Once received, the business name is reverse geocoded by a geocoder gem, and returns the necessary latitude and longitude coordinates. This is then passed into the Google Maps API, which will populate a map with markers representing locally available positions.  


### Version
1.0

### Tech

* [Ruby on Rails] - Framework
* [Google Maps JavaScript API] - Map
* [Dice API] - Job Search
* [PostgreSQL] - Database
* [jQuery] - AJAX for Asynchronous Programming

### Todos

- Add AJAX
- Write Tests
- Add Code Comments
- Add Another Job Search API

### License
Licensed under the MIT License

### Creator

**Matt Kellough**

* <http://www.kellough.co>
* <https://github.com/mattkellough>


[Ruby on Rails]: <http://rubyonrails.org/>
[Google Maps JavaScript API]: <https://developers.google.com/>
[Dice API]: <http://www.dice.com/>
[PostgreSQL]: <http://www.postgresql.org/>
[jQuery]: <http://jquery.com/>
