
<h2>Hi Rihal</h2>
<h4>
this is my repo developed for the assessment (Full-Stack Web Developer Role) 
  </h4>
<br>

This project was generated using [Nx](https://nx.dev).
<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="110"></p>
<br>
<b>graph of my monorepo libs + apps</b>
<img src="https://github.com/mojtabaPourmirzaei/rihal-devops/blob/main/rihal/apps/admin-portal/src/assets/project-graph.png" width="466">
<br>


🔎 my main artitecture approach is seprating each app to 2 dedicated domains
<li>
one domain concern about student and his/her crud operations.
  </li>
<li>
other domain concern about reporting (statistics) 
</li>
<hr/>
<ul>
  <li>application structure</li>
  <ul>
<li>☁project consist of 2 apps</li>
  <li>🔵<b>FrontEnd app (admin-portal)</b>
    <ul>
      <li>Angular 13 + Matrial UI</li>
      <li>create material ui core module as nx lib</li>
      <li>create auth feature module as nx lib + NgRx store </li>
      <li>2 lazy loading Ng module (student, reporting)</li>
      <li>global interceptor services for 1-error handeling 2-alert response 3- loadin spinner</li>
       <br>
    </ul>
  </li>
    <li>🔵<b>Backend app (api)</b></li>
    <ul>
      <li>nestJs + typeOrm</li>
      <li>consist of 2 dedicated modules(crud service/reporting service)</li>
      <li>🔎[swagger documentation](https://neduk.herokuapp.com/api).</li>
      <li>repository: Postgres DB [PostgreSQL as a Service](http://www.elephantsql.com)</li>
      <li>TypeOrm ; use features like relations, cascade,eager, viewEntity, transactionManager,..</li>
      <li></li>
      <br>
    </ul>
        <li>🔵<b>Heroku connectted to github for CI/CD</b></li>
      <ul>
      <li>each app has its own Dockerfile</li>
      <li>root docker-compose file to orchestarate all</li>
      <li>🔎[build version](https://neduk.herokuapp.com/) to auto deploy app. </li>
      <li>snapshot of heroku dashboard (building last commits to main branch)
      <br> <br>
        <img src="https://github.com/mojtabaPourmirzaei/rihal-devops/blob/main/rihal/apps/admin-portal/src/assets/herokuDashboard.png" width="566">
      </li>
      </ul>
  <li></li>
</ul>
</ul>
<h2>Bonus Requirements 💎100% Done</h2>
<hr>
• ✅Use a 3rd party UI library

• ✅Add dark/light mode toggle

• ✅Use GitHub as a source control for the project

• ✅Generate random seed data

• ✅Add tests

• ✅Automatically generate CreatedDate and ModifiedDate properties for all entities

• ✅Host the app as a website and share link.

<h1>Statistics to display on website</h1>

• Count of students per class
 🔎[Visit](https://neduk.herokuapp.com/admin/summeryBy;by=classes)

• Count of students per country
 🔎[Visit](https://neduk.herokuapp.com/admin/summeryBy;by=countries)

• Average age of students
 🔎[Visit](https://neduk.herokuapp.com/admin/summeryBy;by=ageAverage)
 
 <hr>
 • list of registered students (with 🔸search,🔸sorting,🔸pagination,🔸counts,🔹edit,🔹delete)
 
 🔎[Visit](https://neduk.herokuapp.com/student/classes;by=undefined)
 
  •register new student Class (with 🔸auto complete, 🔸validations)
  
  🔎[Visit](https://neduk.herokuapp.com/student/register;by=undefined)
  



<h1>Next Steps</h1>

• create GraphQl for reporting(statistics).

• create dedicated application for report and using CQRS design patterm approach.



