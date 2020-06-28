import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui-ja';

@Component({
  selector: 'app-firebase-ui',
  templateUrl: './firebase-ui.page.html',
  styleUrls: ['./firebase-ui.page.scss'],
})
export class FirebaseUiPage implements OnInit {
  ui: firebaseui.auth.AuthUI;

  constructor() {}

  ngOnInit() {
    const uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        }
      ],
      signInSuccessUrl: '/main/timeline',
      credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
      tosUrl: '/main/signin',
      privacyPolicyUrl: '/main/signin'
    };
    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

}
