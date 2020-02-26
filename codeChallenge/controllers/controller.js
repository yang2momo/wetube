export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const login = (req, res) => res.send("login", { pageTitle: "Login" });
export const photos = (req, res) => res.send("photos", { pageTitle: "Photos" });
export const profile = (req, res) => res.send("profile", { pageTitle: "Profile" });

