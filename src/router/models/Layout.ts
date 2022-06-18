 /* @vite-ignore */
import Layout from '@/views/Layout/index.vue'
import * as LayoutD from '@/dts/Layout.D'



const layout = {
    name: 'layout',
    path: '/',
    component: Layout,
    // redirect:'/clue',
    children:[] as  LayoutD.IrouterList[],
}
export default layout