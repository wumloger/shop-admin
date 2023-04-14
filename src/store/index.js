import { defineStore } from "pinia";
import { adminLogin, getInfo, logout } from '~/api/admin'
import { setToken, removeToken } from '~/composables/auth'
import { router, addRoutes } from "~/router"
export const useAdminStore = defineStore('admin', {
    state: () => ({
        token: '',
        adminInfo: {},
        sideWidth: '200px',
        menus: []
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
            this.menus = res.data.menus
            return res;

        },
        async adminLogout() {
            logout()
            removeToken()
            this.adminInfo = {}
        },
        handleSideWidth() {
            this.sideWidth = this.sideWidth === '200px' ? '80px' : '200px'
            console.log(this.sideWidth);
        }
    }
})