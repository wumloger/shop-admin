import { useCookies } from "@vueuse/integrations/useCookies";

const cookie = useCookies()
const TokenKey = 'admin-token'

export function getToken() {
    return cookie.get(TokenKey)
}

export function setToken(token) {
    return cookie.set(TokenKey, token)
}

export function removeToken() {
    return cookie.remove(TokenKey)
}