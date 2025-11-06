export interface Message {
  id: string;
  header: string;
  payload: string;
}

export type CreateMessageInput = {
  id?: string;
  header?: Record<string, any>;
  payload: Record<string, any>;
};

export function createMessage(input: CreateMessageInput): Message {
  return {
    id: input.id ?? crypto.randomUUID(),
    header: JSON.stringify(input.header),
    payload: JSON.stringify(input.payload),
  };
}
