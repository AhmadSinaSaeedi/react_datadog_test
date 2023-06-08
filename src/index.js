import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
   applicationId: 'ca87c35d-d7ba-41d9-ac87-9609ce0bcef4',
   clientToken: 'pub009990ea6c64a42bc50dbcb9bcf88dca',
   site: 'datadoghq.eu',
   service: 'react-complete-guide',
   env: 'dev',
   // Specify a version number to identify the deployed version of your application in Datadog
   // version: '1.0.0',
   sessionSampleRate: 100,
   sessionReplaySampleRate: 20,
   trackUserInteractions: true,
   trackResources: true,
   trackLongTasks: true,
   defaultPrivacyLevel: 'mask-user-input',
});

datadogRum.startSessionReplayRecording();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
