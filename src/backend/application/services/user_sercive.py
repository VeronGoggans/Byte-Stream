import bcrypt
import uuid
from sqlalchemy.orm import Session
from src.backend.data.models import User
from src.backend.data.managers.user_manager import UserManager
from src.backend.data.exceptions.exceptions import * 
from src.backend.application.exceptions.exceptions import InvalidCredentialsException

class UserSevice:
    def __init__(self):
        self.manager = UserManager()


    def register_user(self, username: str, email: str, password: str, db: Session):
        hashed_password = self.__hash(password)
        user = User(
            username = username,
            email = email,
            password = hashed_password,
            code = uuid.uuid4()
        )
        return self.manager.add(user, db)
    


    def login_user(self, user_id: int, username: str, password: str, db: Session) -> ( User | UserNotFoundException ):
        stored_user: User = self.manager.get_by_id(user_id)
        self.__check_username(stored_user.username, username)
        self.__check_password(stored_user.password, password)
        return User
    
    



    def __hash(self, string: str) -> str:
        byte_string = string.encode('utf-8')
        return bcrypt.hashpw(byte_string, bcrypt.gensalt())
    

    def __check_password(self, hashed_password: str, password: str) -> bool:
        byte_password = password.encode('utf-8')
        if not bcrypt.checkpw(byte_password, hashed_password):
            raise InvalidCredentialsException('Your password and or username is incorrect.')
    
    
    def __check_username(self, stored_username: str, username: str) -> ( None | InvalidCredentialsException ):
        same_username = username == stored_username
        if not same_username:
            raise InvalidCredentialsException('Your password and or username is incorrect.')
