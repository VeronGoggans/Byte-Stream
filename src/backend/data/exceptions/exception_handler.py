from src.backend.data.exceptions.exceptions import UserNotFoundException
from src.backend.application.exceptions.exceptions import InvalidCredentialsException
from functools import wraps

UN_UNAUTHORIZED = 401
NOT_FOUND = 404


def handle_exceptions(func) -> ( UserNotFoundException | InvalidCredentialsException ):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs) # Return the original function 
        except UserNotFoundException as e:
            return {'Status': NOT_FOUND, 'message': str(e)}
        except InvalidCredentialsException as e:
            return {'Status': UN_UNAUTHORIZED, 'message': str(e)}
    return wrapper 
