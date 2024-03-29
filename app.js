//init github
const github = new Github();
//init UI
const ui = new UI();
//search input

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=>{
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText).then( data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found.', 'alert alert-danger');

            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        //if there is no user input, clear the profile
        ui.clearProfile();
    }
})