from sqlalchemy.orm import Session
from src.backend.data.models import User
from src.backend.data.helpers import find_user
from src.backend.data.exceptions.exceptions import UserNotFoundException


class UserManager:

    def add(self, user: User, db: Session) -> ( User ):
        db.add(user)
        db.commit()
        db.refresh(user)
        return user


    def get_by_id(self, user_id: int, db: Session) -> ( User | UserNotFoundException ):
        return find_user(user_id, db)
    