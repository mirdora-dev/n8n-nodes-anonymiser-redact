import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnonymiserRedactApi implements ICredentialType {
    name = 'anonymiserRedactApi';
    displayName = 'Anonymiser Redact API';
    documentationUrl = 'https://github.com/mirdora-dev/anonymiser-core-standalone';
    properties: INodeProperties[] = [
        {
            displayName: 'Environment Path',
            name: 'envPath',
            type: 'string',
            default: '',
            description: 'Optional path to custom environment configurations',
        },
    ];
}
