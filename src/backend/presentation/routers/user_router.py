from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.backend.data.database import Database
from src.backend.application.services.user_sercive import UserSevice
from src.backend.data.exceptions.exception_handler import handle_exceptions



class UserRouter:
    def __init__(self):
        self.route = APIRouter()
        self.service = UserSevice()

         # Available routes
        self.route.add_api_route('/user/register', self.register_user, methods=['POST'])
        self.route.add_api_route('/user/login', self.login_user, methods=['POST'])
    

    @handle_exceptions
    def register_user(self, user_id: int, db: Session = Depends(Database.get_db)):
        return { 
            'User': self.service.register_user(user_id), 
            'Status': 200 
        }
    
    
    @handle_exceptions
    def login_user(self):
        return {
            'User': self.service.login_user(),
            'Status': 200
        }