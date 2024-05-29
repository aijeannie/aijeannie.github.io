---
sidebar_position: 1
title: Azure OpenAI
---

### Whitelisting Azure OpenAI for Atlassian Jira:

If you're utilizing the Azure OpenAI provider within a restrictive firewall or proxy server setup, you or your network administrator may need to allow-list specific IP address ranges to ensure seamless operation of the AI Jeannie plugin services.

Below is the list of IP addresses that should be whitelisted for AI Jeannie to effectively interact with the Azure OpenAI provider:

| IP Address Range |
| --- | 
| 13.52.5.96/28 |
| 13.236.8.224/28 |
| 18.136.214.96/28 |
| 18.184.99.224/28 |
| 18.234.32.224/28 |
| 18.246.31.224/28 |
| 52.215.192.224/28 |
| 104.192.137.240/28 |
| 104.192.138.240/28 |
| 104.192.140.240/28 |
| 104.192.142.240/28 |
| 104.192.143.240/28 |
| 185.166.143.240/28 |
| 185.166.142.240/28 |

Ensure these IP address ranges are included in your firewall or proxy server settings to facilitate communication between AI Jeannie and Azure OpenAI.

>*Note:* For further reference, please refer to the: https://support.atlassian.com/organization-administration/docs/ip-addresses-and-domains-for-atlassian-cloud-products/ 

Here is the reference screenshot for configuring IP addresses on Azure OpenAI Provider:

<img src="/screenshots/WhitelistingAIProvider.png" alt="Whitelisting AzureOpenAI" />
