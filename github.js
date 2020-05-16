CLIENT_ID = "38791d0e9d78bd3b6e84"
CLIENT_SECRET = "81e35cb5b24df104ba63081ffde9d2b6898e9c0e"
URL_USER = "https://api.github.com/users"
URL_USER_REPOS = "https://api.github.com/users/ataraxia401/repos"

class Github {
    constructor() {
        this.client_id = CLIENT_ID
        this.client_secret = CLIENT_SECRET
        this.url_user = URL_USER
        this.url_user_repos = URL_USER_REPOS
    }


    async getUser(user) {
        const profileResponse = await fetch(`${this.url_user}/${user}?client_id=
        ${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}