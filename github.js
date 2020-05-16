const CLIENT_ID = "38791d0e9d78bd3b6e84"
const CLIENT_SECRET = "81e35cb5b24df104ba63081ffde9d2b6898e9c0e"
const URL_USER = "https://api.github.com/users"
// const URL_USER_REPOS = "https://api.github.com/users/ataraxia401/repos"
const MAX_COUNT = 5
const SORT_REPOS = 'created: asc'
class Github {
    constructor() {
        this.client_id = "38791d0e9d78bd3b6e84"
        this.client_secret = "81e35cb5b24df104ba63081ffde9d2b6898e9c0e"
        this.url_user = "https://api.github.com/users"
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }


    async getUser(user) {
        const profileResponse = await fetch(`${this.url_user}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`${this.url_user}/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}