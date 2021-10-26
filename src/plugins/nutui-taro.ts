import { Button, Icon, Input, Tabs, TabPane, Toast, Navbar } from '@nutui/nutui-taro'

const Components = [Button, Input, Icon, Tabs, TabPane, Toast, Navbar]

const useNutUI = (app: any) => {
  Components.forEach(item => {
    app.use(item)
  })
}
export default useNutUI
