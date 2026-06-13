import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminUpdateruns implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Updateruns',
                name: 'N8nDevAzureAzsadminUpdateruns',
                icon: { light: 'file:./azure-azsadmin-updateruns.png', dark: 'file:./azure-azsadmin-updateruns.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Update run operation endpoints and objects.',
                defaults: { name: 'Azure Azsadmin Updateruns' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminUpdaterunsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
