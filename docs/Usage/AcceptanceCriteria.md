---
sidebar_position: 1
title: Acceptance Criteria Generation
---


### Feature 1: Acceptance Criteria Generation for Epics and User Stories 

AI Jeannie automates the generation of acceptance criteria based on the project definition. It uses the natural processing language to understand the context of the project definition along with the summaries of Epics and User stories, to generate appropriate acceptance criteria. Users have flexibility to append these acceptance criteria or overwrite the existing description of Epics and user stories, based on their specific needs and preferences. 

Acceptance criteria can be generated for the following issue types:

1. Acceptance Criteria Generation of Epic 
2. Acceptance Criteria Generation of User story


### Acceptance Criteria Generation of Epic

AI Jeannie automates the generation of acceptance criteria for an Epic based on project definition and Epic summary by using Epic prompt template configuration. If users are not satisfied with the generated acceptance criteria, AI Jeannie provides the flexibility to regenerate the acceptance criteria with or without making any changes to the Epic prompt template configurations. This feature ensures that the acceptance criteria can be refined to meet users' specific needs and expectations. 

Here are the steps for generating acceptance criteria for an Epic:

1. From the JIRA project, click **Create** at the top, to create new Epic as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic1.png" alt="Step 1" />
2. Select and add the required details and click **Create** as shown below. 
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic2.png" alt="Step 2" />
3. Once the Epic issue is created, system displays the following message as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic3.png" alt="Step 3" />
4. Open **View issue** link and select **AI Jeannie** to view the” Generate AC” option as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic4.png" alt="Step 4" />
 
 >*Note:* The AI Jeannie checklist will appear in green only when the AI Provider, Project Definition, and Prompt Template settings are correctly configured.

5. Select **Generate AC** to view the AI Jennie suggested Epic requirements as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic5.png" alt="Step 5" />
6. If AI Jeannie generated Epic description is:
       * Relevant to your project requirement, click **Copy to Description** to copy the description.
       * Irrelevant to your project requirement, then click **Generate AC.** AI Jeannie will again regenerate the description as per your project requirement.
7. **Append:**
       * If you want to add the generated requirements to the existing description, select **I confirm to Append** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic6.png" alt="Step 6" />
       * AI Jeannie generated description will append with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic7.png" alt="Step 7" />
        <img src="/screenshots/Usage/Manual/ac-epic8.png" alt="Step 8" />
8. **Overwrite:**
       * If you want to overwrite the existing description with AI Jeannie description, then select **I confirm** to Overwrite option and click **Submit** as shown in the below.
        <img src="/screenshots/Usage/Manual/ac-epic9.png" alt="Step 9" />
       * AI Jeannie generated description will overwrite the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-epic10.png" alt="Step 10" />
        <img src="/screenshots/Usage/Manual/ac-epic11.png" alt="Step 11" />
 
>*Note*: Manual review is mandatory for progress the new Epic and suggested to add “reviewed” and to remove the “ai-auto-generated” and “not-reviewed” labels.

### Acceptance Criteria Generation for User story

AI Jeannie automates the generation of acceptance criteria for User Story based on project definition and User Story summary by using User Story prompt template configuration. If users are not satisfied with the generated acceptance criteria, AI Jeannie has provided the flexibility to regenerate the acceptance criteria with or without making any changes to the User Story prompt template configurations. This feature ensures that the acceptance criteria can be refined to meet users' specific needs and expectations.  

 Here are the steps for generating acceptance criteria for User Story:
1. From the JIRA project, click **Create** to create new User story as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory1.png" alt="Step 1" />
2. Select and add the required details and click **Create** as shown in the shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory2.png" alt="Step 2" />
3. Once the User Story is created, system displays the following message as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory3.png" alt="Step 3" />
4. Select **View issue** link and click **AI Jeannie** to view the” Generate AC” button option as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory4.png" alt="Step 4" />

>*Note:* The AI Jeannie checklist will appear in green only when the AI Provider, Project Definition, and Prompt Template settings are correctly configured.

5. Click **Generate AC** to view the AI Jennie suggested User story description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory5.png" alt="Step 5" />
6 If AI Jeannie generated User Story description:
       * Relevant to your requirement, click **Copy to Description** to copy the description.
       * Irrelevant to your requirement, then click **Generate AC.** AI Jeannie will again regenerate the description as per your project requirement.
7. **Append:**
       * If you want to add the AI Jeannie description to the existing description, then select **I confirm to Append** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory6.png" alt="Step 6" />
       * AI Jeannie generated User Story description will append with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory8.png" alt="Step 8" />
        <img src="/screenshots/Usage/Manual/ac-userstory9.png" alt="Step 9" />
8. **Overwrite:**
       * If you want to overwrite the existing description with AI Jeannie description, then select **I confirm to Overwrite** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory10.png" alt="Step 10" />
       * AI Jeannie generated User Story description will overwrite with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory11.png" alt="Step 11" />

>*Note:* To advance the progress of User story users must manually review it, by adding the “reviewed” label and removing “not reviewed” label. 




