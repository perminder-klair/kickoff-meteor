import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: function () {
        FlowRouter.go('Dashboard');
    },
    //on login and signup
    onSubmitHook: function (error, state) {
        if (!error) {
            if (state === "signIn") {
                // Successfully logged in
                // ...
            }
            if (state === "signUp") {
                // Successfully registered
                // ...
            }
            //subscribe to current user

            //redirect to dashboard
            FlowRouter.go('Dashboard');
        }
    },
    //preSignUpHook: myPreSubmitFunc,
    postSignUpHook: function () {
        //check with db
        //run some meteor method
        FlowRouter.go('Dashboard');
    },

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        }
    }
});

//add fields to signup form
AccountsTemplates.addFields([
    {
        _id: 'first_name',
        type: 'text',
        displayName: "First Name",
        required: true
    },
    {
        _id: 'last_name',
        type: 'text',
        displayName: "Last Name",
        required: true
    }
]);