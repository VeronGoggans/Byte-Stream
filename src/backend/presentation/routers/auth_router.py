from fastapi import APIRouter
from src.backend.presentation.dtos.register_dto import RegisterRequestDTO, RegisterResponseDTO
from src.backend.application.auth_service import AuthService
from src.backend.data.database import Database


class AuthRouter: 
    def __init__(self, db: Database):
        self.route = APIRouter()
        self.service = AuthService(db)

        # Available routes
        self.route.add_api_route('/register', self.user_registration, methods=['POST'])
        self.route.add_api_route('/login', self.user_login, methods=['POST'])

    
    def user_registration(self, request: RegisterRequestDTO):
        return { 
            'User': self.service.register_user(request), 
            'Status': 200 
        }



    def user_login(self): 
        pass