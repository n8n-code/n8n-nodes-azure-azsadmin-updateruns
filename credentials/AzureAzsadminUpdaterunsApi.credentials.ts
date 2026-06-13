import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminUpdaterunsApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminUpdaterunsApi';

        displayName = 'Azure Azsadmin Updateruns API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminUpdateruns/azure-azsadmin-updateruns.png', dark: 'file:../nodes/AzureAzsadminUpdateruns/azure-azsadmin-updateruns.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Updateruns API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
