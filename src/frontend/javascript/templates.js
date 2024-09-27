const LOGIN_TEMPLATE = `
    <div class="login-view">
        <div class="form">
            <div class="user-info">
                <h1>Login</h1>
                <p>Don't have an account yet? <span>Sign up</span></p>
                <input type="text" placeholder="Your Email">
                <input type="password" placeholder="Password">
                <button>Login</button>
            </div>
            <div class="image-wrapper">
                <img src="src/assets/login-image.png" alt="Login Image">
            </div>
        </div>
    </div>
`

const SIGNUP_TEMPLATE = `
    <div class="signup-view">
        <div class="form">
            <div class="user-info">
                <h1>Sign up</h1>
                <p>Already have an account? <span>Login</span></p>
                <input type="text" placeholder="Your Email">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Repeat Password">
                <button>Sign up</button>
            </div>
            <div class="image-wrapper">
                <img src="src/assets/login-image.png" alt="Login Image">
            </div>
        </div>
    </div>
`

const SHARE_TEMPLATE = `
    <div class="share-view">
        <div class="file-upload-wrapper">
            <h2>File Uploader</h2>
            <form action="#">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>Browse a file to upload</p>
            </form>
            <section class="progress-area">
                <li class="row">
                    <i class="fa-solid fa-file"></i>
                    <div class="upload-content">
                        <div class="upload-details">
                            <span class="name">Hello world.py - Uploading</span>
                            <span class="percentage">50%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </li>
                <li class="row">
                    <i class="fa-solid fa-file"></i>
                    <div class="upload-content">
                        <div class="upload-details">
                            <span class="name">Hello world.py - Uploading</span>
                            <span class="percentage">50%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </li>
            </section>
            <section class="uploaded-area"></section>
        </div>
    </div>
`

const HOME_TEMPLATE = `

`

const INBOX_TEMPLATE = `
    <div class="inbox-view">
        <section class="inbox-section">
            <h2 class="inbox-title">My Inbox</h2>
            <div class="files-list"></div>
        </section>
    </div>
`

const FRIENDS_TEMPLATE = `
    <div class="friends-view">
        <section class="friends-section">
            <h2 class="friends-list-title">Friends</h2>
            <div class="friend-input-container">
                <input type="text" class="invite-input" placeholder="Invite a friend">    
            </div>
            <div class="friends-list">
                <h2 class="no-friends-message">Nothing here </h2>
            </div>
        </section>
    </div>
`
 
export const TEMPLATES = {
    login: LOGIN_TEMPLATE,
    signup: SIGNUP_TEMPLATE,
    inbox: INBOX_TEMPLATE,
    friends: FRIENDS_TEMPLATE,
    share: SHARE_TEMPLATE,
    home: HOME_TEMPLATE
}