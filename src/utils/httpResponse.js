// export const httpResponse = () => {
//     return {}
// }

export const httpResposeAuth = (accessToken, refreshToken) => {
    return {
        data: {
            accessToken,
            refreshToken
        }
    }
}