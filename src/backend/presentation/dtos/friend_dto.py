from dataclasses import dataclass

@dataclass
class FriendRequestDTO:
    username: str
    code: str
    invited_code: str