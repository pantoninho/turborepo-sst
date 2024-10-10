import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { dynamo, UpdateCommand } from '@org/dynamo';
import { Resource } from 'sst';

const COUNTERS = ['SST', 'TURBOREPO'];

interface Counter {
    name: string;
    value: number;
}

export const server = {
    increment: defineAction({
        input: z.object({ name: z.string() }),
        async handler({ name }) {
            if (!COUNTERS.includes(name)) {
                throw new ActionError({ code: 'BAD_REQUEST' })
            }

            const { Attributes } = await dynamo.send(new UpdateCommand({
                Key: { name },
                TableName: Resource.Counters.name,
                UpdateExpression: 'SET #value = #value + :inc',
                ExpressionAttributeNames: { '#value': 'value' },
                ExpressionAttributeValues: { ':inc': 1 },
                ReturnValues: 'ALL_NEW',
            })) as { Attributes?: Counter };


            if (!Attributes?.value) {
                throw new ActionError({ code: 'NOT_FOUND' });
            }

            let value = Attributes.value;

            if (value > 99) {
                value = 0;
                await dynamo.send(new UpdateCommand({
                    Key: { name },
                    TableName: Resource.Counters.name,
                    UpdateExpression: 'SET #value = :value',
                    ExpressionAttributeNames: { '#value': 'value' },
                    ExpressionAttributeValues: { ':value': 0 },
                }));
            }


            return { value }
        },
    }),
}
