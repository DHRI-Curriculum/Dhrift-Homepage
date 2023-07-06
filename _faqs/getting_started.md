---
title: "Getting Started"
description: How do I get started with DHRIFT?
order: 2
---

<ol>

<li>
Visit the <a href="https://github.com/DHRI-Curriculum/DHRIFT" target="_blank">DHRIFT Core GitHub repository</a>.
</li>

<li>
Fork the repository, which creates a copy of the repository on your own GitHub account. The `Fork` button is on the top right of the page.

<img src="{{ "images/screenshots/github_fork_button.png" | relative_url }}" alt="Screenshot of GitHub fork button, which is near the top of the navigation on the linked GitHub repository">
</li>
<li>
You will be taken to a page that allows you to confirm the fork. Select your own GitHub account or the GitHub account of your organization and confirm.
</li>

<li>
Once your fork is successful, you will be taken to the page for the forked repository. On this page, select the `Settings` button on the menu bar at the top of the repository. The button is sometimes hidden behind an ellipsis (`...` or three dots) button.

<img src="{{ "images/screenshots/settings_button.png" | relative_url }}" alt="Screenshot showing the settings button, which is on the repository menu bar at the end. If you're reading this with a screen reader, try hitting g, then s to open the settings from the repository page">
</li>

<li>
Select the `Pages` option from the left navbar within the `Settings` menu.
</li>

<li>
Under the `Build and deployment` heading, change the source to `GitHub Actions`.

<img src="{{ "images/screenshots/github_pages_deploy_settings.png" | relative_url }}" alt="Screenshot of the source dropdown menu changed to GitHub Actions">
</li>

<li>
You will be brought to a screen asking you to enable GitHub Actions for the repository. Under the `Workflows aren’t being run on this forked repository` message, select *I understand my workflows, go ahead and enable*.

<img src="{{ "images/screenshots/enable_github_actions.png" | relative_url }}" alt="Screenshot of the big blue button you need to hit to enable GitHub Actions, it's in the middle of the main panel">
</li>

<li>
Once you have access to the GitHub Actions screen, on the left sidebar, click "Deploy Next.js site to Pages"

<img src="{{ "images/screenshots/deploy_next_js.png" | relative_url }}" alt="Screenshot of the Deploy Next.js to Pages option on the left sidebar">
</li>

<li>
Select the `Run workflow` button that appears to the right of the "This workflow has a workflow_dispatch event trigger" message.

<img src="{{ "images/screenshots/run_deployment.jpg" | relative_url }}" alt="Screenshot of the run deployment button on the right side of the This workflow has a workflow_dispatch event trigger message">
</li>

<li>
Confirm running the deployment by selecting the blue `Run workflow` button from the dropdown.

<img src="{{ "images/screenshots/run_workflow_dropdown.png" | relative_url }}" alt="Screenshot of the run workflow dropdown .">
</li>

<li>
You will see your deployment in progress in the center window. This process may take some time, between one and five minutes.
</li>

<li>
When the deployment is complete, you will see the icon to the left of the build message turn into a blue checkmark.
</li>

<li>
To view the deployed site, go to the `Settings` tab again. Under `Pages` on the left navbar, look for the message indicating that your site is live and follow the provided link.

<img src="{{ "images/screenshots/find_deployment_link.png" | relative_url }}" alt="Screenshot of the Pages tab within the Settings page of the repository. Once the deployment is done, a link to the hosted site will appear">
</li>

<li>
Once you follow the link, you should have access to your own live DHRIFT site.
</li>

</ol>
