from dataclasses import dataclass

    
@dataclass
class LoginRequestDTO:
    username: str
    password: str


@dataclass
class LoginResponseDTO:
    pass
