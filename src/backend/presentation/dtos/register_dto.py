from dataclasses import dataclass

    
@dataclass
class RegisterRequestDTO:
    username: str
    email: str
    password: str


@dataclass
class RegisterResponseDTO:
    pass
