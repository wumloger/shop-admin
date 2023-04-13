import { defineStore } from "pinia";
import { adminLogin, getInfo, logout } from '~/api/admin'
import { setToken, removeToken } from '~/composables/auth'
export const useAdminStore = defineStore('admin', {
    state: () => ({
        token: '',
        adminInfo: {},
    }),
    actions: {
        adminLogin(username, password) {
            return new Promise((resolve, reject) => {
                this.adminLogin(username, password).then((res) => {
                    setToken(res.data.token)
                    resolve(res)
                }).catch(err => reject(err))
            })
        },
        async getInfo() {
            const res = await getInfo()
            console.log(res);
            this.adminInfo = res.data
        },
        async adminLogout() {
            logout()
            removeToken()
            this.adminInfo = {}
        }
    }
})