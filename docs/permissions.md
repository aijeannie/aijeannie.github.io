---
sidebar_position: 5
title: Permissions
---

# Permissions 

These are the JIRA scope and permissions that AI Jeannie needs to work properly in your JIRA instance.

| Scope | Description | API Usage |
| --- | --- | --- |
| read:jira-work | Allows reading information about Jira worklogs | Issue API |
| read:jira-user | Allows reading information about Jira users | Comment API |
| read:issue:jira | Allows reading information about Jira issues |  Issue API|
| write:issue:jira | Allows creating and updating Jira issues | Issue API |
| read:comment:jira | Allows reading information about Jira comments | Comments API |
| write:comment:jira | Allows creating and updating Jira comments | Comments API |
| read:comment.property:jira | Allows reading information about Jira comment properties | Comments API |
| write:comment.property:jira | Allows creating and updating Jira comment properties | Comments API |
| write:attachment:jira | Allows uploading Jira attachments | Issue API |
| read:issue.property:jira | Allows reading information about Jira issue properties | Storage API |
| write:issue.property:jira | Allows creating and updating Jira issue properties | Storage API |
| read:project.property:jira | Allows reading information about Jira project properties | Storage API |
| write:project.property:jira | Allows creating and updating Jira project properties | Storage API |
| read:group:jira | Allows reading information about Jira groups | Comments API |
| read:project:jira | Allows reading information about Jira projects | Comments API |
| read:project-role:jira | Allows reading information about Jira project roles | Comments API |
| read:user:jira | Allows reading information about Jira users | Comments API |
| read:avatar:jira | Allows reading information about Jira avatars | Comments API |
| storage:app | Allows storing and retrieving data for an app in the Atlassian cloud storage service | Storage API |