const LOGIN_TEMPLATE = `
    <div class="login-wrapper">
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
    <div class="sign-up-wrapper">
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
    <div class="share-wrapper">
        <div class="share-tabs">
            <button class="active-tab"><i class="fa-solid fa-cloud-arrow-up"></i></button>
            <button><i class="fa-solid fa-file"></i></button>
        </div>
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

const FRIENDS_TEMPLATE = `

`
 
export const TEMPLATES = [
    LOGIN_TEMPLATE,
    SIGNUP_TEMPLATE,
    SHARE_TEMPLATE,
    HOME_TEMPLATE
]