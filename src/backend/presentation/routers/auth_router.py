from fastapi import APIRouter
from src.backend.presentation.dtos.register_dto import *
from src.backend.presentation.dtos.login_dto import *
from src.backend.application.services.user_sercive import UserSevice
from src.backend.data.database import Database


class AuthRouter: 
    def __init__(self):
        self.route = APIRouter()
        self.service = UserSevice()

        # Available routes
        self.route.add_api_route('/register', self.user_registration, methods=['POST'])
        self.route.add_api_route('/login', self.user_login, methods=['POST'])

    
    def user_registration(self, request: RegisterRequestDTO):
        return { 
            'User': self.service.register_user(request), 
            'Status': 200 
        }


    def user_login(self, request: LoginRequestDTO): 
        return {
            'User': self.service.login_user(request),
            'status': 200
        }