export interface AuthResponse{
    token: string
}

export interface SignInRequest{
    username: string,
    password: string
}

export interface SignUpRequest{
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface UserData{
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    avatarUrl: string | undefined,
    bio: string | undefined,
    created_date: Date
}