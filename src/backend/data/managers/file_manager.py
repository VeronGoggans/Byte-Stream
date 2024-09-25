from sqlalchemy.orm import Session
from src.backend.data.models import User


class FileManager:
    def add(self, db: Session, username: str, password: str, email: str):
        # Create a new User object
        user = User(
            username = username, 
            password = password, 
            email = email
        )

        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    def get_by_id(self, db: Session, user_id: int):
        return db.query(User).filter(User.id == user_id).first()
    
    def get(self, db: Session, code: str):
        return db.query(User).filter(User.code == code).first()
    
    def update(self, db: Session):
        pass
    
    def delete(self, db: Session):
        pass