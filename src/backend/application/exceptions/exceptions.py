class BaseException(Exception):
    def __init__(self, message, errors=None):
        super().__init__(message)
        self.errors = errors

    def __str__(self):
        return f"{self.__class__.__name__}: {self.args[0]}"



class InvalidCredentialsException(BaseException):
    pass
    