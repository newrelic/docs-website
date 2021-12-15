process.env.HUMAN_TRANSLATION_PROJECT_ID = 'HT_ID';
process.env.MACHINE_TRANSLATION_PROJECT_ID = 'MT_ID';
process.env.DB_CONNECTION_INFO = '{}';

global.___loader = {
  enqueue: jest.fn(),
};
