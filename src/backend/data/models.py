from sqlalchemy import Column, Integer, String, ForeignKey, BLOB
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True, nullable=False)
    password = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    code = Column(String, unique=True, index=True, nullable=False)
    
    friends = relationship("Friend", backref="user", cascade="all, delete-orphan")
    friend_requests = relationship("FriendRequest", backref="user", cascade="all, delete-orphan")
    files = relationship("Files", backref="user", cascade="all, delete-orphan")




class Friend(Base):
    __tablename__ = "friends"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    code = Column(String, unique=True, index=True)
    
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'))  




class FriendRequest(Base):
    __tablename__ = "friend_requests"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    code = Column(String, unique=True, index=True)
    status = Column(String, index=True)
    
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE')) 
    



class File(Base):
    __tablename__ = 'files'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    file = Column(BLOB, index=True, nullable=False)

    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=True)




