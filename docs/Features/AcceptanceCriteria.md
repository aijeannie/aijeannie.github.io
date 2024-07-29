---
sidebar_position: 3
title: Acceptance Criteria Generation
---


### Feature 3: Acceptance Criteria Generation for Epics and User Stories 

AI Jeannie automates the generation of acceptance criteria based on the project definition. It uses the natural processing language to understand the context of the project definition along with the summaries of Epics and User stories, to generate appropriate acceptance criteria. Users have flexibility to append these acceptance criteria or overwrite the existing description of Epics and user stories, based on their specific needs and preferences. 

Acceptance criteria can be generated for the following issue types:

1. Acceptance Criteria Generation of Epic 
2. Acceptance Criteria Generation of User story


### Acceptance Criteria Generation of Epic

AI Jeannie automates the generation of acceptance criteria for an Epic based on project definition and Epic summary by using Epic prompt template configuration. If users are not satisfied with the generated acceptance criteria, AI Jeannie provides the flexibility to regenerate the acceptance criteria with or without making any changes to the Epic prompt template configurations. This feature ensures that the acceptance criteria can be refined to meet users' specific needs and expectations. 

Here are the steps for generating acceptance criteria for an Epic:

1. From the JIRA project, click **Create** at the top, to create new Epic as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteris-epic1.png" alt="Step 1" />
2. Select and add the required details and click **Create** as shown below. 
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic2.png" alt="Step 2" />
3. Once the Epic issue is created, system displays the following message as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic3.png" alt="Step 3" />
4. Open **View issue** link and view the description details as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic4.png" alt="Step 4" />
5. Click **AI Jeannie** to view the” Generate AC” shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic5.png" alt="Step 5" />

>*Note:*
        * The AI Jeannie checklist will appear in green only when the AI Provider, Project Definition, and Prompt Template settings are correctly configured.
        * If you want to consider additional attachments information as context for generating acceptance criteria. Click and select the checkbox **Consider attached Images as additional context.** For more information refer to [*Is Multimodel*](https://aijeannie.github.io/docs/AdditionalContext/Multimodel) Section.

6. Click **Generate AC** to view the AI Jennie suggested Epic requirements.
7. Wait for few seconds till the AI Jeannie Generates Acceptance Criteria as shown below.
       <img src="/screenshots/Usage/Manual/acceptance-criteria-epic7.png" alt="Step 7" />

>*Note:* If you want to remove the Generated Acceptance criteria, click **Clear AC.**

8. If AI Jeannie generated Epic description is:
       * Relevant to your project requirement, click **Copy to Description** to copy the description.
       * Irrelevant to your project requirement, then click **Generate AC.** AI Jeannie will again regenerate the description as per your project requirement.

9. **Append:**
       * If you want to add the generated requirements to the existing description, select **I confirm to Append** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9.png" alt="Step 9" />
       * AI Jeannie generated description will append with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9a.png" alt="Step 9a" />
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9b.png" alt="Step 9b" />
        <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9c.png" alt="Step 9c" />
>*Note:* To advance the progress of Epic users must manually review it, by adding the “reviewed” label and removing “not reviewed” label. 

10.**Overwrite:**
       * If you want to overwrite the existing description with AI Jeannie description, then select **I confirm to Overwrite** option and click **Submit** as shown in the below.
       <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9d.png" alt="Step 9d" />
       * AI Jeannie generated description will overwrite the existing description as shown below.
       <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9e.png" alt="Step 9e" />
       <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9f.png" alt="Step 9f" />
       <img src="/screenshots/Usage/Manual/acceptance-criteria-epic9g.png" alt="Step 9g" />
>*Note:* To advance the progress of Epic users must manually review it, by adding the “reviewed” label and removing “not reviewed” label. 

### Acceptance Criteria Generation for User story

AI Jeannie automates the generation of acceptance criteria for User Story based on project definition and User Story summary by using User Story prompt template configuration. If users are not satisfied with the generated acceptance criteria, AI Jeannie has provided the flexibility to regenerate the acceptance criteria with or without making any changes to the User Story prompt template configurations. This feature ensures that the acceptance criteria can be refined to meet users' specific needs and expectations.  

 Here are the steps for generating acceptance criteria for User Story:
1. From the JIRA project, click **Create** to create new User story as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory1.png" alt="Step 1" />
2. Select and add the required details and click **Create** as shown below. 
        <img src="/screenshots/Usage/Manual/ac-userstory2.png" alt="Step 2" />
3. Once the User Story is created, system displays the following message as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory3.png" alt="Step 3" />
4. Select **View issue** link and the following screen appears as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory4.png" alt="Step 4" />
5. Click **AI Jeannie** to view the” Generate AC” button option as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory5.png" alt="Step 5" />

>*Note:*
* The AI Jeannie checklist will appear in green only when the AI Provider, Project Definition, and Prompt Template settings are correctly configured.
* If you want to consider additional attachments information as context for generating acceptance criteria. Click and select the checkbox **Consider attached Images as additional context.** For more information refer to [*Is Multimodel*](https://aijeannie.github.io/docs/AdditionalContext/Multimodel) Section.
6. Click **Generate AC** to view the AI Jennie suggested User story description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory6.png" alt="Step 6" />
>*Note:*If you do not want to generate acceptance criteria click **Clear AC** to remove the generated acceptance criteria.
7. If AI Jeannie generated User Story description:
       * Relevant to your requirement, click **Copy to Description** to copy the description.
       * Irrelevant to your requirement, then click **Generate AC**. AI Jeannie will again regenerate the description as per your project requirement.
8.**Append:**
        * If you want to add the AI Jeannie description to the existing description, then select **I confirm to Append** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory8.png" alt="Step 8" />
        * AI Jeannie generated User Story description will append with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory8a.png" alt="Step 8a" />
        <img src="/screenshots/Usage/Manual/ac-userstory8b.png" alt="Step 8b" />
        <img src="/screenshots/Usage/Manual/ac-userstory8c.png" alt="Step 8c" />
>*Note:* To advance the progress of User story users must manually review it, by adding the “reviewed” label and removing “not reviewed” label. 
9.**Overwrite:**
        * If you want to overwrite the existing description with AI Jeannie description, then select **I confirm to Overwrite** option and click **Submit** as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory9.png" alt="Step 9" />
        * AI Jeannie generated User Story description will overwrite with the existing description as shown below.
        <img src="/screenshots/Usage/Manual/ac-userstory9a.png" alt="Step 9a" />
        <img src="/screenshots/Usage/Manual/ac-userstory9b.png" alt="Step 9b" />        
        <img src="/screenshots/Usage/Manual/ac-userstory9c.png" alt="Step 9c" />
>*Note:* To advance the progress of User story users must manually review it, by adding the “reviewed” label and removing “not reviewed” label. 