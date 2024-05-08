---
sidebar_position: 3
title: Configuration
---

## AI Provider Configuration

You need Jira Admin access to perform AI Provider Configuration. Here are the steps to configure the AI provider for the AI Jeannie plugin:

1. Open your JIRA instance and navigate to the  **"Apps > Manage you apps"** page. 
<img src="/screenshots/ai-provider-config-step-1.png" alt="Step 1" />

2. Once Manage Apps page is open, Access the Provider's configuration settings by clicking on the  **"AI Jeannie Settings"** icon in the left section of page.
<img src="/screenshots/ai-provider-config-step-2.png" alt="Step 1" />

3. Choose the AI provider that you want to integrate with (such as OpenAI, Azure OpenAI) from the available options. Provide the necessary information for the selected AI provider, including the Model Deployment URL, Model Name, API Version, and API Key. Ensure that you have obtained the API credentials and access details required for the chosen provider.
<img src="/screenshots/ai-provider-config-step-3.png" alt="Step 3" />

4. Save the configuration settings once all the necessary details are provided.

## Project Definition Configuration

Here are the steps to configure the Project Definition for the AI Jeannie plugin:

1. Next, configure the Project Definition for the specific JIRA project board. The Project Definition is used by AI Jeannie to understand the context of the JIRA issues and generate relevant content.

2. To configure the Project Definition, under Apps look for the "AI Jeannie" app. Click on the **"AI Jeannie"** app and then click on the **"Project Definition"** tab.
<img src="/screenshots/pc-step-1.png" alt="Step 1" />

3. Under the Project Definition tab, define the fields, criteria, and other project-specific details in the Project Definition. This includes specifying the information that AI Jeannie should consider when generating content for epics, user stories, and acceptance criteria.
<img src="/screenshots/pc-step-2.png" alt="Step 2" />

4. Save the Project Definition settings once you have configured all the necessary details.
<img src="/screenshots/pc-step-3.png" alt="Step 3" />

5. You are now ready to use AI Jeannie within your JIRA board. You can generate epic descriptions, user story descriptions, and acceptance criteria based on the configured settings and the context of your JIRA issues.
