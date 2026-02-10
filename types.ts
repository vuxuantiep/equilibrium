
// Fix: Import React to provide the React namespace for type definitions like ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface HelpOption {
  title: string;
  description: string;
  buttonLabel: string;
  type: 'donate' | 'develop' | 'volunteer';
}
