export type Contact = {
  id: string;
  name: string;
  picture?: string;
};

export type Message = {
  id: number;
  owner: 1 | 0; //1 the contact, 0 the user
  content: string;
};
