# rihal-devops
<h2>Hi Rihal</h2>
<h4>
this is my repo for the assessment
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
  <li>🔵FrontEnd app (admin-portal)
    <ul>
      <li>Angular 13 + Matrial UI</li>
      <li>2 lazy loading Ng module (student, reporting)</li>
    </ul>
  </li>
    <li>🔵Backend app (api) </li>
    <ul>
      <li>nestJs + typeOrm</li>
      <li>consist of 2 dedicated modules(crud service/reporting service)</li>
      <li>🔎[swagger documentation](https://neduk.herokuapp.com/api).</li>
    </ul>
        <li>🔵Heroku connectted to github for CI/CD</li>
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
<h1>Next Steps</h1>


