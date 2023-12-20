---
sidebar_position: 4
title: Features
---

# Features

1. [**Acceptance Criteria Generation**](#feature-1-acceptance-criteria-generation) - Create Acceptance Criteria for both Epics and User Stories.
2. [**Sequence Diagram Generation**](#feature-2-sequence-diagram-generation) - Produce Sequence Diagrams derived from the acceptance criteria.
3. [**Project Definition Configuration**](#feature-3-project-definition-configuration) - Set up the Project's Scope, Goals, Architecture, and Compliance within the AI context.
4. [**Prompt Templates Configuration**](#feature-4-prompt-templates-configuration) - Personalize your Prompt Templates, including System, User, Epic, and User Story templates.
5. [**AI Provider Configuration**](#feature-5-ai-provider-configuration) - Be cloud-independent by bringing your own AI providers such as OpenAI, Azure OpenAI, or Google Vertex.
6. [**Duplication Check for User Stories and Epics**](#feature-6-duplication-check-for-user-stories-and-epics) - Verify for any duplicate content among existing user stories and epics.

## Feature 1: Acceptance Criteria Generation

AI Jeannie can generate acceptance criteria for user stories based on the project definition configured. It uses natural language processing to understand the user story and its context, and then generates relevant acceptance criteria that meet the requirements of the user story.

**Permissions:** read:jira-work, read:jira-user, read:issue:jira, write:issue:jira, read:comment:jira

| Scope | Description | API Usage |
| --- | --- | --- |
| read:jira-work | Allows reading information about Jira worklogs | Issue API |
| read:jira-user | Allows reading information about Jira users | Comment API |
| read:issue:jira | Allows reading information about Jira issues |  Issue API|
| write:issue:jira | Allows creating and updating Jira issues | Issue API |
| read:comment:jira | Allows reading information about Jira comments | Comments API |

## Feature 2: Sequence Diagram Generation

AI Jeannie can also generate sequence diagrams based on the project definition configured. Sequence diagrams are visual representations of the interactions between different components or modules in a system. AI Jeannie can automatically generate sequence diagrams that illustrate the flow of actions and communication between various entities in the system.

**Permissions:** read:jira-work, read:jira-user, read:issue:jira, write:issue:jira, read:comment:jira

| Scope | Description | API Usage |
| --- | --- | --- |
| read:jira-work | Allows reading information about Jira worklogs | Issue API |
| read:jira-user | Allows reading information about Jira users | Comment API |
| read:issue:jira | Allows reading information about Jira issues |  Issue API|
| write:issue:jira | Allows creating and updating Jira issues | Issue API |
| read:comment:jira | Allows reading information about Jira comments | Comments API |

## Feature 3: Project Definition Configuration
AI Jeannie allows users to configure the project definition for a specific JIRA project board. The project definition includes information about the domain, business rules, terminology, and other relevant details that AI Jeannie uses to generate accurate and relevant content. By configuring the project definition, users can tailor the AI Jeannie output to match the specific requirements of their project.

**Permissions:** read:issue.property:jira, write:issue.property:jira, read:project.property:jira, write:project.property:jira

| Scope | Description | API Usage |
| --- | --- | --- |
| read:issue.property:jira | Allows reading information about Jira issue properties | Storage API |
| write:issue.property:jira | Allows creating and updating Jira issue properties | Storage API |
| read:project.property:jira | Allows reading information about Jira project properties | Storage API |
| write:project.property:jira | Allows creating and updating Jira project properties | Storage API |

## Feature 4: Prompt Templates Configuration
AI Jeannie provides prompt templates for epic descriptions, user story descriptions, and acceptance criteria. These templates serve as a starting point for content generation and can be customized to suit the user's preferences. Users can modify the prompt templates to include project-specific terminology or to adhere to specific writing styles.

**Permissions:** storage:app

| Scope | Description | API Usage |
| --- | --- | --- |
| storage:app | Allows storing and retrieving data for an app in the Atlassian cloud storage service | Storage API |

## Feature 5: AI Provider Configuration
AI Jeannie supports integration with multiple AI providers, including OpenAI, Azure OpenAI, and Google Vertex. Users can configure the AI provider settings in the plugin to specify the AI model deployment URL, model name, API version, and API key. This allows users to choose the AI provider that best suits their needs and leverage the capabilities of the selected provider for content generation.

**Permissions:** read:issue.property:jira, write:issue.property:jira, read:project.property:jira, write:project.property:jira

| Scope | Description | API Usage |
| --- | --- | --- |
| read:issue.property:jira | Allows reading information about Jira issue properties | Storage API |
| write:issue.property:jira | Allows creating and updating Jira issue properties | Storage API |
| read:project.property:jira | Allows reading information about Jira project properties | Storage API |
| write:project.property:jira | Allows creating and updating Jira project properties | Storage API |

## Feature 6: Duplication Check for User Stories and Epics
AI Jeannie includes a feature to check for duplicate content against existing user stories and epics. This helps to prevent the generation of redundant or repetitive content and ensures that each generated piece of content is unique. By performing this duplicate check, AI Jeannie helps to maintain the quality and coherence of the JIRA issues and avoids unnecessary duplication of information.