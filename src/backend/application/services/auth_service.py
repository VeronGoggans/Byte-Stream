from src.backend.data.database import Database

class AuthService:
    def __init__(self, db: Database):
        self.db = db
