import { config } from "dotenv"

config()


export const BAD_REQUEST = 400

export const UNAUTHORIZED = 401

export const STATUS_CODE_SERVER_ERROR = 500

export const ACCESS_KEY = process.env.ACCESS_KEY
export const REFRESH_KEY = process.env.REFRESH_KEY

export const TOKEN_EXPRIED = process.env.TOKEN_EXPRIED
export const REFRESH_EXPRIED = process.env.REFRESH_EXPRIED