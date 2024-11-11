// Store for common app necesities
export const useAppStore = defineStore('app', () => {
    // Multi-language support
    const { locale } = useI18n()

    return { locale }
    
    // const menu = ref(false)

    // function toggleMenu(){
    //     menu.value = !menu.value
    // }

    // return { menu, toggleMenu }
})