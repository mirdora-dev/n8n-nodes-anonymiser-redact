import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserRedact implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Redact',
        name: 'anonymiserRedact',
        icon: 'file:anonymiserredact.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser redact operations in n8n',
        defaults: {
            name: 'Anonymiser Redact',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserRedactApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
