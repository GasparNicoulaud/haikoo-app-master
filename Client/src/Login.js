import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';
import 'firebaseui/dist/firebaseui.css'
import {app, uiConfig} from './firebaseCustomModules'

function SignInScreen() {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
    </div>
  );
}

export default SignInScreen