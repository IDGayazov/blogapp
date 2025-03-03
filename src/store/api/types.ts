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
    avatar_url: string | undefined,
    bio: string | undefined,
    created_date: Date
}