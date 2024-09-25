class User:
    def __init__(
            self,
            id: int,
            username: str,
            password: str,
            email: str,
            code: str,
            friends: list = [],
            friend_requests: list = [],
            files: list = []
                 ):
        self.id = id
        self.username = username
        self.password = password
        self.email = email
        self.code = code
        self.friends = friends
        self.friend_requests = friend_requests
        self.files = files


    def add_friend_request(self):
        pass


    def add_friend(self):
        pass
