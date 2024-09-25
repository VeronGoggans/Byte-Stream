from sqlalchemy.orm import Session
from src.backend.data.models import User
from src.backend.data.exceptions.exceptions import UserNotFoundException


def find_user(user_id: int, db: Session) -> (User | UserNotFoundException):
    user = db.query(User).filter(User.id == user_id).first()
    
    if user is None:
        raise UserNotFoundException(f"User with id {user_id} not found.")
    return user