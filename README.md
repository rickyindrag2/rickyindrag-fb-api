# Facebook API App
Website yang menggunakan Facebook API v12.0 diintegrasikan dengan Facebook SDK for JS

----
- [Version](#version)
- [Installation](#installation)
- [Testing](#testing)
----


## Version
v1.0.0
- Facebook Login
- Social Plugin (Share post with link)
- Graph API v12.0 incl. public_profile, email, user_birthday, user_posts
- Slider using Javascript

## Installation
>- Add your app here : https://developers.facebook.com/apps/
>- Replace appId in `facebook-api.js` with your app id

```php
window.fbAsyncInit = function () {
  FB.init({
    appId: "YOUR_APP_ID",
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });

  FB.AppEvents.logPageView();
  checkLoginState();
  setElements(false);
};
```

>- Web hosting
>- Set up your app configuration properly (Basic Settings)
>- Add product -> Facebook Login -> Make sure to check the Login with the Javascript SDK 
>- Insert Allowed Domains for the JavaScript SDK with your web hosting domain

## Testing
You can try the app in https://rickyindrag-fb-api.web.app/
