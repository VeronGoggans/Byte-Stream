from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.backend.data.database import Database
from src.backend.presentation.routers.auth_router import AuthRouter
from src.backend.presentation.routers.user_router import UserRouter


app = FastAPI()
database= Database()
auth_router = AuthRouter(database)
user_router = UserRouter(database)

app.include_router(auth_router.route)
app.include_router(user_router.route)


# Setting up a FRONT-END page for the API
app.mount("/", StaticFiles(directory=".", html=True), name="static")