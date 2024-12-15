export interface Source {
  id: string;
  name: string;
  type: 'telegram' | 'whatsapp' | 'website' | 'x';
  enabled: boolean;
  url?: string;
}

export interface Post {
  id: string;
  source: Source;
  content: string;
  timestamp: Date;
  url?: string;
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
}

export interface Submitter {
  name: string;
  username: string;
}

export interface Tip {
  id: string;
  content: string;
  submitter: Submitter;
  timestamp: Date;
  hasMedia?: boolean;
  location?: Location;
  mediaUrls?: string[];
  voiceNote?: string;
}