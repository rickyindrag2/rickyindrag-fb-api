window.fbAsyncInit = function () {
  FB.init({
    appId: "190024813251894",
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });

  FB.AppEvents.logPageView();
  checkLoginState();
  setElements(false);
};

(function (d, s, id) {
  let js;
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function checkLoginState() {
  FB.getLoginStatus((response) => {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if (response.status === "connected") {
    console.log("Is in");
    setElements(true);
    testAPI();
  } else {
    console.log("Not in");
    setElements(false);
  }
}

function testAPI() {
  FB.api(
    "/me",
    "GET",
    { fields: "name,email,birthday,photos,picture" },
    (response) => {
      if (response && !response.error) {
        buildProfile(response);
      }
    }
  );
  FB.api("/me", "GET", { fields: "feed" }, (response) => {
    if (response && !response.error) {
      buildFeed(response);
    }
  });
}

function buildProfile(user) {
  document.getElementById("profile").innerHTML = `
    <article class="profile card">
        <header>
            <h2>Your Profile</h2>
            <figure>
              <img src="${user.picture.data.url}" alt="profile picture"/>
              <figcaption><b>${user.id}</b></figcaption>
            </figure>
        </header>

        <section>
            <table>
                <tr>
                    <th>Nama</th>
                    <td>${user.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${user.email}</td>
                </tr>
                <tr>
                    <th>Birthday</th>
                    <td>${user.birthday}</td>
                </tr>
            </table>
        </section>
    </article>
  `;
}

function buildFeed(post) {
  let output = "";
  for (const i in post.feed.data) {
    if (post.feed.data[i].message) {
      output += `
      <article class="card post-item">
          <h2 class="post-msg">${post.feed.data[i].message.substring(
            0,
            300
          )}</h2>
          <p style="display: inline" class="post-time">
            ${post.feed.data[i].created_time.substring(0, 10)}
          </p>
        </article>
      `;
    }
  }

  document.getElementById("post").innerHTML = output;
}

function setElements(isLoggedIn) {
  if (isLoggedIn) {
    document.getElementById("login-index").style.display = "block";
    document.getElementById("default-index").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
  } else {
    document.getElementById("login-index").style.display = "none";
    document.getElementById("default-index").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
  }
}

function logout() {
  FB.logout(() => {
    setElements(false);
  });
}

function refresh() {
  FB.api("/me", "GET", { fields: "feed" }, (response) => {
    if (response && !response.error) {
      buildFeed(response);
    }
  });
}
