# rihal-devops
<h2>Hi Rihal</h2>
this is the repo i made for the assessment

This project was generated using [Nx](https://nx.dev).
<b>graph of my monorepo libs + apps</b>
<img src="https://github.com/mojtabaPourmirzaei/rihal-devops/blob/main/rihal/apps/admin-portal/src/assets/project-graph.png" width="366">
<br>
<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="110"></p>

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
  <li> 
    - ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `#f03c15`
    frontend admin-portal
    <ul>
      <li>Angular 13 + Matrial UI</li>
      <li>2 lazy loading Ng module (student, reporting)</li>
    </ul>
  </li>
  <li>backend api</li>
    <ul>
  <li>nestJs + typeOrm</li>
  <li>consist of 2 dedicated modules(crud service/reporting service)</li>
      <li>[swagger documentation](https://neduk.herokuapp.com/api).</li>
    </ul>
  <li>http://placehold.it/150/ffffff/ff0000?text=deployment</li>
    <ul>
  <li>Heroku connectted to github for CI/CD</li>
      <li>each app has its own Dockerfile</li>
      <li>root docker-compose file to orchestarate all</li>
      <li>you can reach deployed app on 🔎[build version](https://neduk.herokuapp.com/api) to auto deploy app. </li>
      <li>snapshot of heroku dashboard (building last commits to main branch)
      <br>
        <img src="https://github.com/mojtabaPourmirzaei/rihal-devops/blob/main/rihal/apps/admin-portal/src/assets/herokuDashboard.png" width="566">
      </li>
      </ul>
  <li></li>
</ul>
</ul>
<h1>Next Steps</h1>


