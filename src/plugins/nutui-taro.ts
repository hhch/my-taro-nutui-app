import { Button, Icon, Input, Tabs, TabPane, Toast } from '@nutui/nutui-taro'

const Components = [Button, Input, Icon, Tabs, TabPane, Toast]

const useNutUI = (app: any) => {
  Components.forEach(item => {
    app.use(item)
  })
}
export default useNutUI
