from sqlalchemy.orm import Session
from src.backend.data.models import FriendRequest


class FriendRequestManager:

    
    def add(self, db: Session):
        pass

    def get_by_id(self, db: Session, user_id: int):
        return db.query(FriendRequest).filter(FriendRequest.id == user_id).first()
    
    def get(self, db: Session, code: str):
        return db.query(FriendRequest).filter(FriendRequest.code == code).first()
    
    def update(self, db: Session):
        pass
    
    def delete(self, db: Session):
        pass