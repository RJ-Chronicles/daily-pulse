export type OpenAIType = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export interface AdviserResponse {
  description: string;
  result: {
    health: string;
    emotions: string;
    relationships: string;
    productivity: string;
    recommendations: string[];
  };
}

export interface FileSaverType {
  id: AdviserResponse;
}
