function notify(url, icon, title, body) {
    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }else {
        var notification = new Notification(title, {
            icon: icon,
            body: body,
        });
        notification.onclick = function() {
            window.open(url);
        };
    }
}

notify("http://www.google.com", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", "Title", "Body");
