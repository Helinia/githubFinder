class Github{
    constructor(){
        this.client_id = "8cba4b13b6eba8e67a01";
        this.client_secret = '002551b84733f28b86d66d87897dc8a5fc5a25fd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();
        //returning an object
        return{
            profile: profileData,
            repos
        }
    }
}