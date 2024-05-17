---
sidebar_position: 9
title: Troubleshooting
---

### Troubleshooting Steps

Here's a troubleshooting guide for the AI Jeannie JIRA plugin:

1. **Verify Plugin Installation:** Ensure that the AI Jeannie plugin is properly installed and enabled in your JIRA instance. Check the plugin status and make sure there are no error messages or conflicts with other installed plugins.

<hr/>

2. **Check AI Provider Configuration:** Double-check the AI provider details, including the Model Deployment URL, Model Name, API Version, and API Key. Ensure that these details are accurate and match the configuration requirements of the AI provider.

<img src="/troubleshooting/ai-provider-error1.png" alt="AI Provider Error" />
<hr/>
Troubleshoot the above issue using this guide: https://aijeannie.github.io/docs/configuration#step-1-ai-provider-configuration

<hr/>

3. **Confirm Project Definition Configurations:** Review the Project Definition configured for the specific JIRA project board. Ensure that all the necessary fields and criteria are defined correctly. Any inaccuracies or missing information in the Project Definition can affect the generated content.

<img src="/troubleshooting/ai-provider-error1.png" alt="Project Definition Error" />
<hr/>
Troubleshoot the above issue using this guide: https://aijeannie.github.io/docs/configuration#step-2-project-definition-configuration
<hr/>

4. **Handle Unexpected Error:** If you encounter any unexpected error warning message, try refreshing the app using the refresh link provided in the error message. Further, this can help in resolving known issue from Jira Cloud.

<img src="/troubleshooting/handle-unexpected-error.png" alt="Project Definition Error" />
<hr/>

5. **Validate API Connection:** Test the API connection to the selected AI provider. Ensure that the API Key is valid and has the required permissions to access the AI model. Check any error logs or response messages from the API to identify any connection issues.

<hr/>

6. **Handle AI Provider Error:** If you face any time out and bad response error by AI Provider while accessing the epics and user stories. Contact your AI provider or system administrator to verify whether rate limit settings are in place or know if any API currently under maintenance. 

<img src="/troubleshooting/ai-provider-error2.png" alt="AI Provider Error" />
<hr/>

7. **Review Plugin Logs:** Check the plugin logs for any error or warning messages that might provide insights into the issue. The logs can help you identify any specific errors or exceptions occurring during the generation of content.

<hr/>

8. **Clear Cache and Refresh Data:** If you encounter any strange behavior or outdated content generation, try clearing the cache of the plugin and refreshing the data. This can help in resolving some caching-related issues that might affect the accuracy or availability of generated content.

<hr/>

9. **Compare Generated Content with Project Requirements:** Compare the generated content with the project requirements and user expectations. If the generated content does not align properly or seems incorrect, review the Project Definition and templating configurations to ensure they accurately reflect the project's needs.

<hr/>

10. **Check Data Security and Privacy Settings:** Ensure that the AI Jeannie plugin is operating within the required data security and privacy settings. Verify that the plugin is only accessing and using the necessary data from your JIRA instance, and that any sensitive information is handled securely.

<hr/>

11. **Contact Plugin Support:** If you have tried the above troubleshooting steps and are still experiencing issues, reach out to the AI Jeannie plugin support team. Provide them with detailed information about the problem, including any error messages, logs, or steps to reproduce the issue. They will be able to assist you further.

<hr/>
